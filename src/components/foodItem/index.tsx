import Image from "next/image";
import { Heart, Star1 } from "iconsax-react";
import { formatWithCommas } from "@/utils";

interface IProps {
  imgSrc: string;
}

const FoodItem = (props: IProps) => {
  const { imgSrc } = props;
  return (
    <div className="w-[168px] h-[223px] border border-Gray-4 rounded-4 flex flex-col justify-between">
      <div className="relative w-full h-full">
        <Image src={imgSrc} alt="" fill style={{objectFit: "cover"}}/>
      </div>
      <div className="p-2">
        <p className="text-center text-xs font-bold">دلمه برگ کلم</p>
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
          <div className="flex gap-1 justify-center items-center">
            <div className="w-4">
              <Star1 />
            </div>
            <span>5</span>
          </div>
          <div className="flex gap-1">
            <span>{formatWithCommas(150000)}</span>
            <span>تومان</span>
          </div>
        </div>
        <button className="bg-primary text-white w-full rounded-4 py-2 text-xs mt-3">
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
