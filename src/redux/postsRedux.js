//  selectors
export const getAllPost = state => state.posts;
// actions
const createActionName = name => 'app/posts/' + name;

// action creators

const postsReducer = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  };
};

export default postsReducer;