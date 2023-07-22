import { useState } from "react";

const FoodType = () => {
  const [foodType, setfoodType] = useState([
    {
      id: 1,
      title: "غذای اصلی",
      query: "",
      selected: true,
    },
    {
      id: 2,
      title: "پیش غذا",
      query: "",
      selected: false,
    },
    {
      id: 3,
      title: "دسر",
      query: "",
      selected: false,
    },
    {
      id: 4,
      title: "نوشیدنی",
      query: "",
      selected: false,
    },
  ]);

  const handleChooseCategory = (id: number) => {
    const unSelectedItem = foodType.map((item) => {
      return { ...item, selected: false };
    });
    const selectNewItem = unSelectedItem.find((item) => item.id === id);
    if (selectNewItem) {
      selectNewItem.selected = true;
    }
    setfoodType(unSelectedItem);
  };

  return (
    <div>
      <div className="bg-Gray-3 flex gap-4 text-sm ps-4">
        {foodType.map((item) => (
          <div
            className={` h-14 ${
              item.selected &&
              "border-b-2 border-primary text-primary font-bold"
            }  py-4 cursor-pointer transition-all`}
            key={item.id}
            onClick={() => handleChooseCategory(item.id)}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodType;
