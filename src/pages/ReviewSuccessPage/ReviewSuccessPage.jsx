import React from 'react';
import { Link } from 'react-router-dom';

const ReviewSuccessPage = props => {
  return(
    <div>
      <h1>Yippee!</h1>
      <div>Thanks for submitting a review</div>
      <Link to={'/'}><div style={{color: 'black'}}>Back to search</div></Link>
      <Link to={`/bathroom/${props.match.params.id}`}><div style={{color: 'black'}}>Check out your review</div></Link>
    </div>
  )
}

export default ReviewSuccessPage;