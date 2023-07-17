import Image from "next/image";
import P1 from "/public/p1.webp";
export const About = () => {
  return (
    <section className="mt-28">
      <div className="flex justify-start xl:justify-end -mb-12">
        <h2 className="text-2xl max-w-full font-extrabold tracking-wide sm:text-3xl xl:text-5xl  xl:max-w-lg">
          Unique and Authentic Vintage Designer Jewellery
        </h2>
      </div>
      <div className="flex flex-col   items-center bg-[#eaeffa57] py-20 xl:flex-row">
        <div className="relative flex flex-col justify-center   items-center  flex-wrap  py-4  gap-x-5  px-0 w-full sm:px- 4 xl:w-1/2 md:flex-row">
          <div className="flex flex-col items-center py-3 px-2 w-full md:w-2/5">
            <div>
              <h4 className="text-lg font-bold">
                Using Good Quality Materials
              </h4>
              <p className="text-base mt-3">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center py-3 px-2 w-full md:w-2/5">
            <div>
              <h4 className="text-lg font-bold">Modern Fashion Design</h4>
              <p className="text-base mt-3">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center py-3 px-2 w-full md:w-2/5">
            <div>
              <h4 className="text-lg font-bold">100% Handmade Products</h4>
              <p className="text-base mt-3">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="   flex flex-col items-center py-3 px-2 w-full md:w-2/5">
            <div>
              {" "}
              <h4 className="text-lg font-bold">Discount for Bulk Orders</h4>
              <p className="text-base mt-3">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="absolute flex  justify-center items-center -z-40  p-4 ">
            <h4 className="text-6xl   font-bold text-gray-200  sm:text-8xl max-w-md md:max-w-5xl  lg:max-w-2xl  xl:max-w-lg ">
              Different from others
            </h4>
          </div>
        </div>
        <div className="flex flex-col gap-3 px-3    w-full xl:w-1/2  sm:flex-row">
          <Image src={P1} alt="p1" className="mx-auto xl:max-0" />{" "}
          <div className="px-3 flex flex-col justify-center gap-y-5 ">
            <p className=" mt-4 text-center  sm:text-left ">
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>{" "}
            <button className="bg-black  text-white px-4 py-4 w-full md:w-1/2  xl:w-full">
              All Prouducta
            </button>
          </div>
        </div>
      </div>{" "}
    </section>
  );
};
