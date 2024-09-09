import React, { useEffect, useState } from 'react';
import { addDoc, collection, deleteDoc, getDocs, doc, updateDoc } from 'firebase/firestore';
import { db } from "../Firebase/Firebase";
import Swal from 'sweetalert2';

function Addproducts() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [arry, setArry] = useState([]);
  const [edit, setEdit] = useState(null);
  const [category,setcategory]=useState("")


  const userCollection = collection(db, 'products');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const obj = {
      name,
      price,
      imageUrl
    };

    if (edit) {
      const docRef = doc(db, 'products', edit);
      await updateDoc(docRef, obj);
      Swal.fire("Success", "Data updated successfully", "success");
    } else {
      await addDoc(userCollection, obj);
      Swal.fire("Success", "Data added successfully", "success");
    }

    setName('');
    setPrice('');
    setImageUrl('');
    setEdit(null);
    getData();
  };

  const getData = async () => {
    const data = await getDocs(userCollection);
    const items = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setArry(items);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    const docRef = doc(db, 'products', id);
    await deleteDoc(docRef);
    Swal.fire("Success", "Data deleted successfully", "success");
    getData();
  };

  const handleEdit = (id) => {
    const item = arry.find((el) => el.id === id);
    setName(item.name);
    setPrice(item.price);
    setImageUrl(item.imageUrl);
    setEdit(id);
  };

  return (
    <div id="wra">
      <div className="container d-flex flex-column justify-content-center alighn-items-center">
        <div className="d-flex justify-content-center">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter product name"
              required
            />
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price"
              required
            />
             <input
              type="text"
              value={category}
              onChange={(e) => setcategory(e.target.value)}
              placeholder="Enter Category"
              required
            />
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Enter image URL"
              required
            />
            <input type="submit" value={edit ? "Update" : "Submit"} />
          </form>
        </div>

        <div className="d-flex">
          <ul className="user-list">
            {arry.map((el) => (
              <li key={el.id} className="user-item">
                <img src={el.imageUrl} alt={el.name} style={{ width: '250px', height: '250px' }} />
                <h1>{el.name}</h1>
                <p>Price: ${el.price}</p>
                <p>Category : {el.category} </p>
                <div className="buttons">
                  <button className="delete-btn" onClick={() => handleDelete(el.id)}>Delete</button>
                  <button className="update-btn" onClick={() => handleEdit(el.id)}>Edit</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Addproducts;
