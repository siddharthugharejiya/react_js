import React, { useEffect, useState } from 'react';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import "../App.css";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';

const Product = () => {
   const userCollection = collection(db,"products")
   const [arr,setarr] = useState([])
   const get=async()=>{
     let d= await getDocs(userCollection)
     let data = d.docs.map((el)=>{
           return{
             id : el.id,
             ...el.data()
           }
          })
          setarr(data)
          console.log(data);
          
   }
   useEffect(()=>{
      get()
   },[])
  return (
   <>
   <div className="main">

     {arr.map((el)=>(
       <div key={el.id}>
        <img src={el.imageUrl} alt="alt" />
        <div>{el.name}</div>
        <div>{el.price}</div>

      </div>
     ))}
     </div>
   </>
  );
};

export default Product;
