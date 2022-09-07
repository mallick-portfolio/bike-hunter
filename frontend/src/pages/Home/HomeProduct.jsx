import React from "react";
import ProductCard from "../../components/Product/ProductCard.jsx";
const HomeProduct = () => {
  return (
    <div className="container pt-24 lg:pt-28">
      <div className="text-center">
        <h4 className="text-lg lg:text-xl">YOUR RIDE START HERE.</h4>
        <h2 className="text-4xl font-semibold">Best Seller</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-8">
        <ProductCard />
        
      </div>
    </div>
  );
};

export default HomeProduct;
