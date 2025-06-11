import { useState } from "react";
import Logo from "../assets/honey_bunny_logo-removebg-preview.png";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeSidebar = () => setOpen(false);

  return (
    <div className="relative">
      {open && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-40 z-30"
          onClick={closeSidebar}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#2a2929] text-white transform transition-transform duration-300 z-40 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 flex items-center justify-between border-b border-gray-700">
          <span className="text-xl font-bold font-[Playpen_Sans]">
            Quick Links
          </span>
          <FiX className="text-2xl cursor-pointer" onClick={closeSidebar} />
        </div>
        <ul className="p-4 space-y-4 font-[Playpen_Sans]">
          <li className="hover:text-yellow-300 cursor-pointer">Home</li>
          <li className="hover:text-yellow-300 cursor-pointer">Menu</li>
          <li className="hover:text-yellow-300 cursor-pointer">About</li>
          <li className="hover:text-yellow-300 cursor-pointer">Contact Us</li>
        </ul>
      </div>

      <div className="h-15 bg-[#211f1f] flex items-center justify-between">
        <div className="logo-container flex items-center gap-2 pl-2 overflow-hidden min-w-0 w-full">
          <button onClick={() => setOpen(!open)} className="text-xl shrink-0">
            {open ? (
              <FiX className="text-white w-6 h-6" />
            ) : (
              <FiMenu className="text-white w-6 h-6" />
            )}
          </button>
          <img src={Logo} alt="Logo" className="h-10 w-auto shrink-0" />
          <div className="flex flex-col truncate">
            <span className="text-white font-bold text-sm font-[Playpen_Sans] leading-tight truncate">
              Honey Bunny
            </span>
            <span className="text-white font-bold text-sm font-[Playpen_Sans] leading-tight truncate">
              Restaurant
            </span>
          </div>
        </div>

        <div className="nav-items">
          <div className="nav-links"></div>
          <div className="auth-btns flex gap-1">
            <button className="bg-[#facf1d] rounded-3xl w-20 h-10 font-bold">
              SignUp
            </button>
            <button className="bg-white rounded-3xl w-20 h-10 font-bold mr-2">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
