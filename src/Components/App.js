import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Dashoard from './Dashboard';

const App = () => { 
  return (
    <>
      <Route exact path='/:user' component={Dashoard}/> 
    </>
  )


}

export default withRouter(App);
