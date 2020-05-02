import React, { Component } from 'react';

class CreatePost extends Component {
  state = {
    title: '',
    body: '',
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="login md:w-1/2 mx-auto mt-20 p-4">
        <h1 className="text-4xl">Create Post</h1>
        <form className="my-2 flex flex-col" onSubmit={this.handleSubmit}>
          <input
            className="border border-gray-400 text-xl p-3 my-2"
            id="title"
            type="text"
            placeholder="Post Title"
            onChange={this.handleChange}
          />
          <textarea
            id="body"
            cols="30"
            className="border border-gray-400 text-xl p-3 my-2"
            placeholder="Post Body"
          ></textarea>
          <button
            className="text-2xl p-3 bg-green-500 my-2 text-white"
            type="submit"
          >
            Create Post
          </button>
        </form>
      </div>
    );
  }
}

export default CreatePost;
