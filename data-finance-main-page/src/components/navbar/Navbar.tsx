import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import MenubarItem from "./MenubarItem";
import NavbarLinkItem from "./NavbarLinkItem";

const Navbar = () => {
  const [isOpenMenuBar, setIsOpenMenuBar] = useState(false);

  const toggleMenuBar = () => {
    setIsOpenMenuBar(!isOpenMenuBar);
  };

  const menuItems = ["Home", "Company", "Resources", "About", "Contact"];

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">React.</h1>

      {/* Desktop navigation */}
      <ul className="hidden sm:flex">
        {menuItems.map((item, index) => (
          <NavbarLinkItem text={item} key={index} />
        ))}
      </ul>

      {/* Mobile menu toggle */}
      <div onClick={toggleMenuBar} className="sm:hidden cursor-pointer">
        {isOpenMenuBar ? <MdClose size={24} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* SideNavMenu for mobile */}
      <div
        className={`fixed w-3/5 h-full pt-4 bg-zinc-950 left-0 top-0 transition-transform duration-500 ease-in ${
          isOpenMenuBar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h1 className="w-full text-3xl font-bold m-4 text-[#00df9a]">React.</h1>
        <ul className="uppercase p-2 pt-4">
          {menuItems.map((item, index) => (
            <MenubarItem text={item} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
