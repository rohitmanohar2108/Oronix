import React, { useState } from 'react';
import Header from './Header';
import { BsSearch } from 'react-icons/bs'; // React icon for the search
import { moviesData } from './moviesData'; // Mock data for movies

const Browse = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(moviesData);

  // Handle search input
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter the movies based on the search query
    const filtered = moviesData.filter((movie) =>
      movie.title.toLowerCase().includes(query)
    );
    setFilteredMovies(filtered);
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Header */}
      <Header />

      {/* Browse Section */}
      <div className="p-8">
        {/* Search Bar */}
        <div className="flex items-center mb-8">
          <BsSearch className="text-2xl mr-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search for movies or TV shows..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full px-4 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>

        {/* Movie Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filteredMovies.map((movie) => (
            <div key={movie.id} className="bg-zinc-800 rounded-lg p-4 shadow-md hover:scale-105 transition-transform">
              <img
                src={movie.image}
                alt={movie.title}
                className="rounded-lg w-full h-64 object-cover mb-4"
              />
              <h3 className="text-lg font-bold">{movie.title}</h3>
              <p className="text-sm text-gray-400">{movie.genre}</p>
            </div>
          ))}
        </div>

        {/* If no movies are found */}
        {filteredMovies.length === 0 && (
          <div className="text-center mt-16">
            <p className="text-xl">No results found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Browse;
