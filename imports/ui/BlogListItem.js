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
        
        <div className="ui fluid raised card blue">
      <div className="content">
        <div className="header">{props.blog.title || 'Untitled Blog' }</div>
        <div className="meta">
          <span className="right floated time">{props.blog.updatedAt && moment(props.blog.updatedAt).format('MMMM Do YYYY, h:mm A')}</span>
          <span className="category">Blog</span>
        </div>
        <div className="description">
          <p>{props.blog.body || ''}</p>
        </div>
      </div>
      <div className="extra content">
        <div className="right floated author">
          <img className="ui avatar image" src="images/Twemoji2_1f916.svg" /> <span className="ui blue basic label">{props.blog.username || 'Anonymous'} </span>
        </div>
      </div>
    </div>
         
      {props.blog.selected ? 'selected': undefined}
      <div className="ui divider"></div>
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