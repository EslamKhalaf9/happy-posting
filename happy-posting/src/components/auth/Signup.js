import React, { Component } from 'react';

class Signup extends Component {
  state = {
    username: '',
    email: '',
    password: '',
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
        <h1 className="text-4xl">Signup</h1>
        <form className="my-2 flex flex-col" onSubmit={this.handleSubmit}>
          <input
            className="border border-gray-400 text-xl p-3 my-2"
            id="username"
            type="text"
            placeholder="Username "
            onChange={this.handleChange}
          />
          <input
            className="border border-gray-400 text-xl p-3 my-2"
            id="email"
            type="text"
            placeholder="Email "
            onChange={this.handleChange}
          />
          <input
            className="border border-gray-400 text-xl p-3 my-2"
            id="password"
            type="password"
            placeholder="Password "
            onChange={this.handleChange}
          />
          <button
            className="text-2xl p-3 bg-green-500 my-2 text-white"
            type="submit"
          >
            Signup
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
