import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Friends from "./pages/Friends";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [posts, setPosts] = useState([]);
  const [postText, setPostText] = useState("");

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  const addPost = () => {
    console.log("Adding post:", postText); // Debugging log
    if (postText.trim() !== "") {
      setPosts((prevPosts) => [{ text: postText, id: Date.now() }, ...prevPosts]);
      setPostText("");
    }
  };

  return (
    <Router>
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 min-h-screen flex text-white">
        {isAuthenticated ? (
          <>
            {/* Sidebar */}
            <div className="w-1/4 p-4 bg-gradient-to-b from-blue-500 to-blue-700 shadow-md min-h-screen rounded-r-3xl">
              <h2 className="text-lg font-bold">Welcome</h2>
              <ul className="mt-4 space-y-2">
              </ul>
              <button
                className="mt-4 bg-red-500 px-4 py-2 rounded-full text-white hover:bg-red-600 transition-all"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-white text-black p-6 rounded-lg shadow-lg m-4">
              <Navbar />
              <div className="mb-6">
                <textarea 
                  className="w-full p-2 border border-gray-300 rounded-lg text-black" 
                  placeholder="What's on your mind?"
                  value={postText}
                  onChange={(e) => setPostText(e.target.value)}
                />
                <button 
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
                  onClick={addPost}
                >
                  Post
                </button>
              </div>
              <div>
                {posts.length === 0 ? (
                  <p className="text-gray-500">No posts yet. Be the first to post!</p>
                ) : (
                  posts.map((post) => (
                    <div key={post.id} className="bg-gray-100 p-4 rounded-lg shadow-md mb-4 text-black">
                      {post.text}
                    </div>
                  ))
                )}
              </div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/friends" element={<Friends />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </div>
          </>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </Router>
  );
}

export default App;
