import React from 'react';
import { StyledFeaturesScrollbar } from './styles';

const FeaturesScrollbar = ({getBathroom}) => {

  const {category, genderNeutral, changingStations, purchaseRequired, accessibleStall, singleOccupancy} = getBathroom;

  return (
    <StyledFeaturesScrollbar>
      <ul className="hs full noScrollbar">
        <li className="card"><img src="/logo192.png" alt=""/>{category}</li>
        {genderNeutral === 'Gender Neutral' && 
          <li className="card"><img src="/logo192.png" alt=""/> Gender Neutral</li>}
        {changingStations && 
          <li className="card"><img src="/logo192.png" alt=""/>Changing Stations</li>}
        {purchaseRequired && 
          <li className="card"><img src="/logo192.png" alt=""/>Purchase Required</li>}
        {accessibleStall && 
          <li className="card"><img src="/logo192.png" alt=""/>Handicap Accessible</li>}
        {singleOccupancy && 
          <li className="card"><img src="/logo192.png" alt=""/>Single Occupancy</li>}
        <li className="end"/>
      </ul>
    </StyledFeaturesScrollbar>
  )
}

export default FeaturesScrollbar;
