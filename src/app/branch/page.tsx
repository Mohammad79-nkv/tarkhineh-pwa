"use client";

import FoodReview from "@/components/foodReview";
import Search from "@/components/home/search/Search";
import { useState } from "react";

const BranchPage = () => {
  useState();

  return (
    <div>
      <Search />
      <FoodReview />
      <FoodReview withBg/>
      <FoodReview />
    </div>
  );
};

export default BranchPage;
