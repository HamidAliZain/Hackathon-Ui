import Product from "@/components/ProductList";
import { Products } from "@/utils/mock";
import { StaticImageData } from "next/image";

const products = () => {
  return (
    <>
      <div className="flex gap-x-2  justify-evenly mt-16 mb-4 flex-wrap">
        {Products.map((product) => (
          <Product
            key={product.id}
            title={product.name}
            price={product.price}
            category={product.category}
            id={product.id}
            img={product.img as StaticImageData}
            tagline={product.tagline}
          />
        ))}{" "}
      </div>
    </>
  );
};

export default products;
