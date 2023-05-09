import Image from "next/image";

const RestaurantMenu = () => {
  const menuData = [
    { id: 1, name: "نوشیدنی", imageSrc: "/images/drink.png", route: "" },
    { id: 2, name: "دسر", imageSrc: "/images/dissert.png", route: "" },
    { id: 3, name: "پیش غذا", imageSrc: "/images/preFood.png", route: "" },
    { id: 4, name: "غذای اصلی", imageSrc: "/images/mainFood.png", route: "" },
  ];

  return (
    <section className="pb-10 xl:pb-16">
      <p className="text-center text-base md:text-2xl font-bold	">منوی رستوران</p>
      <div className="grid grid-cols-2 md:grid-cols-4 px-[7vw] gap-6 gap-y-20 md:mt-32 mt-12">
        {menuData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center relative border-primary shadow-cards-shadow border w-full rounded-4 md:rounded-8 md:h-[180px] h-[90px]"
          >
            <div className="absolute top-[-50px] w-[110px] h-[110px] lg:w-[200px] lg:h-[200px] lg:top-[-100px] md:h-[150px] md:w-[150px] md:top-[-8 0px]">
              <Image
                src={item.imageSrc}
                alt={item.name}
                // width="100"
                // height="200"
                fill
              />
            </div>
            <button className="absolute bottom-[-15px] flex justify-center items-center bg-primary p-2 text-white shadow-cards-shadow rounded-4 w-20 md:w-24 h-8 text-xs md:text-base lg:h-12 lg:w-36 lg:text-xl lg:bottom-[-20px] hover:bg-Shade-2 transition-all">
              {item.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RestaurantMenu;
