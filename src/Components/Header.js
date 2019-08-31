import React from 'react';
import Box from './Box';
import Logo from './Logo';
import TextInput from './TextInput';

const Header = () => {
  return (
    <Box
        width={'639px'}
        background={'#F4F6F9'}
        padding={0}
        margin={'10px 10px 25px 10px'}
      >
        <Logo />
        <TextInput />
      </Box>
  );
}

export default Header;