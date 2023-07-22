import { useState } from "react";

const FoodCategory = () => {
  const [foodCategory, setFoodCategory] = useState([
    {
      id: 1,
      title: "غذاهای ایرانی",
    },
    {
      id: 2,
      title: "غذاهای غیر ایرانی",
    },
    {
      id: 3,
      title: "پیتزاها",
    },
    {
      id: 4,
      title: "ساندویچ‌ها",
    },
    {
      id: 5,
      title: "پرفروش‌ ترین",
    },
    {
      id: 6,
      title: "اقتصادی‌ ترین",
    },
    {
      id: 7,
      title: "محبوب ترین",
    },
  ]);

  return (
    <div className="flex gap-3 text-xs cursor-grab overflow-auto no-scrollbar ms-4">
      {foodCategory.map((item) => (
        <div className="bg-Gray-3 flex-none py-2 px-3 rounded-64 cursor-pointer" key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};

export default FoodCategory;
