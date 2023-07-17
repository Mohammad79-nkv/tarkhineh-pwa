import { Swiper, useSwiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import FoodItem from "../foodItem";
import { useEffect, useState } from "react";
import { FoodSwiper } from "./foodReview.style";
import axios from "axios";

interface IProps {
  withBg?: boolean | undefined;
}

const FoodReview = (props: IProps) => {
  const { withBg } = props;
  const [foods, setFoods] = useState<Array<any>>([]);

  useEffect(() => {
    axios
      .get("/api/foods")
      .then((res) => setFoods(res.data.foods))
      .catch((err) => console.log(err));
  }, []);

  console.log(foods, "foods")
  // const foods = [
  //   {
  //     id: 1,
  //     imgSrc: "/images/food1.png",
  //     title: "دلمه برگ کلم",
  //   },
  //   {
  //     id: 2,
  //     imgSrc: "/images/food2.png",
  //     title: "بادمجان شکم‌پر",
  //   },
  //   {
  //     id: 3,
  //     imgSrc: "/images/food3.png",
  //     title: "کالزونه اسفناج",
  //   },
  //   {
  //     id: 4,
  //     imgSrc: "/images/food4.png",
  //     title: "پیتزا قارچ",
  //   },
  //   {
  //     id: 5,
  //     imgSrc: "/images/food5.png",
  //     title: "پنینی اسفناج",
  //   },
  //   {
  //     id: 6,
  //     imgSrc: "/images/food6.png",
  //     title: "پیتزا پپرونی",
  //   },
  //   {
  //     id: 7,
  //     imgSrc: "/images/food7.png",
  //     title: "راتاتویی",
  //   },
  //   {
  //     id: 8,
  //     imgSrc: "/images/food8.png",
  //     title: "بورانی بادمجان",
  //   },
  //   {
  //     id: 9,
  //     imgSrc: "/images/food9.png",
  //     title: "لازانیا",
  //   },
  //   {
  //     id: 10,
  //     imgSrc: "/images/food10.png",
  //     title: "سوشی",
  //   },
  // ];

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
        {foods?.map((item) => (
          <SwiperSlide key={item._id}>
            <FoodItem {...item} />
          </SwiperSlide>
        ))}
        <SwiperSlide></SwiperSlide>
      </FoodSwiper>
    </div>
  );
};

export default FoodReview;
