"use client";

import { useState } from "react";
import FoodType from "./FoodType";
import FoodCategory from "./FoodCategory";
import Search from "@/components/home/search/Search";

const Menu = () => {
  return (
    <section>
      <div className = "flex flex-col gap-3">
        <div>
          <FoodType />
        </div>
        <div className = "flex flex-col gap-3">
          <FoodCategory />
          <Search />
        </div>
      </div>
    </section>
  );
};

export default Menu;
