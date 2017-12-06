import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Link } from 'react-router';

const PrivateBeforeLoginHeader = (props) => {
  return (
    
    <div className="ui top attached menu">
        <div className="ui left aligned item">
        <h3 className="ui header blue">{props.title} </h3>
           
        </div>

        <div className="ui right aligned item">
            <Link to="/login" className="ui red basic button"> Login / Signup </Link>
           
        </div>
    </div>

  );
};

PrivateBeforeLoginHeader.propTypes = {
  title: React.PropTypes.string
};

export default PrivateBeforeLoginHeader;
