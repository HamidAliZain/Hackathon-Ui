import Product from "@/components/ProductList";
import { Products } from "@/utils/mock";
import { StaticImageData } from "next/image";
const getProductCategory = (category: string) => {
  return Products.filter((product) => product.category == category);
};
const Catagory = ({ params }: { params: { slug: string } }) => {
  const result = getProductCategory(params.slug);
  return (
    <div className="flex gap-x-3  justify-evenly mt-16 mb-4 flex-wrap">
      {result.map((product) => (
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
  );
};

export default Catagory;
