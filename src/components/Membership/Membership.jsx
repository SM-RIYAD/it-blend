import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const Membership = () => {
  AOS.init();
  const packages = ["SILVER", "GOLD", "PLATINUM"];
  return (
    <div id="packages" className="mx-auto max-w-6xl my-20">
      <div className="my-20">
        <h1 className="font-bold mt-10 text-center text-xl text-yellow-500 ">
          {" "}
          Get Membership
        </h1>

        <h1 className="text-center text-4xl mb-20 "> Be Our Premium client </h1>
      </div>
      <div className="grid gap-5  lg:grid-cols-3 grid-cols-1">
        <div
          data-aos-delay="100"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          data-aos="flip-left"
          className="card w-94 backdrop-blur-sm bg-white/5 shadow-xl border bg-opacity-70 text-gray-200"
        >
          <div className="card-body text-white">
            <h2 className="card-title ">SILVER</h2>
            <p className="text-4xl"> $11.99</p>
            <div className="card-actions justify-end">
              <button className="btn   backdrop-blur-sm bg-black/10 shadow-xl border bg-opacity-70 hover:text-blue-500 text-gray-100">Buy Now</button>
            </div>
          </div>
        </div>

 
          <div
            data-aos-delay="100"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos="flip-left"
            className="card w-94 backdrop-blur-sm bg-white/5 shadow-xl border bg-opacity-70 text-gray-200  "
          >
            <div className="card-body text-white">
              <h2 className="card-title">GOLD</h2>
              <p className="text-4xl"> $15.99</p>
              <div className="card-actions justify-end">
                <button className="btn   backdrop-blur-sm bg-black/10 shadow-xl border bg-opacity-70 text-gray-100 hover:text-blue-500 ">Buy Now</button>
              </div>
            </div>
          </div>
        

          <div
            data-aos-delay="100"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos="flip-left"
            className="card w-94 backdrop-blur-sm bg-white/5 shadow-xl border bg-opacity-70 text-gray-200"
          >
            <div className="card-body text-white">
              <h2 className="card-title">PLUTINUM</h2>
              <p className="text-4xl"> $20.99</p>
              <div className="card-actions justify-end">
                <button className="btn   backdrop-blur-sm bg-black/10 shadow-xl border bg-opacity-70 text-gray-100 hover:text-blue-500 ">Buy Now</button>
              </div>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default Membership;
