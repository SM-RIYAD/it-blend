import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";


import "./Header.css";


const Header = () => {





  const navLinks = (
    <>
      <li >

          HOME
     
      </li>

      <li>
   
          Meals

      </li>

      <li >
    
          Upcoming Meals
      </li>
    </>
  );


  return (
    <div className="   ">
<div className="navbar text-blue-400 font-bold absolute z-50 bg-opacity-30 bg-black   px-20 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>About us</a></li>
       
        <li><a>Blog</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">IT BLEND</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
 
      <li><a>About us</a></li>
       
       <li><a>Blog</a></li>
       <li><a>Contact</a></li>

    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    </div>
  );
};

export default Header;

