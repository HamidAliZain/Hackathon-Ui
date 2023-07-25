import Promotion from "@/components/Promotion";
import ProductCard from "@/components/productCard";
import { About } from "@/components/view/About";
import Hero from "@/components/view/Hero";
import { NewsLetter } from "@/components/view/NewsLetter";

export default function Home() {
  return (
    <main>
      {" "}
      {/* <div className="grid grid-cols-[200px,1fr,aur]  ">
         <div className="bg-yellow-500">1</div>{" "}
        <div className="bg-amber-400">2</div>{" "}
      </div> */}
      <Hero />
      <Promotion />
      <ProductCard />
      <About />
      <NewsLetter />
    </main>
  );
}
