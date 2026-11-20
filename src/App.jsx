// import { Route, Routes } from "react-router-dom";
import Mainlayout from "./mainlayout/mainlayout"
 import Home from "./pages/Home"
 import Contact from "./pages/Contact"
 import Productdetails from "./pages/Productdetails"
 import About from "./pages/About"
 import Cart from "./pages/Cart"
import { Route,Routes } from "react-router-dom";
import ScrollToTop from "./mainlayout/scrolltotop"
function App(){
   
return(
    <div> 
        <ScrollToTop/>
 <Routes>
  <Route element={<Mainlayout/>}>
    <Route path="/" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/product/:id" element={<Productdetails/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/Cart" element={<Cart/>}/>
 </Route>
</Routes> 
    </div>

)
}
export default App
