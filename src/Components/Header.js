import React, { useState, useEffect } from "react";
import { MdLogout } from "react-icons/md"; // Import the logout icon
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [showSignOutText, setShowSignOutText] = useState(false); // State to manage the visibility of the "Sign Out" text
  const [isScrolled, setIsScrolled] = useState(false); // State to manage background change on scroll
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful
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

  // Scroll event listener to change the header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true); // User has scrolled down
      } else {
        setIsScrolled(false); // User is at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup listener on unmount
    };
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div
      className={`fixed top-0 z-50 flex justify-between items-center p-3 w-full transition-all duration-300 ${
        isScrolled ? "bg-black" : "bg-gradient-to-b from-black"
      }`}
    >
      {/* Branding */}
      <div className="text-4xl font-bold ml-4 text-white">
        Film
        <span className="text-4xl text-red-600 font-extralight">NINJA</span>
      </div>

      {/* Spacer to push the Sign Out Button to the right */}
      <div className="flex-grow" />

      {/* Sign Out Section with Profile Picture */}
      <div className="relative flex items-center mr-4">
        {/* Sign Out Button */}
        <button
          onClick={handleSignOut}
          onMouseEnter={handleMouseEnter} // Show tooltip on hover
          onMouseLeave={handleMouseLeave} // Hide tooltip when not hovering
          className={`flex items-center space-x-2 text-white px-2 py-2 rounded-full ${
            isScrolled ? "bg-red-600 hover:bg-red-700" : "bg-red-600/40 hover:bg-red-700"
          }`}
        >
          <MdLogout className="text-2xl ml-1" />
        </button>

        {/* Sign Out Text (Below the button) */}
        {showSignOutText && (
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 border border-orange-600 bg-red-700 text-white text-xs font-medium py-1 px-3 rounded-sm shadow-lg transition-opacity duration-300">
            <div className="relative">
              <div className="absolute top-[-6px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-b-6 border-l-transparent border-r-transparent border-b-red-700"></div>
              SignOut
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
