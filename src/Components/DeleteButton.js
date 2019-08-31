import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { deleteData } from '../Actions';

const StyledDeleteButton = styled.button`
  width: 74px;
  height: 36px;
  background-color: #ffffff;
  border-radius: 5px;
  position: absolute;
  top: 44px;
  left: -25.5px;
  padding: 0px;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  line-height: 22px;
  color: #313333;
  text-align: center;
  border: 1px solid rgba(126, 139, 156, 0.6);
  box-sizing: border-box;

  :after {
    content: ' ';
    width: 0px;
    height: 0px;
    position: absolute;
    border-top: 10px solid transparent;
    border-left: 10px solid transparent;
    border-bottom:10px solid #ffffff;
    border-right:10px solid transparent;
    left: 50%;
    top: -57%;
    margin-left: -10px;
  }

  :before {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    border-top: 11px solid transparent;
    border-left: 11px solid transparent;
    border-bottom: 11px solid rgba(126, 139, 156, 0.6);
    border-right: 11px solid transparent;
    left: 50%;
    top: -64%; 
    margin-left: -11px;
  }
`;

const Span = styled.span`
  margin-right: 7px;
  font-size: 15px;
  color: #B2B9C4;
`;

const InteriorHighlight = styled.div`
  margin: 0;
  font-size: 12px;
  margin-top: 0px; 
  :hover {
    background-color: #2682FF;
    color: #ffffff
  }
  color: #B2B9C4;
`;



const DeleteButton = ({ tweetId, dispatch, user, date, text }) => {
  return ( 
    <StyledDeleteButton onClick={() => dispatch(deleteData(tweetId, user, date, text)) }>
      <InteriorHighlight>
        <Span>&times;</Span>Delete
      </InteriorHighlight>
    </StyledDeleteButton>
  );
}

const mapStateToProps = ({ user }) => ({
  user: user.name
})

export default connect(mapStateToProps)(DeleteButton);