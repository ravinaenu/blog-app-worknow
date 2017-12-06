import React from 'react';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import {Session} from 'meteor/session';

import {Blogs} from '../api/blogs';

import BlogListHeader from './BlogListHeader';
import BlogListItem from './BlogListItem';
import BlogListEmptyItem from './BlogListEmptyItem';


export const BlogList = (props) => {
  return (
    <div>
      <BlogListHeader />
      
      {props.blogs.length === 0 ? <BlogListEmptyItem /> : undefined}

      {props.blogs.map((blog)=> {
        return <BlogListItem key={blog._id} blog ={blog}/>
      })}
    </div>
  );
};

BlogList.propTypes = {
  blogs: React.PropTypes.array.isRequired
};

export default createContainer(()=>{

  const selectedBlogId = Session.get('selectedBlogId');

  Meteor.subscribe('blogs');
  return {
    blogs: Blogs.find({}, {sort: {updatedAt: -1}}).fetch().map((blog)=>{
      return {
        ...blog,
        selected: blog._id === selectedBlogId
      }
    })
  };

}, BlogList);