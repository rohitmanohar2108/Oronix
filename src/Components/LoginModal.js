import React, { useRef, useState } from "react";
import { checkValidData } from "../Utils/validate";
import { MdLogin, MdPersonAdd } from "react-icons/md";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { addUser } from "../Utils/userSlice";

const LoginModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errors, setErrors] = useState({ email: "", password: "" }); // Store validation errors
  const name = useRef(null); // Reference for name input
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate(); // Instantiate navigate

  // Handle form submission
  const handleButtonClick = (e) => {
    e.preventDefault();

    // Reset errors before validation
    setErrors({ email: "", password: "" });

    const message = checkValidData(email.current.value, password.current.value);

    if (message) {
      // Handle validation errors
      if (message.includes("Email")) {
        setErrors((prevErrors) => ({ ...prevErrors, email: message }));
      }
      if (message.includes("Password")) {
        setErrors((prevErrors) => ({ ...prevErrors, password: message }));
      }
      return; // Stop if there's an error
    }

    // No validation errors, proceed with sign in or sign up logic
    if (!isSignInForm) {
      // Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up successfully
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, // Using the name reference here
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
              navigate("/browse"); // Navigate to browse after sign-up
            })
            .catch((error) => {
              setErrors({ email: error.message });
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrors({ email: errorCode + " - " + errorMessage });
        });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in successfully
          const user = userCredential.user;
          const { uid, email, displayName, photoURL } = user;
          dispatch(addUser({ uid, email, displayName, photoURL }));
          navigate("/browse"); // Navigate to browse after sign-in
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrors({ email: errorCode + " - " + errorMessage });
        });
    }
  };

  // Toggle between sign in and sign up form
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-zinc-950 border border-gray-500 text-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-4xl font-bold ml-28 mb-4">
          film
          <span className="text-4xl text-red-600 font-extralight">NINJA</span>
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isSignInForm ? "Sign In to Your Account" : "Create your account"}
        </h2>
        <form className="space-y-6" onSubmit={handleButtonClick}>
          {/* Name Field (only for Sign Up) */}
          {!isSignInForm && (
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                ref={name} // Reference for name input
                type="text"
                className="w-full px-4 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your name"
                required
              />
            </div>
          )}

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              ref={email}
              type="email"
              className="w-full px-4 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your email"
              required
            />
            {/* Email Error */}
            {errors.email && (
              <p className="text-red-500 text-base font-bold mt-1 ml-2">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              ref={password}
              type="password"
              className="w-full px-4 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your password"
              required
            />
            {/* Password Error */}
            {errors.password && (
              <p className="text-red-500 text-base font-bold mt-1 ml-2">
                {errors.password}
              </p>
            )}
          </div>

          {/* Forgot Password Link (for Sign In) */}
          {isSignInForm && (
            <div className="flex justify-between items-center text-sm ml-2">
              <a href="#" className="text-blue-500 hover:text-blue-600">
                Forgot password?
              </a>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full text-lg bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-bold transition-colors duration-300 flex items-center justify-center"
          >
            {isSignInForm ? (
              <>
                <MdLogin className="mr-2 text-2xl" /> Sign In
              </>
            ) : (
              <>
                <MdPersonAdd className="mr-2 text-2xl" /> Sign Up
              </>
            )}
          </button>
        </form>

        {/* Toggle between Sign In and Sign Up */}
        <p
          className="mt-4 text-center cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Film Ninja? Sign up now"
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
