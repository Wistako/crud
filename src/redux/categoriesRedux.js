import shortid from "shortid";

// selectors
export const getAllCategories = state => state.categories;
// action
const createActionName = name => `app/categories/${name}`;

// action creators

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  };
};

export default categoriesReducer;