import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Signup from '../ui/Signup';
import Dashboard from '../ui/Dashboard';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';
import { Session } from 'meteor/session';
import  NotLoggedInBlog  from '../ui/NotLoggedInBlogs';


const onEnterBlogPage = (nextState) => {

  Session.set('selectedBlogId', nextState.params.id);

};


export const onAuthChange = (isAuthenticated, currentPageAuth) => {
  
  const isUnauthenticatedPage = currentPageAuth === 'unauth';
  const isAuthenticatedPage = currentPageAuth === 'auth';

  if (isUnauthenticatedPage && isAuthenticated) {
    browserHistory.replace('/dashboard');
  } else if (isAuthenticatedPage && !isAuthenticated) {
    browserHistory.replace('/');
  }
};

export const globalOnChange = (pevState, nextState)=>{
  // const lastRoute = nextState.routes[nextState.routes.length-1];
  // Session.set('currentPageAuth', lastRoute.privacy);

  globalOnEnter(nextState);
  
};

export const globalOnEnter = (nextState)=> {

  const lastRoute = nextState.routes[nextState.routes.length-1];
  Session.set('currentPageAuth', lastRoute.privacy);
  
};

const onLeavehandler = () => {
  Session.set('selectedBlogId', undefined);
}


export const routes = (
  <Router history={browserHistory}>
    <Route onEnter={globalOnEnter} onChange={globalOnChange}>
      <Route path="/" component={NotLoggedInBlog} privacy = "unauth" />
      <Route path="/login" component={Login} privacy = "unauth" />
      <Route path="/signup" component={Signup} privacy = "unauth" />
      <Route path="/dashboard" component={Dashboard} privacy = "auth" />
      <Route path="/dashboard/:id" component={Dashboard} privacy = "auth" onEnter={onEnterBlogPage} onLeave = {onLeavehandler}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);
