"use client";
import Link from "next/link";
import Logo from "../../../public/Logo.webp";
import Image from "next/image";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Header = () => {
  const [condition, setCondition] = useState(false);
  function hamburger() {
    setCondition(!condition);
  }
  function closeOnSmallScreen() {
    setCondition(false);
  }
  return (
    <>
      <nav className=" justify-between items-center py-6 px-8 flex ">
        <Link href={"/"}>
          <Image src={Logo} alt="Logo" className="w-48" />{" "}
        </Link>
        <ul className="hidden  gap-x-6 md:flex">
          <li className="text-sm  lg:text-lg">
            <Link href={"/category/female"}>Female</Link>
          </li>
          <li className="text-sm  lg:text-lg">
            <Link href={"/category/male"}>Male</Link>
          </li>
          <li className="text-sm  lg:text-lg">
            <Link href={"/category/kids"}>Kids</Link>
          </li>
          <li className="text-sm  lg:text-lg">
            <Link href={"/products"}>All Product</Link>
          </li>
        </ul>
        <Input
          type="search"
          placeholder="search"
          className="hidden w-1/4 lg:w-1/3 rounded-lg md:block"
        />
        <div className="hidden w-10 h-10  justify-center items-center bg-gray-200 rounded-full md:flex">
          <Link href={"/cart"}>
            <ShoppingCart className="w-6 h-6" />
          </Link>
        </div>{" "}
        <div className="block md:hidden">
          <Menu onClick={hamburger} />
        </div>
      </nav>
      <div
        className={
          condition
            ? "bg-white w-full  flex justify-center items-center   fixed top-0  h-screen transition-all ease"
            : "hidden"
        }
      >
        {" "}
        <X
          onClick={hamburger}
          className="absolute text-6xl top-5 right-5"
        />{" "}
        <div className="flex justify-center items-center ">
          {" "}
          <ul className="gap-y-6">
            <li className="text-lg">
              <Link onClick={closeOnSmallScreen} href={"/category/female"}>
                Female
              </Link>
            </li>
            <li className="text-lg">
              <Link onClick={closeOnSmallScreen} href={"/category/male"}>
                Male
              </Link>
            </li>
            <li className="text-lg">
              <Link onClick={closeOnSmallScreen} href={"/category/kids"}>
                Kids
              </Link>
            </li>
            <li className="text-lg">
              <Link onClick={closeOnSmallScreen} href={"/products"}>
                All Product
              </Link>
            </li>{" "}
            <Link href={"/cart"}>
              <div className="  w-10 h-10 flex   justify-center items-center bg-gray-200 rounded-full  ">
                <Link href={"/cart"}>
                  <ShoppingCart
                    onClick={closeOnSmallScreen}
                    className="w-6 h-6"
                  />
                </Link>
              </div>{" "}
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
