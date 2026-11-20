import { Send,Mail,Phone,MapPin,Clock,Headphones,MessageSquare,Shield,Loader2,CircleCheckBig } from "lucide-react"
import { useState } from "react";
const Contact = () => {
  const contactinformation=[
    {
"icon":<Mail className="w-5 h-5 text-main"/>, 
"name":"Email Us",
"p1":"hello@bloomshop.com",
"p2":"support@bloomshop.com",
"note":"Send us an email anytime",
    },
    {
"icon":<Phone  className="w-5 h-5 text-main"/>, 
"name":"Call Us",
"p1":"+1 (555) 123-4567",
"p2":"+1 (555) 987-6543",
"note":"Mon-Fri from 8am to 5pm",
    },
    {
"icon":<MapPin  className="w-5 h-5 text-main"/>, 
"name":"Visit Us",
"p1":"123 Fashion Street",
"p2":"Style City, SC 12345",
"note":"Come say hello at our office",
    },
    {
"icon":<Clock  className="w-5 h-5 text-main"/>, 
"name":"Working Hours",
"p1":"Monday - Friday: 9am - 6pm",
"p2":"Saturday: 10am - 4pm",
"note":"friday: Closed",
    },
  ];

  const whycontact=[
    {
"icon":<Headphones className="w-4 h-4 text-accentfor"/>,
"name":"24/7 Support",
"describtion":"Get help whenever you need it",
    },
    {
"icon":<MessageSquare className="w-4 h-4 text-accentfor"/>,
"name":"Quick Response",
"describtion":"We reply within 2 hours",
    },
    {
"icon":<Shield className="w-4 h-4 text-accentfor"/>,
"name":"Secure & Private",
"describtion":"Your information is safe with us",
    },
  ];
  const faq=[
{
"quest":"What are your shipping policies?",
"answers":"We offer free shipping on orders over $50. Standard shipping takes 3-5 business days."
},
{
"quest":"How can I track my order?",
"answers":"Once your order ships, you'll receive a tracking number via email to monitor your package.",
},
{
"quest":"What is your return policy?",
"answers":"We accept returns within 30 days of purchase. Items must be in original condition.",
},
{
"quest":"Do you offer international shipping?",
"answers":"Yes, we ship worldwide. International shipping rates vary by destination."
},
  ]; 
  const [sending,setSending]=useState("Send Message");
  const [disabled,setDisabled]=useState(false);
  const [data,setData]=useState({
    nickname:"",
    email:"",
    subject:"",
    message:"",
  })
  // eslint-disable-next-line no-useless-assignment
 
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  const handlesendingform=async(e)=>{
    e.preventDefault();
setSending("Sending...");
setDisabled(true);
await delay(1500);
setSending("Message Sent!");
await delay(1500);
setData({
  nickname:"",
  email:"",
  subject:"",
  message:"",
})
setSending(`Send Message`);
setDisabled(false);
  }
  return (
  <>
      <div className="bg-gradient-to-br from-main/5 to-graccent/5 py-16 lg:py-24 font-family-main">

     
    <div className=" px-4 sm:px-6 lg:px-8 mx-auto">
      <div className=" container max-w-2xl mx-auto text-center space-y-6">
      <div className=" inline-flex px-2.5 py-0.5 bg-main text-black text-xs font-semibold rounded-full transition-colors duration-300 hover:bg-main/80 shadow ">Get in Touch</div>
      <h1 className="text-4xl font-bold lg:text-6xl tracking-wide mb-4">We'd love to <span className="text-main block lg:inline lg:ml-4">hear from you</span></h1>
      <p className="text-muted text-lg mx-auto max-w-2xl pt-2">Have a question, suggestion, or just want to say hello? We're here to help and would love to hear from you.</p>
      </div>
    </div> 
    </div>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 font-family-main">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
        <div className=" rounded-3xl bg-white text-foreground shadow-md px-6 py-4 border border-border">
<div className="space-y-1.5 mb-6">
  <h2 className="text-2xl font-bold">Send us a message</h2>
  <p className="text-base text-muted">Fill out the form below and we'll get back to you as soon as possible.</p>
</div>
<form className="space-y-4" onSubmit={handlesendingform}>
<div className="grid sm:grid-cols-2 gap-4 sm:flex-row">
  <div className="space-y-2"><label className="text-sm font-medium">Your Name</label><input onChange={(e)=>setData({...data,nickname:e.target.value})} value={data.nickname} className="w-full h-9 px-3 py-1 rounded-full shadow-md text-base border border-border disabled:cursor-not-allowed focus-visible:ring-main focus-visible:ring-1 focus-visible:outline-none"  required type="text" id="name" placeholder="Noah Doe"/></div>
    <div className="space-y-2"><label className="text-sm font-medium">Your Email</label><input onChange={(e)=>setData({...data,email:e.target.value})}  value={data.email} className="w-full h-9 px-3 py-1 rounded-full shadow-md text-base border border-border disabled:cursor-not-allowed focus-visible:ring-main focus-visible:ring-1 focus-visible:outline-none"  required type="email" id="email" placeholder="Noah@example.com"/></div>

</div>
<div className="space-y-2"><label className="text-sm font-medium">Subject</label><input onChange={(e)=>setData({...data,subject:e.target.value})}  value={data.subject} className="w-full h-9 px-3 py-1 rounded-full shadow-md text-base border border-border disabled:cursor-not-allowed focus-visible:ring-main focus-visible:ring-1 focus-visible:outline-none" type="text" id="subject" required placeholder="How can we help you"/></div>
<div><label className="text-sm font-medium">Your Message</label><textarea onChange={(e)=>setData({...data,message:e.target.value})}  value={data.message} className="w-full min-h-[60px] px-3 py-1 rounded-3xl shadow-md text-base border border-border disabled:cursor-not-allowed focus-visible:ring-main focus-visible:ring-1 focus-visible:outline-none resize-none mb-2"  required id="message" placeholder="Tell us more about your questions or concern..." rows={6}/></div>

<button type="submit" disabled={disabled} className="bg-main inline-flex gap-2 w-full sm:w-auto justify-center text-sm disabled:opacity-50 disabled:cursor-not-allowed font-semibold items-center rounded-2xl px-8 h-10 shadow transition-colors duration-300 disabled:cursor-not-allowed hover:bg-main/90">

{sending=="Send Message"&&(
  <Send className="w-4 h-4"/>
  

)}
{sending=="Sending..."&&(
  <Loader2 className="w-4 h-4 animate-spin"/>
)}
{sending=="Message Sent!"&&(
  <CircleCheckBig className="w-4 h-4"/>
)}
{sending}
</button>
</form> 
        </div>
        </div>
        <div className="lg:col-span-1 space-y-8">
          <div className=" rounded-3xl bg-white text-foreground shadow-md px-6 py-4 border border-border">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-6">
            {contactinformation.map((item,index)=>(
             
              <div key={index} className="flex gap-4 justify-start items-start">
                <div className="rounded-full p-2 bg-main/10 text-main">{item.icon}</div>
                <div className="">
<h3 className="text-base text-black font-semibold mb-2">{item.name}</h3>
<p className="text-sm text-muted">{item.p1}</p>
<p className="text-sm text-muted">{item.p2}</p>
<p className="text-xs text-muted mt-1">{item.note}</p>
                </div>
              </div>
           ))}</div>
          </div>
          <div className="rounded-3xl bg-white text-foreground shadow-md px-6 py-4 pb-2 border border-border">
        <h2 className="text-xl font-semibold mb-4">Why Contact Us?</h2>
        <div className="space-y-4">
          {whycontact.map((itemo,index)=>(
<div key={index} className="flex justify-start items-start gap-4 pb-4 border-b-2 border-border last:border-none">
  <div className="p-1 bg-graccent/10 rounded-full">{itemo.icon}</div>
  <div className=""><h3 className="text-sm text-black">{itemo.name}</h3>
  <p className="text-xs text-muted">{itemo.describtion}</p>
  </div>
</div>
          ))}
        </div>
          </div>
        </div>
         </div>
    </div>
    <div className="bg-bgmuted/30 py-12 lg:py-24 font-family-main">
    <div className=" container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="mb-12 space-y-6 ">
        <div className="inline-flex px-2 font-semibold py-0.5 rounded-full border border-border text-xs w-auto mb-6">FAQ</div>
        <h1 className="text-black text-3xl lg:text-4xl font-bold mb-6">Frequently Asked Questions</h1>
        <p className="text-muted text-lg ">Find quick answers to common questions about our products and services.</p>
      </div>
      <div className="mb-12 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {faq.map((quest,index)=>(
            <div key={index} className="p-6 rounded-3xl shadow-lg space-y-2 border border-border text-start">
         <h2 className="text-base text-black font-semibold mb-4">{quest.quest}</h2>
         <p className="text-sm text-muted">{quest.answers}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    <div className="py-16 lg:py-24 font-family-main">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 shadow-lg rounded-3xl bg-gradient-to-r from-main/10 to-graccent/10 border border-main/20 text-black p-10 ">
<h1 className="text-3xl lg:text-4xl font-bold mb-4 tracking-wide">Still have questions?</h1>
<p className="text-muted text-lg max-w-2xl mx-auto mb-8">Can't find what you're looking for? Our customer support team is here to help.</p>
<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
  <button className="inline-flex whitespace-nowrap justify-center items-center gap-4 w-full sm:w-auto px-8 rounded-2xl shadow  h-10 text-sm font-semibold bg-main transition-colors duration-300 hover:bg-main/90"><Phone className="w-4 h-4"/>Call Us Now</button>
  <button className="inline-flex whitespace-nowrap justify-center items-center gap-4 w-full sm:w-auto px-8 rounded-2xl shadow  h-10 text-sm font-medium bg-white transition-colors duration-300 hover:bg-accent hover:text-accentfor"><Mail className="w-4 h-4"/>Live Chat</button>
</div>
        </div>
      </div>
    </div>
    </>
  )
}
export default Contact
