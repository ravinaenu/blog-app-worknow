import React from 'react';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import {Session} from 'meteor/session';

  export const BlogListHeader = (props) => {
    return (
      <div>
        <button onClick = {()=> {
          props.meteorCall('blogs.insert', (err, res)=>{
            if (res){
              props.Session.set('selectedBlogId', res);
            }
          });
        }}>Create New Blog</button>
      </div>
    );


  }
  

  export default createContainer(()=>{
    return {
      meteorCall: Meteor.call,
      Session
    };
  
  }, BlogListHeader);

