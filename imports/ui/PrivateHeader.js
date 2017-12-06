import React from 'react';
import { Accounts } from 'meteor/accounts-base';
const headerCenterTextStyle = {
  marginTop: '12px'
};

const PrivateHeader = (props) => {
  return (
    <div className="ui top attached menu">
    <div className="ui left aligned item">
    <h3 className="ui header blue">{props.title} </h3>
       
    </div>

    {props.mainTitle && 
    <div className="ui center " style={headerCenterTextStyle}>
     
        <h2 className="ui header black" > {props.mainTitle} </h2>
       
    </div>
    }

    <div className="ui right aligned item">
       <button className="ui purple basic button" onClick={() => Accounts.logout()}>Logout</button>
    </div>
  </div>

  );
};

PrivateHeader.propTypes = {
  title: React.PropTypes.string.isRequired,
  mainTitle: React.PropTypes.string
};

export default PrivateHeader;
