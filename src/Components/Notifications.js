import React from 'react';
import Box from './Box';
import Button from './Button';
import { ReactComponent as Trash } from '../assets/trash.svg'
import { connect } from 'react-redux';
import { showNotification, postData } from '../Actions';
import Text from './Text';
import styled from 'styled-components';

const Span = styled.span`
  position: absolute;
  left: ${props => props.left ? props.left : null};
  bottom: ${props => props.bottom ? props.bottom : null};
`;

const Notifications = ({ show, toUndo, dispatch }) => {
  if(show) { 
    return (
      <section className='row'>
        <Box
          background={'#3ABD7E'}
          width={'90%'}
          maxWidth={'678px'}
          height={'70px'}
          position={'fixed'}
          bottom={'24px'}
          zIndex={'100'}
          padding={'0'}
        >
          <Span bottom={'26px'} left={'24px'}>
            <Trash />
          </Span>
          <Span bottom={'26px'} left={'54px'}>
            <Text 
              margin={'0 0 0 5px'} 
              fontSize={'16px'} 
              color={'#FFFFFF'}
              lineHeight={'19px'}
            >
              Post successfully deleted
            </Text>
          </Span>
          <Button 
            onClick={() => dispatch(postData(toUndo))}
            width={'92px'}
            height={'33px'}
            background={'#3ABD7E'}
            position={'absolute'}
            right={'122px'}
            bottom={'18px'}
          >
            Undo
          </Button>
          <Button
            onClick={() => dispatch(showNotification(false))}
            width={'92px'}
            height={'33px'}
            background={'#FFFFFF'}
            color={'#3ABD7E'}
            position={'absolute'}
            right={'20px'}
            bottom={'18px'}
          >
            Dismiss
          </Button>
        </Box>
      </section>
    );
  }
  return null;
}

const mapStateToProps = (state) => ({
  show: state.notification, 
  toUndo: state.toUndo
})

export default connect(mapStateToProps)(Notifications);