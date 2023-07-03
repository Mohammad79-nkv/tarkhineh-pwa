"use client"

import About from "./about/About";
import BranchsReview from "./branchsReview/BanchsReview";
import RestaurantMenu from "./restaurantMenu/RestaurantMenu";
import Search from "./search/Search";

const HomePage = () => {
  return (
    <>
      <Search />
      <RestaurantMenu />
      <About />
      <BranchsReview />
    </>
  );
};

export default HomePage;
