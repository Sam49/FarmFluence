import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const LandingPage = () => {
    const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Show loading for 2s
  }, []);

  return (
    <div className="w-full h-screen flex flex-col bg-gradient-to-b from-[#A8D3B2] to-[#D3E6C9] relative overflow-hidden">
      {loading ? (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-white z-50"
          initial={{ scale: 1 }}
          animate={{ scale: 50 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        >
          <div className="w-10 h-10 bg-[#A8D3B2] rounded-full"></div>
        </motion.div>
      ) : (
        <>
          <motion.nav
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full bg-[#5A8F30] shadow-lg rounded-b-3xl p-4 flex justify-between items-center px-10"
          >
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Farmfluence Logo" className="h-10 w-10" />
              <h2 className="text-white text-4xl font-extrabold tracking-wide">FarmFluence</h2>
            </div>
            <div className="space-x-4">
              <button className="border-2 border-white px-6 py-3 rounded-full font-semibold text-white hover:bg-white hover:text-green-700 transition-all">Login</button>
              <button className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all" onClick={()=>{window.location.href = '/signup'}}>Get Started</button>
            </div>
          </motion.nav>
          
          {/* Bottom farm-themed illustration */}
          <div className="absolute bottom-0 w-full z-0">
            <svg className="w-full h-64" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200" preserveAspectRatio="xMidYMax slice">
              <path d="M0,150 Q150,90 300,150 T600,150 T800,150 L800,200 L0,200 Z" fill="#5A8F30" opacity="0.9" />
              <path d="M100,180 L110,130 L120,180" stroke="#D3E6C9" strokeWidth="4" fill="none" />
              <circle cx="110" cy="120" r="8" fill="#A8D3B2" />
              <path d="M700,180 L710,130 L720,180" stroke="#D3E6C9" strokeWidth="4" fill="none" />
              <circle cx="710" cy="120" r="8" fill="#A8D3B2" />
              <path d="M300,190 L310,140 L320,190" stroke="#D3E6C9" strokeWidth="4" fill="none" />
              <circle cx="310" cy="130" r="8" fill="#A8D3B2" />
              <circle cx="400" cy="170" r="12" fill="#D3E6C9" />
              <circle cx="500" cy="160" r="10" fill="#A8D3B2" />
              {/* Adding more colors and details */}
              <circle cx="200" cy="180" r="6" fill="#FFD700" />
              <circle cx="600" cy="180" r="6" fill="#FFD700" />
              <path d="M250,185 L255,140 L260,185" stroke="#FFB347" strokeWidth="3" fill="none" />
              <path d="M550,185 L555,140 L560,185" stroke="#FFB347" strokeWidth="3" fill="none" />
            </svg>
          </div>
          
          <div className="flex flex-grow justify-center items-center text-center p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            >
              <h1 className="text-6xl font-extrabold text-[#004d00] mb-4">Welcome to FarmFluence</h1>
              <p className="text-xl text-gray-800 mb-6 max-w-xl mx-auto leading-relaxed">
                Empowering farmers with technology for a sustainable future.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 1 }}
                className="flex justify-center"
              >
                <button className="bg-green-700 text-white px-8 py-4 rounded-full font-semibold shadow-md hover:bg-green-800 transition-all flex items-center space-x-2">
                  <span>Explore More</span>
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 ml-2"
                    initial={{ x: -5 }}
                    animate={{ x: 5 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </motion.svg>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </>
      )}
    </div>
  );
};

export default LandingPage;
