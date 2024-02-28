import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import  { createContext, useState } from "react";

export const countContext= createContext([]);
const Root = () => {

    const [donation_Count,set_donation_Count]=useState(0);
    return (
        <div style={{fontFamily: 'Libre Baskerville'}}> 
      
            
        <Outlet></Outlet>
     
        
        </div>
    );
};

export default Root;