import React from 'react';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';

import {avatar } from '../client/constant/avatar';

import PrivateBeforeLoginHeader from './PrivateBeforeLoginHeader';
const linkStyle = {
  color: 'purple',
  float: 'right',
  marginTop: '15px'
}



export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      loader: false
    };
  }
  onSubmit(e) {
    e.preventDefault();

    let username = this.refs.username.value.trim();
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    // if (!username) {
    //   return this.setState({error: 'Must enter a valid username and email'});
    // }

    if (!username || !email || !password) {
      return this.setState({error: 'Fields should not be blank', loader: false});
    }

    if (password.length < 9) {
      return this.setState({error: 'Password must be more than 8 characters long', loader: false});
    }
    this.setState({error: '', loader: true});

    let avatarNum = Math.floor((Math.random() * 15));
    let avatarName = avatar[avatarNum].name;
    let avatarColor = avatar[avatarNum].color;
    
    Accounts.createUser({email, password, username, profile: {avatarName, avatarColor}}, (err) => {
      if (err) {
        this.setState({error: err.reason, loader: false});
      } else {
        this.setState({error: '', loader: false});
      }
    });
  }
  render() {
   
    return (
      <div>
      <PrivateBeforeLoginHeader title="My Blogs App" mainTitle="SIGNUP" signupPage />
      <br />
      
      <div className="ui grid centered">
    
      <div className="twelve wide column">
      <br />  
      <div className="ui raised segment">
        <form className={"ui form error " + (this.state.loader ? 'loading' : '')} onSubmit={this.onSubmit.bind(this)} noValidate >
         
          {this.state.error ?
            <div className="ui error message">
              <div className="header">Error</div>
              <p>{this.state.error}</p>
            </div>
            : undefined
          }
             <div className="field">
              <label>User Name</label>
              <input type="text" ref="username" name="username" placeholder="Username123" />
            </div>
            <div className="field">
              <label>Email</label>
              <input type="email" ref="email" name="email" placeholder="Email - abc@xyz.com" />
            </div>
            <div className="field">
              <label>Password</label>
              <input type="password" ref="password" name="password" placeholder="Password" />
            </div>
            <div className="ui grid centered">
              <div className="six wide column field">
                <button className="ui blue fluid basic button" type="submit"><i className="add user icon"></i> Create Account</button>
              </div>
            </div>
            
            <div className="field">
             
                <Link to="/login" style={linkStyle}>Already have an account?</Link>
              
            </div>
            <br />
            
          </form>
        </div>
      </div>
     
    </div>
    </div>
  
    );
  }
}
