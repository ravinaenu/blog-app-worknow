import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Link } from 'react-router';

const headerCenterTextStyle = {
  marginTop: '12px'
};
const PrivateBeforeLoginHeader = (props) => {
  return (
    
    <div className="ui top attached menu">
        <div className="ui left aligned item">
        <h3 className="ui header blue"> <Link to="/"> {props.title} </Link> </h3>
           
        </div>

        {props.mainTitle && 
        <div className="ui center " style={headerCenterTextStyle}>
         
            <h2 className="ui header black" > {props.mainTitle} </h2>
           
        </div>
        }

        <div className="ui right aligned item">
            { (props.loginPage) 
              ? <Link to="/signup" className="ui red basic button">  Signup </Link>

              : (props.signupPage)
              ?  <Link to="/login" className="ui red basic button"> Login </Link>

              : <Link to="/login" className="ui red basic button"> Login / Signup </Link>
            }
        </div>
    </div>

  );
};

PrivateBeforeLoginHeader.propTypes = {
  title: React.PropTypes.string,
  mainTitle: React.PropTypes.string
};

export default PrivateBeforeLoginHeader;
