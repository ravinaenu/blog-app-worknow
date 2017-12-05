import React from 'react';
import PrivateHeader from './PrivateHeader';
import BlogList from './BlogList';


export default () => {
  return (
    <div>
      <PrivateHeader title="Dashboard"/>
      <div className="page-content">
       
       <BlogList/>

      </div>
    </div>
  );
};
