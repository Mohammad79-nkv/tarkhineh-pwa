import Footer from "@/components/layouts/mainLayout/footer/Footer";
import "../styles/globals.css";
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import MainNav from "@/components/layouts/mainLayout/mainNav/MainNav";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MainNav />
        <section className="min-h-screen">{children}</section>
        <Footer />
      </body>
    </html>
  );
}
