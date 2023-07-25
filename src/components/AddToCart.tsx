"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
const AddToCart = (props: {
  prname: string;
  price: number;
  img: StaticImageData | string;
  id: number;
}) => {
  const [addProduc, setAddProduc] = useState<any[]>([]);
  function chekin() {
    const p = { name: props.prname };
    setAddProduc([...addProduc, p]);
    console.log(addProduc);
  }
  return (
    <button
      onClick={chekin}
      className="bg-black text-white px-4  py-2 rounded-md"
    >
      Add To Cart
    </button>
  );
};

export default AddToCart;
