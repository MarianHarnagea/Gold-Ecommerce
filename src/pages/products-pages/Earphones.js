import React from "react";
import ProductsHeader from "../../components/headers/ProductsHeader";
import "./collection.scss";
import Product from "../../components/products-page-components/Product";
import { useSelector } from "react-redux";

const Accessories = () => {
  const earphones = useSelector((state) => state.products.productsData);

  return (
    <div className="collection">
      <div className="products">
        <div className="row">
          <ProductsHeader
            BgClass={"earphones"}
            title={"earphones"}
            pTag={
              "Designed for decades of use. Master & Dynamic earphones use only the finest materials to ensure durability and rich audio quality. Earphones are precision-machined from palladium-coated solid brass and kitted with 8mm neodymium high-performance drivers that deliver a warm, detailed sound profile."
            }
          />

          {earphones.map((earphone) => {
            if (earphone.category === "earphones") {
              return (
                <Product
                  key={earphone.id}
                  productName={earphone.title}
                  productPrice={earphone.price.toFixed(2)}
                  productImage={earphone.imgs.img_1}
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
