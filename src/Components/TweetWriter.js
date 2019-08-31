import React from 'react';
import Avatar from './Avatar';
import Box from './Box';
import TextArea from './TextArea';
import Button from './Button';

const TweetWriter = ({ name, textAreaState, onClick, handleEvent }) => {
  return (
    <Box 
      padding='23px 0px 24px 24px'
      boxShadow={'0px 4px 60px rgba(26, 40, 60, 0.14)'}
      margin={'10px 10px 20px 10px'}
    >
      <Avatar 
        width='40px' 
        height='40px' 
        verticalAlign='top' 
        name={name}
      />
      <TextArea value={textAreaState} handleEvent={handleEvent}/>
      <Button onClick={onClick} verticalAlign='top'>Post</Button> 
    </Box>
  );
}

export default TweetWriter;