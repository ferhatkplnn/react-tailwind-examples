const NavbarLinkItem = ({ text }: { text: string }) => {
  return (
    <div className="group">
      <li className="p-4 pb-1 cursor-pointer">
        {text}
        <div className="bg-white h-0.5 w-0 group-hover:w-full  duration-500 ease-out"></div>
      </li>
    </div>
  );
};

export default NavbarLinkItem;
