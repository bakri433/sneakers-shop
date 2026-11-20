/* eslint-disable react-hooks/preserve-manual-memoization */
import { Link, useParams,useNavigate } from "react-router-dom";
import { useContext, useMemo, useState } from "react";
import products from "../../data/products.json";
import { ArrowLeft,Star,Minus,Plus,ShoppingCart,Heart,Share2,Truck,Shield,RotateCcw,Loader2,Check} from "lucide-react";
import { FavoritesProvider } from "../../context/favoritescontext";
import { Usecart } from "../../context/Cartcontext";

const Productdetails = () => {
const {dispatch}=Usecart();
   const {id}=useParams();
   const product = products.find((item)=>String(item.id)===String(id));
   const lists=[
    {
"id":1,
"icon":<Truck/>,
"name":"Free Shipping",
"des":"On orders over $50"
    },
    {
"id":2,
"icon":<Shield/>,
"name":"Warranty",
"des":"1 year guarantee"
    },
    {
      "id":3,
"icon":<RotateCcw/>,
"name":"Easy Returns",
"des":"30-day return policy"
    }
   ];
  const currentid=product.id;
  const{favorites,addandremovefavorites}=useContext(FavoritesProvider);
  // eslint-disable-next-line react-hooks/purity
  const relatedproducts=useMemo(()=>{
if(!products) return [];
// eslint-disable-next-line react-hooks/purity
return products.filter((product)=>product.id!==currentid).sort(()=>Math.floor(Math.random(products.length)-0.5)).slice(0,4);
 
  // eslint-disable-next-line react-hooks/preserve-manual-memoization
  },[currentid]);
 const [quantity,setQuantity]=useState(1);
 const increment=()=>{
  setQuantity((prev)=>prev+1);
 };
 const decrement=()=>{
  if(quantity>1){
      setQuantity((prev)=>prev-1);

  }
 }
   const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
   const[addbutton,setbutton]=useState("Add to Cart");
   const[disabled,setDisabled]=useState(false);
   const[added,setadded]=useState(false);
const addproducttocart=async(e)=>{
setbutton("Adding...");
setDisabled(true);
await delay(1000);
 dispatch({type:"ADD-TO-CART",payload:{product,quantity}});
 setbutton("Added");
 setDisabled(false);
 setadded(true);
 await delay(1000);
 setbutton("Add to Cart");
 setadded(false);
}
const navigate=useNavigate();
const  buynow=async()=>{
  await addproducttocart();
  navigate("/Cart");

  
}
    return (
  
    <div className="container mx-auto py-8 px-4 lg:px-8 font-family-main grow">
<div className="flex w-full max-w-[500px] justify-start items-center"><Link to="/"><button className=" cursor-pointer inline-flex items-center justify-center gap-2 border-none px-4 py-2 text-muted text-sm font-medium hover:bg-accent transition-colors duration-300 rounded-xl hover:text-black"><ArrowLeft className="w-4 h-4"/>Return to Shop</button></Link></div>
<div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
  <div className="w-full max-w-[500px] mx-auto flex flex-col items-center px-4">
            <div className="rounded-3xl shadow-lg overflow-hidden mb-4 w-full">
              <img
                src={product.image}
                alt="Selected product"
                width={600}
                height={600}
                fetchPriority="high"
                className="rounded-xl object-cover w-full h-auto max-h-[500px]"
              />
            </div>
          </div>
          <div>

          
  <div className="py-2 pb-6 space-y-4">
    <h2 className="text-3xl font-bold text-black tracking-wide lg:text-4xl">{product.name}</h2>
    <div className="flex items-center justify-start gap-2">
      <div className="stars flex justify-center items-center gap-1 text-main"><Star className="fill-main h-4 w-4"/><Star className="fill-main w-4 h-4"/><Star className="fill-main w-4 h-4"/><Star className="fill-main h-4 w-4"/><Star className="fill-main w-4 h-4"/><span className="text-muted text-sm">(4.8)</span><span className="text-muted text-sm"> • 127 reviews</span></div>
    </div>
    <h2 className="text-3xl tracking-wide font-bold">${product.price}.00</h2>
    <p className="text-muted text-base leading-relaxed pt-2">{product.description}</p>
  </div>
  <div className="border-t-2 py-6 space-y-2 border-border">
    <span className="text-sm block">Quantity</span>
    <div className="inline-flex items-center justify-center rounded-full border-border border-1 overflow-hidden "><button onClick={decrement} className={`text-muted px-4 py-3 transition-colors duration-300 hover:bg-accent hover:text-accentfor `}><Minus className={`h-4 w-4 ${quantity>1?"text-black":"text-muted"}`}/></button><span className="flex justify-center items-center px-2 py-2 w-[50px]">{quantity}</span><button onClick={increment} className="text-muted px-4 py-3 transition-colors duration-300 hover:text-accentfor hover:bg-accent"><Plus className="w-4 h-4 text-black"/></button></div>
    <div className="flex flex-col gap-2 items-center justify-center md:flex-row md:gap-4">
<button disabled={disabled} onClick={()=>addproducttocart()} className={`inline-flex justify-center items-center mt-2 disabled:opacity-50 cursor-pointer gap-2 whitespace-nowrap text-foreground px-4 py-2 w-full h-9 rounded-2xl font-medium text-sm ${added?"bg-green-500":"bg-main  transition-colors duration-300 hover:bg-main/90"}`}><div className="flex items-center gap-2">
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
   <button onClick={()=>buynow()} className="mt-2 inline-flex justify-center items-center gap-2 whitespace-nowrap bg-white border-border border-1 shadow-lg text-foreground px-4 py-2 w-full h-9 rounded-full font-medium text-sm transition-colors duration-300 hover:text-accentfor hover:bg-accent md:px-2 md:py-5"><div className="flex items-center gap-2">Buy Now</div></button>

    </div>
<div className="flex flex-col justify-center items-start gap-4 px-2 pt-2">
  <button onClick={()=>addandremovefavorites(product.id)} className={`inline-flex justify-center items-center whitespace-nowrap py-2 px-2 text-xs gap-4 text-muted rounded-full transition-colors duration-300 hover:bg-accent hover:text-black ${favorites.includes(product.id)&& "bg-accent"}`}><Heart className={`w-4 h-4 transition-all duration-200 ${favorites.includes(product.id)&& "fill-red-500 text-red-500"}`}/>{favorites.includes(product.id)?("Added"):("Add to Wishlist")}</button>
  <button className="inline-flex justify-center items-center whitespace-nowrap py-2 px-2 text-xs gap-4 text-muted rounded-full transition-colors duration-300 hover:bg-accent hover:text-black"><Share2 className="w-4 h-4 "/>Share</button>
</div>
  </div>
  </div>
  
</div>
<div className="flex flex-col justify-center items-center gap-8 rounded-3xl border border-border shadow-lg px-8 py-6 mx-auto mb-12 md:flex-row md:justify-center md:py-8">
{lists.map((list)=>(
  <div key={list.id} className="flex justify-start items-center gap-4 w-full">
  <div className="inline-flex justify-center items-center p-3 rounded-2xl bg-main/10 text-main">{list.icon}</div>
  <div className="space-y-1">
    <h2 className="font-semibold ">{list.name}</h2>
    <p className="text-sm text-muted">{list.des}</p>
  </div>
</div>
))}
</div>
<div className="py-4">
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl text-black font-bold">Related Products</h2>
    <Link to="/"><button className="px-4 py-2 cursor-pointer rounded-full transition-colors duration-300 hover:bg-main/10 text-sm text-main">View All</button></Link>

  </div>
  <div className="grid grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-4 py-4">
{relatedproducts.map((product)=>(
<div key={product.id} className="group className='group rounded-3xl text-foregroundcard border border-border shadow-md overflow-hidden transition-all hover:shadow-lg duration-300">
  <Link to={`/product/${product.id}`} className="relative block">
  <div className="overflow-hidden aspect-square">

<img src={product.image} alt={product.name} width={400} height={400} className="w-full h-full object-cover transition-all duration-200 group-hover:scale-105" />

  </div>
  <div className="px-4 py-4 space-y-2">
<p className="text-black text-base font-semibold">{product.name}</p>
<p className="text-main text-lg font-bold">${product.price}.00</p>
  </div>
  </Link>
</div>
))}
  </div>
</div>
    </div>
  )
};

export default Productdetails;
