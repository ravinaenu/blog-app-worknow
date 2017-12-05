import React from 'react';
import moment from 'moment';

const BlogListItem = (props) => {

   return (
    <div>
      <h5>{props.blog.title || 'Untitled Blog'}</h5>
      <p>{moment(props.blog.updatedAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
    </div>
  );

};

BlogListItem.propTypes = {

  blog: React.PropTypes.object.isRequired
};

export default BlogListItem;