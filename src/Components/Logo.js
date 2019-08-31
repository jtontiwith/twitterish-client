import React from 'react';
import { ReactComponent as LogoIcon } from '../assets/Path.svg';
import { ReactComponent as LogoText } from '../assets/chrrp.svg';
import styled from 'styled-components';

const Div = styled.div`
  padding: 0;
  margin: 0;
  position: absolute;
  bottom: 0;
  left: 5px;
`;

const Logo = () => {
  return (
    <Div>
      <LogoIcon />
      <LogoText style={{margin: '5 0 0 2.5'}} />
    </Div>    //since we are using styled components throughout and
    )        //styles exist at the component level sometimes an inline
  }         //style seems not crazy
export default Logo;