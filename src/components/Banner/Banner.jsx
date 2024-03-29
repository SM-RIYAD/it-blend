
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  AOS.init();
  return (
    <div>
      <div className=" w-full relative  ">
        <div
          className="hero min-h-screen  min-w-screen bg-cover w-full relative"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        >
          <div className="hero-overlay absolute inset-0 bg-opacity-70"></div>
          <div className="hero-content text-center text-neutral-content relative z-10">
            <div className="mt-20">
              <div className="flex flex-col justify-center items-center">
                <h1
                  data-aos-delay="100"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out"
                  data-aos="fade-left"
                  className="mb-5 lg:text-6xl text-4xl  text-white font-extrabold"
                >
              Harmonizing Innovation with Technology
                </h1>
                <p
                  data-aos-delay="1100"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out"
                  data-aos="fade-right"
                  className=" text-white text-xl"
                >
         Welcome to ITBlend, your gateway to seamless innovation and technology integration. We specialize in tailoring IT solutions to elevate your business in the fast-paced digital era. At ITBlend, we bring a blend of creativity and technical prowess to drive your success. 
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-delay="2100"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out"
                  className="flex lg:flex-row flex-col"
                >
         
                  <button className="btn mt-5  btn-outline rounded-none hover:bg-blue-500 w-[200px] h-[50px]  text-white hover:border-none  ">
                    Join Us
                  </button>
              
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
