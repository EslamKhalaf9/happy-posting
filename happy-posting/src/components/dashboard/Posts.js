import React, { Component } from 'react';
import PostList from '../post/PostList';

class Posts extends Component {
  render() {
    return (
      <div className="m-5 md:w-2/3 mx-auto">
        <h1 className="text-5xl my-4">Posts</h1>
        <PostList />
      </div>
    );
  }
}

export default Posts;
