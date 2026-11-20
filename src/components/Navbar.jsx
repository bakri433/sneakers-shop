import { Link } from "react-router-dom";
import { Search } from 'lucide-react';
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Usecart } from "../../context/Cartcontext";
import { useState } from "react";

const Navbar = () => {
  //state for toggle menu
  const[isopen,setIsopen]=useState(false);
  //state for toggle search
  const[searchopen,setSearchopen]=useState(false);
const closemenu=()=>{setIsopen(false)};
const{state,dispatch}=Usecart();
const cartcount=state.reduce((total,item)=>total+item.quantity,0);
  return (
   <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl font-family-main border-b border-gray-200 shadow-md">
    <div className="container  w-full mx-auto  px-4 py-4 md:mx-auto lg:px-6">
<div className="flex w-full justify-between items-center">
  <div className="logo flex items-center justify-around"><a onClick={closemenu} href="/sneakers-shop/" className=" focus-visible:ring-main text-2xl font-family-main mr-12"><span className="text-black">BLOOM</span><span className="text-main">SHOP</span></a>
   <Link to="/Contact" className="hidden md:block text-sm px-4 py-2 rounded-full transition-all duration-300 hover:bg-gray-100 ">Contact</Link>
   </div>
   <div className="hidden lg:flex flex-1 max-w-md ">
     <form className=" relative w-full">
          <Search className="absolute w-[15px] opacity-40 top-[50%] -translate-y-[50%] left-2"/>
<input type="text" placeholder="Search products..." className=" w-full px-3 pl-10 text-[14px] py-2 border-1 border-gray-300 rounded-[20px] disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-main focus-visible:outline-none" />
        </form>
   </div>
 
  <div className="nav-action flex  justify-center space-x-2"><button onClick={()=>setSearchopen(!searchopen)} className={`lg:hidden p-2 rounded-full ${searchopen?' bg-gray-100':""} hover:bg-gray-100 transition-colors`}><Search className="w-5"/></button>
 
  <button onClick={()=>setIsopen(!isopen)} className="lg:hidden md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors">{isopen? <X/>:<Menu/>}</button>
   <Link to="/Cart" onClick={closemenu} className="relative rounded-full p-2 mr-2 hover:bg-gray-100 transition-all duration-300"><ShoppingCart/>
   {cartcount>0 &&(
  <span className="absolute min-w-[20px] h-5 font-bold flex justify-center items-center p-1 text-center left-6 -top-1 rounded-full bg-main text-white text-xs ">{cartcount}</span>
)}
   </Link>

 <div className="hidden sm:flex items-center space-x-2 font-medium">
  <a href="#"><button className="rounded-full text-sm py-2 px-3 hover:bg-accent transition-colors hover:text-accentfor">Sign In</button></a>
  <a href="#"><button className="rounded-full text-sm shadow bg-main py-[7px] px-3 hover:bg-main/80 transition-colors">Sign Up</button></a>
 </div>
 </div>

</div>
 {searchopen && (
      <div className="pt-3 lg:hidden">
        <form className="relative">
          <Search className="lg:hidden absolute w-[17px] opacity-40 top-[50%] -translate-y-[50%] left-2"/>
<input  type="text" placeholder="Search products..." className=" w-full px-3 pl-10 text-[14px] py-3 border-1 border-gray-400 rounded-[20px] disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-main focus-visible:outline-none" autoFocus />
        </form>
      </div>
    )}
  {isopen && (
    <div className="bg-white mt-5 md:hidden"> 
<Link to="/Contact" onClick={closemenu} className="block rounded-full px-2 py-2 hover:bg-gray-100 text-[15px]">Contact</Link>
<hr className="opacity-10 mt-3"/>
<div className=" sign-buttons sm:hidden flex flex-col justify-center gap-3 items-center mt-3 py-2 pb-4 md:pb-0 sm:pb-0 ">
<a href="#" className=" flex justify-center items-center w-full rounded-full py-2 cursor-pointer  text-[15px] bg-white shadow-md border-1 border-gray-100 hover:bg-accent transition-colors hover:text-accentfor duration-200 whitespace-nowrap "><button className="cursor-pointer">Sign In</button></a>
<a href="#" className=" flex justify-center items-center w-full rounded-full py-2 cursor-pointer whitespace-nowrap  text-[15px] bg-main border-1 border-gray-100  hover:bg-main/80 transition-colors duration-200"><button className="cursor-pointer">Sign Up</button></a>
</div>
    </div>
  )}
    </div>
   
    </header>
  )
}

export default Navbar;
