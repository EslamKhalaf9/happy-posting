import React from 'react';

const PostSummary = () => {
  return (
    <div className="post-summary bg-white p-4 border rounded shadow my-8 text-gray-800">
      <h2 className="post-title text-2xl font-bold">
        React authentication with firebase
      </h2>
      <p className="author text-sm m-2">Written By: Eslam Khalaf, 2/5/2020</p>
      <p className="summary text-xl p-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        maxime ut accusantium, aliquid recusandae fuga.
      </p>
    </div>
  );
};

export default PostSummary;
