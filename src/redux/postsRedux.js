import shortid from "shortid";

//  selectors
export const getAllPost = state => state.posts;
export const getPostById = ({posts}, postId) =>  posts.find(post => post.id === postId);
export const getPostsByCategory = ({posts}, category) => posts.filter(post => post.category === category);

// actions
const createActionName = name => 'app/posts/' + name;
const DELETE_POST = createActionName('DELETE_POST');
const ADD_POST = createActionName('ADD_POST');
const EDIT_POST = createActionName('EDIT_POST');

// action creators
export const deletePost = payload => ({ payload, type: DELETE_POST });
export const addPost = payload => ({ payload, type: ADD_POST });
export const editPost = payload => ({ payload, type: EDIT_POST });

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [...state, {id: shortid() , ...action.payload}];
    case EDIT_POST:
      return state.map(post => post.id === action.payload.id ? { ...action.payload } : post)
    case DELETE_POST:
      return state.filter(post => post.id !== action.payload.postId);
    default:
      return state;
  };
};

export default postsReducer;