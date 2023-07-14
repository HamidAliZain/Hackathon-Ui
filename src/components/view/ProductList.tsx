import Image, { StaticImageData } from "next/image";
import Link from "next/link";
const Product = (props: {
  title: string;
  price: number;
  img: StaticImageData;
  category: string;
  id: number;
  tagline: string;
}) => {
  return (
    <Link href={`/products/${props.id}`}>
        <Image src={props.img} alt="p1" />
        <h3 className="text-lg  font-bold ">{props.title} </h3>
        <p className="text-lg  font-bold text-gray-500"> {props.tagline}</p>
        <p className="text-lg  font-bold "> {props.price}</p>
    </Link>
  );
};

export default Product;
