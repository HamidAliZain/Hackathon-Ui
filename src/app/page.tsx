import Promotion from "@/components/view/Promotion";
import ProductCard from "@/components/view/productCard";
import { About } from "@/components/view/About";
import Hero from "@/components/view/Hero";
import { NewsLetter } from "@/components/view/NewsLetter";

export default function Home() {
  return (
    <main>
      
      <Hero />
      <Promotion />
      <ProductCard />
      <About />
      <NewsLetter />
    </main>
  );
}
