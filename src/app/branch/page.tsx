"use client";

import BranchComments from "@/components/branchComments";
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
      <BranchComments />
    </div>
  );
};

export default BranchPage;
