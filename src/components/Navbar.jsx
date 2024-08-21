import { appleImg, bagImg, searchImg } from "../utils";
function Navbar() {
  return (
    <header className="w-full py-5 sm: px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="apple" width={14} height={18} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {["Phones", "Tablets", "MacBooks"].map((item) => (
            <div key={item} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">{item}</div>
          ))}
        </div>
        <div className="flex gap-7 items-baseline max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} width={18} height={18} alt="search" className="cursor-pointer"/>
          <img src={bagImg} width={18} height={18} alt="bag" className="cursor-pointer"/>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
