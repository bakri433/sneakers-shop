import { Heart,Eye,ShoppingCart,Check } from "lucide-react"
import { Loader2 } from "lucide-react";
import { useContext, useState } from "react"
import { Usecart } from "../../context/Cartcontext";
import { Link } from "react-router-dom"
import { FavoritesProvider } from "../../context/favoritescontext";
const Productcard = ({product}) => {
const{favorites,addandremovefavorites}=useContext(FavoritesProvider);
const{dispatch}=Usecart();
   const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
   const[addbutton,setbutton]=useState("Add to Cart");
   const[disabled,setDisabled]=useState(false);
   const[added,setadded]=useState(false);
const addproducttocart=async(e)=>{
setbutton("Adding...");
setDisabled(true);
await delay(1000);
 dispatch({type:"ADD-TO-CART",payload:{product:product,quantity:1}});
 setbutton("Added");
 setDisabled(false);
 setadded(true);
 await delay(1000);
 setbutton("Add to Cart");
 setadded(false);
}

 


  return (
    <div className='group rounded-3xl text-foregroundcard border border-border shadow-md overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300'>
      <div className="image-section relative overflow-hidden">
        <button onClick={()=>addandremovefavorites(product.id)} className={`absolute bg-white/80 top-3 right-3 z-10 inline-flex justify-center items-center w-9 h-9 gap-2 rounded-full opacity-0 backdrop-blur-sm group-hover:opacity-100 transition-all duration-300 hover:bg-white group/child ${favorites.includes(product.id) && 'opacity-100'}`}>
        <Heart name="like icon" className={`h-4 w-4 group-hover/child:text-accentfor ${favorites.includes(product.id)&& "fill-red-500 text-red-500 group-hover/child:fill-current"}`}/></button>
        <Link to={`/product/${product.id}`} className="relative block "> 
          <div className="aspect-square overflow-hidden">
          <img src={product.image} alt={product.name} width={400} height={400} className="w-full h-full group-hover:scale-105 duration-300 object-cover"/>
        </div>
<div className="qv absolute inset-0 flex justify-center items-center opacity-0 bg-white/40 group-hover:opacity-100">
<button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-main text-xs shadow font-medium duration-300 transition-colors h-8 px-3 text-primary hover:bg-main/90">
<Eye className="w-4 h-4 mr-2"/>Quick View</button>
</div>
        </Link>
      
      </div>
      <div className="info p-4 space-y-3">
<Link to={`/product/${product.id}/`}>
<h2 className="font-semibold text-foreground transition-colors hover:text-main">{product.name}</h2>
</Link>
<div className="font-bold text-lg text-foreground">${product.price}.00</div>
<button disabled={disabled} onClick={()=>addproducttocart()} className={`inline-flex justify-center items-center disabled:opacity-50 cursor-pointer gap-2 whitespace-nowrap text-foreground px-4 py-2 w-full h-9 rounded-2xl font-medium text-sm ${added?"bg-green-500":"bg-main  transition-colors duration-300 hover:bg-main/90"}`}><div className="flex items-center gap-2">
  {addbutton=="Add to Cart"&&(
  <ShoppingCart className="w-4 h-4"/>
  

)}
{addbutton=="Adding..."&&(
  <Loader2 className="w-4 h-4 animate-spin"/>
)}
{addbutton=="Added"&&(
  <Check className="w-4 h-4"/>
)}
{addbutton}
</div>
 </button>
      </div>
    </div>
  )
}

export default Productcard
