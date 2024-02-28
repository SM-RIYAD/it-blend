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
        <div className='mx-auto lg:max-w-6xl'>
<div className="my-32">
<h1 className="text-blue-500 mt-10 text-center text-xl "> Meet Our Team</h1>

<h1 className="text-center text-4xl mb-20 "> We provide truly prominent IT solutions.  </h1>
</div>
            <div className='grid  grid-cols-1 lg:grid-cols-3   lg:p-0 '>

            {
members.map((member,idx) =><TeamCard key={idx} name={member.name} description={member.description} image={member.image} exp={member.experience} ></TeamCard>)

}

            </div>




        </div> 
    );
};

export default TeamSection;