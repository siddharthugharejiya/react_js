import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Product = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/product")
      .then((res) => res.json())
      .then((data) => setState(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {state.length > 0 ? (
          state.map((el) => (
            <div className="col-md-6 mb-4 col-sm-12 col-lg-4 col-xl-3 " key={el.id}>
              <Link to={`/product/${el.id}`} className="text-decoration-none">
                <div className="card h-100">
                  <img
                    src={el.image}
                    alt={el.title}
                    className="card-img-top img-fluid"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-dark">{el.title}</h5>
                    <p className="card-text text-dark">{el.description}</p>
                    <p className="card-text text-dark">Price: ${el.price}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="col-12">
            <p className="text-center">Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
