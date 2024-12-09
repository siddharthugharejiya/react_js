import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { product_action } from "../Redux/action";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const AllProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.data);
  const [filtered,setfiltered]=useState([])

  useEffect(() => {
    dispatch(product_action());
  }, [dispatch]);
  useEffect(()=>{
 setfiltered(products)
  },[products])
  const [price, setprice] = useState([300]);
  const handlefilter = () =>{
    const fillter_pro = products.filter((el)=>el.price <= price)
     setfiltered(fillter_pro)
  }

  useLayoutEffect(() => {
    const containers = document.querySelectorAll(".image-container");

    containers.forEach((container) => {
      const img = container.querySelector("img");

      if (img) {
        const handleMouseMove = (e) => {
          const { left, top, width, height } =
            container.getBoundingClientRect();
          const x = ((e.clientX - left) / width) * 100;
          const y = ((e.clientY - top) / height) * 100;

          img.style.transformOrigin = `${x}% ${y}%`;
          img.style.transform = "scale(3)";
        };

        const handleMouseLeave = () => {
          img.style.transform = "scale(1)";
          img.style.height = "100%";
          img.style.width = "100%";
          img.style.position = "absolute";
        };

        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);
      }
    });
  }, [products]);
  const nav= useNavigate()
  const handleclick=(id)=>{
   nav(`/single/${id}`)
  }

  return (
    <>
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
                  <Form.Range onChange={(e) => setprice([e.target.value])} />
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
                    onClick={handlefilter}   >
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
        <div className="col-xxl-8 d-flex flex-wrap justify-content-around">
          {filtered.map((el, index) => (
            <Card
              id="card-product"
              key={index}
              onClick={() => handleclick(el.id)}
              style={{height:"fit-content"}}
            >
              <div className="image-container">
                <Card.Img
                  variant="top"
                  alt="image"
                  src={el.image}
                  className="zoom-image"
                />
              </div>
              <div id="shop">
                <i className="fa-solid fa-bag-shopping"></i>
              </div>
              <div id="product-icon">
                <i className="fa-regular fa-eye p-3" id="product-icon-1"></i>
                <i className="fa-regular fa-heart p-3" id="product-icon-1"></i>
              </div>
              <Card.Body id="card-body-1">
                <Card.Title
                  style={{
                    fontSize: "15px",
                    color: "rgb(119 119 119 / 1)",
                  }}
                >
                  {el.category || "Card Title"}
                </Card.Title>
                <Card.Text>
                  <i
                    className="fa-regular fa-star"
                    style={{ color: "orange" }}
                  ></i>{" "}
                  <i
                    className="fa-regular fa-star"
                    style={{ color: "orange" }}
                  ></i>{" "}
                  <i
                    className="fa-regular fa-star"
                    style={{ color: "orange" }}
                  ></i>
                  <i
                    className="fa-regular fa-star"
                    style={{ color: "orange" }}
                  ></i>
                  <i
                    className="fa-regular fa-star"
                    style={{ color: "orange" }}
                  ></i>
                </Card.Text>
                <Card.Text>
                  {el.description || "Description goes here."}
                </Card.Text>
                <Card.Text
                  style={{
                    padding: "10px",
                    color: "rgb(100 180 150 / 1)",
                    fontWeight: "800",
                  }}
                >
                  ${el.price}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllProduct;
