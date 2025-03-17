import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import BottomFooter from "@/component/BottomFooter";
import Rate from "@/component/Rate";
import Newsletter from "@/component/Newsletter";

export const metadata: Metadata = {
  title: "ElsonifyTech",
  description: "Innovative Limitless. A leading tech company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-sm cover-up"
      >
          <Navbar />
          {children}
          <div className="py-6 flex justify-start w-full px-4 md:px-0">
            <div className="container m-auto ">
              <Rate />
            </div>
          </div>
          <div className="bg-gray-800 mt-4 py-6 w-full">
            <div className="container m-auto flex flex-wrap items-center gap-6 lg:gap-16">
              <Newsletter />
            </div>
          </div>
          <div className="w-full">
            <div className="container m-auto px-4 lg:px-0">
              <Footer />
            </div>
          </div>
          <div className="border-t border-gray-500 w-full">
            <div className="container m-auto px-4 lg:px-0">
              <BottomFooter />
            </div>
          </div>
      </body>
    </html>
  );
}
