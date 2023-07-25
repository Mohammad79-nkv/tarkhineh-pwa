import Image from "next/image";
import { IFoods } from "../foodItem/type";
import { formatWithCommas } from "@/utils";

interface IProps extends IFoods {}

const VerticalFood = (props: IProps) => {
  const { imgSrc, title, description, price, discount } = props;

  const finalPrice = price && discount && price - (price * discount) / 100;

  return (
    <div
      className={`flex h-[100px] ${title && "border border-Gray-4 rounded-4"}`}
    >
        <div
          className={`relative h-full aspect-square ${
            !title && "animate-pulse bg-slate-200"
          } `}
        >
          {imgSrc && title && (
            <Image
              src={imgSrc}
              alt={title}
              fill
              style={{ objectFit: "cover" }}
              className="aspect-square"
            />
          )}
        </div>
      <div className="w-full  p-2 flex flex-col justify-between box-content">
        <div className="flex w-full justify-between">
          <div
            className={` ${
              !title && "animate-pulse bg-slate-200 w-1/2 h-4 rounded-64"
            } `}
          >
            <p className="text-sm">{title}</p>
          </div>
          <div
            className={`flex gap-2 ${
              !title && "animate-pulse bg-slate-200 h-4 w-32 rounded-64"
            } `}
          >
            {price && (
              <>
                <span className="decoration-gray-950 line-through opacity-50 text-sm">
                  {formatWithCommas(price)}
                </span>
                <span className="bg-Error-extralight px-1 rounded-8 flex items-center text-xs text-error">
                  <span>{discount}</span>
                  <span>%</span>
                </span>
              </>
            )}
          </div>
        </div>
        <div className="flex gap-2 w-full justify-between">
          <div
            className={`w-24 ${
              !title && "animate-pulse bg-slate-200 w-1/2 h-4 rounded-64"
            } `}
          >
            <p className=" text-2xs truncate">{description}</p>
          </div>
          <div
            className={`text-xs ${
              !title && "animate-pulse bg-slate-200 w-1/2 h-4 rounded-64"
            } `}
          >
            {title && <span>{formatWithCommas(finalPrice)} تومان</span>}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div
              className={` ${
                !title && "animate-pulse bg-slate-200 w-4 h-4 rounded-64"
              } `}
            >
              {title && (
                <div className="rating gap-1 w-4">
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-heart bg-error"
                    //   checked
                  />
                </div>
              )}
            </div>
            <div
              className={` ${
                !title && "animate-pulse bg-slate-200 w-16 h-4 rounded-64"
              } `}
            >
              {title && (
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-yellow-300"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-yellow-300 "
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-yellow-300"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-yellow-300"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-yellow-300"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="w-full text-end">
            <button
              className={` px-2 rounded-4 py-2 text-xs xl:text-base mt-3 ${
                !title
                  ? "animate-pulse bg-slate-200 text-transparent "
                  : "bg-primary text-white "
              } `}
            >
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalFood;
