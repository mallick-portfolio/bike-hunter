import React from "react";
import bike1 from "../../assets/images/product/bike1.png";
const HomeProduct = () => {
  return (
    <div className="container pt-24 lg:pt-28">
      <div className="text-center">
        <h4 className="text-lg lg:text-xl">YOUR RIDE START HERE.</h4>
        <h2 className="text-4xl font-semibold">Best Seller</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="foods-product-item">
      <div className="product-img-div group">
        <img className="single-product-img " src={product?.images} alt="" />
        <div className="product-hover-content">
          <div className="product-hover-icon">
            <AiOutlineShoppingCart />
          </div>
          <div className="product-hover-icon">
            <AiOutlineEye />
          </div>
          <div className="product-hover-icon">
            <AiOutlineHeart />
          </div>
        </div>
      </div>
      <div className="product-content">
        <h3 className="single-product-title">{product?.title}</h3>
        <StarRatting rating={product?.avgRatting} />
        <div className="price-btn-flex">
          <p className="card-price">${product?.price}</p>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default HomeProduct;
