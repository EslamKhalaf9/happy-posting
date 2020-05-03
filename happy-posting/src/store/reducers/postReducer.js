const initState = {
  posts: [
    {
      id: 1,
      title: 'Clean Code',
      body: 'hey how ar you an your family i hope you are fine',
    },
    {
      id: 2,
      title: 'Asynchronous javascript',
      body: 'hey how ar you an your family i hope you are fine',
    },
    {
      id: 3,
      title: 'React the easiest way',
      body: 'hey how ar you an your family i hope you are fine',
    },
  ],
};

const postReducer = (state = initState, action) => {
  return state;
};

export default postReducer;
