import React from 'react';
import {Meteor} from 'meteor/meteor';

const BlogListEmptyItem = (props) => {
  return (
    <div className="ui grid centered">
    
      <div className="twelve wide column">
        <br />
        <div className="ui blue circular segment">
        <p className="ui blue header"> {props.msg} <i className="frown icon"></i> </p>
        </div>
       </div>
     
    </div>
   
  );
};

export default BlogListEmptyItem;