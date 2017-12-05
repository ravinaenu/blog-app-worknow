import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Session} from 'meteor/session';
import {Blogs} from '../api/blogs';
import {Meteor} from 'meteor/meteor';

export class BlogEditor extends React.Component{
handleBodyChange(e){
  this.props.call('blogs.update',this.props.blog._id, {
    body: e.target.value
  });

}

handleTitleChange(e){
  this.props.call('blogs.update',this.props.blog._id, {
    title: e.target.value
  });

}

  render(){

    if (this.props.blog){
      return (
        <div>
          <input value ={this.props.blog.title} placeholder= "Title here" onChange ={this.handleTitleChange.bind(this)}/>
          
          <textarea value ={this.props.blog.body} placeholder= "Description here" onChange ={this.handleBodyChange.bind(this)}></textarea>
          <button>Delete Blog</button>
        </div>
      );
    
    }
    else if (this.props.selectedBlogId){
      return (
        <p>Note not Found</p>
      );
    
    }
    else {
      return (
        <p>Select or Create a BlogPost to get started</p>
      );
    }
    
  }

};




BlogEditor.propTypes ={
  blog: React.PropTypes.object,
  selectedBlogId: React.PropTypes.string
}



export default createContainer (()=>{
const selectedBlogId = Session.get('selectedBlogId');
return {
  selectedBlogId,
  blog: Blogs.findOne(selectedBlogId),
  call: Meteor.call
}


}, BlogEditor);