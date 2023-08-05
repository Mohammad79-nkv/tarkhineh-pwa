"use client";

import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  const notShow = ["/signIn", "/signUp"];

  if (notShow.includes(pathname)) {
    return;
  }

  return (
    <section className="flex justify-between p-4 lg:pt-10 px-[7vw] text-white h-[152px] md:h-[220px] lg:h-[319px] bg-[url('/images/FooterMobile.png')] bg-no-repeat bg-center bg-cover sm:bg-[url('/images/Footer.png')]">
      <div className="">
        <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6 ">
          دسترسی آسان
        </p>
        <ul className="text-xs md:text-sm lg:text-base flex flex-col gap-y-2 md:gap-y-4 ps-2 cursor-pointer">
          <li className="cursor-pointer">پرسش‌های متداول</li>
          <li className="cursor-pointer">قوانین ترخینه</li>
          <li className="cursor-pointer">حریم خصوصی</li>
          <li className="cursor-pointer"></li>
        </ul>
      </div>
      <div>
        <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6 ">
          شعبه‌های ترخینه
        </p>
        <ul className="text-xs md:text-sm lg:text-base flex flex-col gap-y-2 md:gap-y-4 ps-2 cursor-pointer">
          <li className="cursor-pointer">شعبه اکباتان</li>
          <li className="cursor-pointer">شعبه چالوس</li>
          <li className="cursor-pointer">شعبه اقدسیه</li>
          <li className="cursor-pointer">شعبه ونک</li>
        </ul>
      </div>
      <div>
        <div className="hidden lg:flex flex-col ">
          <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6 ">
            پیام به ترخینه{" "}
          </p>
          <div className="flex justify-between gap-x-2">
            <div className="flex flex-col ">
              <div className="flex flex-col gap-2">
                <input
                  className="bg-transparent outline-none border border-opacity-30 border-white rounded-4 text-base py-2 px-3"
                  placeholder="نام و نام خانوادگی"
                />
                <input
                  className="bg-transparent outline-none border border-opacity-30 border-white rounded-4 text-base py-2 px-3 lg:w-[300px]"
                  placeholder="شماره تماس"
                />
                <input
                  className="bg-transparent outline-none border border-opacity-30 border-white rounded-4 text-base py-2 px-3 "
                  placeholder="آدرس ایمیل"
                />
              </div>
            </div>
            <div>
              <textarea
                className="h-full bg-transparent outline-none border border-opacity-30 border-white rounded-4 text-base py-2 px-3 xl:w-[400px]"
                placeholder="پیام شما"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button className=" border border-opacity-30 border-white rounded-4 px-6 py-2 mt-2">
              ارسال پیام
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
