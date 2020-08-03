import React from "react";
import { useSelector } from "react-redux";
import minus from "../../assets/product-details/minus.png";
import add from "../../assets/product-details/add.png";

import "./collection.scss";

const ProductDetails = ({ match }) => {
  const products = useSelector((state) => state.products.productsData);

  const filteredProduct = products.filter(
    (product) => product.title === match.params.title
  );

  //   console.log(filteredProduct[0].info.description);

  return (
    <div className="collection pb-5">
      <div className="product-details">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="product-meta d-md-none text-center">
              <p>Master & Dynamic</p>
              <h1>{filteredProduct[0].title}</h1>
              <h2>$ {filteredProduct[0].price.toFixed(2)}</h2>
            </div>
            <div className="product-image py-3">
              <img
                src={require(`../../assets/products-imgs/${filteredProduct[0].imgs.img_1}`)}
                alt="MW65b"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="product-meta d-none d-md-flex flex-column">
              <p>Master & Dynamic</p>
              <h1>{filteredProduct[0].title}</h1>
              <h2>${filteredProduct[0].price}</h2>
            </div>

            <div className="quantity-container">
              <p>Quantity</p>
              <button>
                <img src={minus} alt="minus" />
              </button>
              <h4>1</h4>
              <button>
                <img src={add} alt="add" />
              </button>
            </div>

            <div className="add-to-cart-btn">
              <button>add to cart</button>
            </div>

            <div className="description-container">
              <h3>{filteredProduct[0].info.description_title}</h3>
              <h3>{filteredProduct[0].info.description}</h3>
            </div>

            <div className="share-container">
              <p>share</p>
            </div>

            <div className="product-tabs mt-5">
              <div className="tabs">
                <p className="active-tab">reviews</p>
                <p className="">returns</p>
                <p className="">shipping</p>
              </div>

              <div className="tab-content tab-content-active">
                <div className="tab-reviews tab tab-active">
                  <p>No reviews yes</p>
                  <button>write a review</button>
                </div>
                <div className="tab-shipping tab  ">
                  <h3 className="text-lead">
                    Business days are Monday-Friday ; Holidays, Saturday and
                    Sunday are not included in shipping days.
                  </h3>
                  <h3>
                    <span>Express shipping : </span>Delivery typically in one to
                    five business days.
                  </h3>
                  <h3>
                    <span>Standard shipping : </span>Delivery by the end of the
                    third business day after an order has shipped. For example,
                    if an order is placed Tuesday night and is processed/shipped
                    on Wednesday, it would arrive on Monday of the following
                    week.
                  </h3>
                </div>
                <div className="tab-returns tab ">
                  <h3>
                    Our policy lasts 30 days. If 30 days have gone by since your
                    purchase, unfortunately we can’t offer you a refund or
                    exchange.
                  </h3>
                  <h3>
                    To be eligible for a return, your item must be unused and in
                    the same condition that you received it. It must also be in
                    the original packaging.
                  </h3>
                  <h3>
                    Several types of goods are exempt from being returned.
                    Perishable goods such as food, flowers, newspapers or
                    magazines cannot be returned. We also do not accept products
                    that are intimate or sanitary goods, hazardous materials, or
                    flammable liquids or gases.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="specs-container py-4 px-3 px-lg-0 mt-3">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 py-3 text-center">
            <h4>Battery life</h4>
            <h5>
              Rechargeable Li-ion battery for your SoundDock Portable digital
              music system. Provides 16 hours of uninterrupted playing time.
            </h5>
          </div>
          <div className="col-12 col-md-6 col-lg-4 py-3 text-center">
            <h4>Premium materials</h4>
            <h5>
              We are using grain leather on headband exterior surface and ear
              cup accents, soft lambskin on headband interior and ear pads.
            </h5>
          </div>
          <div className="col-12 col-lg-4 py-3 text-center">
            <h4>Complete package</h4>
            <h5>
              All our headphones are sold with a canvas headphone pouch, 1.25m
              standard cable, micro-USB, leather cable box and charging cable.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
