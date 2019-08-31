import React from 'react';
import styled from 'styled-components';
import KidCudi from '../assets/Ellipse.jpg'
import ChrissyTeigen from '../assets/rsz_ct4.jpg';

const ProfileImage = styled.img`
  border-radius: 50%;
  vertical-align: ${props => props.verticalAlign ? props.verticalAlign : 
  'middle'};
  width: ${props => props.width ? props.width : null};
  height: ${props => props.height ? props.height : null};
`;

const Span = styled.span`
  font-size: ${props => props.fontSize ? props.fontSize : '18px'};
  font-weight: bold;
  font-family: Roboto;
  margin: ${props => props.margin ? props.margin : '0 0 0 14px'};
  display: ${props => props.displayName ? 'inline' : 'none'};
`;

const Avatar = (props) => {
  return (
    <>
      <ProfileImage 
        width={props.width} 
        height={props.height} 
        src={props.name === 'ChrissyTeigen' ? ChrissyTeigen : KidCudi} 
        alt='avatar' 
        verticalAlign={props.verticalAlign}
      />
      <Span 
        fontSize={props.fontSize}
        displayName={props.displayName}
        margin={props.margin}
      >{ props.name }</Span>
    </>
  );
}

export default Avatar;