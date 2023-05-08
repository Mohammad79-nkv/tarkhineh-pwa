import Image from "next/image";

const RestaurantMenu = () => {
  const menuData = [
    { id: 1, name: "نوشیدنی", imageSrc: "/images/drink.png", route: "" },
    { id: 2, name: "دسر", imageSrc: "/images/dissert.png", route: "" },
    { id: 3, name: "پیش غذا", imageSrc: "/images/preFood.png", route: "" },
    { id: 4, name: "غذای اصلی", imageSrc: "/images/mainFood.png", route: "" },
  ];

  return (
    <section>
      <p className="text-center text-2xl font-bold	">منوی رستوران</p>
      <div className="flex justify-between px-[7vw] gap-6 h-[180px] mt-32">
        {menuData.map((item) => (
          <div
            key={item.id}
            className="h-full flex flex-col items-center justify-center relative border-primary shadow-cards-shadow border w-full rounded-8"
          >
            <div className="absolute top-[-100px]">
              <Image
                src={item.imageSrc}
                alt={item.name}
                width="200"
                height="200"
              />
            </div>
            <button className="absolute bottom-[-20px] bg-primary p-2 text-white shadow-cards-shadow rounded-4 h-12 w-36 text-xl">
              {item.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RestaurantMenu;
