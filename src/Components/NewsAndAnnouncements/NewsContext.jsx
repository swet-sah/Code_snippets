import React, { createContext, useState, useEffect } from 'react';

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
    const [posts, setPosts] = useState(() => {
        const storedPosts = localStorage.getItem('post');
        return storedPosts ? JSON.parse(storedPosts) : [];
    });
    const [filteredPosts, setFilteredPosts] = useState([]);


    const handleNewPost = (post) => {
        if (post.content !== '') setPosts([...posts, post]);
    };
    const handleFilter = (filter) => {
        const filtered = posts.filter(
            (post) =>
                post.categories.toUpperCase().includes(filter.toUpperCase()) ||
                post.content.toUpperCase().includes(filter.toUpperCase())
        );
        if (filter !== '') setFilteredPosts(filtered);
        else{
            setFilteredPosts('')
        }

    };
    

    useEffect(() => {
        localStorage.setItem('post', JSON.stringify(posts));
    }, [posts]);

    const contextValue = {
        posts,
        filteredPosts,
        handleNewPost,
        handleFilter,
    };

    return <NewsContext.Provider value={contextValue}>{children}</NewsContext.Provider>;
};
