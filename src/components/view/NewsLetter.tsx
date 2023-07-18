import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const NewsLetter = () => {
  return (
    <section className="flex items-center gap-y-5 py-24 flex-col ">
      {" "}
        <h5 className="text-3xl font-bold mt-16 sm:text-5xl text-center">
          Subscribe Our Newsletter
        </h5>
      <div className="relative flex flex-col items-center  justify-center py-4">
        <p className="text-center  ">
          Get the latest information and promo offers directly
        </p>
        <div className="absolute font-bold text-6xl  -z-50 -m-24 text-gray-200  sm:text-8xl">
          NewsLetter
        </div>
      </div>
      <div className="flex gap-3 items-center justify-center">
        <Input placeholder="Email" />{" "}
        <Button className="bg-black text-white w-1/2 px-2 py-2">
          Get Started
        </Button>
      </div>
    </section>
  );
};
