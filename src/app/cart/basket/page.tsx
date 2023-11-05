import Link from "next/link";

const BasketPage = () => {
  return (
    <div className="border border-Gray-4 w-full h-full rounded-8 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center text-primary gap-4">
        <h4>شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!</h4>
        <button className="border border-primary rounded-4 px-8 py-2 cursor-pointer hover:bg-primary hover:text-white transition-all ">
          <Link href="/menu">منوی رستوران</Link>
        </button>
      </div>
    </div>
  );
};

export default BasketPage;
