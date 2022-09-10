import ProductCard from "../../components/Product/ProductCard.jsx";
import Loading from "../../components/Shared/Loading.jsx";
import useData from "../../hooks/useData.js";
const AllProduct = () => {
  const url = "https://bike-hunter-mallick-portfolio.vercel.app/products";
  const { loading, data: products } = useData(url);
  return (
    <div className="homeProduct-container">
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

export default AllProduct;
