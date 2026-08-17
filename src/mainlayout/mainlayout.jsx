import Navbar from "../components/Navbar";
import Footer from "../components/footer"
import { Outlet } from "react-router-dom";
const Mainlayout = () => {
    return(

  
    <>
    <Navbar/>
              <Outlet></Outlet>
              <Footer/>
    </>
  )
}

export default Mainlayout;
