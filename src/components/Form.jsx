import React, { useState } from "react";
import Rating from "./Rating";
import { v4 as uuidv4 } from "uuid";

const Form = ({ setFeedBack, feedBack, setRatingValue, ratingValue }) => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const bgColor = !buttonDisabled ? `bg-[#202142]` : `bg-[#ccc]`;

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "rating") {
      setRatingValue(value);
    }
    if (name === "message") {
      setMessage(value);
      setButtonDisabled(value.trim().length === 0); 
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = feedBack.length;
    const newFeedback = {
      id: id+1, 
      rating: ratingValue,
      message: message.trim(), 
    };

    setFeedBack([...feedBack, newFeedback]);
    setMessage("");
    setRatingValue("1");
    setButtonDisabled(true);
  };

  return (
    <div className="bg-white rounded-lg w-[600px]">
      <div className="p-4">
        <h1 className="text-black text-xl font-bold mb-4">
          How would you rate your service with us?
        </h1>
        <form onSubmit={handleSubmit}>
          <Rating ratingValue={ratingValue} handleChange={handleChange} />
          <div className="mt-4 border border-gray-300 rounded-lg flex">
            <input
              type="text"
              name="message"
              placeholder="Type your message..."
              value={message}
              className="flex-1 p-2 border-none focus:outline-none rounded-l-lg"
              onChange={handleChange}
            />
            <button
              className={`${bgColor} text-white px-4 py-2 rounded-lg m-4`}
              disabled={buttonDisabled}
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
