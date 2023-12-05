import React, { useContext } from 'react';
import Post from './Post';
import './NewsAnn.css';
import PostForm from './PostForm';
import Filter from './Filter';
import { NewsContext, NewsProvider } from './NewsContext';


const Feed = () => {
    
  const { posts, filteredPosts, handleNewPost, handleFilter } = useContext(NewsContext);

  const renderedPosts = filteredPosts.length === 0 ? posts : filteredPosts;

  return (
    <div className="feed">
      {renderedPosts.map((post, index) => (
        <Post key={index} content={post.content} categories={post.categories} />
      ))}
      <Filter onFilter={handleFilter} />
      <PostForm onSubmit={handleNewPost} />
    </div>
  );
};

export default Feed;
