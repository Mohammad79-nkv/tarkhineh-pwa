import Image from "next/image";
import { Heart, Star1 } from "iconsax-react";
import { formatWithCommas } from "@/utils";
import { IFoods } from "./type";

interface IProps extends IFoods {}

const FoodItem = (props: IFoods) => {
  const { imgSrc, title, price, discount, vote } = props;

  const finalPrice = price && discount && price - (price * discount) / 100;

  return (
    <div className="bg-white w-[168px] sm:w-[188px] md:w-[208px] lg:w-[228px] xl:w-[288px]  h-[223px] sm:h-[243px] md:h-[263px] lg:h-[283px] xl:h-[433px] border border-Gray-4 rounded-4 flex flex-col justify-between overflow-hidden">
      <div className="relative w-full h-full">
        {imgSrc ? (
          <Image
            src={imgSrc || ""}
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div className="animate-pulse w-full h-full">
            <div className="w-full h-full bg-slate-200 "></div>
          </div>
        )}
      </div>
      <div className="p-2 xl:p-4">
        <div className="text-center text-xs xl:text-xl font-bold w-full h-3 md:h-5">
          {title ? (
            title
          ) : (
            <div className="animate-pulse w-full h-full">
              <div className="w-full h-full bg-slate-200 "></div>
            </div>
          )}
        </div>
        <div className="text-xs flex justify-between mt-2">
          <div className={`${!title && "animate-pulse"} animate-pulse w-4`} >
            <Heart className=" text-Gray-5" />
          </div>
          {discount ? (
            <div className="flex gap-2">
              <span className="decoration-gray-950 line-through opacity-50">
                {formatWithCommas(price)}
              </span>
              <div className="bg-Error-extralight rounded-8 px-2 text-xs text-error">
                <span>%</span>
                <span>{discount}</span>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="flex justify-between text-xs mt-2">
          <div className="flex gap-1 justify-center items-center xl:text-sm xl:font-bold">
            <div className="rating ">
              <input
                type="radio"
                name="rating-2"
                className={`${!vote?.rate && "animate-pulse bg-slate-200"} mask w-4 mask-star-2 bg-yellow-400`}
                disabled
              />
            </div>
            <span>{vote?.rate}</span>
          </div>
          <div className=" flex justify-end gap-1 xl:text-base font-bold w-2/3">
            {price ? (
              <>
                <span>{formatWithCommas(finalPrice)}</span>
                <span>تومان</span>
              </>
            ) : (
              <div className="animate-pulse w-full h-full">
                <div className="w-full h-full bg-slate-200 "></div>
              </div>
            )}
          </div>
        </div>
        {true ? (
          <button
            className={`w-full rounded-4 py-2 text-xs xl:text-base mt-3 ${
              !title
                ? "animate-pulse bg-slate-200 text-transparent "
                : "bg-primary text-white "
            } `}
          >
            افزودن به سبد خرید
          </button>
        ) : (
          <button className="animate-pulse w-full h-10">
            <div className="w-full h-full bg-slate-200 "></div>
          </button>
        )}
      </div>
    </div>
  );
};

export default FoodItem;
