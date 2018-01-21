import React from 'react';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import {Session} from 'meteor/session';

import {Blogs} from '../api/blogs';


import BlogListItem from './BlogListItem';
import BlogListEmptyItem from './BlogListEmptyItem';
import PrivateBeforeLoginHeader from './PrivateBeforeLoginHeader';


export const NotLoggedInBlogs = (props) => {
  return (
    <div>
      <PrivateBeforeLoginHeader title="WriteAway" mainTitle="WELCOME" />
      <br />
     
      {props.blogs.length === 0 ? <BlogListEmptyItem msg="No blogs to display, Login to create new blogs"/> : undefined}
    
      <div className="ui grid centered">
      
        <div className="twelve wide column">
          {props.blogs.map((blog)=> {
            return <BlogListItem key={blog._id} blog ={blog}/>
          })}
        </div>
       
      </div>

      
    </div>
  );
};

NotLoggedInBlogs.propTypes = {
  blogs: React.PropTypes.array.isRequired
};

export default createContainer(()=>{

   Meteor.subscribe('allBlogs');

   return {
    blogs: Blogs.find({}, {sort: {updatedAt: -1}}).fetch().map((blog)=>{
      return {
        ...blog
      }
    })
  };

}, NotLoggedInBlogs);