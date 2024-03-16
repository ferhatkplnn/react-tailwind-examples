const MenubarItem = ({ text }: { text: string }) => {
  return (
    <li className="relative p-4 border-b border-zinc-800 cursor-pointer hover:bg-zinc-900 left-0 hover:left-8 duration-300">
      {text}
    </li>
  );
};

export default MenubarItem;
