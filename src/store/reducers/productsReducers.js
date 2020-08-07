import productsData from "../productsData";
import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  ADD_QUANTITY,
  REMOVE_QUANTITY,
} from "../actions/productsActions";

const initState = {
  productsData,
  cart: [],
  quantity: 1,
  totalPrice: 0,
};

const productsReducer = (state = initState, action) => {
  let newCart;
  let indexProduct;
  let productPrice;
  let totalPrices = [];

  switch (action.type) {
    case ADD_QUANTITY:
      state.quantity++;

      return {
        ...state,
      };
    case REMOVE_QUANTITY:
      if (state.quantity > 1) {
        state.quantity--;
      }

      return {
        ...state,
      };

    case ADD_PRODUCT:
      newCart = [...state.cart];
      indexProduct = newCart.findIndex(
        (product) => product.id === action.payload.id
      );

      if (indexProduct < 0) {
        newCart.push({ ...action.payload, quantity: state.quantity });
      } else {
        const updatedProduct = {
          ...newCart[indexProduct],
        };

        updatedProduct.quantity += state.quantity;
        productPrice = action.payload.price * updatedProduct.quantity;

        updatedProduct.price = productPrice;

        newCart[indexProduct] = updatedProduct;
      }

      newCart.map((product) => {
        return totalPrices.push(product.price);
      });

      const totalSum = totalPrices.reduce(
        (totalSum, current) => totalSum + current,
        0
      );

      return {
        ...state,
        cart: newCart,
        quantity: 1,
        totalPrice: totalSum,
      };

    case REMOVE_PRODUCT:
      newCart = [...state.cart];
      const products = [...state.productsData];
      indexProduct = newCart.findIndex(
        (product) => product.id === action.payload.id
      );

      let initPrice = products.filter(
        (product) => product.id === action.payload.id
      );

      const updatedProduct = {
        ...newCart[indexProduct],
      };
      updatedProduct.quantity--;
      productPrice = updatedProduct.price - initPrice[0].price;
      updatedProduct.price = productPrice;

      if (updatedProduct.quantity <= 0) {
        newCart.splice(newCart[indexProduct], 1);
      } else {
        newCart[indexProduct] = updatedProduct;
      }

      let updatedPrice = state.totalPrice - initPrice[0].price;

      console.log(updatedPrice);

      return {
        ...state,
        cart: newCart,
        totalPrice: updatedPrice,
      };

    default:
      return state;
  }
};

export default productsReducer;
