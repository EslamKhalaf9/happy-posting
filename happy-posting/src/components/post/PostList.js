import React from 'react';
import PostSummary from './PostSummary';

const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      {posts && posts.map((post) => <PostSummary key={post.id} post={post} />)}
    </div>
  );
};

export default PostList;
