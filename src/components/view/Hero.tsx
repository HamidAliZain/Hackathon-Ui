import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroImage from "/public/hero.webp";
import Brand1 from "/public/brand1.webp";
import Brand2 from "/public/brand2.webp";
import Brand3 from "/public/brand3.webp";
import Brand4 from "/public/brand4.webp";
const Hero = () => {
  return (
    <section className="flex flex-col gap-y-10  justify-between  items-center lg:flex-row">
      <div className="flex-1">
        <Badge className="py-3 px-6 rounde-md bg-blue-200 text-blue-600">
          Sale 50%
        </Badge>{" "}
        <h1 className="scroll-m-20 text-4xl text-center font-extrabold tracking-tight lg:text-left lg:text-5xl mt-6">
          An Industrial Take on Streetwear{" "}
        </h1>{" "}
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-center  lg:text-left ">
          Once upon a time, in a far-off land, there was a very lazy king who
          spent all day lounging on his throne. One day, his advisors came to
          him with a problem: the kingdom was running out of money.
        </p>
        <div className="flex  justify-center lg:justify-start">
          <Button className=" w-2/3 h-12  mt-4 px-8 rounded-lg    bg-black text-white sm:w-1/2 lg:w-1/2">
            Start Shopping
          </Button>{" "}
        </div>
        <div className="flex  gap-6 justify-center lg:justify-start  flex-wrap mt-8">
          <Image src={Brand1} alt="brand1" />
          <Image src={Brand2} alt="brand1" />
          <Image src={Brand3} alt="brand1" />
          <Image src={Brand4} alt="brand1" />
        </div>
      </div>
      <div className="hidden  relative justify-center items-center  lg:flex">
        <div className=" w-[620px]  h-[620px] -z-10 rounded-full bgpink absolute bottom-0"></div>
        <Image src={HeroImage} alt="hero" />{" "}
      </div>
    </section>
  );
};

export default Hero;
