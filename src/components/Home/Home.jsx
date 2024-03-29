import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import ServiceCArd from "../Services/ServiceCArd";
import Services from "../Services/Services";
import Footer from "../Footer/Footer";
import TeamSection from "../TeamSection/TeamSection";
import Membership from "../Membership/Membership";
import Subscribe from "../Subscribe/Subscribe";
import ReviewSection from "../Review/ReviewSection";
import FAQ from "../FAQ/FAQ";
import BannerTwo from "../Bannertwo.jsx/BannerTwo";

const Home = () => {
  const [searchWord, setSearchWord] = useState("");
  const handleSearch = () => {
    console.log("search word after", searchWord);

    fetch("data.json")
      .then((data) => data.json())
      .then((data) => {
        if (searchWord.length === 0) {
          setDonations(data);
        } else {
          let new_data = data.filter(
            (specific_Data) =>
              specific_Data.Category.toLowerCase() === searchWord.toLowerCase()
          );

          setDonations(new_data);
        }
      });
  };
  const [donations, setDonations] = useState([]);

  console.log("this is dona data", donations);
  return (
    <div className=" bg-gradient-to-r from-gray-600 to-blue-500  ">
      <Header></Header>
<Banner></Banner>
{/* <BannerTwo></BannerTwo> */}
<Services></Services>
<TeamSection></TeamSection>
<Subscribe></Subscribe>
<Membership></Membership>
<ReviewSection></ReviewSection>
<FAQ></FAQ>
 <Footer></Footer>
    </div>
  );
};

export default Home;
