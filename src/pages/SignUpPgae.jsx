import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const SignUpPage = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#B2D3A8] to-[#E3F2D3] relative">
      {/* Logo positioned above the box and outside */}
      <div className="absolute top-20 flex justify-center w-full">
        <img src={logo} alt="Farmfluence Logo" className="w-28" />
      </div>

      {/* Sign Up Box */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center mt-24">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Create an Account</h2>
        <form>
          <input type="text" placeholder="Full Name" className="w-full p-3 mb-3 border rounded-md" />
          <input type="email" placeholder="Email" className="w-full p-3 mb-3 border rounded-md" />
          <input type="password" placeholder="Password" className="w-full p-3 mb-3 border rounded-md" />
          <input type="password" placeholder="Confirm Password" className="w-full p-3 mb-3 border rounded-md" />
          <button className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition-all" onClick={()=>{window.location.href = '/home'}}>
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-gray-600">
          Already have an account? 
          <span className="text-green-700 font-semibold cursor-pointer">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
