import Productcard from "./Productcard"
import { Frown } from "lucide-react";
import Products from "../../data/products.json"
import { FavoritesProvider } from "../../context/favoritescontext";
import { useContext, useState } from "react";
const Productslist = ({search}) => {

  const {favorites}=useContext(FavoritesProvider);
const [filter,setFilter]=useState("all");
const favouritproducts=filter==="favorite"?Products.filter((product)=>favorites.includes(product.id)):Products;
const filteredproducts=favouritproducts.filter((product)=>product.name.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase()));
  return (
    <div className="font-family-main">
     <div className="flex justify-center sm:justify-start items-center gap-4 pb-6 lg:px-4"><button onClick={()=>setFilter("all")} className={`rounded-3xl px-6 py-2 lg:ml-15 transition-colors duration-300 hover:bg-border ${filter==="all"&& "bg-border"} `}>All</button><button onClick={()=>setFilter("favorite")} className={`rounded-3xl px-6 py-2 transition-colors duration-300 hover:bg-border ${filter==="favorite"&&"bg-border"}`}>Favorites</button></div>
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
      {filteredproducts.length>0?(
   filteredproducts.map((product)=>(
        <Productcard key={product.id} product={product}/>
      ))
      ):(
        <div className="flex gap-2">
        <h2 className="text-xl  font-bold">No Products Found </h2><Frown/>
       
      </div>
      )}
    
    </div>
    </div>

 
  )
}

export default Productslist
