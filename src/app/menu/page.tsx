"use client";

import { useEffect, useState } from "react";
import FoodType from "./FoodType";
import FoodCategory from "./FoodCategory";
import Search from "@/components/home/search/Search";
import axios from "axios";
import FoodItem from "@/components/foodItem";

const Menu = () => {
  const [foods, setFoods] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("/api/foods")
      .then((res) =>
        setFoods(() => {
          return res.data.foods;
        })
      )
      .catch((err) => console.log(err));
  }, []);
  // const foods = await axios.get("/api/foods")
  // console.log(foods)

  return (
    <section>
      <div className="flex flex-col gap-3">
        <div>
          <FoodType />
        </div>
        <div className="flex flex-col gap-3">
          <FoodCategory />
          <Search />
        </div>
      </div>
      <div>
        {/* {foods.length > 0
          ? foods.map((item) => <FoodItem isVertical key={item.id} {...item} />)
          : [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <FoodItem isVertical key={item} />
            ))} */}
      </div>
    </section>
  );
};

export default Menu;
