import React from "react";

const ReviewCard = ({ unique_review }) => {
  const { username, review } = unique_review;
  return (
    <div>
      <div className="card w-96 h-56 ms-10 text-gray-200 backdrop-blur-sm bg-black/10 border-2 border-gray-100 shadow-2xl ">
        <div className="card-body">
          <h2 className="card-title">{username}</h2>
          <p >{review}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
