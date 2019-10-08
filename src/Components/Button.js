import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: ${props => props.background ? props.background : '#2582FF'};
  border-radius: 55px;
  color: ${props => props.color ? props.color : '#FFFFFF'};
  position: ${props => props.position ? props.position : null};
  right: ${props => props.right ? props.right : null};
  bottom: ${props => props.bottom ? props.bottom : null};
  width: ${props => props.width ? props.width : '70px'};
  height: ${props => props.height ? props.height : '30px'};
  font-size: 12px;
  font-weight: 800;
  margin: 8px 0 0 20px;
  vertical-align: ${props => props.verticalAlign ? props.verticalAlign : 
    '110%;'};
  :hover {
    cursor: pointer;
  }
`;

const Button = (props) => {
  return (
    <StyledButton 
      onClick={props.onClick}
      onSubmit={props.onSubmit}
      background={props.background}
      width={props.width}
      height={props.height}
      color={props.color}
      position={props.position}
      right={props.right}
      bottom={props.bottom}
      verticalAlign={props.verticalAlign}
      type={props.type}
    >
      {props.children}
    </StyledButton>
  )
}

export default Button;