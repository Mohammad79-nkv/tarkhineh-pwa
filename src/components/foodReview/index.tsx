import { Swiper, useSwiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import FoodItem from "../foodItem";
import { Key, useEffect, useState } from "react";
import { FoodSwiper } from "./foodReview.style";
import axios from "axios";
import { IFoods } from "../foodItem/type";

interface IProps {
  withBg?: boolean | undefined;
}

const FoodReview = (props: IProps) => {
  const { withBg } = props;
  const [foods, setFoods] = useState<Array<IFoods>>([
    // {
    //   title: null,
    //   _id: null,
    //   branches: null,
    //   description: null,
    //   discount: null,
    //   price: null,
    //   imgSrc: null,
    //   vote: {
    //     count: null,
    //     rate: null,
    //   },
    // },
    // {
    //   title: null,
    //   _id: null,
    //   branches: null,
    //   description: null,
    //   discount: null,
    //   price: null,
    //   imgSrc: null,
    //   vote: {
    //     count: null,
    //     rate: null,
    //   },
    // },
    // {
    //   title: null,
    //   _id: null,
    //   branches: null,
    //   description: null,
    //   discount: null,
    //   price: null,
    //   imgSrc: null,
    //   vote: {
    //     count: null,
    //     rate: null,
    //   },
    // },
    // {
    //   title: null,
    //   _id: null,
    //   branches: null,
    //   description: null,
    //   discount: null,
    //   price: null,
    //   imgSrc: null,
    //   vote: {
    //     count: null,
    //     rate: null,
    //   },
    // },
    // {
    //   title: null,
    //   _id: null,
    //   branches: null,
    //   description: null,
    //   discount: null,
    //   price: null,
    //   imgSrc: null,
    //   vote: {
    //     count: null,
    //     rate: null,
    //   },
    // },
  ]);

  useEffect(() => {
    axios
      .get("/api/foods")
      .then((res) =>
        setFoods(() => {
          return res.data.foods;
        })
      )
      .catch((err) => console.log(err));
  }, []);

  const swiper = useSwiper();

  return (
    <div className={`ps-4 py-5 md:py-7 ${withBg && "bg-primary"}`}>
      <p
        className={`font-bold xl:text-2xl mb-3 md:mb-6 md:ms-[7vw] ${
          withBg && "text-white"
        }`}
      >
        پیشنهاد ویژه
      </p>
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
        {foods.length > 0
          ? foods?.map((item) => (
              <SwiperSlide key={item._id}>
                <FoodItem {...item} />
              </SwiperSlide>
            ))
          : [1, 2, 3, 4].map((item) => (
              <SwiperSlide key={item}>
                <FoodItem />
              </SwiperSlide>
            ))}
        <SwiperSlide></SwiperSlide>
      </FoodSwiper>
    </div>
  );
};

export default FoodReview;
