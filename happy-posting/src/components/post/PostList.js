import React, { Component } from 'react';
import PostSummary from './PostSummary';

class PostList extends Component {
  render() {
    return (
      <div className="post-list">
        <PostSummary />
        <PostSummary />
        <PostSummary />
        <PostSummary />
      </div>
    );
  }
}

export default PostList;
