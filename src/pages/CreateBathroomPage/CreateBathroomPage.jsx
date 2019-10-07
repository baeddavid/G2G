import React from 'react';
import { Link } from 'react-router-dom';
import IndexForm from '../../components/NewBathroomForm/IndexForm';

export const CreateBathroomPage = (props) => {
  return (
    <>
      <div>
        Latitude: {props.location.lat}
      </div>
      <div>
        Longitude: {props.location.lng}
      </div>
      <Link to="/search">
        <div>Back</div>
      </Link>
      <IndexForm { ...props }/>
    </>  
  )
}