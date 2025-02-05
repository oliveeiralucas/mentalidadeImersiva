import HeroSection from "@/components/ebook/HeroSection";
import Chapters from "@/components/ebook/Chapters";
import WhyRead from "@/components/ebook/WhyRead";
import Offer from "@/components/ebook/Offer";
import Steps from "@/components/ebook/Steps";
import About from "@/components/ebook/About";
import FAQ from "@/components/ebook/FAQ";
import Download from "@/components/ebook/Download";
import Footer from "@/components/ebook/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      <HeroSection />
      <Chapters />
      <WhyRead />
      <Offer />
      <Steps />
      <About />
      <FAQ />
      <Download />
      <Footer />
    </main>
  );
}
