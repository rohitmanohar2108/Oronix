import React, { useState } from "react";
import { MdLogout } from "react-icons/md"; // Import the logout icon
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [showSignOutText, setShowSignOutText] = useState(false); // State to manage the visibility of the "Sign Out" text
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleMouseEnter = () => {
    setShowSignOutText(true); // Show tooltip on hover
  };

  const handleMouseLeave = () => {
    setShowSignOutText(false); // Hide tooltip when not hovering
  };

  return (
    <div className="relative z-10 flex justify-between items-center p-2 bg-gradient-to-b from-black">
      {/* Branding */}
      <div className="text-4xl font-bold ml-4">
        Film
        <span className="text-4xl text-red-600 font-extralight">NINJA</span>
      </div>

      {/* Sign Out Button */}
      <div className="relative mr-4">
        <button
          onClick={handleSignOut}
          onMouseEnter={handleMouseEnter} // Show tooltip on hover
          onMouseLeave={handleMouseLeave} // Hide tooltip when not hovering
          className="flex items-center space-x-2 text-white bg-red-600/40 hover:bg-red-700 px-2 py-2 rounded-full"
        >
          <MdLogout className="text-2xl ml-1" />
        </button>

        {/* Sign Out Text (Below the button) */}
        {showSignOutText && (
          <div
            className="absolute top-12 left-1/2 transform -translate-x-1/2 border border-gray-600 bg-gray-800 text-white text-xs font-medium py-1 px-3 rounded-lg shadow-lg transition-opacity duration-300 opacity-0 hover:opacity-100 -my-1 "
            style={{ opacity: showSignOutText ? 1 : 0 }}
          >
            SignOut
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
