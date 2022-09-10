import ProductCard from "../../components/Product/ProductCard.jsx";
import Loading from "../../components/Shared/Loading";
import useData from "../../hooks/useData.js";
const HomeProduct = () => {
  const url = "https://bike-hunter-mallick-portfolio.vercel.app/products/home";
  const { loading, data: products } = useData(url);
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
