import React from 'react';
import { ReactComponent as Pin } from '../assets/pin.svg';
import { ReactComponent as Link } from '../assets/link.svg';
import { ReactComponent as Calendar } from '../assets/calendar.svg';
import styled from 'styled-components';

const Wrapper = styled.section`
  margin: 25px 0 0 0;
`;

const Span = styled.span`
  margin-left: 12px; 
  color: #7E8B9C;
  font-size: 12px;
  line-height: 14px;
  vertical-align: 10%; 
  vertical-align: ${props => props.verticalAlign ? props.verticalAlign : '10%'};
`;

const Div = styled.div`
  margin-bottom: 19px;
`;

const Anchor = styled.a`
  text-decoration: none;
  color: #7E8B9C;
`;

const ProfileDetail = ({ location, link, joined }) => {
  //const { location, link, joined } = data;
  return (
    <Wrapper>
      <Div>
        <Pin width={13.5} height={16} title='location' /><Span verticalAlign={'27%'}>{location}</Span>
      </Div>
      <Div>
        <Link width={13} height={13} title='hyperlink' /><Span verticalAlign={'17%'}><Anchor href={'#'}>{link}</Anchor></Span>
      </Div>
      <Div>
        <Calendar width={13} height={13} title='datetime' /><Span>{joined}</Span>
      </Div>
    </Wrapper>
  )
 
}

export default ProfileDetail;