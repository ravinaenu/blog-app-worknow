import React from 'react';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';

  export const BlogListHeader = (props) => {
    return (
      <div>
        <button onClick = {()=> {
          props.meteorCall('blogs.insert');
        }}>Create New Blog</button>
      </div>
    );


  }

  export default createContainer(()=>{
    return {
      meteorCall: Meteor.call
    };
  
  }, BlogListHeader);

