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
      <p className="text-center mb-3 font-bold">شعبه اکباتان</p>
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
          <SwiperSlide key={image.id} className="" >
            <div key={image.id} className="w-full h-[200px]">
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
      <div className="relative flex flex-col gap-3 bg-white border border-primary rounded-4 mt-[-15px] z-30 w-5/6 mx-auto p-2">
        <div className="flex gap-1 ">
          <div className="w-4 sm:w-5 md:w-7 xl:w-8">
            <Location />
          </div>
          <p className="text-xs">{branchData.address}</p>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-1">
            <div className="w-4 sm:w-5 md:w-7 xl:w-8 ">
              <CallCalling />
            </div>
            <div className="text-xs flex gap-1">
              {branchData.phoneNumber.map(({ id, number }) => (
                <p key={id}>{number}</p>
              ))}
            </div>
          </div>
          <div className="flex gap-1">
            <div className="w-4 sm:w-5 md:w-7 xl:w-8">
              <Clock />
            </div>
            <p className="text-xs">{branchData.hour}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchInfo;
