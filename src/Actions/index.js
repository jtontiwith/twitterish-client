import { API_BASE_URL } from '../config';

//fetch
export const fetchData = (user) => dispatch => {
  dispatch(request());
  fetch(`${API_BASE_URL}/api/${user}`).then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText)
    }
    return res.json()
  }).then(data => { 
    console.log(data)
    //dispatch(success(data));  
  }).catch(err => {
    console.log(err) //notification in production 
  });
};

//post
export const postData = ({user, date, text}) => dispatch => {
  console.log('user ', user, 'text ', text)
  dispatch(request());
  fetch(`${API_BASE_URL}/${user}`, {
    method: 'POST',
    body: JSON.stringify({
      name: user,
      text: text,
      date: date ? new Date(date) : new Date()
    }),
    headers: {
      'Content-Type': 'application/json'
    }  
  }).then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json()
  }).then(() => {
    dispatch(fetchData(user))
    dispatch(showNotification(false))
  }).catch(err => {
    console.log(err) //notification in production
  });
}; 

//delete
export const deleteData = (id, user, date, text) => dispatch => {
  fetch(`${API_BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }  
  }).then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    console.log(res)
    return res.json();
  }).then(() => { 
    dispatch(fetchData(user))
    dispatch(showNotification(true))
    console.log(user, date, text)
    dispatch(prepUndo({
      user: user,
      date: date,
      text: text
    }))
  }).catch((err) => console.log(err))
};


export const REQUEST = 'REQUEST';
export const request = () => ({
    type: REQUEST,
    loading: true
});

export const SUCCESS = 'SUCCESS';
export const success = (data) => {
    console.log(data)
    return {
      type: SUCCESS,
      loading: false,
      user: data.users[0],
      tweets: data.tweets
    }
};

export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const showNotification = (show) => ({
    type: SHOW_NOTIFICATION,
    show: show
})

export const PREP_UNDO = 'PREP_UNDO';
export const prepUndo = (tweetToUndo) => ({
    type: PREP_UNDO,
    tweetToUndo: tweetToUndo
});


