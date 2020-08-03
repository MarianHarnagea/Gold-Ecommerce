import React from "react";
import ProductsHeader from "../../components/headers/ProductsHeader";
import "./collection.scss";
import Product from "../../components/products-page-components/Product";
import { useSelector } from "react-redux";

const Accessories = () => {
  const accessories = useSelector((state) => state.products.productsData);
  return (
    <div className="collection">
      <div className="products">
        <div className="row">
          <ProductsHeader
            BgClass={"accessories"}
            title={"Accessories"}
            pTag={
              "Discover a large range of accessories for your headphones  Designed for durability, you will enjoy their look and quality."
            }
          />

          {accessories.map((accesory) => {
            if (accesory.category === "accessories") {
              return (
                <Product
                  key={accesory.id}
                  productName={accesory.title}
                  productPrice={accesory.price.toFixed(2)}
                  productImage={accesory.imgs.img_1}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Accessories;
