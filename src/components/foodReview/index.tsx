import FoodItem from "../foodItem";
import food1 from "/images/food1";

const FoodReview = () => {
  const foods = [
    {
      id: 1,
      imgSrc: "/images/food1.png",
    },
    {
      id: 2,
      imgSrc: "/images/food1.png",
    },
  ];




  return (
    <div className="flex gap-5">
      {foods.map((item) => (
        <FoodItem key={item.id} {...item}/>
      ))}
    </div>
  );
};

export default FoodReview;
