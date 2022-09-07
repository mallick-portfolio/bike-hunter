import React, { useState, useEffect } from "react";
import ProductCard from "../../components/Product/ProductCard.jsx";
import axios from "axios";
import Loading from "../../components/Shared/Loading";
const HomeProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadProduct = async () => {
      const { data, status } = await axios.get(
        "http://localhost:5000/products/home"
      );
      if (status === 200) {
        setProducts(data.data);
        setLoading(false);
      } else {
        setProducts(data.data);
        setLoading(true);
      }
    };
    loadProduct();
  }, []);
  return (
    <div className="container pt-24 lg:pt-28">
      <div className="text-center">
        <h4 className="text-lg lg:text-xl">YOUR RIDE START HERE.</h4>
        <h2 className="text-4xl font-semibold">Best Seller</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-8">
        {loading ? (
          <Loading />
        ) : (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default HomeProduct;
