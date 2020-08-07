import React from "react";
import cartDeleteProduct from "../../assets/home-imgs/cart-x-icon.png";

import { useDispatch } from "react-redux";
import { removeProduct } from "../../store/actions/productsActions";

const CartProduct = (props) => {
  let { title, price, quantity, imgs } = props.product;

  const dispatch = useDispatch();

  return (
    <div className="cart-product">
      <div className="row">
        <div className="col-2">
          <div className="product-img">
            {/* <img src={imgcart} alt="" /> */}
            <img
              src={require(`../../assets/products-imgs/${imgs.img_1}`)}
              alt={imgs.img_1}
            />
          </div>
        </div>
        <div className="col-5">
          <div className="product-name">
            {/* <h2>Master & Dynamic</h2> */}
            <h3>{title}</h3>
          </div>
        </div>
        <div className="col-1">
          <div className="product-qty">
            <h4>{quantity}</h4>
          </div>
        </div>
        <div className="col-2">
          <div className="product-price">
            <h3>$ {price}</h3>
          </div>
        </div>
        <div className="col-2">
          <div className="product-delete">
            <img
              src={cartDeleteProduct}
              alt="cartDeleteProduct"
              onClick={() => dispatch(removeProduct(props.product))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
