import Link from "next/link";
import Logo from "../../public/Logo .webp";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <nav className="hidden justify-between items-center py-6 px-8 md:flex ">
      <Image src={Logo} alt="Logo" className="w-48" />{" "}
      <ul className="flex gap-x-6">
        <li className="text-sm  lg:text-lg">
          <Link href={"./"}>Female</Link>
        </li>
        <li className="text-sm  lg:text-lg">
          <Link href={"./"}>Male</Link>
        </li>
        <li className="text-sm  lg:text-lg">
          <Link href={"./"}>Kids</Link>
        </li>
        <li className="text-sm  lg:text-lg">
          <Link href={"./"}>All Product</Link>
        </li>
      </ul>
      <Input
        type="search"
        placeholder="search"
        className="w-1/4 lg:w-1/3 rounded-lg"
      />
      <div className="w-10 h-10 flex justify-center items-center bg-gray-200 rounded-full">
        <ShoppingCart className="w-6 h-6" />
      </div>{" "}
    </nav>
  );
};

export default Header;
