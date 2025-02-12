import React from "react";

const FeedBackList = ({ feedBack, setFeedBack }) => {
  const deleteRating = (id) => {
    const filteredItem = feedBack.filter((list) => list.id !== id);
    setFeedBack(filteredItem);
  };
  return (
    <div>
      {feedBack.map((valueList) => (
        <div
          key={valueList.id}
          className="card bg-white border border-gray-300 rounded-lg relative w-[600px] mt-4"
          id={`feedback-${valueList.id}`}
        >
          <div className="bg-[#ff6a95] absolute -left-[10px] -top-[10px] text-white rounded-full w-8 h-8 flex items-center justify-center">
            {valueList?.rating}
          </div>
          <button
            className="close absolute top-2 right-2 text-black font-bold"
            onClick={() => deleteRating(valueList.id)}
          >
            X
          </button>
          <div className="text-display text-gray-700 mt-2">
            {valueList?.message}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedBackList;
