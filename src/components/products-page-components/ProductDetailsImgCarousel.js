import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const ProductDetailsImgCarousel = ({ img_1, img_2, img_3, img_4 }) => {
  return (
    <AliceCarousel mouseTrackingEnabled>
      {img_1 ? (
        <img src={require(`../../assets/products-imgs/${img_1}`)} alt={img_1} />
      ) : null}
      {img_2 ? (
        <img src={require(`../../assets/products-imgs/${img_2}`)} alt={img_2} />
      ) : null}
      {img_3 ? (
        <img src={require(`../../assets/products-imgs/${img_3}`)} alt={img_3} />
      ) : null}
      {img_4 ? (
        <img src={require(`../../assets/products-imgs/${img_4}`)} alt={img_4} />
      ) : null}
    </AliceCarousel>
  );
};

export default ProductDetailsImgCarousel;
