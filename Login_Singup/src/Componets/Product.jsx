import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

const Product = () => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/product")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setState(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  const [fill, setFill] = useState({
    gaming: false,
    electronics: false,
    furniture: false,
  });

  function filter(e) {
    setFill({
      ...fill,
      [e.target.name]: e.target.checked,
    });
  }

  const FillterData = state.filter((el) => {
    if (fill.gaming && el.category === "gaming") {
      return true;
    }
    if (fill.electronics && el.category === "electronics") {
      return true;
    }
    if (fill.furniture && el.category === "furniture") {
      return true;
    }
    if (!fill.gaming && !fill.electronics && !fill.furniture) return true;
    return false;
  });

  const [money, setMoney] = useState("ASC");
  const changeMoney = (e) => {
    setMoney(e.target.value);
  };

  const Sortdata = FillterData.sort((a, b) => {
    if (money === "ASC") {
      return a.price - b.price;
    }
    if (money === "DES") {
      return b.price - a.price;
    }
    return 0;
  });

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-center">There was an error loading the products.</p>;
  }

  return (
    <div className="product_main">
      <div className="container">
      <form className="form-container">
  <label>
    <input type="checkbox" name="gaming" onChange={filter} />
    Gaming
  </label>
  <label>
    <input type="checkbox" name="electronics" onChange={filter} />
    Electronics
  </label>
  <label>
    <input type="checkbox" name="furniture" onChange={filter} />
    Furniture
  </label>
  <label>
    Sort by price
    <select onChange={changeMoney} style={{marginLeft:"15px"}}>
      <option value="ASC">Low to High</option>
      <option value="DES">High to Low</option>
    </select>
  </label>
</form>

        <div className="row justify-content-center align-items-center">
          <div className="col-md-8 d-flex justify-content-center align-items-center">
            <p className="display-4 mt-4 text-light our" style={{ fontWeight: "500" }}>Our Products</p>
          </div>
        </div>
      </div>
      <div className="container mt-1">
        <div className="row">
          {Sortdata.length > 0 ? (
            Sortdata.map((el) => (
              <div className="col-md-6 col-sm-12 col-lg-4 col-xl-3" key={el.id} style={{ marginBottom: "80px" }}>
                <Link to={`/product/${el.id}`} className="text-decoration-none">
                  <div className="card h-100 w-100">
                    <img
                      src={el.image}
                      alt={el.title}
                      className="card-img-top img-fluid"
                      style={{ height: "200px", objectFit: "cover", width: "100%" }}
                    />
                    <div className="card-body text-center">
                      <p className="card-text">
                        <i className="fa-regular fa-star" style={{ color: "#FFD43B" }}></i>
                        <i className="fa-regular fa-star" style={{ color: "#FFD43B" }}></i>
                        <i className="fa-regular fa-star" style={{ color: "#FFD43B" }}></i>
                        <i className="fa-regular fa-star" style={{ color: "#FFD43B" }}></i>
                      </p>
                      <h5 className="text-light mt-4">{el.title}</h5>
                      <p className="card-text text-light">{el.description}</p>
                      <p className="card-text text-light">
                        <span style={{ color: "orange" }}>${el.price}</span>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div className="col-12">
              <p className="text-center">No products available.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
