"use client";

import { usePathname } from "next/navigation";
import { Logo } from "@/components/icons/Logo";
import { signIn, useSession, signOut } from "next-auth/react";
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
import { useState, useEffect } from "react";

const MainNav = () => {
  const [showProfileNav, setShowProfileNav] = useState(false);
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  const [cartCount, setCartCount] = useState<number>();

  // let cartNumber: any[]= [];
  // const a = localStorage.getItem("CART");
  // if (a) {
  //   cartNumber = JSON.parse(a);
  // }

  const pathname = usePathname();
  const { status } = useSession();

  const notShow = ["/signIn", "/signUp"];
  const handleSignOut = () => {
    signOut()
  };

  // useEffect(() => {
  //   if (cartNumber) {
  //     setCartCount(cartNumber.length);
  //   }
  //   alert("efsf");
  // }, [cartNumber]);

  // if (pathname === "/signIn") {
  if (notShow.includes(pathname)) {
    return null;
  }

  const menuItems = [
    {
      id: 1,
      title: "صفحه اصلی",
      href: "/",
    },
    {
      id: 2,
      title: "شعبه",
      href: "/branch",
    },
    {
      id: 3,
      title: "منو",
      href: "/menu",
    },
    {
      id: 4,
      title: "اعطای نمایندگی",
      href: "/",
    },
    {
      id: 5,
      title: "درباره ما",
      href: "/",
    },
    {
      id: 6,
      title: "تماس با ما",
      href: "/",
    },
  ];

  const handleShowSideBar = () => {
    setShowSideBar((prev) => !prev);
    if (!showSideBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const handleRenderNavMenu = () => {
    return (
      <div className="">
        <ul className="text-white md:text-primary ps-5 md:ps-0 pt-7 md:pt-0 flex flex-col gap-6 md:flex-row md:gap-4 lg:gap-6 [&>li]:cursor-pointer">
          {menuItems.map((item) => (
            <li key={item.id} onClick={() => setShowSideBar((prev) => !prev)}>
              <Link href={item.href} legacyBehavior={false}>
                {item.title}
              </Link>
            </li>
          ))}
          {/* <li>صفحه اصلی</li>
          <li>
            <Link href={"/branch"}>شعبه</Link>
          </li>
          <li>منو</li>
          <li>اعطای نمایندگی</li>
          <li>درباره ما</li>
          <li>تماس با ما</li> */}
        </ul>
      </div>
    );
  };

  const profileNavs =
    status === "unauthenticated"
      ? [
          {
            id: 1,
            title: "ورود/ثبت نام",
            icon: <User />,
            route: "/signIn",
          },
        ]
      : [
          {
            id: 1,
            title: "پروفایل",
            icon: <User />,
            route: "/signIn",
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
            handler: handleSignOut,
          },
        ];

  return (
    <>
      {showSideBar && (
        <div
          className={`${
            showSideBar ? "opacity-100 z-1 " : "opacity-0 z-[-999]"
          }md:hidden backdrop-blur-md w-full h-screen absolute z-10 transition-all ease-in-out delay-200`}
          onClick={handleShowSideBar}
        ></div>
      )}

      <div
        className={`${
          showSideBar ? "translate-x-[0%] z-[9999]" : "translate-x-[100%]"
        } md:hidden z-[9999] fixed bg-Tint-7 w-1/2 h-full transition-all ease-in-out delay-200`}
      >
        {handleRenderNavMenu()}
      </div>

      <nav className="bg-White h-[64PX] text-Primary flex items-center justify-between px-[20px] py-[16px] md:px-[7vw]">
        <div className="md:hidden cursor-pointer" onClick={handleShowSideBar}>
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
        <div className="hidden md:flex">{handleRenderNavMenu()}</div>
        <div className="flex gap-2 text-primary">
          <Link href={"/"}>
            <div className="relative bg-Tint-1 dark:bg-black md:w-[50px] md:h-[50px] md:p-[10px] px-[4px] py-[8px] w-6 rounded-[4px]">
              <span className="absolute top-[8px] right-0 w-[20px] h-[20px] flex justify-center items-center rounded-full bg-white text-primary">
                {cartCount}
              </span>
              <ShoppingCart />
            </div>
          </Link>
          <Link href={"/"} className="hidden md:flex">
            <div className="bg-Tint-1 md:w-[50px] md:h-[50px] md:p-[10px] px-[4px] py-[8px] w-6 rounded-[4px]">
              <SearchNormal1 />
            </div>
          </Link>
          <div
            onClick={() => setShowProfileNav((prev) => !prev)}
            className="relative"
          >
            <div
              className={` bg-Tint-1 md:w-[50px] md:h-[50px] md:p-[10px]  px-[4px] py-[8px] w-6 rounded-[4px] transition-all ${
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
                  <li key={item.id} className="hover:bg-Tint-1 transition-all">
                    <Link href={item.route || "/"} onClick={() => item.handler()}>
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
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNav;
