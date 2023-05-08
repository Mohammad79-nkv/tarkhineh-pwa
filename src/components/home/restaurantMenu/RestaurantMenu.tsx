const RestaurantMenu = () => {
  const menuData = [
    { id: 1, name: "نوشیدنی", imageSrc: "", route: "" },
    { id: 2, name: "نوشیدنی", imageSrc: "", route: "" },
    { id: 3, name: "نوشیدنی", imageSrc: "", route: "" },
    { id: 4, name: "نوشیدنی", imageSrc: "", route: "" },
  ];

  return (
    <section>
      ]<p></p>
      <div className="flex justify-between px-[7vw] gap-6">
        {menuData.map((item) => (
          <div key={item.id} className="flex flex-col items-center justify-center relative border-primary shadow-cards-shadow border w-full rounded-8">
            dwadad
            <button className="absolute bottom-[-20px] bg-primary p-2 text-white shadow-cards-shadow rounded-4">{item.name}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RestaurantMenu;
