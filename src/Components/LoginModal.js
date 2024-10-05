import React, { useState } from "react";

const LoginModal = ({ isOpen, onClose }) => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">
          {isSignInForm ? "Sign In to Your Account" : "Create your account"}
        </h2>
        <form className="space-y-6">
          {/* Email Field */}
          {!isSignInForm && (
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your name"
                required
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your email"
              required
            />
          </div>
          

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-between items-center text-sm">
            <a href="#" className="text-red-400 hover:text-red-600">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-bold transition-colors duration-300"
          >
            {isSignInForm ? "Sign In" : "Sign up"}
          </button>
        </form>

        {/* New to Netflix Text */}
        <p
          className="mt-4 text-center cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already have an account? Sign In now"}
        </p>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-4 w-full text-red-500 hover:text-red-700 font-medium"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
