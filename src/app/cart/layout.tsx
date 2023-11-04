"use client";

import { PropsWithChildren } from "react";
import { ShoppingCart, Wallet2, TickSquare } from "iconsax-react";
import { useSelectedLayoutSegment } from "next/navigation";
import DesktopStepper from "@/components/cartStepper/DesktopStepper";

const Layout = ({ children }: PropsWithChildren) => {
  const selectedStep = useSelectedLayoutSegment();

  const cartItems = [
    { id: 1, title: "سبد خرید", step: "basket", icon: <ShoppingCart /> },
    {
      id: 2,
      title: "تکمیل اطلاعات",
      step: "information",
      icon: <TickSquare />,
    },
    { id: 3, title: "پرداخت", step: "payment", icon: <Wallet2 /> },
  ];

  const isActive = (item: any) => {
    const itemIndex = cartItems.indexOf(item);
    const currentIndex = cartItems.findIndex(
      (item) => item.step === selectedStep
    );
    return itemIndex <= currentIndex;
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mx-auto flex justify-center item-center w-4/5 2xl:w-1/2  my-10">
        <DesktopStepper isActive={isActive} cartItems={cartItems} />
      </div>
      {children}
    </div>
  );
};

export default Layout;
