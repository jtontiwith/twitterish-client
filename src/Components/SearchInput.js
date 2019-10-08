import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../assets/search.svg';

const StyledTextInput = styled.input` 
  background-position: 7px 7px;
  background-repeat: no-repeat;
  width: 227px;
  height: 30px;
  border-radius: 55px;
  font-size: 14px;
  color: #7E8B9C;
  padding-left: 30px;
  border: 1px solid #B2B9C4;
  box-setting: border-box;
  ::placeholder {
    color: #7E8B9C;
    opacity: 0.6;
  }
`;

const Div = styled.div`
  position: absolute;
  bottom: 0;
  right 0;
`;

const Span = styled.span`
  position: absolute;
  left: 10px;
  top: 9px;
`;

const SearchInput = () => {
  return (
      <Div>
        <StyledTextInput placeholder='Search' />
        <Span><SearchIcon /></Span>
      </Div>
    )
}

export default SearchInput;