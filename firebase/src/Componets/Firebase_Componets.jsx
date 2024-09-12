import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { db, auth } from '../Firebase/Firebase'; 
import "../App.css";

const Firebase_Components = () => {
  const [state, setState] = useState({
    email: "",
    password: ""
  });
  const [arr, setArr] = useState([]);
  const [update, setUpdate] = useState(null);
  const [user, setUser] = useState(null);
  const userCollection = collection(db, "user");

  const change = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    let obj = {
      email: state.email,
      password: state.password
    };

    if (update != null) {
      let docRef = doc(db, "user", update);
      await updateDoc(docRef, obj);
      alert("Data updated successfully");
      setUpdate(null);
    } else {
      await addDoc(userCollection, obj);
      alert("Data added successfully");
    }

    get(); // Fetch the updated list of records
    setState({ email: "", password: "" }); // Reset the form
  };

  const get = async () => {
    const snapshot = await getDocs(userCollection);
    let data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    setArr(data);
  };

  const del = async (id) => {
    let docRef = doc(db, "user", id);
    await deleteDoc(docRef);
    get(); // Refresh data after deletion
    alert("Deleted successfully");
  };

  const edit = (id) => {
    const record = arr.find((el) => el.id === id);
    if (record) {
      setState({
        email: record.email,
        password: record.password
      });
      setUpdate(id); // Set update mode with the document ID
    }
  };

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        alert("Signed in successfully");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const googleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        alert("Signed out successfully");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  useEffect(() => {
    // Track user authentication state
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        get(); // Fetch data if authenticated
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe(); // Cleanup the listener on unmount
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <button onClick={googleSignOut}>Sign out</button>

          <form onSubmit={submit}>
            <div>
              <label>Email:</label>
              <input
                type="text"
                name="email"
                value={state.email}
                onChange={change}
                className="form-control"
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="text"
                name="password"
                value={state.password}
                onChange={change}
                className="form-control"
              />
            </div>
            <br />
            <input type="submit" value={update != null ? "Update" : "Submit"} />
          </form>

          <div>
            {arr.map((el) => (
              <div key={el.id}>
                <div>{el.email}</div>
                <div>{el.password}</div>
                <button onClick={() => del(el.id)}>Delete</button>
                <button onClick={() => edit(el.id)}>Edit</button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <button onClick={googleSignIn}>Sign in with Google</button>
        </div>
      )}
    </div>
  );
};

export default Firebase_Components;
