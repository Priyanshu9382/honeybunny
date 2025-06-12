import React from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 150 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
    },
  }),
};

const Footer = () => {
  return (
    <div>
      <div className="w-full min-h-[70vh] bg-black flex flex-col justify-evenly">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="w-full flex justify-center items-center"
        >
          <div className="w-5/6 h-[30vh] bg-gradient-to-r from-[#ffde59] to-[#ff914d] rounded-4xl">
            <h2 className="text-2xl font-bold pt-5 pl-7">
              Join Our Email List
            </h2>
            <span className="pl-7">For Future Updates</span>
            <form action="" className="mt-5 flex flex-col gap-2">
              <input
                type="text"
                placeholder="Email"
                className="bg-white w-5/6 pl-5 ml-5 h-10 rounded-4xl"
              />
              <button className="bg-[#ff914d] h-10 w-3/4 ml-5 text-center font-semibold text-white cursor-pointer rounded-4xl">
                Subscribe Now
              </button>
            </form>
          </div>
        </motion.div>

        <motion.div initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp} className="w-full flex justify-center items-center">
          <div className="w-5/6 h-[20vh] text-white ">
            <div className="text-white space-y-2">
              <div className="flex items-center gap-2">
                <FaPhone className="w-5 h-5 rotate-90" />
                <span>: 9933985006</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="w-5 h-5" />
                <span>: honeybunny.restro@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="w-5 h-5" />
                <span>: J.P Avenue, Sagarbhanga, Durgapur - 713211</span>
              </div>
              <div className="flex items-center gap-3">
                <button className="relative h-10 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-[#1f1f1f] to-[#2c2c2c] shadow-md overflow-hidden group">
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm scale-110"></span>
                  <span className="relative z-10 cursor-pointer">Facebook</span>
                </button>

                <button className="relative h-10 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-[#1f1f1f] to-[#2c2c2c] shadow-md overflow-hidden group">
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm scale-110"></span>
                  <span className="relative z-10 cursor-pointer">Instagram</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
        <span className="text-white text-xs text-center">
          {" "}
          Created By Priyanshu Mishra{" "}
        </span>
      </div>
    </div>
  )
}

export default Footer
