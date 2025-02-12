import React, { useState } from "react";

const Rating = ({ handleChange, ratingValue }) => {
 
  const mapValue = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  return (
    <div>
      <ul className="flex space-x-4">
        {mapValue.map((list) => (
          <li className="flex flex-col items-center" key={list}>
            <input
              type="radio"
              id={`rating-${list}`}
              name="rating"
              className="hidden peer"
              value={list}
              onChange={handleChange}
              checked={ratingValue === list}
            />
            <label
              htmlFor={`rating-${list}`}
              className="cursor-pointer bg-white text-black border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center peer-checked:bg-[#ff6a95] peer-checked:text-white"
            >
              {list}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rating;
