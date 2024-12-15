import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, single_action, wholedata } from "../Redux/action";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";

import Form from "react-bootstrap/Form";
import { textAlign } from "@mui/system";

export default function Singlepage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [price, setprice] = useState([100]);

  const [items, setItems] = useState([])
  const product = useSelector((state) => state.single.data);
  console.log(product);
  const whole = useSelector((state) => state.whole_data.Data)
  console.log(whole);
  useEffect(() => {

    if (product && whole) {
      const filteredItems = whole.filter((el) => el.category === product.category);
      setItems(filteredItems);
    }
  }, [product, whole]);


  console.log(items);





  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    dispatch(single_action(id));
    dispatch(wholedata())
  }, [dispatch, id]);


  const mainSliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    arrows: false, // No next/prev buttons
    fade: true, // Smooth fade effect
    asNavFor: ".thumbnail-slider", // Link with thumbnail slider
  };

  const thumbnailSliderSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true, // Show next/prev buttons
    focusOnSelect: true, // Click to select an image
    asNavFor: ".main-slider", // Link with main slider
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  const handleCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <div
        className="d-flex justify-content-between align-items-center"
        style={{
          backgroundColor: "rgb(228 242 237 / 1)",
          padding: "25px",
        }}
      >
        <div
          className="col-xl-2 text-center"
          style={{ fontWeight: "700", fontSize: "20px" }}
        >
          Singlepage
        </div>
        <div className="col-xl-5 text-center">Home - Product - Singlepage</div>
      </div>

      <div className="container">
        <div className="row">
          <div className="row justify-content-center">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-8">
              <div className="row">
                <div className="col-xxl-12 cate">
                  <div className="cate-sub col-xxl-9 col-sm-12 col-12">
                    <div className="px-b bbb">
                      {" "}
                      <b>Category </b>
                    </div>
                    <div className="bo"></div>
                    <div className="dair">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckIndeterminate"
                        />
                        <label
                          class="form-check-label"
                          for="flexCheckIndeterminate"
                          id="flex"
                        >
                          Juice & Drinks
                        </label>
                      </div>
                      <span>[20]</span>
                    </div>

                    <div className="dair">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckIndeterminate"
                        />
                        <label
                          class="form-check-label"
                          for="flexCheckIndeterminate"
                          id="flex"
                        >
                          Dairy & Milk
                        </label>
                      </div>
                      <span>[54]</span>
                    </div>

                    <div className="dair">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckIndeterminate"
                        />
                        <label
                          class="form-check-label"
                          for="flexCheckIndeterminate"
                          id="flex"
                        >
                          Snack & Spice
                        </label>
                      </div>
                      <span>[64]</span>
                    </div>
                  </div>

                  <div className="cate-sub col-xxl-9 col-sm-12">
                    <div className="px-b bbb">
                      {" "}
                      <b>Price </b>
                    </div>
                    <div className="bo"></div>
                    <div className="dair">
                      <Form.Range />
                    </div>
                    <div className="d-flex">
                      <b> Price </b> : ${price[0]}
                    </div>
                    <div>
                      <button
                        className="btn"
                        style={{

                          background: "rgb(100 180 150 / 1)",
                          color: "white",
                        }}
                      >
                        Filter
                      </button>
                    </div>
                  </div>

                  <div className="cate-sub col-xxl-9">
                    <div className="px-b bbb">
                      {" "}
                      <b>Colors </b>
                    </div>
                    <div className="bo"></div>
                    <div className="dair">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckIndeterminate"
                        />
                        <label
                          class="form-check-label"
                          for="flexCheckIndeterminate"
                          id="flex"
                        >
                          Blue
                        </label>
                      </div>
                      <span className="btn btn-primary p-2"></span>
                    </div>

                    <div className="dair">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckIndeterminate"
                        />
                        <label
                          class="form-check-label"
                          for="flexCheckIndeterminate"
                          id="flex"
                        >
                          Yellow
                        </label>
                      </div>
                      <span className="btn btn-warning p-2"></span>
                    </div>
                    <div className="dair">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckIndeterminate"
                        />
                        <label
                          class="form-check-label"
                          for="flexCheckIndeterminate"
                          id="flex"
                        >
                          Red
                        </label>
                      </div>
                      <span className="btn btn-danger p-2"></span>
                    </div>

                    <div className="dair">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckIndeterminate"
                        />
                        <label
                          class="form-check-label"
                          for="flexCheckIndeterminate"
                          id="flex"
                        >
                          Green
                        </label>
                      </div>
                      <span className="btn btn-success p-2"></span>
                    </div>
                  </div>

                  <div className="cate-sub col-xxl-9">
                    <div className="px-b bbb">
                      {" "}
                      <b>Weight </b>
                    </div>
                    <div className="bo"></div>
                    <div className="dair">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckIndeterminate"
                        />
                        <label
                          class="form-check-label"
                          for="flexCheckIndeterminate"
                          id="flex"
                        >
                          2kg Pack
                        </label>
                      </div>
                      {/* <span>[20]</span> */}
                    </div>

                    <div className="dair">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckIndeterminate"
                        />
                        <label
                          class="form-check-label"
                          for="flexCheckIndeterminate"
                          id="flex"
                        >
                          20kg Pack
                        </label>
                      </div>
                    </div>

                    <div className="dair">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckIndeterminate"
                        />
                        <label
                          class="form-check-label"
                          for="flexCheckIndeterminate"
                          id="flex"
                        >
                          30kg Pack
                        </label>
                      </div>
                      {/* <span>[64]</span> */}
                    </div>
                  </div>

                  <div className="cate-subb col-xxl-9">
                    <div className="px-b bbb">
                      {" "}
                      <b>Tages </b>
                    </div>
                    <div className="bo"></div>

                    <div className="foo">Vegetables</div>
                    <div className="foo">Juice</div>

                    <div className="foo">Vegetables</div>

                    <div className="foo">Food</div>
                    <div className="foo">Dry Fruit</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-9">
              {product ? (
                <div className="col-xxl-12">
                  {/* <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={product.image} alt="Product Image" />
                    <Card.Body>
                      <Card.Title>{product.category}</Card.Title>
                      <Card.Text>{product.description}</Card.Text>
                      <Button variant="success" onClick={() => handleCart(product)}>
                        Add to Cart
                      </Button>
                    </Card.Body>
                  </Card> */}
                  <div class="card mb-3" style={{maxWidth : "100%"}}>
                    <div class="row g-0">
                      <div class="col-md-5">
                        <img src={product.image} class="img-fluid rounded-start" alt="..." id="roo"/>
                      </div>
                      <div class="col-md-7">
                        <div class="card-body" style={{alignItems : "start"}}>
                          <h5 class="card-title">Seeds Of Change Oraganic Quinoa, Brown</h5>
                          <p class="card-text" style={{color:"rgb(122 122 122 / 1)",textAlign:"start"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iure minus error doloribus saepe natus?</p>
                          <p><i class="fa-solid fa-star" style={{color: "#e67a00"}}></i><i class="fa-solid fa-star" style={{color: "#e67a00"}}></i><i class="fa-solid fa-star" style={{color: "#e67a00"}}></i><i class="fa-solid fa-star" style={{color: "#e67a00"}}></i><i class="fa-solid fa-star" style={{color: "#e67a00"}}></i><span style={{color:"rgb(122 122 122 / 1)"}}>( 75 Reviews )</span></p>
                          <p>Brand : <span>E</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>Loading...</div>
              )}
            </div>
          </div>


        </div>
      </div>
    </>
  )
}