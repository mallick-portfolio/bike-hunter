import { useEffect, useState } from "react";
import axios from "axios";
const useReview = () => {
  const [reviews, setReview] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadProduct = async () => {
      const { data, status } = await axios.get("http://localhost:5000/reviews");
      if (status === 200) {
        setReview(data.data);
        setLoading(false);
      } else {
        setReview(data.data);
        setLoading(true);
      }
    };
    loadProduct();
  }, []);
  return [loading, reviews];
};

export default useReview;
