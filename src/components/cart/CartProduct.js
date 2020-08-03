import React from "react";
import imgcart from "../../assets/img-cart.png";
import cartDeleteProduct from "../../assets/home-imgs/cart-x-icon.png";

const CartProduct = () => {
  return (
    <div className="cart-product">
      <div className="product-img">
        <img src={imgcart} alt="" />
      </div>
      <div className="product-name">
        {/* <h2>Master & Dynamic</h2> */}
        <h3>Boom Mic Silver</h3>
      </div>
      <div className="product-qty">
        <h4>3</h4>
      </div>
      <div className="product-price">
        <h3>$129.00</h3>
      </div>
      <div className="product-delete">
        <img src={cartDeleteProduct} alt="cartDeleteProduct" />
      </div>
    </div>
  );
};

export default CartProduct;
