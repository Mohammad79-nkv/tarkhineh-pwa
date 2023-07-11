import { Swiper, useSwiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import FoodItem from "../foodItem";
import { useState } from "react";
import { FoodSwiper } from "./foodReview.style";

interface IProps {
  withBg?: boolean | undefined;
}

const FoodReview = (props: IProps) => {
  const { withBg } = props;
  const foods = [
    {
      id: 1,
      imgSrc: "/images/food1.png",
    },
    {
      id: 2,
      imgSrc: "/images/food1.png",
    },
    {
      id: 3,
      imgSrc: "/images/food1.png",
    },
    {
      id: 4,
      imgSrc: "/images/food1.png",
    },
    {
      id: 5,
      imgSrc: "/images/food1.png",
    },
    {
      id: 5,
      imgSrc: "/images/food1.png",
    },
    {
      id: 5,
      imgSrc: "/images/food1.png",
    },
    {
      id: 5,
      imgSrc: "/images/food1.png",
    },
    {
      id: 5,
      imgSrc: "/images/food1.png",
    },
    {
      id: 5,
      imgSrc: "/images/food1.png",
    },
  ];

  const swiper = useSwiper();

  return (
    <div className={`ps-4 py-5 md:py-7 ${withBg && "bg-primary"}`}>
      <p className={`font-bold xl:text-2xl mb-3 md:mb-6 md:ms-[7vw] ${withBg && "text-white"}`}>پیشنهاد ویژه</p>
      <FoodSwiper
        withBg={withBg}
        dir="rtl"
        slidesPerView={2}
        spaceBetween={30}
        navigation={true}
        centerInsufficientSlides={true}
        fadeEffect={{ crossFade: true }}
        grabCursor={true}
        freeMode={true}
        modules={[Navigation]}
        breakpoints={{
          500: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
          768: {
            slidesPerView: 3,
            modules: [Navigation],
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          },
          1024: {
            slidesPerView: 4,
          },
          1600: {
            slidesPerView: 5,
          },
        }}
      >
        {foods.map((item) => (
          <SwiperSlide key={item.id}>
            <FoodItem {...item} />
          </SwiperSlide>
        ))}
        <SwiperSlide></SwiperSlide>
      </FoodSwiper>
    </div>
  );
};

export default FoodReview;
