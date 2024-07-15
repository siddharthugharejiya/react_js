import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SinglePage = () => {
  const [state, setState] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setState(data);
      });
    },[id]);

  return (
    <div>
      <img src={state.image} alt="img" height={"300px"} width={"300px"} />
      <h1>{state.title}</h1>
    </div>
  );
};

export default SinglePage;
