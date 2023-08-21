import Image from "next/image";
import girl from "/public/girl.webp";
import man1 from "/public/man1.webp";
import man2 from "/public/man2.webp";

const Promotion = () => {
  return (
    <section>
      <h2 className="text-center mt-24 mb-16 font-bold text-xl sm:text-3xl md:text-4xl">
        Our Promotions Events
      </h2>
      {/* {"main div "} */}
      <div className="flex flex-col  gap-x-3 w-full lg:flex-row ">
        {/* {"left container"} */}
        <div className="flex flex-col gap-y-5 w-full lg:w-1/2  [45%]">
          {/* { right content  1 } */}
          <div className="flex flex-col bg-gray-300  justify-between    pt-6 items-center sm:px-16">
            <div>
              <h2 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl">
                GET UP TO 60%
              </h2>
              <p className="text-center mt-2">For the summer season</p>{" "}
            </div>
            <Image src={girl} alt="girl" className="mt-8" />
          </div>
          <div className="flex flex-col text-white bg-slate-800 justify-center  pb-4 pt-6 items-center sm:px-16">
            <h2 className="text-center font-bold text-xl sm:text-3xl md:text-4xl">
              GET UP TO 60%
            </h2>
            <div className="mt-5">
              <p className="text-center">USE PROMO CODE</p>{" "}
              <button className="mt-2 bg-slate-600 px-4 text-sm font-bold  py-2 rounded-lg">
                DINEWEEKENDMARKET
              </button>
            </div>
          </div>
        </div>
        {/* {"right container"} */}{" "}
        <div className="flex w-full flex-col gap-x-3  md:flex-row   lg:w-1/2">
          {/* {"right content 1"} */}{" "}
          <div className="bg-[#efe1c7] w-full flex justify-between flex-col px-4 pt-5 mt-4 md:w-1/2 lg:mt-0 ">
            <div className="text-lg flex flex-col">
              <h4>Flex Sweatshirt</h4>
              <p>
                <del>$100 </del>
                <span className="font-bold">00$75.00</span>
              </p>
            </div>{" "}
            <div>
              <Image src={man1} alt="man" className="mx-auto  mt-12" />
            </div>
          </div>
          {/* {"right content 2"} */}{" "}
          <div className="bg-[#d7d7d9] w-full flex justify-between flex-col  px-4  pt-5 pl-3 mt-4 md:w-1/2 lg:mt-0 ">
            <div className="text-lg">
              <h4>Flex Sweatshirt</h4>
              <p>
                <del>$100 </del>
                <span className="font-bold">00$75.00</span>
              </p>
            </div>{" "}
            <div>
              <Image src={man2} alt="man" className="mx-auto  mt-12 " />
            </div>
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default Promotion;
