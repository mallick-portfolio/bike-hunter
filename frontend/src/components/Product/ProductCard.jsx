import React from "react";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import StarRatting from "../Shared/StarRating.jsx";

const ProductCard = ({ product }) => {
  return (
    <div className="products-item">
      <div className="product-img-div group">
        <img className="w-2/3 mx-auto py-2" src={product?.image} alt="" />
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
        <h3 className="single-product-title">{product?.name}</h3>
        <StarRatting rating={5} />
        <div className="price-btn-flex">
          <p className="card-price">${product?.price}</p>
          <button className="common-btn2">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
