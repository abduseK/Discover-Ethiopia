import React from "react";

function SearchBox() {
  return (
    <div className="flex items-center mb-5">
      <div className="relative w-full max-w-lg">
        <input
          type="text"
          placeholder="Where to next?"
          className="w-full p-4 text-base text-gray-700 bg-white border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:border-transparent"
        />
        <button className="absolute right-0 top-0 h-full px-6 text-white bg-teal-500 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-75">
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBox;
