import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import ReviewCard from "./ReviewCard";
const ReviewSection = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
      fetch("reviews.json")
        .then((result) =>result.json()).then((data) =>setReviews(data))
      
        
     
        .catch((error) => console.log(error));
    }, []);
  

    
    return (
        <div className=' py-20'> 
       <div className="my-20">
<h1 className="text-yellow-500 font-bold mt-10 text-center text-xl "> Voices of Satisfaction</h1>

<h1 className="text-center text-4xl mb-20 "> Discover Client Experiences </h1>
</div>
        {/* <div className="bg-green-500 flex items-center justify-center  h-20 my-10  text-white w-full">
      <h1 className="   text-center text-4xl font-bold ">Positive Reviews</h1>
      </div> */}
            <Marquee>

                {
                    

                  reviews.map((review,idx) =><ReviewCard key={idx} unique_review={review}></ReviewCard>)


                }
            </Marquee>
         
        </div>
    );
};

export default ReviewSection;