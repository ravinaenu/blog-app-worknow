import React from 'react';
import PrivateHeader from './PrivateHeader';
import BlogList from './BlogList';
import BlogEditor from './BlogEditor';
import BlogListHeader from './BlogListHeader';

export default () => {
  return (
    <div>
      <PrivateHeader title="My Blogs App" mainTitle="MY BLOGS" />
      <div className="page-content">
      <BlogListHeader />

      <div className="ui grid">
        <div className="nine wide column">
          <div className="ui grid centered">
            <div className="fourteen wide column">
              <BlogList />
            </div>
          </div>
       
        </div>
        <div className="seven wide column">
          <div className="ui grid centered">
            <div className="fourteen wide column">
              <BlogEditor />
            </div>
          </div>
        
        </div>
      </div>
       
       
      

      </div>
    </div>
  );
};
