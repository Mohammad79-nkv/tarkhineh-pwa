"use client"

import { Logo } from "@/components/icons/Logo";
import {
  User,
  ShoppingCart,
  HambergerMenu,
  SearchNormal1,
  ArrowDown2,
  LogoutCurve,
  Location,
  Heart,
  Wallet2,
} from "iconsax-react";
import Link from "next/link";
import { useState } from "react";

const MainNav = () => {
  const [showProfileNav, setShowProfileNav] = useState(false);

  const profileNavs = [
    {
      id: 1,
      title: "پروفایل",
      icon: <User />,
    },
    {
      id: 2,
      title: "پیگیری سفارش",
      icon: <Wallet2 />,
    },
    {
      id: 3,
      title: "علاقه‌مندی‌ها",
      icon: <Heart />,
    },
    {
      id: 4,
      title: "آدرس‌های من",
      icon: <Location />,
    },
    {
      id: 5,
      title: "خروج از حساب",
      icon: <LogoutCurve />,
      noBorder: true,
    },
  ];

  return (
    <>
      <div
        onClick={() => setShowProfileNav(false)}
        className={`block ${
          !showProfileNav && "hidden"
        } absolute w-screen h-screen right-0 left-0`}
      ></div>
      <nav className="bg-White h-[64PX] text-Primary flex items-center justify-between px-[20px] py-[16px] md:px-[7vw]">
        <div className="md:hidden">
          <span>
            <HambergerMenu />
          </span>
        </div>
        <div className="w-[110px]">
          <Link href={"/"}>
            <div>
              <Logo />
            </div>
          </Link>
        </div>

        <div className="hidden md:block">
          <ul className="flex md:gap-4 lg:gap-6">
            <li>صفحه اصلی</li>
            <li>شعبه</li>
            <li>منو</li>
            <li>اعطای نمایندگی</li>
            <li>درباره ما</li>
            <li>تماس با ما</li>
          </ul>
        </div>

        <div className="flex gap-2 text-primary">
          <Link href={"/"}>
            <div className="bg-Tint-1 md:w-[50px] md:h-[50px] md:p-[10px] px-[4px] py-[8px] w-6 rounded-[4px]">
              <ShoppingCart />
            </div> 
          </Link>
          <Link href={"/"} className="hidden md:flex">
            <div className="bg-Tint-1 md:w-[50px] md:h-[50px] md:p-[10px] px-[4px] py-[8px] w-6 rounded-[4px]">
              <SearchNormal1 />
            </div>
          </Link>
          <Link href={"/"} onClick={() => setShowProfileNav((prev) => !prev)}>
            <div className="relative">
              <div
                className={`bg-Tint-1 md:w-[50px] md:h-[50px] md:p-[10px]  px-[4px] py-[8px] w-6 rounded-[4px] transition-all ${
                  showProfileNav && "bg-primary text-white md:w-[80px] flex"
                }`}
              >
                <User />
                {showProfileNav && (
                  <span className={`hidden md:flex`}>
                    <ArrowDown2 />
                  </span>
                )}
              </div>
              <div
                className={`${
                  !showProfileNav && "hidden"
                } absolute rounded-4 md:round- z-10 bg-white
             shadow-drop-shadow-2 top-10 md:top-14 left-0 w-40 lg:w-52 `}
              >
                <ul>
                  {profileNavs.map((item) => (
                    <li
                      key={item.id}
                      className="hover:bg-Tint-1 transition-all"
                    >
                      <span
                        className={`flex px-2 py-[8px] lg:py-[12px] text-sm md:text-base xl:text-lg md:font-bold border-neutral border-opacity-20 ${
                          !item.noBorder && "border-b"
                        }`}
                      >
                        <span className="w-[15px] md:w-[20px] me-2 ">
                          {item.icon}
                        </span>{" "}
                        {item.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default MainNav;
