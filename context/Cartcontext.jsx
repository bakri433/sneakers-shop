import { createContext,useContext,useReducer,useEffect } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const Cartcontext=createContext();
const initialstate=[];
function cartreducer(state,action){
  switch(action.type){
case "ADD-TO-CART":
  { const {product,quantity} = action.payload;
  const existingproduct=state.find((item)=>item.id===product.id);
  if(existingproduct){
   return state.map((item)=>item.id===product.id?{...item,quantity:item.quantity + quantity}:item);
  }

  return[
    ...state,{...product,quantity}
  ] ;

  } 
  case "REMOVE-FROM-CART": {
const id = action.payload;
return state.filter((item)=>item.id!==id);


  }
    

    case "INCREASE": return state.map((item)=>item.id==action.payload?{...item,quantity:item.quantity+1}:item);
     

      case "DECREASE":return state.map((item)=>item.id===action.payload?{...item,quantity:item.quantity-1}:item)
      .filter((item)=>item.quantity>0);
       

        case "CLEAR":
          return [];

        default:
          return state;};

 
  }

const Cartprovider = ({children}) => {
 
  const [state,dispatch]=useReducer(cartreducer,initialstate,()=>{
    const savedcart=localStorage.getItem("cart");
    return savedcart?JSON.parse(savedcart):initialstate;
  });
   useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(state))
  },[state])
  return (
   
      <Cartcontext.Provider value={{state,dispatch}}>
{children}
      </Cartcontext.Provider>
  
  )
}
export function Usecart(){
  return useContext(Cartcontext);
}
export default Cartprovider;
