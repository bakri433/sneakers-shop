import { ArrowLeft,ShoppingBag,Truck,Shield,Trash2,Minus,Plus } from "lucide-react"
import { Link } from "react-router-dom"
import { Cartcontext } from "../../context/Cartcontext"
import { useState } from "react"
import { Usecart } from "../../context/Cartcontext"
import Cartsummary from "../components/Cartsummary"
const Cart = () => {
 const{state,dispatch}=Usecart();
const cartcount=state.reduce((total,item)=>total+item.quantity,0);
// const [quantity,setQuantity]=useState(1);
//  const increment=(quan)=>{
//  };
//  const decrement=()=>{
//   if(quantity>1){
//       setQuantity((prev)=>prev-1);

//   }
//  }
if(state.length===0){
   return (
   
   
      <div className="my-32 font-family-main">
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
<div className="mx-auto space-y-2 text-center">
<ShoppingBag className="w-24 h-24 text-muted mx-auto mb-5"/>
<h2 className="text-3xl font-bold tracking-wide">Your cart is empty</h2>
<p className="text-muted text-lg my-4 px-1">Looks like you haven't added anything to your cart yet.</p>
<Link to="/"><button className=" inline-flex justify-center items-center h-10 bg-main text-black py-4 px-8 font-semibold rounded-2xl cursor-pointer transition-colors duration-300 mt-4 hover:bg-main/90 text-sm ">Continue Shopping</button></Link>
<div className="flex justify-center items-center gap-6 mt-4">
  <p className="flex items-center gap-2 text-muted text-sm"><Truck className="w-4 h-4 text-muted"/> Free shipping over $50</p>
  <p className="flex items-center gap-2 text-muted text-sm"><Shield className="w-4 h-4 text-muted"/> Secure checkout</p>
</div>
</div>
    </div>
  </div>
    ) 
}
   return(

         <div className="grow font-family-main">
      <div className="container px-4 sm:px-6 lg:px-8 py-8 mx-auto">
        <div className="flex justify-between items-center ">
          <div className="space-y-2">
            <h1 className="text-black text-xl font-bold tracking-wide sm:text-2xl md:text-3xl ">Shopping Cart</h1>
            <p className="text-base text-muted"><span>{cartcount}</span> items in your cart</p>
          </div>
          <Link to="/"><button className="cursor-pointer inline-flex items-center justify-center gap-2 border-none px-4 py-2 text-muted text-sm font-medium hover:bg-accent transition-colors duration-300 rounded-2xl hover:text-black whitespace-nowrap"><ArrowLeft className="w-4 h-4"/>Continue Shopping</button></Link>
        </div>
        <div className="grid items-start gap-6 mx-auto my-8 flex-col lg:grid-cols-3">
          <div className="rounded-3xl border border-border shadow-lg lg:col-span-2">
            <div className="flex justify-between items-center px-6 pt-6 ">
<h2 className="font-semibold">Cart Items</h2>
<button onClick={()=>dispatch({type:"CLEAR"})} className="inline-flex justify-center items-center gap-4 p-2 h-9 text-muted  transition-colors duration-300 hover:text-red-500 hover:bg-main/10 rounded-full">
  <Trash2 className="w-4 h-4"/> 
  <span className="text-xs">Clear All</span> 
</button>
            </div>
            {state.map((item)=>(
              <div key={item.id} className="flex justify-center items-center gap-4 px-4 py-4 border-b border-border">
                <div className="relative w-25 h-25 ">
<img className="absolute object-cover rounded-3xl w-full h-full" src={item.image}/>
                </div>
                <div className="space-y-2 flex-1">

<div className="flex justify-between items-center ">
  <div className="space-y-1">
  <h3 className="font-semibold">{item.name}</h3>
  <p className="text-muted text-sm mb-4">${item.price}.00 each</p>


  </div>
  
    
  <Trash2 onClick={()=>dispatch({type:"REMOVE-FROM-CART",payload:item.id})} className="cursor-pointer w-8 h-8 text-muted p-2 rounded-full transition-colors duration-300 hover:bg-main/10 hover:text-red-500"/>

</div>
<div className="flex justify-between items-center ">
      <div className="inline-flex items-center justify-center rounded-full border-border border-1 overflow-hidden "><button disabled={item.quantity==1} onClick={()=>dispatch({type:"DECREASE", payload:item.id})} className={`text-black px-2 py-3 transition-colors duration-300 hover:bg-accent hover:text-accentfor ${item.quantity==1?'text-muted':'text-black'}`}><Minus className={`h-4 w-4`}/></button><span className="flex justify-center items-center px-2 py-2 w-[50px]">{item.quantity}</span><button onClick={()=>dispatch({type:"INCREASE",payload:item.id})} className="text-muted px-2 py-3 transition-colors duration-300 hover:text-accentfor hover:bg-accent"><Plus className="w-4 h-4 text-black"/></button></div>

  <h3 className="text-lg font-bold">${item.quantity*Number(item.price)}.00</h3>
</div>
                </div>
              </div>
            ))}
          </div>
          <div className="sticky top-10"> <Cartsummary/></div>
      
        </div>
        <div className="mx-auto rounded-3xl border border-border shadow-lg p-6 mt-8">
          <h2 className="text-base font-semibold">You might also like</h2>
          <div className="flex gap-6 justify-center items-center flex-col mt-12 mb-8">
            <p className="text-muted">Discover more products that match your style</p>
            <Link className="px-4 py-2 rounded-full border border-border shadow-md text-sm transition-colors duration-300 hover:bg-accent hover:text-accentfor" to="/">Browse Products</Link>
          </div>
        </div>
      </div>
    </div>
   );
  
 }


export default Cart
