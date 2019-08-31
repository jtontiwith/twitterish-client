import React from 'react';
import styled from 'styled-components';

const Time = styled.time`
  color: #7E8B9C;
  font-size: 12px;
  display: block;
  margin: -13px 0 0 40px;
`;

const TimeStamp = ({ date }) => {
  
  const showTime = (date) => {
    const current = new Date();
    date = new Date(date);
    let diff = (current - date)/1000/60;
    diff = Math.round(diff); //in minutes
    
    if(diff < 60) {
      return `${diff}m`; //minutes
    } else if (diff < 1440) {
      const hoursSince = diff/60;
      return `${Math.round(hoursSince)}h` //hours
    } else {
      return date.toDateString().substring(4, 10) //days
    }
  }  

  return <Time>{showTime(date)}</Time>
}

export default TimeStamp;