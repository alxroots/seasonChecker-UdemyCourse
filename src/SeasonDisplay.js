import React from 'react';
import './seasonDisplay.css';

const seasonConfig = {
  summer: {
    text: 'Nossa fui, que calorão!',
    iconName: 'sun'
  },
  winter: {
    text: 'Que friozinho gostozo. uhuhhuhu!',
    iconName: 'snowflake'
  }
}
const getSeason  = (lat, month) => {
  if( month > 2 && month < 9){
    return lat > 0 ? 'summer':'winter';
  } else {
    return lat < 0 ? 'summer':'winter';
  }
  
}

const SeasonDisplay = (props) => {
  const my_season = getSeason(props.lat, new Date().getMonth())
  const {iconName, text} = seasonConfig[my_season]
  
  return (
    <div className={`season-display ${my_season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
        <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
}

export default SeasonDisplay;