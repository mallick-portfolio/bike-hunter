import React from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import ReviewCard from "./ReviewCard.jsx";
import useData from "../../hooks/useData.js";
import Loading from "../Shared/Loading.jsx";

const Reviews = () => {
  const url = "http://localhost:5000/reviews";
  const { loading, data: reviews } = useData(url);

  return (
    <section className="container lg:py-12">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // when window width is >= 320px
          100: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          769: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 70,
          },
        }}
        centeredSlides={true}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {loading ? (
          <Loading />
        ) : (
          reviews?.map((review) => (
            <SwiperSlide key={review._id}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </section>
  );
};

export default Reviews;
