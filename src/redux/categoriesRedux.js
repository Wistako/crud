
// selectors
export const getAllCategories = state => state.categories;
export const getCategoryByName = ({categories}, name) => categories.find(category => category.name === name);
// action
// const createActionName = name => `app/categories/${name}`;

// action creators

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  };
};

export default categoriesReducer;