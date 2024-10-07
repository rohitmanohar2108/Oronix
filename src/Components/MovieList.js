import React, { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import arrow icons from React Icons
import MovieCard from "./MovieCard";
import MovieModal from "./MovieModal";

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null); // Reference to the scrollable div
  const [showLeftArrow, setShowLeftArrow] = useState(false); // State to manage left arrow visibility
  const [showRightArrow, setShowRightArrow] = useState(false); // State to manage right arrow visibility
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (movieId) => {
    setSelectedMovieId(movieId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMovieId(null);
  };

  // Increase the scroll distance for faster scrolling
  const scrollAmount = 700; // Adjust this value for scroll speed

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" }); // Scroll left
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" }); // Scroll right
  };

  const handleScroll = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeftArrow(scrollLeft > 0); // Show left arrow if scrolled
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth); // Show right arrow if not scrolled all the way to the right
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
      return () => scrollElement.removeEventListener("scroll", handleScroll); // Cleanup on unmount
    }
  }, []);

  return (
    <div
      className="px-6 relative"
      onMouseEnter={() => {
        setShowLeftArrow(scrollRef.current.scrollLeft > 0); // Update left arrow visibility
        setShowRightArrow(
          scrollRef.current.scrollLeft <
            scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        ); // Update right arrow visibility
      }}
      onMouseLeave={() => {
        setShowLeftArrow(false); // Hide left arrow on mouse leave
        setShowRightArrow(false); // Hide right arrow on mouse leave
      }}
    >
      <h1 className="text-3xl py-4 text-white">{title}</h1>

      {/* Left Scroll Button */}
      {showLeftArrow && (
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform translate-y-2 bg-transparent  bg-gray-800 bg-opacity-90 text-white p-2  rounded-full shadow-md z-10 border-b-2 border-transparent hover:border-gray-500"
        >
          <FaChevronLeft size={24} /> {/* Left arrow icon */}
        </button>
      )}

      <div
        className="flex overflow-x-hidden hide-scrollbar w-full"
        ref={scrollRef}
      >
        <div className="flex space-x-3">
          {movies &&
            movies.length > 0 &&
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                posterPath={movie.poster_path}
                onClick={() => handleCardClick(movie.id)}
              />
            ))}
        </div>
        {isModalOpen && (
          <MovieModal movieId={selectedMovieId} onClose={closeModal} />
        )}
      </div>

      {/* Right Scroll Button */}
      {showRightArrow && (
        <button
          onClick={scrollRight}
          className="absolute right-8 top-1/2 transform translate-y-1 bg-transparent bg-gray-800 bg-opacity-90  text-white p-2 rounded-full shadow-md z-10  border-b-2 border-transparent hover:border-gray-500"
        >
          <FaChevronRight size={30} /> {/* Right arrow icon */}
        </button>
      )}
    </div>
  );
};

export default MovieList;
