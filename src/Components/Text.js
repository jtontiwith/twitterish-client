import React from 'react';
import styled from 'styled-components';

const ParagraphText = styled.p`
  margin: ${props => props.margin ? props.margin : '12.5px 0 0 0'};
  font-size: ${props => props.fontSize ? props.fontSize : '12px'};
  line-height: ${props => props.lineHeight ? props.lineHeight : '14px'};
  color: ${props => props.color ? props.color : '#000000'};
  width: 100%;
  max-width: 309px;
  word-wrap: break-word;
`;



const Text = (props) => {
  return <ParagraphText
           margin={props.margin}
           fontSize={props.fontSize}
           lineHeight={props.lineHeight}
           color={props.color}
           width={props.width}
           maxWidth={props.maxWidth}
         >
           {props.children}
         </ParagraphText>
}

export default Text;