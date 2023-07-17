import Image from "next/image";
import { Heart, Star1 } from "iconsax-react";
import { formatWithCommas } from "@/utils";

interface IProps {
  imgSrc: string;
  title: string;
}

const FoodItem = (props: IProps) => {
  const { imgSrc, title } = props;
  return (
    <div className="bg-white w-[168px] sm:w-[188px] md:w-[208px] lg:w-[228px] xl:w-[288px]  h-[223px] sm:h-[243px] md:h-[263px] lg:h-[283px] xl:h-[433px] border border-Gray-4 rounded-4 flex flex-col justify-between overflow-hidden">
      <div className="relative w-full h-full">
        <Image src={"https://i.ibb.co/Gvykp65/food4.png"} alt="" fill style={{objectFit: "cover"}}/>
      </div>
      <div className="p-2 xl:p-4">
        <p className="text-center text-xs xl:text-xl font-bold">{title}</p>
        <div className="text-xs flex justify-between mt-2">
          <div className="w-4">
            <Heart className="text-Gray-5" />
          </div>
          <div className="flex gap-2">
            <span className="decoration-gray-950 line-through opacity-50">
              {formatWithCommas(1750000)}
            </span>
            <div className="bg-Error-extralight rounded-8 px-2 text-xs text-error">
              <span>%</span>
              <span>20</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between text-xs mt-2">
          <div className="flex gap-1 justify-center items-center xl:text-sm xl:font-bold">
            <div className="w-4 ">
              <Star1 />
            </div>
            <span>5</span>
          </div>
          <div className="flex gap-1 xl:text-base font-bold">
            <span>{formatWithCommas(150000)}</span>
            <span>تومان</span>
          </div>
        </div>
        <button className="bg-primary text-white w-full rounded-4 py-2 text-xs xl:text-base mt-3">
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
