import Image from "next/image";
import { StyledSwiper } from "./branchInfo.style";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import { Location, CallCalling, Clock } from "iconsax-react";

const BranchInfo = () => {
  const branchData = {
    images: [
      {
        id: 1,
        src: "/images/ekbatanImg.png",
      },
      {
        id: 1,
        src: "/images/ekbatanImg.png",
      },
    ],
    phoneNumber: [
      {
        id: 1,
        number: "021-33535354",
      },
      {
        id: 1,
        number: "021-33535356",
      },
    ],
    address: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
    hour: "همه‌روزه از ساعت ۱۲  الی ۲۳",
  };

  return (
    <div>
      <p className="text-center xl:text-2xl mb-3 xl:mb-5 font-bold">شعبه اکباتان</p>
      <StyledSwiper
        // className="z-[-1]"
        dir="rtl"
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        centerInsufficientSlides={true}
        fadeEffect={{ crossFade: true }}
        grabCursor={true}
        freeMode={true}
        modules={[Navigation]}
        // breakpoints={{
        //   500: {
        //     slidesPerView: 3,
        //     spaceBetween: 80,
        //   },
        //   768: {
        //     slidesPerView: 3,
        //     modules: [Navigation],
        //     navigation: {
        //       nextEl: ".swiper-button-next",
        //       prevEl: ".swiper-button-prev",
        //     },
        //   },
        //   1024: {
        //     slidesPerView: 4,
        //   },
        //   1600: {
        //     slidesPerView: 5,
        //   },
        // }}
      >
        {branchData.images.map((image) => (
          <SwiperSlide key={image.id} className="">
            <div
              key={image.id}
              className="w-full h-[200px] md:h-[20vw] max-w-[370px]"
            >
              <Image
                src={image.src}
                fill
                alt={image.src}
                style={{ objectFit: "cover" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </StyledSwiper>
      <div className="relative bg-white border border-primary rounded-4 mt-[-15px] lg:mt-[-45px] z-30 w-5/6 max-w-[809px] mx-auto p-2 md:p-5 flex md:items-start justify-between  flex-wrap gap-2">
        <div className="flex lg:flex-col gap-1 items-center justify-center">
          <div className="w-4 sm:w-5 md:w-7 xl:w-8 ">
            <CallCalling />
          </div>
          <div className="text-xs md:text-sm lg:text-base flex lg:flex-col gap-1">
            {branchData.phoneNumber.map(({ id, number }) => (
              <p key={id}>{number}</p>
            ))}
          </div>
        </div>
        <div className="flex lg:flex-col items-center justify-center gap-1 ">
          <div className="w-4 sm:w-5 md:w-7 xl:w-8">
            <Location />
          </div>
          <p className="text-xs md:text-sm lg:text-base text-center">
            {branchData.address}
          </p>
        </div>
        <div className="flex lg:flex-col gap-1 items-center justify-center">
          <div className="w-4 sm:w-5 md:w-7 xl:w-8">
            <Clock />
          </div>
          <p className="text-xs md:text-sm lg:text-base">{branchData.hour}</p>
        </div>
      </div>
    </div>
  );
};

export default BranchInfo;
