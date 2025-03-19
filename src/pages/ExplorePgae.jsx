import React, { useState } from "react";
import { motion } from "framer-motion";

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("For You");
  
  const postImages = {
    "For You": [
      "/images/for-you1.jpg",
      "/images/for-you2.jpg",
      "/images/for-you3.jpg",
      "/images/for-you4.jpg",
      "/images/for-you5.jpg",
      "/images/for-you6.jpg",
      "/images/for-you7.jpg",
      "/images/for-you8.jpg",
      "/images/for-you9.jpg"
    ],
    "Most Viewed": [
      "/images/most-viewed1.jpg",
      "/images/most-viewed2.jpg",
      "/images/most-viewed3.jpg",
      "/images/most-viewed4.jpg",
      "/images/most-viewed5.jpg",
      "/images/most-viewed6.jpg",
      "/images/most-viewed7.jpg",
      "/images/most-viewed8.jpg",
      "/images/most-viewed9.jpg"
    ],
    "Most Liked": [
      "/images/most-liked1.jpg",
      "/images/most-liked2.jpg",
      "/images/most-liked3.jpg",
      "/images/most-liked4.jpg",
      "/images/most-liked5.jpg",
      "/images/most-liked6.jpg",
      "/images/most-liked7.jpg",
      "/images/most-liked8.jpg",
      "/images/most-liked9.jpg"
    ]
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#D3E6C9] to-[#A8D3B2] text-gray-900 flex">
      {/* Sidebar */}
      <aside className="w-1/5 bg-[#4A7A29] text-white p-6 h-screen flex flex-col items-center space-y-8 fixed top-0 left-0 shadow-lg overflow-hidden">
        <h1 className="text-3xl font-extrabold tracking-wide text-center break-words bg-[#3F6F23] px-4 py-2 rounded-lg">Farmfluence</h1>
        <nav className="flex flex-col space-y-6 w-full">
          <a href="/home" className={`text-lg font-semibold hover:text-gray-300 transition-all bg-[#5A8F30] px-4 py-3 rounded-lg text-center`} onClick={()=>{window.location.href = '/home'}}>Home</a>
          <a href="/explore" className={`text-lg font-semibold hover:text-gray-300 transition-all bg-[#5A8F30] px-4 py-3 rounded-lg text-center`} onClick={()=>{window.location.href = '/explore'}}>Explore</a>
          <a href="/profile" className={`text-lg font-semibold hover:text-gray-300 transition-all bg-[#5A8F30] px-4 py-3 rounded-lg text-center`} onClick={()=>{window.location.href = '/profile'}}>Profile</a>
        </nav>
        <button className="absolute bottom-6 left-6 bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all shadow-md">
          Log Out
        </button>
      </aside>

      {/* Main Content */}
      <main className="w-4/5 p-12 flex flex-col items-center space-y-8 overflow-y-auto ml-[20%]">
      <input
  type="text"
  placeholder="Search users..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="w-full max-w-2xl p-4 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
/>

        
        {/* Filters */}
        <div className="flex space-x-4">
          {["For You", "Most Viewed", "Most Liked"].map((option) => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${filter === option ? "bg-green-700 text-white" : "bg-white text-green-700 border border-green-700 hover:bg-green-700 hover:text-white"}`}
            >
              {option}
            </button>
          ))}
        </div>

        <h2 className="text-4xl font-extrabold text-[#004d00] text-center">Explore New Farming Trends</h2>
        <div className="grid grid-cols-3 gap-6 w-full max-w-5xl">
          {postImages[filter].map((image, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <img src={image} alt={`Post ${index + 1}`} className="w-full h-40 object-cover rounded-lg" />
              <h4 className="font-bold text-[#004d00] text-lg mt-4">{filter} Post {index + 1}</h4>
              <p className="text-gray-700 mt-2 text-sm text-center">Discover innovative farming techniques and trends.</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Explore;
