// import { Route, Routes } from "react-router-dom";
import Mainlayout from "./mainlayout/mainlayout"
 import Home from "./pages/Home"
 import Contact from "./pages/Contact"
 import Products from "./pages/Products"
 import About from "./pages/About"
 import Cart from "./pages/Cart"
import { Route,Routes } from "react-router-dom";
function App(){
   
return(
    <div> 
 <Routes>
  <Route element={<Mainlayout/>}>
    <Route path="/" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/Cart" element={<Cart/>}/>
 </Route>
</Routes> 
    </div>

)
}
export default App
