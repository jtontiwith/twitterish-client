import * as actions from '../Actions';

const initialState = {
  user: {},
  tweets: [],
  loading: true,
  error: null,
  notification: false,
  toUndo: {}
}

const appReducer = (state=initialState, action) => {
  if(action.type === actions.REQUEST) {
    return Object.assign({}, state, {
      loading: action.loading
    })
  } else if(action.type === actions.SUCCESS) {
    return Object.assign({}, state, {
      loading: action.loading,
      user: action.user,
      tweets: action.tweets
    })
  } else if(action.type === actions.SHOW_NOTIFICATION) {
    return Object.assign({}, state, {
      notification: action.show
    })
  } else if (action.type === actions.PREP_UNDO) {
    console.log(action.tweetToUndo)
    return Object.assign({}, state, {
      toUndo: action.tweetToUndo
    })
  }
  return state;
}

export default appReducer;