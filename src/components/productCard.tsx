import Product from "./view/ProductList";
import p1 from "/public/p1.webp";
import { Products } from "@/utils/mock";
const ProductCard = () => {
  const productlimit = Products.slice(0, 3);
  return (
    <>
      <h2 className="text-center mt-24 mb-16 font-bold text-xl sm:text-3xl md:text-4xl">
        Check What We Have
      </h2>
      <div className="flex    justify-center   flex-wrap gap-5 transition-all ease-linearm ">
        {productlimit.map((product) => (
          <div key={product.id}>
            <Product
              key={product.id}
              title={product.name}
              price={product.price}
              img={p1}
              category={product.category}
              id={product.id}
              tagline={product.tagline}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCard;
