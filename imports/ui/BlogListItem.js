import React from 'react';
import moment from 'moment';
import {Session} from 'meteor/session';
import {createContainer} from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';

export const BlogListItem = (props) => {

   return (
    <div onClick = {()=> {
      props.Session.set('selectedBlogId', props.blog._id);
    }}>
      <h5>{props.blog.title || 'Untitled Blog'}</h5>
      {props.blog.selected ? 'selected': undefined}
      <h6>Created By: {Meteor.user().username}</h6>
      <p>Modified: {moment(props.blog.updatedAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
    </div>
  );

};

BlogListItem.propTypes = {

  blog: React.PropTypes.object.isRequired,
  Session: React.PropTypes.object.isRequired
};

export default createContainer (()=>{

  return {Session};

}, BlogListItem);