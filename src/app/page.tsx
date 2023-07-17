import Promotion from "@/components/Promotion";
import ProductCard from "@/components/productCard";
import { About } from "@/components/view/About";
import Hero from "@/components/view/Hero";

export default function Home() {
  return (
    <main className="  md:px-10">
      <Hero />
      <Promotion />
      <ProductCard />
      <About />
    </main>
  );
}
