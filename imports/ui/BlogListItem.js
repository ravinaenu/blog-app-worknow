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
      <h4>{props.blog.title || 'Untitled Blog'}</h4>
      <h6>Created By: {props.blog.username || 'Anonymous'}</h6>
      <p>Modified: {props.blog.updatedAt && moment(props.blog.updatedAt).format('MMMM Do YYYY, h:mm:ss A')}</p>
      <p>{props.blog.body || ''}</p>
     
      <br />      
      {props.blog.selected ? 'selected': undefined}
     
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