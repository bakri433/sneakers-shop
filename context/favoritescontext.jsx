
import { useState,useEffect, createContext } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const FavoritesProvider=createContext();
const Favoritescontext = ({children}) => {
    const[favorites,setFavorites]=useState(()=>{
    const saved=localStorage.getItem("favorites");
   return saved?JSON.parse(saved):[]
  });
    const addandremovefavorites=(id)=>{
      const numberid=Number(id);
      setFavorites((prev)=>{
        if(prev.map(Number).includes(numberid)){
         return prev.filter((favoriteid)=>{
          return Number(favoriteid)!== numberid;
          })
        }else{
          return [...prev,numberid];
        }
      })
    };
useEffect(()=>{
  localStorage.setItem("favorites",JSON.stringify(favorites));

},[favorites]);
  return (
 
      <FavoritesProvider.Provider value={{favorites,addandremovefavorites}}>
        {children}
      </FavoritesProvider.Provider>
    
  )
}

export default Favoritescontext;
