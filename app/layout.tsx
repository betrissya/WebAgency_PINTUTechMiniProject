import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Hoc/Provider";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const font=Rubik({
  weight:['300','400','500','700','600','800','900'],
  subsets:['latin'],
})

export const metadata: Metadata = {
  title: "Web agency | Next.js + Tailwind CSS",
  description: 
    "A modern web agency website built with Next.js and styled with Tailwind CSS.",
};

export default function RootLayout({ 
  children,
 }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} h-full antialiased`}>
        <Provider>
          <ResponsiveNav />
          {children}
          <Footer />
          <ScrollToTop />
          </Provider>
      </body>
    </html>
  );
}
