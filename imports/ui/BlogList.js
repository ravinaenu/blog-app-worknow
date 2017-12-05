import React from 'react';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';

import {Blogs} from '../api/blogs';

import BlogListHeader from './BlogListHeader';
import BlogListItem from './BlogListItem';
import BlogListEmptyItem from './BlogListEmptyItem';


export const BlogList = (props) => {
  return (
    <div>
      <BlogListHeader />
      <BlogListEmptyItem />
      
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
  Meteor.subscribe('blogs');
  return {
    blogs: Blogs.find().fetch()
  };

}, BlogList);