import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'; // For extracting route params
import { Singlepage_action } from '../Redux/action';
import "../App.css"; // Adjust as needed

const Singlepage = () => {
  const { id } = useParams(); // Extracts the id from the URL params
  const dispatch = useDispatch();
  const singlePageData = useSelector((state) => state.singlePageData); // Adjust according to your state structure

  useEffect(() => {
    if (id) {
      dispatch(Singlepage_action(id)); // Fetch data for the specific id
    }
  }, [dispatch, id]);

  if (!singlePageData) {
    return <div>Loading...</div>; // Loading state
  }

  // Handle potential errors
  if (singlePageData.error) {
    return <div>Error: {singlePageData.error.message}</div>;
  }

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h2>{singlePageData.title}</h2>
        </div>
        <div className="card-body">
          <img src={singlePageData.image} alt={singlePageData.title} className="img-fluid" />
          <p><strong>Price:</strong> ${singlePageData.price}</p>
          <p><strong>Description:</strong> {singlePageData.description}</p>
          <p><strong>Category:</strong> {singlePageData.category}</p>
          <p><strong>Rating:</strong> {singlePageData.rating.rate} ({singlePageData.rating.count} reviews)</p>
        </div>
      </div>
    </div>
  );
}

export default Singlepage;
