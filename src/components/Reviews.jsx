import React from "react";

const Reviews = ({ feedBack }) => {
  const average =
    feedBack.length === 0
      ? 0
      : feedBack.reduce((acc, { rating }) => acc + rating, 0) / feedBack.length;
  return (
    <div className="flex text-white text-xl font-bold justify-between gap-52">
      <h4>{feedBack.length} Reviews</h4>
      <h4>Average Rating: {average.toFixed(1).replace(/[.,]0$/, "")}</h4>
    </div>
  );
};

export default Reviews;
