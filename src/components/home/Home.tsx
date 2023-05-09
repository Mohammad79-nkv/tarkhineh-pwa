import About from "./about/About";
import BranchsReview from "./branchsReview/BanchsReview";
import RestaurantMenu from "./restaurantMenu/RestaurantMenu";

const HomePage = () => {
  return (
    <>
      <RestaurantMenu />
      <About />
      <BranchsReview />
    </>
  );
};

export default HomePage;
