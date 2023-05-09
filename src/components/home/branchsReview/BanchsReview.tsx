import Image from "next/image";

const BranchsReview = () => {
  const branchsData = [
    {
      id: 1,
      title: "شعبه اکباتان",
      address: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
      imgSrc: "/images/ekbatanImg.png",
    },
    {
      id: 2,
      title: "شعبه چالوس",
      address:
        "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی",
      imgSrc: "/images/chaloosImg.png",
    },
    {
      id: 3,
      title: "شعبه اقدسیه",
      address: "خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸",
      imgSrc: "/images/aghdasieImg.png",
    },
    {
      id: 4,
      title: "شعبه ونک",
      address: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶",
      imgSrc: "/images/vanakImg.png",
    },
  ];

  return (
    <section className="mt-6 md:mt-10">
      <p className="text-center text-base md:text-2xl font-bold ">ترخینه گردی</p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-3 md:gap-x-4 mt-4 md:mt-6 px-[7vw]">
        {branchsData.map((branch) => (
          <div
            key={branch.id}
            className="flex md:flex-col justify-between border border-Gray-4 hover:border-primary rounded-4 md:rounded-8 overflow-hidden sm:h-[150px] md:h-[344px] hover:shadow-cards-shadow transition-all"
          >
            <div className="relative w-[150px] sm:w-[280px] md:h-full md:w-full">
              <Image
                src={branch.imgSrc}
                alt={branch.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="flex flex-col justify-center text-neutral my-3 mx-4 md:h-[100px]">
              <p className="text-sm md:text-base lg:text-lg xl:text-xl font-bold text-center mb-1">
                {branch.title}
              </p>
              <p className="text-xs md:text-sm font-bold w-[200px] md:w-full text-center">
                {branch.address}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BranchsReview;
