import AddToCart from "@/components/AddToCart";
import { Quantity } from "@/components/Quantity";
import { Products } from "@/utils/mock";
import Image, { StaticImageData } from "next/image";
const getProductCategory = (id: number) => {
  return Products.filter((product) => product.id == id);
};
const productDetailedPage = ({ params }: { params: { id: number } }) => {
  const result = getProductCategory(params.id);
  const sizes = ["xs", "sm", "md", "lg", "xl"];
  return (   
    <>
      {result.map((product) => {
        return (
          <>
            <div
              key={product.id}
              className="bg-zinc-100 flex flex-col justify-center gap-y-5 py-4  mx-6  px-4 md:flex-row md:gap-x-5   "
            >
              <div className="flex gap-x-2 flex-col-reverse md:flex-row   gap-y-3    ">
                <div className=" flex flex-row flex-wrap gap-x-3  gap-y-3 md:flex-col justify-center    items-center sm:justify-start">
                  <Image
                    src={product.img}
                    alt={product.name}
                    className="w-20 h-20  rounded-lg "
                  />
                  <Image
                    src={product.img}
                    alt={product.name}
                    className="w-20 h-20  rounded-lg "
                  />
                  <Image
                    src={product.img}
                    alt={product.name}
                    className="w-20 h-20  rounded-lg "
                  />
                  <Image
                    src={product.img}
                    alt={product.name}
                    className="w-20 h-20  rounded-lg "
                  />
                </div>
                <Image
                  src={product.img}
                  alt={product.name}
                  className="w-[400px]     rounded-lg "
                />
              </div>
              <div className="flex justify-center flex-col ">
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
                  {product.name}
                </h3>
                <p className="scroll-m-20  text-2xl font-semibold tracking-tight transition-colors first:mt-0 text-gray-400">
                  {product.tagline}
                </p>{" "}
                <div>
                  <h3 className="text-base mt-6 font-semibold">SELECT SIZE</h3>
                  <div className="flex  gap-x-4 flex-wrap">
                    {sizes.map((size) => {
                      return (
                        <div className="mt-3 center  cursor-pointer bg-white  w-10 h-10  duration-300 rounded-full border-2 border-white hover:shadow-xl ">
                          <span className="text-sm text-center text-gray-400   cursor-pointer">
                            {size.toUpperCase()}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex items-center gap-x-3 mt-4">
                  <h3 className="font-semibold text-base">Quantity</h3>{" "}
                  <Quantity />
                </div>{" "}
                <div className="flex items-center gap-x-3 mt-4">
                  <AddToCart
                    prname={product.name}
                    price={product.price}
                    id={product.id}
                    img={product.img}
                  />
                  <h4 className="text-2xl font-bold">$ {product.price}</h4>
                </div>{" "}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default productDetailedPage;
