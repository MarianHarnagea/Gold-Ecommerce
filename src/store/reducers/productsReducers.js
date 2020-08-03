import productsData from "../productsData";

const initState = {
  productsData,
  cart: [],
};

const productsReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
