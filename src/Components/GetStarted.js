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
      className='min-h-screen text-white bg-cover bg-center'
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=2929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      {/* Top Logo Section */}
      <div className='flex justify-between items-center p-1 bg-black bg-opacity-50'>
        <div className='text-4xl font-bold ml-4'>
          Oroni<span className='text-6xl text-red-600'>X</span>
        </div>
      </div>

      {/* Centered Content */}
      <div className='flex flex-col justify-center items-center h-full text-center mt-44'>
        <h1 className='text-5xl font-bold mb-4 bg-gradient-to-r from-rose-600 via-red-500 to-yellow-500 bg-clip-text text-transparent'>
          Unlimited Movies, TV shows, and more.
        </h1>
        <h2 className='text-2xl'>Watch anywhere, cancel anytime.</h2>
        <h3 className='text-xl mt-2'>Ready to watch? Enter your email to create or restart your membership.</h3>
        
        {/* Get Started Button with Right Arrow Icon */}
        <button onClick={handleOpenModal} className='mt-6 px-8 py-2 bg-red-600 hover:bg-red-700 text-white text-lg font-bold rounded flex items-center'>
          Get Started <AiOutlineRight className='ml-2' /> {/* Right Arrow Icon */}
        </button>
      </div>

      {/* Login Modal */}
      <LoginModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default GetStarted;
