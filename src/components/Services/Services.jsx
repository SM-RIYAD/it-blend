import React from "react";
import { useEffect, useState } from "react";
import ServiceCArd from "./ServiceCArd";
const Services = () => {
    const [services, setServices] = useState([]);
    fetch("data.json")
    .then((data) => data.json())
    .then((data) => {
   
        setServices(data);
      }
    );
  return (
    <div id="services" className="my-10 lg:max-w-6xl p-2 mx-auto">
<div className="my-32">
<h1 className="text-yellow-500 font-bold mt-10 text-center text-xl "> What We Provide</h1>

<h1 className="text-center text-4xl mb-20 "> We provide truly prominent IT solutions.  </h1>
</div>

      {" "}
      <div className="grid grid-cols-1 p-5 md:grid-cols-2  lg:p-0 lg:grid-cols-4">
{
services.map((service,idx) =><ServiceCArd key={idx} name={service.name} description={service.description} image={service.image} ></ServiceCArd>)

}

      </div>
    </div>
  );
};

export default Services;
