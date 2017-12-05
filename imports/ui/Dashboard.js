import React from 'react';
import PrivateHeader from './PrivateHeader';
import BlogList from './BlogList';
import BlogEditor from './BlogEditor';


export default () => {
  return (
    <div>
      <PrivateHeader title="Dashboard"/>
      <div className="page-content">
       
       <BlogList/>
       <BlogEditor />

      </div>
    </div>
  );
};
