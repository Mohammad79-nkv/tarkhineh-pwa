"use client";

import BranchInfo from "@/components/branchInfo";
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
      <BranchInfo />
    </div>
  );
};

export default BranchPage;
