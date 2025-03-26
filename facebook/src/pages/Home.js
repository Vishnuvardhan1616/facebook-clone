import React from "react";

const Home = () => {
  return (
    <div className="flex bg-blue-100 min-h-screen p-4">
      {/* Left Sidebar */}
      <div className="w-1/4 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Shortcuts</h2>
        <ul>
          <li className="mb-2">👥 Friends</li>
          <li className="mb-2">🎭 Groups</li>
          <li className="mb-2">🏪 Marketplace</li>
          <li className="mb-2">📺 Watch</li>
        </ul>
      </div>

      {/* Center Feed */}
      <div className="w-1/2 p-4 mx-4 bg-white rounded-lg shadow-md">
        <div className="p-4 bg-gray-100 rounded-lg mb-4">
          <input
            type="text"
            placeholder="What's on your mind?"
            className="w-full p-2 rounded-lg border border-gray-300"
          />
        </div>
        <div className="p-4 bg-gray-100 rounded-lg mb-4">
          <h3 className="font-bold">John Doe</h3>
          <p>Enjoying the new Facebook Clone! 🚀</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg mb-4">
          <h3 className="font-bold">Jane Smith</h3>
          <p>Just had an amazing day at the beach! 🌊</p>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-1/4 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">People You May Know</h2>
        <ul>
          <li className="mb-2">👤 Alex Johnson</li>
          <li className="mb-2">👤 Sarah Williams</li>
          <li className="mb-2">👤 Michael Brown</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
