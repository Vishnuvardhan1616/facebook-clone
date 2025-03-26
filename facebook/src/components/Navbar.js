import { Link } from "react-router-dom";
import { FaHome, FaUserFriends, FaCog, FaUser, FaFacebook, FaSearch } from "react-icons/fa";

const Navbar = ({ user }) => {
  return (
    <div className="navbar">
      {/* Facebook Logo (Left) */}
      <Link to="/" className="flex items-center space-x-2">
        <FaFacebook size={32} className="text-white" />
        <span className="text-2xl font-bold">Facebook</span>
      </Link>

      {/* Search Bar (Centered) */}
      <div className="flex justify-center">
        <div className="relative">
          <FaSearch className="absolute left-3 top-2 text-gray-600" />
          <input
            type="text"
            placeholder="Search Facebook"
            className="search-bar"
          />
        </div>
      </div>

      {/* Navigation Links (Right) */}
      <nav>
        <ul className="flex space-x-6 text-lg font-medium">
          <li><Link to="/"><FaHome /> Home</Link></li>
          <li><Link to="/friends"><FaUserFriends /> Friends</Link></li>
          <li><Link to="/settings"><FaCog /> Settings</Link></li>
          <li><Link to="/profile"><FaUser /> Profile</Link></li>
        </ul>
      </nav>

      {/* User Profile (Right Side) */}
      {user && (
        <img src={user.photoURL} alt="User" className="w-10 h-10 rounded-full ml-4" />
      )}
    </div>
  );
};

export default Navbar;
