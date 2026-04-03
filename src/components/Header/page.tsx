function Header() {
  return (
    <nav className="flex justify-between w-full px-10 items-center py-6 bg-[#f4f3ef]">
      <h1 className="text-3xl font-bold tracking-tighter">Poliform</h1>
      <ul className="flex flex-row gap-8 list-none text-sm font-medium uppercase tracking-widest">
        <li className="cursor-pointer hover:opacity-60 transition-opacity">
          Product
        </li>
        <li className="cursor-pointer hover:opacity-60 transition-opacity">
          Lifestyle
        </li>
        <li className="cursor-pointer hover:opacity-60 transition-opacity">
          News
        </li>
        <li className="cursor-pointer hover:opacity-60 transition-opacity">
          Projects
        </li>
      </ul>
    </nav>
  );
}

export default Header;
