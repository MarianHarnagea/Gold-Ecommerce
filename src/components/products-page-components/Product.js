import React from "react";
import "./product.scss";
import { Link } from "react-router-dom";

const Product = ({ productName, productPrice, productImage }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-3 product-container">
      <Link to={`/collection/product/${productName}`}>
        <div className="product">
          <img
            src={require(`../../assets/products-imgs/${productImage}`)}
            alt="MW65b"
          />
          <div className="product-text">
            <p>master & dynamix</p>
            <h3>{productName}</h3>
            <h4>${productPrice}</h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
