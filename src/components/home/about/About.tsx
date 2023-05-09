import { User, MenuBoard, HomeWifi, Diagram } from "iconsax-react";

const About = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between p-4 lg:pt-10 md:px-[7vw] text-white h-[330px] lg:h-[390px] bg-[url('/images/aboutMobile.png')] bg-no-repeat bg-center bg-cover sm:bg-[url('/images/about.png')]">
      <div className="w-full lg:w-1/2">
        <p className="md:text-lg lg:text-2xl">رستوران‌های زنجیره‌ای ترخینه</p>
        <p className="text-justify leading-6 md:leading-8 lg:leading-10 font-thin text-xs md:text-base lg:text-xl pt-4 xl:mb-8">
          مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست
          که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
          رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
          پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان
          شما عزیزان ارائه دهیم.
        </p>
        <div className="flex justify-end pt-1">
          <button className="border rounded-4 px-10 py-2 text-xs md:text-base lg:text-base">
            اطلاعات بیشتر
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-36 gap-y-12">
        <div className="flex flex-col items-center justify-center">
          <div className="hidden lg:block lg:w-14 xl:w-14 mb-2">
            <User />
          </div>
          <p className="text-xs md:text-sm lg:text-base xl:text-lg">
            پرسنلی مجرب و حرفه‌ای
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-xs md:text-sm lg:text-base xl:text-lg">
          <div className="hidden lg:block lg:w-14 xl:w-14 mb-2">
            <Diagram />
          </div>
          <p>کیفیت بالای غذاها</p>
        </div>
        <div className="flex flex-col items-center justify-center text-xs md:text-sm lg:text-base xl:text-lg">
          <div className="hidden lg:block lg:w-14 xl:w-14 mb-2">
            <HomeWifi />
          </div>
          <p>محیطی دلنشین و آرام</p>
        </div>
        <div className="flex flex-col items-center justify-center text-xs md:text-sm lg:text-base xl:text-lg">
          <div className="hidden lg:block lg:w-14 xl:w-14 mb-2">
            <MenuBoard />
          </div>
          <p>منوی متنوع</p>
        </div>
      </div>
    </section>
  );
};

export default About;
