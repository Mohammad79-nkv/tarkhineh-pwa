"use client";

import { Navigation } from "swiper/modules";
import { CommentContainer, CommentsSwiper } from "./branchComments.style";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Star1 } from "iconsax-react";

const BranchComments = () => {
  const commentsData = [
    {
      id: 1,
      username: "آرزو محمدعلیزاده",
      userAvatar: "/images/userAvatar.png",
      date: new Date(),
      comment:
        "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. ",
    },
    {
      id: 5,
      username: "آرزو محمدعلیزاده",
      userAvatar: "/images/userAvatar.png",
      date: new Date(),
      comment:
        "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. ",
    },
    {
      id: 4,
      username: "آرزو محمدعلیزاده",
      userAvatar: "/images/userAvatar.png",
      date: new Date(),
      comment:
        "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. ",
    },
    {
      id: 3,
      username: "آرزو محمدعلیزاده",
      userAvatar: "/images/userAvatar.png",

      date: new Date(),
      comment:
        "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. ",
    },
    {
      id: 2,
      username: "آرزو محمدعلیزاده",
      userAvatar: "/images/userAvatar.png",

      date: new Date(),
      comment:
        "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. ",
    },
  ];

  return (
    <CommentContainer className="my-5">
      <p className="text-center xl:text-2xl mb-3 xl:mb-5 font-bold">نظرات کاربران</p>
      <div className="relative ms-4 xl:ms-28">
        <CommentsSwiper
          dir="rtl"
          slidesPerView={2}
          spaceBetween={130}
          navigation={true}
          centerInsufficientSlides={true}
          fadeEffect={{ crossFade: true }}
          grabCursor={true}
          freeMode={true}
          modules={[Navigation]}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 170,
            },
            1280: {
              slidesPerView: 2,
              spaceBetween: 100,
            },
            1600: {
              slidesPerView: 3,
              spaceBetween: 400,
            },
          }}
        >
          {commentsData.map((comment) => (
            <SwiperSlide key={comment.id}>
              <div className="flex items-center gap-2 xl:gap-4  w-64 md:w-80 lg:w-96 xl:w-[640px] rounded-4 xl:rounded-8 border border-Gray-4 p-4 xl:p-6">
                <div className="flex flex-col gap-2 justify-center items-center ">
                  <div className="relative w-14 xl:w-24 aspect-square">
                    <Image
                      src={comment.userAvatar}
                      fill
                      alt={comment.username}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="flex flex-col text-2xs xl:text-sm opacity-60 justify-center items-center gap-1">
                    <p className=" text">{comment.username}</p>
                    <span>{comment.date.getTime()}</span>
                  </div>
                </div>
                <div className=" flex flex-col justify-center items-end gap-1">
                  <div className="text-2xs md:text-xs xl:text-base text-justify">
                    {comment.comment}
                  </div>
                  <div>
                    <div className="flex gap-1 justify-center items-center text-xs xl:text-sm xl:font-bold">
                      <div className="w-4 ">
                        <Star1 />
                      </div>
                      <span>5</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <SwiperSlide></SwiperSlide>
        </CommentsSwiper>
      </div>
    </CommentContainer>
  );
};

export default BranchComments;
