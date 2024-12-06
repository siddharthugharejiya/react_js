import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { single_action } from '../Redux/action';
import { useParams } from 'react-router-dom';
import '../App.css';
import Form from 'react-bootstrap/Form';

export default function Singlepage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.single.data);
  const [price, setprice] = useState([100])

  useEffect(() => {
    dispatch(single_action(id));
  }, [dispatch, id]);

  if (!product) {
    return <div>Loading...</div>;
  }

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
          Product
        </div>
        <div className="col-xl-5 text-center">Home - Product</div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xxl-4">
            <div className="row">
              <div className="col-xxl-12 cate">
                <div className="cate-sub col-xxl-9 col-sm-12 col-12">
                  <div className="px-b bbb"> <b>Category </b></div>
                  <div className='bo'></div>
                  <div className='dair'>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                      <label class="form-check-label" for="flexCheckIndeterminate" id='flex'>
                        Juice & Drinks
                      </label>
                    </div>
                    <span>[20]</span>
                  </div>

                  <div className='dair'>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                      <label class="form-check-label" for="flexCheckIndeterminate" id='flex'>
                        Dairy & Milk
                      </label>
                    </div>
                    <span>[54]</span>
                  </div>


                  <div className='dair'>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                      <label class="form-check-label" for="flexCheckIndeterminate" id='flex'>
                        Snack & Spice
                      </label>
                    </div>
                    <span>[64]</span>
                  </div>

                </div>


                <div className="cate-sub col-xxl-9 col-sm-12">
                  <div className="px-b bbb"> <b>Price </b></div>
                  <div className='bo'></div>
                  <div className='dair'>

                    <Form.Range onChange={(e) => (setprice([e.target.value]))} />
                  </div>
                  <div className="d-flex">
                    <b> Price </b> : ${price[0]}
                  </div>
                  <div>
                    <button className='btn' style={{background:"rgb(100 180 150 / 1)",color:"white"}}>Filter</button>
                  </div>
                </div>

                <div className="cate-sub col-xxl-9">
                  <div className="px-b bbb"> <b>Colors </b></div>
                  <div className='bo'></div>
                  <div className='dair'>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                      <label class="form-check-label" for="flexCheckIndeterminate" id='flex'>
                        Blue
                      </label>
                    </div>
                    <span className='btn btn-primary p-2'></span>
                  </div>

                  <div className='dair'>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                      <label class="form-check-label" for="flexCheckIndeterminate" id='flex'>
                        Yellow
                      </label>
                    </div>
                    <span className='btn btn-warning p-2'></span>
                  </div>
                  <div className='dair'>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                      <label class="form-check-label" for="flexCheckIndeterminate" id='flex'>
                        Red
                      </label>
                    </div>
                    <span className='btn btn-danger p-2'></span>
                  </div>

                  <div className='dair'>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                      <label class="form-check-label" for="flexCheckIndeterminate" id='flex'>
                        Green
                      </label>
                    </div>
                    <span className='btn btn-success p-2'></span>
                  </div>



                </div>


                <div className="cate-sub col-xxl-9">
                  <div className="px-b bbb"> <b>Weight </b></div>
                  <div className='bo'></div>
                  <div className='dair'>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                      <label class="form-check-label" for="flexCheckIndeterminate" id='flex'>
                       2kg Pack
                      </label>
                    </div>
                    {/* <span>[20]</span> */}
                  </div>

                  <div className='dair'>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                      <label class="form-check-label" for="flexCheckIndeterminate" id='flex'>
                       20kg Pack
                      </label>
                    </div>
                    {/* <span>[54]</span> */}
                  </div>


                  <div className='dair'>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                      <label class="form-check-label" for="flexCheckIndeterminate" id='flex'>
                        30kg Pack
                      </label>
                    </div>
                    {/* <span>[64]</span> */}
                  </div>

                </div>


                <div className="cate-subb col-xxl-9">
                  <div className="px-b bbb"> <b>Tages </b></div>
                  <div className='bo'></div>
                 
                    <div className='foo'>Vegetables</div>
                    <div className='foo'>Juice</div>

                    <div className='foo'>Vegetables</div>
                 
                    <div className='foo'>Food</div>
                    <div className='foo'>Dry Fruit</div>
            
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
