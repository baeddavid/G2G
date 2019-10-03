import React from 'react';
import { Link } from 'react-router-dom';

export const CreateBathroomPage = (props) => {
  return (
    <>
      <h1>Create Bathroom Page</h1>
      <div>
        Latitude: {props.location.lat}
      </div>
      <div>
        Longitude: {props.location.lng}
      </div>
      <Link to="/search">
        <div>Back</div>
      </Link>
    </>  
  )
}