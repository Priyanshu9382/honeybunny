import React from "react";
import Thali from "../assets/Indian Thali.avif";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

const Card = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      <div className="slider flex justify-center gap-4">
        <div className="min-h[70vh] flex items-center">
          <FaChevronLeft className="text-white w-6 h-6 cursor-pointer" />
        </div>
        <div
          className="min-h-[70vh] w-3/4 bg-white rounded-4xl flex flex-col bg-cover bg-center "
          style={{ backgroundImage: `url(${Thali})` }}
        >
          {clicked ? (
            <div
              className="mt-auto h-1/2 w-full  rounded-4xl  flex flex-col overflow-hidden cursor-pointer"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.55)" }}
              onClick={()=>{setClicked(true)}}
            >
              <h3 className="text-3xl text-white font-bold p-5">
                Indian Thali
              </h3>
              <p className="text-white font-bold px-5 ">
                At our restaurant, we specialize in the traditional flavors of
                Mughal cuisine. Our menu features a wide range of dishes
                inspired by this Indian fusion cooking style, from fragrant
                curries to creamy kormas. At our restaurant, we specialize in
                the traditional flavors of Mughal cuisine. Our menu features a
                wide range of dishes inspired by this Indian fusion cooking
                style
              </p>
            </div>
          ) : (
            <div
              className="mt-auto h-1/2 w-full  rounded-4xl  flex flex-col overflow-hidden cursor-pointer"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.55)" }}
              onClick={()=>{setClicked(true)}}
            >
              <h3 className="text-3xl text-white font-bold p-5">
                Indian Thali
              </h3>
              <p className="text-white font-bold px-5 ">
                At our restaurant, we specialize in the traditional flavors of
                Mughal cuisine. Our menu features a wide range of dishes
                inspired by this Indian fusion cooking style, from fragrant
                curries to creamy kormas. At our restaurant, we specialize in
                the traditional flavors of Mughal cuisine. Our menu features a
                wide range of dishes inspired by this Indian fusion cooking
                style
              </p>
            </div>
          )}
        </div>
        <div className="min-h[70vh] flex items-center">
          <FaChevronRight className="text-white w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Card;
