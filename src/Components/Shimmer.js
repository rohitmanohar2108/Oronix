// Shimmer.js
import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-col space-y-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="h-72 w-48 bg-gray-300 rounded"></div>
          <div className="h-4 w-48 bg-gray-300 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
