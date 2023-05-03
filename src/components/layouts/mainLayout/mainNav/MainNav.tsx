import { Logo } from "@/components/icons/Logo";
import { User, ShoppingCart, HambergerMenu, SearchNormal1 } from "iconsax-react";
import Link from "next/link";

const MainNav = () => {
  return (
    <nav className="bg-White h-[64PX] text-Primary flex items-center justify-between px-[20px] py-[16px] md:px-[7vw]">
      <div className="flex gap-2">
        <Link href={"/"}>
          <div className="bg-Tint-1 px-[4px] py-[8px] w-6 rounded-[4px]">
            <User />
          </div>
        </Link>
        <Link href={"/"}>
          <div className='bg-Tint-1 px-[4px] py-[8px] w-6 rounded-[4px]'>
            <ShoppingCart />
          </div>
        </Link>
        <Link href={"/"}>
          <div className='bg-Tint-1 px-[4px] py-[8px] w-6 rounded-[4px]'>
            <SearchNormal1 />
          </div>
        </Link>
      </div>
      <div className='hidden md:block'>
        <ul className='flex md:gap-4 lg:gap-6'>
            <li>صفحه اصلی</li>
            <li>شعبه</li>
            <li>منو</li>
            <li>اعطای نمایندگی</li>
            <li>درباره ما</li>
            <li>تماس با ما</li>
        </ul>
      </div>
      <div className='w-[110px]'>
        <Link href={"/"}>
          <div>
            <Logo />
          </div>
        </Link>
      </div>
      <div className="md:hidden">
        <span>
          <HambergerMenu />
        </span>
      </div>
    </nav>
  );
};

export default MainNav;
