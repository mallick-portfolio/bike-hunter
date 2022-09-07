import React from "react";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import StarRatting from "../Shared/StarRating.jsx";
import bike1 from "../../assets/images/product/bike1.png";

const ProductCard = () => {
  return (
    <div className="products-item">
      <div className="product-img-div group">
        <img className="single-product-img " src={bike1} alt="" />
        <div className="product-hover-content">
          <div className="product-hover-icon">
            <AiOutlineEye className="text-xl" />
          </div>
          <div className="product-hover-icon">
            <AiOutlineHeart className="text-xl" />
          </div>
        </div>
      </div>
      <div className="product-content">
        <h3 className="single-product-title">Black Rear Tailgate Door</h3>
        <StarRatting rating={5} />
        <div className="price-btn-flex">
          <p className="card-price">$50</p>
          <button className="common-btn2">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
