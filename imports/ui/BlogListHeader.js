import React from 'react';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import {Session} from 'meteor/session';

const gridStyle = {
  marginTop: '15px',
  marginRight: '15px'

}
  export const BlogListHeader = (props) => {
    return (
      <div>
        
         <div className="ui right aligned grid" style={gridStyle}>
          <div className="right floated left aligned three wide column"> 
            
              <button className="ui violet fluid basic button" onClick = {()=> {
                props.meteorCall('blogs.insert', (err, res)=>{
                  if (res){
                    props.Session.set('selectedBlogId', res);
                  }
                });
              }}>
                <i className="add square icon"></i> Create New Blog
              </button>
            </div>
          </div>

      </div>
    );


  }
  

  export default createContainer(()=>{
    return {
      meteorCall: Meteor.call,
      Session
    };
  
  }, BlogListHeader);

