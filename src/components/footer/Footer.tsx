import Image from "next/image";
import Logo from "public/Logo.webp";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex flex-col  my-12 w-full space-y-3  px-9 md:flex-row">
      <div className="w-full space-y-5 md:w-1/2">
        <Image src={Logo} alt=";o" className="w-40" />
        <p className="text-gray-500 max-w-md    md:max-w-sm  ">
          Small, artisan label that offers a thoughtfully curated collection of
          high quality everyday essentials made.
        </p>{" "}
        <div className="flex gap-x-3 ">
          {" "}
          <Facebook className="bg-slate-200 h-10  text-black  w-10  p-2" />
          <Twitter className="bg-slate-200 h-10  text-black  w-10  p-2" />
          <Linkedin className="bg-slate-200 h-10  text-black  w-10  p-2" />
        </div>
      </div>
      <div className="flex flex-col flex-wrap gap-y-4 justify-between w-1/2 md:flex-row ">
        <div className="space-y-2  ">
          <h2 className="text-xl font-bold text-gray-500">Compony</h2>{" "}
          <p className="text-lg  ">About</p>{" "}
          <p className="text-lg  ">Terms of Use</p>{" "}
          <p className="text-lg  ">Privacy Policy</p>{" "}
          <p className="text-lg  ">How it Works</p>{" "}
          <p className="text-lg  ">Contact Us</p>{" "}
        </div>
        <div className="space-y-2  ">
          <h2 className="text-xl font-bold text-gray-500">Support</h2>{" "}
          <p className="text-lg  ">Quick Chat</p>{" "}
          <p className="text-lg  ">Support Carrer</p>{" "}
          <p className="text-lg  ">24h Service</p>{" "}
        </div>
        <div className="space-y-2   ">
          <h2 className="text-xl font-bold text-gray-500">Contact</h2>{" "}
          <p className="text-lg  ">Whatsapp</p>{" "}
          <p className="text-lg  ">Facebook</p>{" "}
          <p className="text-lg  ">Support 24h</p>{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
