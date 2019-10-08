import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Dashoard from './Dashboard';
import RegistrationAndLogin from './RegistrationAndLogin';

const App = () => { 
  //<Route exact path='/:user' component={Dashoard}/> 
  return (
    <>
      <Route exact path='/user' component={Dashoard}/> 
      <Route exact path='/register' component={RegistrationAndLogin}/>
      <Route exact path='/login' component={RegistrationAndLogin}/>
    </>
  )


}

export default withRouter(App);
