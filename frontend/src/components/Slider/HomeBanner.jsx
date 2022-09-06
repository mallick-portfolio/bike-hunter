import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png";
import banner3 from "../../assets/images/banner3.jpg";
import banner4 from "../../assets/images/banner4.jpg";

const HomeBanner = () => {
  return (
    <div className="relative">
      <Swiper
        autoplay={{ delay: 5000 }}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        loop={true}
        pagination={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="relative after:absolute after:left-0 after:top-0 after:bottom-0 z-10 after:right-0 after:bg-menu"
            style={{
              background: `url(${banner3})`,
              backgroundSize: "cover",
              padding: "80px 0",
            }}
          >
            <div className="container relative z-20 flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-1/2 px-8 text-white">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                  Driving a <br />{" "}
                  <span className="text-primary">Motorcycle</span> is like
                  flying
                </h1>
                <h5 className="text-xl md:text-2xl mt-8">
                  I really love to ride my motorcycle. When I want to just get
                  away and be by myself and clear my head, that's what I do.
                </h5>
                <button className="common-btn2 mt-5">Buy Now</button>
              </div>
              <div className="w-full md:w-1/2 px-8">
                <img src={banner1} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative after:absolute after:left-0 after:top-0 after:bottom-0 z-10 after:right-0 after:bg-menu"
            style={{
              background: `url(${banner4})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              padding: "80px 0",
              backgroundPosition: "center center",
            }}
          >
            <div className="container relative z-20 flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-1/2 px-8 text-white">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                  Driving a <br />{" "}
                  <span className="text-primary">Motorcycle</span> is like
                  flying
                </h1>
                <h5 className="text-xl md:text-2xl mt-8">
                  I really love to ride my motorcycle. When I want to just get
                  away and be by myself and clear my head, that's what I do.
                </h5>
                <button className="common-btn2 mt-5">Buy Now</button>
              </div>
              <div className="w-full md:w-1/2 px-8">
                <img src={banner2} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className="prev-btn prev">
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div className="next-btn next">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </Swiper>
    </div>
  );
};


export default HomeBanner;
