import React from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';

import PrivateBeforeLoginHeader from './PrivateBeforeLoginHeader';

const linkStyle = {
  color: 'purple',
  float: 'right',
  marginTop: '15px'
}
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      loader: false
    };
  }
  onSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();
    
    if (!email || !password) {
      return this.setState({error: 'Fields should not be blank', loader: false});
    }

    this.setState({error: '', loader: true});

    Meteor.loginWithPassword({email}, password, (err) => {
      if (err) {
        this.setState({error: 'Unable to login. Please check email and password.', loader: false});
      } else {
        this.setState({error: '', loader: false});
      }
    });
  }
  render() {
    return (
      <div>
        <PrivateBeforeLoginHeader title="My Blogs App" mainTitle="LOGIN" loginPage />
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
                <label>Email</label>
                <input type="email" ref="email" name="email" placeholder="Email - abc@xyz.com" />
              </div>
              <div className="field">
                <label>Password</label>
                <input type="password" ref="password" name="password" placeholder="Password" />
              </div>
              <div className="ui grid centered">
                <div className="six wide column field">
                  <button className="ui blue fluid basic button" type="submit"><i className="sign in icon"></i> Submit</button>
                </div>
              </div>
              
              <div className="field">
               
                  <Link to="/signup" style={linkStyle}>Don't have an account?</Link>
                
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
