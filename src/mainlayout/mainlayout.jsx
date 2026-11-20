import Navbar from "../components/Navbar";
import Footer from "../components/footer"
import { useState } from "react";
import { Outlet } from "react-router-dom";
const Mainlayout = () => {
  const [search,setSearch]=useState("");
    return(

  
    <>
    <Navbar search={search} setSearch={setSearch}/>
              <Outlet context={{search}}></Outlet>
              <Footer/>
    </>
  )
}

export default Mainlayout;
