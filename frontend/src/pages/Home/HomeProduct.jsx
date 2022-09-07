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
    <div className="homeProduct-container">
      <div className="text-center pb-12">
        <h4 className="text-lg lg:text-xl">YOUR RIDE START HERE.</h4>
        <h2 className="homeProduct-title">
          Best <span className="text-primary">Seller</span>
        </h2>
      </div>
      <div className="homeProduct-grid">
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
