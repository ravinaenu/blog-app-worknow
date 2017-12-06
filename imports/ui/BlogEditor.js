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
  const body = e.target.value;
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
        <div className="ui grid centered">
          <div className="fourteen wide column">
          <br />  
          <div className="ui raised segment">
            <form className="ui form">
             
              {this.state.error ?
                <div className="ui error message">
                  <div className="header">Error</div>
                  <p>{this.state.error}</p>
                </div>
                : undefined
              }
  
                <div className="field">
                  <label>Title</label>
                  <input value ={this.state.title} placeholder= "Title here" onChange ={this.handleTitleChange.bind(this)} />
                </div>
                <div className="field">
                  <label>Description</label>
                  <textarea value ={this.state.body} placeholder= "Description here" onChange ={this.handleBodyChange.bind(this)}></textarea>
                </div>
                <div className="ui grid centered">
                  <div className="eight wide column field">
                    <button className="ui red fluid basic button" onClick={this.deletehandler.bind(this)} ><i className="remove circle icon"></i> Delete Blog </button>
                  </div>
                </div>
                               
              </form>
            </div>
          </div>
         
        </div>
        

      );
    
    }
    else if (this.props.selectedBlogId) {
      return (
        <div className="ui grid centered">
        
          <div className="thirteen wide column">
            <br />
          <div className="ui inverted red segment">
            <p> Blog Not Found</p>
         
          </div> 
         </div> 
        </div>
      );
    
    }
    else {
      return (
        <div className="ui grid centered">
        
          <div className="fourteen wide column">
            <br />
            <div className="ui orange segment">
              <p className="ui yellow header"> Select or Create a blog post to get started <i className="smile icon orange"></i> </p>
            </div>
            
           </div>
         
        </div>
        
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