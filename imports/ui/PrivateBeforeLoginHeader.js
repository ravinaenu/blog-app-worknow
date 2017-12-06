import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Link } from 'react-router';

const PrivateBeforeLoginHeader = (props) => {
  return (
    <div className="header">
      <div className="header__content">
        <h1 className="header__title">{props.title}</h1>
        <Link to="/login"> Login/Signup </Link>
        {/*<button className="button button--link-text" onClick={() => browserHistory.replace('/login')}>Login/Signup</button> */}
      </div>
    </div>
  );
};

PrivateBeforeLoginHeader.propTypes = {
  title: React.PropTypes.string
};

export default PrivateBeforeLoginHeader;
