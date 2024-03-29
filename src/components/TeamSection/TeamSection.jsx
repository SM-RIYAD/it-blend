import React from 'react';
import { useEffect, useState } from "react";
import TeamCard from './TeamCard';
const TeamSection = () => {

    const [members, setMembers] = useState([]);
    fetch("members.json")
    .then((data) => data.json())
    .then((data) => {
   
        setMembers(data);
      }
    );
    return (
        <div id="team" className='mx-auto lg:max-w-6xl'>
<div className="my-32">
<h1 className="text-yellow-500 font-bold mt-10 text-center text-xl "> Meet Our Team</h1>

<h1 className="text-center text-2xl lg:text-4xl mb-20 "> The driving force behind our IT success  </h1>
</div>
            <div className='grid  grid-cols-1 lg:grid-cols-3 md:grid-cols-2   lg:p-0 '>

            {
members.map((member,idx) =><TeamCard key={idx} name={member.name} description={member.description} image={member.image} exp={member.experience} ></TeamCard>)

}

            </div>




        </div> 
    );
};

export default TeamSection;