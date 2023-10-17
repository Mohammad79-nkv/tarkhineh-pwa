// "use client";

import { useEffect, useState } from "react";
import FoodType from "./FoodType";
import FoodCategory from "./FoodCategory";
import Search from "@/components/home/search/Search";
import axios from "axios";
import FoodItem from "@/components/foodItem";
import VerticalFood from "@/components/verticalCard/VerticalCard";

const Menu = async () => {
  // const [foods, setFoods] = useState<any[]>([]);

  let foods:any[] = [];

  const data = await axios
    .get("/api/foods")
    .then((res) => {
      foods = res.data.foods;
    })
    .catch((err) => console.log(err));

  // useEffect(() => {
  //   axios
  //     .get("/api/foods")
  //     .then((res) =>
  //       setFoods(() => {
  //         return res.data.foods;
  //       })
  //     )
  //     .catch((err) => console.log(err));
  // }, []);
  // const foods = await axios.get("/api/foods")
  // console.log(foods)

  return (
    <section>
      <div className="flex flex-col gap-3">
        <div>
          <FoodType />
        </div>
        <div className="flex justify-between flex-col md:flex-row gap-3 lg:px-[7vw]">
          <div>
            <FoodCategory />
          </div>
          <div className="px-4 md:w-1/2 lg:w-1/3">
            <Search />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 px-4 lg:px-[7vw]">
        {foods.length > 0
          ? foods.map((item) => <VerticalFood key={item.id} {...item} />)
          : [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <VerticalFood key={item} />
            ))}
        {}
      </div>
    </section>
  );
};

export default Menu;
