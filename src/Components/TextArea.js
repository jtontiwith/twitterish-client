import React, { useState } from 'react';
import styled from 'styled-components';
import { relative } from 'path';

const TextAreaInput = styled.textarea`
  border: none;
  overflow: auto;
  outline: none;  
  box-shadow: none;
  resize: none;
  font-size: 16px;
  line-height: 19px;
  display: inline-block;
  margin: 12px 18px 0 17px;
  padding: 0;
  ::placeholder {
    color: #7E8B9C;
  }
  `;

const TextArea = ({ value, handleEvent }) => {
  const [state, setState] = useState({
    height: 28,    //easily set height
    maxHeight: 80  //and max height 
  })

  const handleTextAreaSize = (event) => {
    let scrollHeight = event.target.scrollHeight;
    if(scrollHeight < state.maxHeight) {
      setState({...state, height: scrollHeight});
    } //nothing overly complicated to resize the textarea yay!
  }
  
  return <TextAreaInput style={{height: state.height}} value={value} onChange={(e) => {handleEvent(e); handleTextAreaSize(e);} } placeholder={`What's happening?`} />
}

export default TextArea;