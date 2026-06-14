import React from "react";

const MoodButton = ({ mood, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-full capitalize transition duration-300
      ${
        active
          ? "bg-gradient-to-r from-gray-900 to-red-700 scale-110 shadow-red-500/50"
          : "bg-gray-800 hover:bg-gradient-to-r hover:from-gray-900 hover:to-red-700 hover:scale-105"
      }`}
    >
      {mood}
    </button>
  );
};

export default MoodButton;