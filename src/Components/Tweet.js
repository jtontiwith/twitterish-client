import React from 'react';
import Text from './Text';
import Avatar from './Avatar';
import Box from './Box';
import TimeStamp from './TimeStamp';
import Menu from './Menu';


const Tweet = ({name, text, id, date, margin, index, tweetsArrLength}) => {
  let radius;
  if(index === 0 && tweetsArrLength === 1) { //round the corners on first and last tweets
    radius = '10px';
  } else if(index === (tweetsArrLength - 1)) {
    radius = '0px 0px 10px 10px';
  } else if(index === 0) {
    radius = '10px 10px 0px 0px';
  } else {
    radius = '0';
  }

  return (
    <Box 
      padding={'26px 0 36px 32px'} 
      margin={margin} 
      radius={radius}
      boxShadow={'0px 4px 60px rgba(26, 40, 60, 0.14)'} 
    >
      <Avatar 
        width='32px' 
        height='32px' 
        fontSize='14px' 
        margin='0 0 0 9px'
        name={name} 
        displayName={true}
        verticalAlign={'top'} 
      />
      <TimeStamp date={date} />
      <Text fontSize='16px'>{text}</Text>
      <Menu tweetId={id} name={name} date={date} text={text} />
    </Box>
  );
}

export default Tweet;