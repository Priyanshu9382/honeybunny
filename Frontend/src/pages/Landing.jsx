import Navbar from "../components/Navbar";
import Hero from "../assets/hero.avif";
import Card from "../components/Card";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <div className="main min-h-[calc(100vh-60px)] bg-[#161616] flex flex-col gap-5">
        <h1 className="text-3xl text-white text-center font-bold pt-10">
          Multi Cuisine Delivered to your Doorstep
        </h1>
        <h3 className="text-medium text-[#d9d9d9] text-center mt-4">
          Multi Cuisine Delivered to your Doorstep
        </h3>
        <div className="btns flex gap-3 justify-center mt-4">
          <button className="bg-gradient-to-r from-[#ffde59] to-[#ff914d] w-40 h-12 font-bold rounded-3xl">
            Book Your Table
          </button>
          <button className="bg-gradient-to-r from-[#ffde59] to-[#ff914d] w-40 h-12 font-bold rounded-3xl">
            Order Online
          </button>
        </div>

        <div className="flex justify-center w-full h-[60vh]">
          <div
            className="main-img flex justify-center h-5/6 w-5/6 bg-cover bg-center mt-8 rounded-3xl "
            style={{ backgroundImage: `url(${Hero})` }}
          ></div>
        </div>
      </div>
      <div className="min-h-screen bg-[#2a2727] w-full flex flex-col justify-evenly">
        <h2 className="text-4xl text-white  pl-5 font-bold">
          Explore Our Cuisines
        </h2>

        <Card />
      </div>
      <div className="min-h-screen w-full bg-[#251c18] flex justify-center items-center ">
        <div className="w-5/6 h-[80vh] bg-[#ffcd00] rounded-4xl flex flex-col ">
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
            <button className="bg-black text-white w-11/12 h-12 rounded-4xl font-bold text-lg mt-6">
              Book Now!
            </button>
          </form>
        </div>
      </div>
      <div className="w-full min-h-[70vh] bg-black flex flex-col justify-evenly">
        <div className="w-full flex justify-center items-center">
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
              <button className="bg-[#ff914d] h-10 w-3/4 ml-5 text-center font-semibold text-white rounded-4xl">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
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
                  <span className="relative z-10">Facebook</span>
                </button>

                <button className="relative h-10 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-[#1f1f1f] to-[#2c2c2c] shadow-md overflow-hidden group">
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm scale-110"></span>
                  <span className="relative z-10">Instagram</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <span className="text-white text-xs text-center"> Created By Priyanshu Mishra </span>
      </div>
    </div>
  );
};

export default Landing;
