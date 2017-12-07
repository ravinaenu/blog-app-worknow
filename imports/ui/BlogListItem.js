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

       
        <div className={"ui fluid raised card " + (props.blog.theme ? props.blog.theme : 'blue')} >
      <div className="content">
        <div className="header">{props.blog.title || 'Default Title' }</div>
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
          <img className="ui avatar image" src={"images/" +(props.blog.avatar ? props.blog.avatar : 'Twemoji2_1f916') + ".svg" } /> <span className={"ui basic label "  + (props.blog.theme ? props.blog.theme : 'blue')}>{props.blog.username || 'Anonymous'} </span>
        </div>
      </div>
    </div>
     { props.blog.selected &&

        <div className="ui grid centered">
          <div className="four wide column">
            <a className="ui pointing pink basic label"><i className="star icon"></i>Selected &nbsp; <i className="star icon"></i></a>
          </div>
        </div>

     }
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