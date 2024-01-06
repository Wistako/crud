//  selectors
export const getAllPost = state => state.posts;
export const getPostById = ({posts}, postId) =>  posts.find(post => post.id === postId);

// actions
const createActionName = name => 'app/posts/' + name;
const DELETE_POST = createActionName('DELETE_POST');
const ADD_POST = createActionName('ADD_POST');

// action creators
export const deletePost = payload => ({ payload, type: DELETE_POST });
export const addPost = payload => ({ payload, type: ADD_POST });

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [...state, action.payload];
    case DELETE_POST:
      return state.filter(post => post.id !== action.payload.postId);
    default:
      return state;
  };
};

export default postsReducer;