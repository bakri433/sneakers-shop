import { Usecart } from "../../context/Cartcontext"
import { CreditCard,Shield,Truck,Heart } from "lucide-react";
const Cartsummary = () => {
    const {state,dispatch}=Usecart();
    const cartcount=state.reduce((total,item)=>total+item.quantity,0);
const totalprice=state.reduce((total,item)=>total+(item.quantity*Number(item.price)),0);
const tax=totalprice*8/100
const Total=totalprice+tax;
  return (
    <div className=" rounded-3xl shadow-lg border border-border col-span-1 font-family-main py-6">
      <div className="px-6">
        <h2 className="text-black text-lg font-semibold mb-4">Order Summary</h2>
        <div className="space-y-4">
<div className="flex justify-between items-center">
<p className="text-sm text-muted">Subtotal ({cartcount} items)</p>
<p className="text-sm font-semibold">${totalprice}.00</p> 
</div>
<div className="flex justify-between items-center">
  <p className="text-sm text-muted">Shipping</p>
  <span className="text-xs px-2.5 py-0.5 bg-secondary rounded-xl">Free</span>
</div>
<div className="flex justify-between items-center border-b-2 pb-4 border-border">
  <p className="text-sm text-muted">Tax</p>
  <p className="text-sm font-semibold">${tax}</p>
</div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center mt-4"><h3 className="text-lg font-semibold">Total</h3>
          <p className="text-lg font-bold text-main">${Total}</p>
          </div>
          <a className=" border-b border-border pb-6" href="/checkout-page"><button className="inline-flex shadow-md  mt-3 justify-center items-center disabled:opacity-50 cursor-pointer gap-2 whitespace-nowrap text-foreground px-4 py-2 w-full h-10 rounded-2xl font-medium text-sm bg-main font-semibold transition-colors duration-300 hover:bg-main/90">
           <CreditCard className="w-4 h-4 "/> Proceed to Checkout</button></a>
        </div>
<div className="space-y-4 mt-8">
<div className="flex justify-start items-center gap-2 text-sm text-muted"><Shield className="w-4 h-4 text-green-500"/>Secure SSL checkout</div>
<div className="flex justify-start items-center gap-2 text-sm text-muted"><Truck className="w-4 h-4 text-blue-500"/>Free returns within 30 days</div>
<div className="flex justify-start items-center gap-2 text-sm text-muted"><Heart className="w-4 h-4 text-red-500"/>24/7 customer support</div>
</div>
      </div>
    </div> 
    )
}

export default Cartsummary;
