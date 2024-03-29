import React from 'react';

const ServiceCArd = ({image,name,description}) => {
    return (
        <div className='mb-10 mx-auto'>
            <div className="card border-2 p-2  border-gray-300 text-gray-200  w-64 lg:h-80  backdrop-blur-sm bg-white/5 shadow-xl hover:bg-opacity-20 transition duration-300 ease-in-out hover:scale-110">
  <figure><img className='hover:opacity-50 transition duration-300 ease-in-out hover:scale-110  ' src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title font-bold">
      {name}
 
    </h2>
    <p>{description}</p>
    {/* <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div> */}
  </div>
</div>
        </div>
    );
};

export default ServiceCArd;