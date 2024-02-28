import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import ServiceCArd from "../Services/ServiceCArd";
import Services from "../Services/Services";


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
    <div className="  ">
      <Header></Header>
<Banner></Banner>
<Services></Services>
    </div>
  );
};

export default Home;