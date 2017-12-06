import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Session} from 'meteor/session';
import {Blogs} from '../api/blogs';
import {Meteor} from 'meteor/meteor';
import { Router, browserHistory } from 'react-router';

export class BlogEditor extends React.Component{
 constructor(props){
   super(props);

   this.state = {
     title: '',
     body: ''
   };
 }



handleBodyChange(e){
  const body =e.target.value;
  this.setState({body})
  this.props.call('blogs.update',this.props.blog._id, {body});
}

handleTitleChange(e){
  const title = e.target.value;
  this.setState({title})
  this.props.call('blogs.update',this.props.blog._id, {title});

}

deletehandler (){
  this.props.call('blogs.remove', this.props.blog._id);
  this.props.browserHistory.push('/dashboard');
}
componentDidUpdate(prevProps, prevState) {
  const currentBlogId = this.props.blog ? this.props.blog._id : undefined;
  const prevBlogId = prevProps.blog ? prevProps.blog._id : undefined;

  if(currentBlogId && currentBlogId !== prevBlogId){
    this.setState({
      title: this.props.blog.title,
      body: this.props.blog.body
    });
  }
}
  render(){

    if (this.props.blog){
      return (
        <div>
          <input value ={this.state.title} placeholder= "Title here" onChange ={this.handleTitleChange.bind(this)}/>
          
          <textarea value ={this.state.body} placeholder= "Description here" onChange ={this.handleBodyChange.bind(this)}></textarea>
          <button onClick = {this.deletehandler.bind(this)}>Delete Blog</button>
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
  selectedBlogId: React.PropTypes.string,
  browserHistory: React.PropTypes.object.isRequired,
  call: React.PropTypes.func.isRequired
}



export default createContainer (()=>{
const selectedBlogId = Session.get('selectedBlogId');
return {
  selectedBlogId,
  blog: Blogs.findOne(selectedBlogId),
  call: Meteor.call,
  browserHistory
}


}, BlogEditor);