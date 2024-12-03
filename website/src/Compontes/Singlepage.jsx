import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { single_action } from '../Redux/action';
import { useParams } from 'react-router-dom';
import '../App.css';

export default function Singlepage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.single.data);

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
                <div className="cate-sub col-xxl-9">
                  <div className="px-b bbb">Category</div>
                  <div className='dair'>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                      <label class="form-check-label" for="flexCheckIndeterminate">
                      Juice & Drinks
                      </label>
                    </div>
                    <span>[20]</span>
                  </div>

                  <div className='dair'>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                      <label class="form-check-label" for="flexCheckIndeterminate">
                      Dairy & Milk
                      </label>
                    </div>
                    <span>[54]</span>
                  </div>


                  <div className='dair'>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                      <label class="form-check-label" for="flexCheckIndeterminate">
                      Snack & Spice
                      </label>
                    </div>
                    <span>[64]</span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
