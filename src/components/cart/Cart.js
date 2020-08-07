import React from "react";
import "./cart.scss";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";

// redux
import { useSelector } from "react-redux";
import { removeProduct } from "../../store/actions/productsActions";

const Cart = ({ cart }) => {
  const stateCart = useSelector((state) => state.products.cart);
  const totalPrice = useSelector((state) => state.products.totalPrice);
  return (
    <div className={cart ? "cart-container open-cart" : "cart-container"}>
      <div className="inner-container">
        <div className="cart-products-container">
          {stateCart.map((product) => {
            return (
              <CartProduct
                key={product.id}
                product={product}
                removeProduct={removeProduct}
              />
            );
          })}
        </div>

        <div className="cart-checkout-container">
          <div className="total">
            <h3>Total:</h3>
            <h4>$ {totalPrice.toFixed(2)}</h4>
          </div>
          <div className="checkout py-3">
            <button>
              <Link to="/">Checkout</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
