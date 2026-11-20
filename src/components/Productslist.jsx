import Productcard from "./Productcard"
import Products from "../../data/products.json"
import { FavoritesProvider } from "../../context/favoritescontext";
import { useContext, useState } from "react";
const Productslist = () => {
  const {favorites}=useContext(FavoritesProvider);
const [filter,setFilter]=useState("all");
const filteredproducts=filter==="favorite"?Products.filter((product)=>favorites.includes(product.id)):Products;
  return (
    <div className="font-family-main">
     <div className="flex justify-center sm:justify-start items-center gap-4 pb-6 lg:px-4"><button onClick={()=>setFilter("all")} className={`rounded-3xl px-6 py-2 lg:ml-15 transition-colors duration-300 hover:bg-border ${filter==="all"&& "bg-border"} `}>All</button><button onClick={()=>setFilter("favorite")} className={`rounded-3xl px-6 py-2 transition-colors duration-300 hover:bg-border ${filter==="favorite"&&"bg-border"}`}>Favorites</button></div>
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
      {filteredproducts.length>0?(
   filteredproducts.map((product)=>(
        <Productcard key={product.id} product={product}/>
      ))
      ):(
        <div>
        <h2>No Products Found </h2>
        <h2>404 Error</h2>
      </div>
      )}
    
    </div>
    </div>

 
  )
}

export default Productslist
