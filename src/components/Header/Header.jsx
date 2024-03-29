


import "./Header.css";


const Header = () => {


  return (
    <div className="   ">
<div className="navbar text-blue-400 font-bold absolute z-50 bg-opacity-30 bg-black   px-20 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
      <li className="font-bold"><a href="#services" className="font-bold">SERVICES</a></li>
       
       <li><a href="#faq" >FAQ</a></li>
       <li><a href="#packages">PACKAGES</a></li>
       <li><a href="#team">TEAM</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl lg:text-4xl">IT BLEND</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
 
    <li className="font-bold"><a href="#services" className="font-bold">SERVICES</a></li>
       
       <li><a href="#faq" >FAQ</a></li>
       <li><a href="#packages">PACKAGES</a></li>
       <li><a href="#team">TEAM</a></li>

    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn my-2 lg:block md:block hidden btn-outline rounded-none hover:bg-blue-500 w-[200px] h-[40px] text-blue-500 hover:border-none border border-blue-500">
  Register
</button>

  </div>
</div>
    </div>
  );
};

export default Header;

