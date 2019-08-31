import React from 'react';
import styled from 'styled-components';

const GenericBox = styled.div`
  background: ${props => props.background ? props.background : '#FFFFFF'}; 
  border-radius: ${props => props.radius ? props.radius : '10px'}
  width: ${props => props.width ? props.width : '392px'};
  max-width: ${props => props.maxWidth ? props.maxWidth : null};
  padding: ${props => props.padding ? props.padding : '32px 0 36px 32px'};    
  position: ${props => props.position ? props.position : 'relative'};
  margin: ${props => props.margin ? props.margin : '10px'};
  height: ${props => props.height ? props.height : null};
  z-index: ${props => props.zIndex ? props.zIndex : 'auto'};
  box-sizing: border-box;
  bottom: ${props => props.bottom ? props.bottom : null};
  box-shadow: ${props => props.boxShadow ? props.boxShadow : null};
`;

const Box = (props) => {
  return (
    <GenericBox 
      width={props.width}
      maxWidth={props.maxWidth}
      padding={props.padding}
      position={props.position}
      background={props.background}
      margin={props.margin}
      radius={props.radius}
      height={props.height}
      bottom={props.bottom}
      boxShadow={props.boxShadow}
    >
      { props.children }
    </GenericBox>
  );
}

export default Box;