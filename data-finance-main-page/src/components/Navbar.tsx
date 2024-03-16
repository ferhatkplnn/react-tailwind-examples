import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import MenubarItem from "./MenubarItem";
import NavbarLinkItem from "./NavbarLinkItem";

const Navbar = () => {
  const [isOpenMenuBar, setIsOpenMenuBar] = useState(false);

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">React.</h1>
      <ul className="hidden sm:flex">
        {["Home", "Company", "Resources", "About", "Contact"].map((item) => (
          <NavbarLinkItem text={item} />
        ))}
      </ul>
      <div
        onClick={() => setIsOpenMenuBar(!isOpenMenuBar)}
        className="sm:hidden"
      >
        {isOpenMenuBar ? (
          <MdClose size={24} className="cursor-pointer" />
        ) : (
          <AiOutlineMenu size={20} className="cursor-pointer" />
        )}
      </div>

      {/* SideNavMenu for mobile */}
      <div
        className={`fixed w-3/5 h-full pt-4  bg-zinc-950 left-0 top-0 ${
          isOpenMenuBar ? "translate-x-0" : "-translate-x-full"
        } duration-500 ease-in`}
      >
        <h1 className="w-full text-3xl font-bold m-4 text-[#00df9a]">React.</h1>
        <ul className="uppercase p-2 pt-4 ">
          {["Home", "Company", "Resources", "About", "Contact"].map((item) => (
            <MenubarItem text={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
