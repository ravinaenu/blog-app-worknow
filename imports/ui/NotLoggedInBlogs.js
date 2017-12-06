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
      <PrivateBeforeLoginHeader title="My Blogs App" />
      
      {props.blogs.length === 0 ? <BlogListEmptyItem /> : undefined}

      {props.blogs.map((blog)=> {
        return <BlogListItem key={blog._id} blog ={blog}/>
      })}
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