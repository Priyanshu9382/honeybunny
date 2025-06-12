import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/honey_bunny_logo-removebg-preview.png";
import { FiMenu, FiX } from "react-icons/fi";

const linkVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
};
const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.8, 
      staggerChildren: 0.3, 
      duration: 1
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const closeSidebar = () => setOpen(false);

  return (
    <div className="relative">
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30"
          onClick={closeSidebar}
        ></div>
      )}

      <motion.div
        className={`fixed top-0 left-0 h-full w-64 bg-[#2a2929] text-white z-40 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        initial={{ x: "-100%" }}
        animate={{ x: open ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 flex items-center justify-between border-b border-gray-700">
          <span className="text-xl font-bold font-[Playpen_Sans]">
            Quick Links
          </span>
          <FiX className="text-2xl cursor-pointer" onClick={closeSidebar} />
        </div>
        <ul className="p-4 space-y-4 font-[Playpen_Sans]">
          {["Home", "Menu", "About", "Contact Us"].map((item, i) => (
            <motion.li
              key={item}
              className="hover:text-yellow-300 cursor-pointer"
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              custom={i}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <div className="h-15 bg-[#211f1f] flex items-center justify-between">
        <div className="logo-container flex items-center gap-2 pl-2 overflow-hidden min-w-0 w-full">
          <button onClick={() => setOpen(!open)} className="text-xl shrink-0">
            {open ? (
              <FiX className="text-white w-6 h-6" />
            ) : (
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <FiMenu className="text-white cursor-pointer w-6 h-6" />
              </motion.div>
            )}
          </button>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 pl-2 overflow-hidden min-w-0 w-full"
          >
            <img
              src={Logo}
              alt="Logo"
              className="h-10 w-auto cursor-pointer shrink-0"
            />
            <div className="flex flex-col truncate">
              <span
                className="text-white font-bold cursor-pointer text-sm font-[Playpen_Sans] leading-tight truncate"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                Honey Bunny
              </span>
              <span className="text-white font-bold cursor-pointer text-sm font-[Playpen_Sans] leading-tight truncate">
                Restaurant
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="auth-btns flex gap-1 pr-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            className="bg-[#facf1d] rounded-3xl w-20 h-10 font-bold"
            variants={buttonVariants}
          >
            SignUp
          </motion.button>
          <motion.button
            className="bg-white rounded-3xl w-20 h-10 font-bold"
            variants={buttonVariants}
          >
            Login
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
