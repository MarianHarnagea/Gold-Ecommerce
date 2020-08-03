import React from "react";
import "./collection.scss";
import Header from "../../components/headers/Header";
import Product from "../../components/products-page-components/Product";
import { useSelector } from "react-redux";

const AllProducts = () => {
  const products = useSelector((state) => state.products.productsData);

  return (
    <div className="collection">
      <Header title="Products" />

      <div className="products">
        <div className="row">
          {products.map((product) => {
            // console.log(product.imgs.img_1);
            return (
              <Product
                key={product.id}
                productName={product.title}
                productPrice={product.price.toFixed(2)}
                productImage={product.imgs.img_1}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
