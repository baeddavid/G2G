import React from 'react';
import { Link } from 'react-router-dom';

const Success = (props) => {
    return(
        <div>
            <h1>Woohoo!</h1>
            <div>You just created a new bathroom.</div>
            <Link to={`/bathroom/${props.newBathroomId}`}><div style={{color: 'black'}}>Check out new bathroom</div></Link>
            <Link to='/'><div style={{color: 'black'}}>Back to search</div></Link>
        </div>
    )
}

export default Success;