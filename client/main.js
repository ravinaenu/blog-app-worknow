import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';

import { routes, onAuthChange } from '../imports/routes/routes';
import '../imports/startup/simple-schema-configuration.js';
import { browserHistory } from 'react-router';

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Tracker.autorun( ()=>{
  const selectedBlogId = Session.get('selectedBlogId');
  if (selectedBlogId){
    browserHistory.replace(`/dashboard/${selectedBlogId}`);
  }

});

Meteor.startup(() => {
  Session.set('selectedBlogId', undefined);
  ReactDOM.render(routes, document.getElementById('app'));
});
