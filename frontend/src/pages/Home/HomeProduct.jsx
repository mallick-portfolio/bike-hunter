import ProductCard from "../../components/Product/ProductCard.jsx";
import Loading from "../../components/Shared/Loading";
import Modal from "../../components/Shared/Modal.jsx";
import useData from "../../hooks/useData.js";
import { useSelector } from "react-redux";
const HomeProduct = () => {
  const data = useSelector((state) => state.modal);
  const url = "http://localhost:5000/products/home";
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
      {data.item && <Modal item={data.item} />}
    </div>
  );
};

export default HomeProduct;
