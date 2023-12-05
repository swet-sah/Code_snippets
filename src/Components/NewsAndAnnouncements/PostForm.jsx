import React, { useRef, useContext } from 'react';

import { NewsContext } from './NewsContext';

const PostForm = () => {
  const { handleNewPost } = useContext(NewsContext);
  const contentRef = useRef(null);
  const categoryRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      content: contentRef.current.value,
      categories: categoryRef.current.value,
    };
    handleNewPost(newPost);
    contentRef.current.value = '';
  };

  const categories = ['World', 'Business', 'Tech', 'Sport'];

  return (
    <div className="post-form">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category:
          </label>
          <select id="category" className="form-select" ref={categoryRef}>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content:
          </label>
          <input type="text" className="form-control" id="content" ref={contentRef} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PostForm;
