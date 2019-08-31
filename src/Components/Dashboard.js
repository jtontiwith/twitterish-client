import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData, postData } from '../Actions';
import Tweet from './Tweet';
import Notifications from './Notifications';
import Header from './Header';
import Profile from './Profile';
import TweetWriter from './TweetWriter';
import '../assets/Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Dashboard = ({ dispatch, history, loading, tweets, user }) => {
  const userPath = history.location.pathname.substring(1); 
  const [textAreaState, setTextAreaState] = useState('');
  
  const handleEvent = (event) => {
    const { type, target } = event;
    switch(type) {
      case 'change':
        return setTextAreaState(target.value)
      case 'click':
        if(userPath && textAreaState.length) { //it's here, standardize on user!
          dispatch(postData({user: userPath, text: textAreaState}))
          return setTextAreaState('');
        }
      default:
        console.log(`No case for event type ${type}`)
    }
  }

  useEffect(() => {    
    dispatch(fetchData(userPath))
  }, []);

//sorting tweets, might not scalable for production
tweets = tweets.sort((a, b) => { 
  b = new Date(b.date).getTime();
  a = new Date(a.date).getTime();
  return b - a;
});   

//building the tweets
const tweetsArr = tweets.map((tweet, index) => <Tweet 
  key={tweet.id} 
  id={tweet.id} 
  name={user.name} 
  date={tweet.date} 
  text={tweet.text}
  margin={'2px 10px 2px 10px'}
  index={index}
  tweetsArrLength={tweets.length}
/>);

if(loading) {
  return (
   <FontAwesomeIcon
     icon={faSpinner} 
     spin size='4x' 
     style={{ color: '#2582FF',
       position: 'absolute',
       top: 0,
       bottom: 0,
       right: 0, 
       left: 0, 
       margin: 'auto' }} 
   />
  )
}

return ( 
  <div className='page-wrapper'>
    <header className='row'>
      <Header />
    </header>
    <section className='row'>
      <section className='columm'>
        <Profile user={user} />
      </section>
      <section className='columm'>
        <TweetWriter 
          name={user.name} 
          textAreaState={textAreaState}
          handleEvent={handleEvent}
          onClick={handleEvent}
        />
        {tweetsArr}
      </section>
    </section>
    <Notifications />
  </div>);
}

const mapStateToProps = ({ loading, tweets, user }) => ({
  loading: loading,
  user: user,
  tweets: tweets
});

export default connect(mapStateToProps)(Dashboard);
