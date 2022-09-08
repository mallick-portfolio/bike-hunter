import { useEffect, useState } from "react";
import axios from "axios";
const useData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      const { data, status } = await axios.get(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      if (status === 200) {
        setData(data.data);
        setLoading(false);
      } else {
        setLoading(true);
      }
    };
    loadProduct();
  }, [url]);
  return { loading, data };
};

export default useData;
