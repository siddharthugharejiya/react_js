import React, { useEffect, useState } from 'react';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import "../App.css";

const Product = () => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
   
    const storage = getStorage();
    const imageRef = ref(storage, 'image1.jpg');


    getDownloadURL(imageRef)
      .then((url) => {
   
        setImageUrl(url);
      })
      .catch((error) => {

        console.error("Error fetching image from Firebase Storage:", error);
      });
  }, []);

  return (
    <div className='main'>
      {imageUrl ? (
        <img src={imageUrl} alt="Product" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Product;
