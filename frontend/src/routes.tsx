import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomeAuth from './pages/auth/HomeAuth';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import Forum from './pages/app/Forum';

const Routes: React.FC = () => {
   return (
      <BrowserRouter>
         <Route exact path="/" component={HomeAuth} />
         <Route path="/signIn" component={SignIn} />
         <Route path="/signUp" component={SignUp} />
         <Route path="/forum" component={Forum} />
      </BrowserRouter>
   )
}

export default Routes;
