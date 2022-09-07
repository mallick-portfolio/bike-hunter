import React, { useEffect, useState } from "react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import ProductCard from "../../components/Product/ProductCard.jsx";
import Loading from "../../components/Shared/Loading.jsx";
const LatestProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadProduct = async () => {
      const { data, status } = await axios.get(
        "http://localhost:5000/products"
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
    <div className="container pt-24 lg:pt-28 relative z-10">
      <div className="text-left pb-12">
        <h2 className="text-4xl font-semibold relative after:absolute after:h-1 after:right-0 after:bg-primary after:-bottom-2 after:left-0 inline-block before:absolute before:left-1/2 before:translate-x-1/2 before:-bottom-3 before:w-3 before:h-3 before:rotate-45 before:bg-primary">
          Latest Product
        </h2>
      </div>
      <div className="">
        <Swiper
          loop={true}
          autoplay={{ delay: 1000 }}
          slidesPerView={4}
          spaceBetween={30}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            769: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper relative"
        >
          {loading ? (
            <Loading />
          ) : (
            products?.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))
          )}
          <div className="w-24 flex mt-4">
            <IoIosArrowBack className="prev mx-auto mt-1 rounded-full w-8 h-8 border-2 border-primary text-primary cursor-pointer" />
            <IoIosArrowForward className="next mx-auto mt-1 rounded-full w-8 h-8 border-2 border-primary text-primary cursor-pointer" />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default LatestProduct;
