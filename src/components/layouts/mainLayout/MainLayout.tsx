import react, { ReactNode } from "react";
import MainNav from "./mainNav/MainNav";
import Footer from "./footer/Footer";

interface IMainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <>
      <MainNav />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
