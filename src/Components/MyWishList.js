import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../Utils/wishListSlice"; // Import the correct action
import { IMG_CDN_URL } from "../Utils/constants";

const MyWishList = () => {
  const dispatch = useDispatch();
  const wishlistMovies = useSelector((state) => state.wishlist.movies); // Ensure you're accessing the correct state

  const handleRemoveFromWishlist = (movieId) => {
    dispatch(removeFromWishlist({ id: movieId })); // Use the correct action
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">My Wishlist</h2>
      {wishlistMovies.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {wishlistMovies.map((movie) => (
            <div key={movie.id} className="relative w-full h-72">
              <img
                alt={movie.title}
                src={`${IMG_CDN_URL}${movie.posterPath}`}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => handleRemoveFromWishlist(movie.id)}
                  className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-full"
                >
                  Remove
                </button>
              </div>
              <div className="absolute bottom-0 left-0 bg-white bg-opacity-80 p-2 w-full text-center rounded-b-lg">
                <h3 className="font-semibold">{movie.title}</h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyWishList;
