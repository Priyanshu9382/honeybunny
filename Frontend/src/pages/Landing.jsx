import Navbar from "../components/Navbar";
import Hero from "../assets/hero.avif";
import Card from "../components/Card";
import Footer from "../components/Footer";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";



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

const Landing = () => {
  return (
    <div>
      <Navbar />
      <div className="main min-h-[calc(100vh-60px)] bg-[#161616] flex flex-col gap-5">
        <motion.h1
          className="text-3xl text-white text-center font-bold pt-10"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={4}
        >
          <TypeAnimation
            sequence={["Multi Cuisine Delivered to your Doorstep", 1500, 1000]}
            wrapper="span"
            speed={30}
            style={{ display: "inline-block" }}
            repeat={0}
          />
        </motion.h1>

        <motion.h3
          className="text-medium text-[#d9d9d9] text-center mt-4"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={10}
        >
          Multi Cuisine Delivered to your Doorstep
        </motion.h3>

        <motion.div
          className="btns flex gap-3 justify-center mt-4"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={11}
        >
          <button className="bg-gradient-to-r from-[#ffde59] to-[#ff914d] w-40 h-12 font-bold rounded-3xl cursor-pointer">
            Book Your Table
          </button>
          <button className="bg-gradient-to-r from-[#ffde59] to-[#ff914d] w-40 h-12 font-bold rounded-3xl cursor-pointer">
            Order Online
          </button>
        </motion.div>

        <motion.div
          className="flex justify-center w-full h-[80vh] pb-28"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={12}
        >
          <div
            className="main-img flex justify-center h-5/6 w-5/6 bg-cover bg-center mt-8 rounded-3xl "
            style={{ backgroundImage: `url(${Hero})` }}
          ></div>
        </motion.div>
      </div>

      <div className="min-h-screen bg-[#2a2727] w-full pb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col justify-evenly min-h-screen"
        >
          <h2 className="text-4xl text-white  pl-5 font-bold">
            Explore Our Cuisines
          </h2>
          <Card />
        </motion.div>
      </div>

      <div className="min-h-screen w-full bg-[#251c18] flex justify-center items-center ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="w-5/6 h-[80vh] bg-[#ffcd00] rounded-4xl flex flex-col "
        >
          <h2 className="text-3xl font-bold p-6 pt-8">Book Your Table</h2>
          <form action="" className="p-5">
            <input
              type="text"
              className="bg-[#e0b400] w-11/12 h-12 p-4 rounded-xl text-lg mb-4"
              placeholder="Name"
            />
            <input
              type="text"
              className="bg-[#e0b400] w-11/12 h-12 p-4 rounded-xl text-lg mb-4"
              placeholder="Phone"
            />
            <input
              type="text"
              className="bg-[#e0b400] w-11/12 h-12 p-4 rounded-xl text-lg mb-4"
              placeholder="Email"
            />
            <input
              type="date"
              className="bg-[#e0b400] w-11/12 h-12 p-4 rounded-xl text-lg mb-4 cursor-pointer"
              placeholder="Date"
            />
            <input
              type="time"
              className="bg-[#e0b400] w-11/12 h-12 p-4 rounded-xl text-lg mb-4 "
              placeholder="Time"
            />
            <button className="bg-black text-white w-11/12 h-12 rounded-4xl font-bold cursor-pointer text-lg mt-6">
              Book Now!
            </button>
          </form>
        </motion.div>
      </div>

      <Footer/>
    </div>
  );
};

export default Landing;
