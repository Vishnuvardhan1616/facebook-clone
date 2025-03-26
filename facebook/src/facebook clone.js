import React, { useState } from "react";
import { FaThumbsUp, FaComment, FaShare } from "react-icons/fa";

const FacebookClone = () => {
  const [theme, setTheme] = useState("blue");

  return (
    <div className={`min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-6`}>
      <header className="text-center text-4xl font-bold p-4">My Colorful Facebook</header>
      
      <div className="max-w-lg mx-auto bg-white text-black p-6 rounded-2xl shadow-lg">
        <p className="text-lg">Feeling happy today! 😊</p>
        <div className="flex justify-between mt-4">
          <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 text-white font-bold py-2 px-4 rounded-full flex items-center">
            <FaThumbsUp className="mr-2" /> Like
          </button>
          <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-orange-500 hover:to-yellow-400 text-white font-bold py-2 px-4 rounded-full flex items-center">
            <FaComment className="mr-2" /> Comment
          </button>
          <button className="bg-gradient-to-r from-indigo-400 to-purple-500 hover:from-purple-500 hover:to-indigo-400 text-white font-bold py-2 px-4 rounded-full flex items-center">
            <FaShare className="mr-2" /> Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default FacebookClone;
