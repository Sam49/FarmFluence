import React, { useState } from "react";
import { motion } from "framer-motion";

const Profile = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("For You");
  const [showProfile, setShowProfile] = useState(false);
  
  const postImages = {
    "For You": [
      "/images/for-you1.jpg", "/images/for-you2.jpg", "/images/for-you3.jpg"
    ],
    "Most Viewed": [
      "/images/most-viewed1.jpg", "/images/most-viewed2.jpg", "/images/most-viewed3.jpg"
    ],
    "Most Liked": [
      "/images/most-liked1.jpg", "/images/most-liked2.jpg", "/images/most-liked3.jpg"
    ]
  };

  const userProfile = {
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "John Doe",
    age: 25,
    city: "Los Angeles",
    state: "California",
    country: "USA",
    phone: "+1 234 567 890"
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#D3E6C9] to-[#A8D3B2] text-gray-900 flex">
      {/* Sidebar */}
      <aside className="w-1/5 bg-[#4A7A29] text-white p-6 min-h-screen flex flex-col items-center space-y-8 relative shadow-lg">
        <h1 className="text-3xl font-extrabold tracking-wide text-center break-words bg-[#3F6F23] px-4 py-2 rounded-lg">Farmfluence</h1>
        <nav className="flex flex-col space-y-6 w-full">
          <button onClick={() => setShowProfile(false)} className="text-lg font-semibold hover:text-gray-300 transition-all bg-[#5A8F30] px-4 py-3 rounded-lg text-center">Explore</button>
          <button onClick={() => setShowProfile(true)} className="text-lg font-semibold hover:text-gray-300 transition-all bg-[#5A8F30] px-4 py-3 rounded-lg text-center">Profile</button>
        </nav>
        <button className="absolute bottom-6 left-6 bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all shadow-md">
          Log Out
        </button>
      </aside>

      {/* Main Content */}
      <main className="w-4/5 p-12 flex flex-col items-center space-y-8 overflow-y-auto">
        {showProfile ? (
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg text-center">
            <img src={userProfile.image} alt="User" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h2 className="text-2xl font-bold">{userProfile.name}</h2>
            <p className="text-gray-700">Age: {userProfile.age}</p>
            <p className="text-gray-700">City: {userProfile.city}</p>
            <p className="text-gray-700">State: {userProfile.state}</p>
            <p className="text-gray-700">Country: {userProfile.country}</p>
            <p className="text-gray-700">Phone: {userProfile.phone}</p>
            <button className="mt-4 bg-green-700 text-white px-6 py-2 rounded-lg">Edit Profile</button>
          </div>
        ) : (
          <>
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-md p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <div className="flex space-x-4">
              {["For You", "Most Viewed", "Most Liked"].map((option) => (
                <button
                  key={option}
                  onClick={() => setFilter(option)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${filter === option ? 'bg-green-700 text-white' : 'bg-white text-green-700 border border-green-700 hover:bg-green-700 hover:text-white'}`}
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
          </>
        )}
      </main>
    </div>
  );
};

export default Profile;