import React from 'react';

const Post = (props) => {
  return (
    <div className="post mb-3">
      <span className="badge bg-primary mx-3">{props.categories}</span>
      <span>{props.content}</span>
    </div>
  );
};

export default Post;
