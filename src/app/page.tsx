import Promotion from "@/components/Promotion";
import ProductCard from "@/components/productCard";
import { About } from "@/components/view/About";
import Hero from "@/components/view/Hero";
import { NewsLetter } from "@/components/view/NewsLetter";

export default function Home() {
  return (
    <main className="px-0  md:px-10">
      <Hero />
      <Promotion />
      <ProductCard />
      <About />
      <NewsLetter />
    </main>
  );
}
