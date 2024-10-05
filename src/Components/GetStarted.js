import React, { useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai'; // Import a right arrow icon
import LoginModal from './LoginModal'; // Import the LoginModal component

const GetStarted = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="min-h-screen text-white bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_medium.jpg')`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>

      {/* Top Logo Section */}
      <div className="relative z-10 flex justify-between items-center p-1 bg-black bg-opacity-50">
        <div className="text-4xl font-bold ml-4">
          Film<span className="text-4xl text-red-600 font-extralight">NINJA</span>
        </div>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center mt-44">
        <h1 className="text-5xl font-bold mb-4 text-white">
          Unlimited Movies, TV shows, and more.
        </h1>
        <h2 className="text-2xl font-medium text-white ">Watch anywhere, cancel anytime.</h2>
        <h3 className="text-base mt-2">Ready to watch? Click on Get Started.</h3>

        {/* Get Started Button with Right Arrow Icon */}
        <button
          onClick={handleOpenModal}
          className="mt-6 px-8 py-2 bg-red-600 hover:bg-red-700 text-white text-lg font-bold rounded flex items-center"
        >
          Get Started <AiOutlineRight className="ml-2" /> {/* Right Arrow Icon */}
        </button>
      </div>

      {/* Login Modal */}
      <LoginModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default GetStarted;
