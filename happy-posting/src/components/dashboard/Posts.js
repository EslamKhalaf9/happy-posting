import React, { Component } from 'react';
import PostList from '../post/PostList';
import { connect } from 'react-redux';

class Posts extends Component {
  render() {
    const posts = this.props.posts;
    return (
      <div className="m-5 md:w-2/3 mx-auto">
        <h1 className="text-5xl my-4">Posts</h1>
        <PostList posts={posts} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.post.posts,
  };
}

export default connect(mapStateToProps)(Posts);
