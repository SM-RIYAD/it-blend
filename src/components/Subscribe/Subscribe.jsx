import React from 'react';

const Subscribe = () => {
    return (
        <div>
             <div className="py-20 relative">
    <div
      className="hero min-h-[550px] bg-cover bg-fixed  "
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1570717173024-ec8081c8f8e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXQlMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D)",
          
      }}
    >
      <div className="hero-overlay  inset-0 bg-gradient-to-r from-black to-blue-300 opacity-80"></div>
      <div className="hero-content text-center text-neutral-content relative z-10">
        <div className="">
          <h1 className="mb-5 lg:text-6xl text-xl text-center text-white font-bold">SUBSCRIBE IT BLEND</h1>
          <div
            
                  className="flex lg:flex-row gap-5 flex-col"
                >
                  <input 
                    type="email"
                    placeholder="Enter your email address"
                    className="input lg:w-[80%]  mt-5 input-bordered border-none rounded-none "
                    required
                  />
                  <button className="btn mt-5 lg:w-[30%]  rounded-none bg-blue-500 hover:bg-blue-500 text-white border-none  ">
                    Subscribe
                  </button>
                </div>
        </div>
      </div>
    </div>
  </div>
        </div>
    );
};

export default Subscribe;