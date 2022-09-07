import { useEffect, useState } from "react";
import axios from "axios";
const useData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadProduct = async () => {
      const { data, status } = await axios.get(url);
      if (status === 200) {
        setData(data.data);
        setLoading(false);
      } else {
        setData(data.data);
        setLoading(true);
      }
    };
    loadProduct();
  }, [url]);
  return { loading, data };
};

export default useData;
