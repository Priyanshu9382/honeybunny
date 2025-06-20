import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Google_logo from "../assets/google_logo.cadee8cdb0c0afb1a713.png";
const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full min-h-[calc(100vh-60px)] bg-[#161616] flex flex-col items-center justify-center">
        <div className="w-5/6 min-h-[50vh] bg-[#ffcd00] rounded-3xl mt-16 mb-32">
          <div className="m-5 flex flex-col items-center justify-start gap-10  h-[50vh] ">
            <h2 className="text-3xl font-bold p-5 text-center">
              Welcome to the Login page
            </h2>

            <div>
              <Link className="bg-white w-48  px-2 h-8 flex justify-center items-center rounded-3xl gap-1 cursor-pointer">
                <img src={Google_logo} alt="" className="h-6" />
                Login with Google
              </Link>
              <p className="w-full text-center">
                New Here?{" "}
                <Link to={"/signup"}>
                  <span className="text-blue-900  font-bold cursor-pointer hover:underline">
                    Sign Up
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
