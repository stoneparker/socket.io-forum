import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomeAuth from './pages/auth/HomeAuth';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';

const Routes: React.FC = () => {
   return (
      <BrowserRouter>
         <Route exact path="/" component={HomeAuth} />
         <Route path="/signIn" component={SignIn} />
         <Route path="/signUp" component={SignUp} />
      </BrowserRouter>
   )
}

export default Routes;
