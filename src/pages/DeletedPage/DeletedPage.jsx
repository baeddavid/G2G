import React from 'react';
import { Link } from 'react-router-dom';

const DeletedPage = () => {

  return(
    <div>
      <div>Looks like the bathroom you were looking for got flushed away :(</div>
      <Link to={'/'}><div style={{color: 'black'}}>Go back home</div></Link>
    </div>
  )
}

export default DeletedPage;