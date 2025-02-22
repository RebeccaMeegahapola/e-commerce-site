import { Geist, Geist_Mono } from "next/font/google";
import {Navbar} from "@/components/navbar";
import Image from "next/image";
import bgImage from "../../public/assets/bg-img.png"
import {ProductSection} from "@/components/product-section";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)]`}
    >
      <Navbar />
      <main className="w-full">
          <Image
              src={bgImage}
              alt="background image"
              className="w-full h-screen object-cover"
          />
          <ProductSection />
      </main>
    </div>
  );
}
