import React from "react";

const TeamCard = ({image,name,description,exp}) => {
  return (
    <div className="mx-auto">
      <div>
        <div className="card my-5 w-80 h-96 bg-base-100 shadow-xl ">
          <figure>
            <img
              className="hover:opacity-50 transition duration-300 ease-in-out hover:scale-110  "
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">{name}</h2>
            <p><span className="font-bold">Experience:</span>  {exp}</p>
            <p>{description}</p>
            {/* <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
