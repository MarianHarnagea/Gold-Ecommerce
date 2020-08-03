import React from "react";
import ProductsHeader from "../../components/headers/ProductsHeader";
import "./collection.scss";
import Product from "../../components/products-page-components/Product";
import { useSelector } from "react-redux";

const Accessories = () => {
  const headPhones = useSelector((state) => state.products.productsData);

  return (
    <div className="collection">
      <div className="products">
        <div className="row">
          <ProductsHeader
            BgClass={"headphones"}
            title={"headphones"}
            pTag={
              "Master & Dynamic headphones are not only beautiful : they use a noise-reducing technology that allow you to achieve ultimate focus. Comfortable and durable, they will become your everyday's partner."
            }
          />
          {headPhones.map((headPhone) => {
            if (headPhone.category === "headphones") {
              return (
                <Product
                  key={headPhone.id}
                  productName={headPhone.title}
                  productPrice={headPhone.price.toFixed(2)}
                  productImage={headPhone.imgs.img_1}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default Accessories;
