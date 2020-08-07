export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const ADD_QUANTITY = "ADD_QUANTITY";
export const REMOVE_QUANTITY = "REMOVE_QUANTITY";

export const addQuantity = () => {
  return {
    type: "ADD_QUANTITY",
  };
};
export const removeQuantity = () => {
  return {
    type: "REMOVE_QUANTITY",
  };
};

export const addProduct = (product) => {
  return {
    type: "ADD_PRODUCT",
    payload: product,
  };
};

export const removeProduct = (product) => {
  return {
    type: "REMOVE_PRODUCT",
    payload: product,
  };
};
