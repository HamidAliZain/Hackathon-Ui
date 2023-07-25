import { ShoppingBag } from "lucide-react";
const cart = () => {
  return (
    <section className="px-12">
      <h3 className="text-3xl font-bold mt-4">Shopping Cart</h3>
      <div className="flex flex-col items-center  ">
        {" "}
        <ShoppingBag className="mt-12" size={140} />
        <h3 className="text-xl font-bold mt-4 text-center sm:text-2xl">Your shopping bag is empty</h3>
      </div>
    </section>
  );
};

export default cart;
