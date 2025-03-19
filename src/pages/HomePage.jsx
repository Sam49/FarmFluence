import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaEye } from "react-icons/fa";

const Home = () => {
  const [video, setVideo] = useState(null);
  const [showUpload, setShowUpload] = useState(false);

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setVideo(URL.createObjectURL(file)); // Placeholder for backend connection
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#D3E6C9] to-[#A8D3B2] text-gray-900 flex">
      {/* Sidebar */}
      <aside className="w-1/5 bg-[#4A7A29] text-white p-6 min-h-screen flex flex-col items-center space-y-8 relative shadow-lg">
      
        <h1 className="text-3xl font-extrabold tracking-wide text-center break-words bg-[#3F6F23] px-4 py-2 rounded-lg">Farmfluence</h1>
        <nav className="flex flex-col space-y-6 w-full">
          <a href="#" className="text-lg font-semibold hover:text-gray-300 transition-all text-center" onClick={()=>{window.location.href = '/home'}}>Home</a>
          <a href="#" className="text-lg font-semibold hover:text-gray-300 transition-all text-center">Explore</a>
          <a href="#" className="text-lg font-semibold hover:text-gray-300 transition-all text-center">Profile</a>
          <button 
            onClick={() => setShowUpload(!showUpload)} 
            className="text-lg font-semibold bg-[#5A8F30] px-5 py-3 rounded-lg text-center hover:bg-[#3F6F23] transition-all">
            Upload Video
          </button>
        </nav>
        <button className="absolute bottom-6 left-6 bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all shadow-md">
          Log Out
        </button>
      </aside>

      {/* Main Content */}
      <main className="w-4/5 p-12 flex space-x-12 overflow-y-auto">
        {/* Posts Section (Centered) */}
        <section className="flex-1 flex flex-col items-center space-y-8">
          <h2 className="text-4xl font-extrabold text-[#004d00] text-center">Welcome to Farmfluence</h2>
          <PostCard user="Farmer John" content="Just harvested my best crop yet! 🌾" />
          <PostCard user="AgriTech Hub" content="Smart irrigation techniques are game-changers! 💧" />
          <PostCard user="EcoFarmers" content="Sustainable farming for a greener future! 🌱" />
        </section>

        {/* Video Upload Section (Toggled with smooth animation) */}
        <AnimatePresence>
          {showUpload && (
            <motion.section 
              className="w-1/3 flex justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="w-full max-w-lg p-8 bg-white rounded-2xl shadow-2xl flex flex-col items-center space-y-6 border border-gray-200">
                <h3 className="text-2xl font-bold text-[#004d00]">Upload Your Farming Videos</h3>
                <div className="w-full">
                  <input 
                    type="file" 
                    accept="video/*" 
                    onChange={handleVideoUpload} 
                    className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-green-500" 
                  />
                </div>
                {video && <video src={video} controls className="w-full rounded-lg shadow-md" />}
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

const PostCard = ({ user, content }) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [views, setViews] = useState(Math.floor(Math.random() * 500) + 100);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <motion.div
      className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-lg border border-gray-200"
      whileHover={{ scale: 1.03 }}
    >
      <h4 className="font-bold text-[#004d00] text-lg">{user}</h4>
      <p className="text-gray-700 mt-2 text-base leading-relaxed">{content}</p>
      <div className="flex items-center justify-between mt-4">
        <button onClick={toggleLike} className="flex items-center space-x-2 text-red-500">
          {liked ? <AiFillHeart size={24} /> : <AiOutlineHeart size={24} />}
          <span className="text-gray-700">{likes}</span>
        </button>
        <div className="flex items-center space-x-2 text-gray-700">
          <FaEye size={24} />
          <span>{views}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;