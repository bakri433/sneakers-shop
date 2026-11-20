import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faInstagram,faGithub,faTwitter } from '@fortawesome/free-brands-svg-icons';
import { ArrowRight,MapPin,Phone,Mail,Heart } from "lucide-react";
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Footer = () => {
  const [email,setEmail]=useState("");
  const newsletteremail=(e)=>{ 
    e.preventDefault();
    if(email){
     
   console.log(`newsletter subsicribtion: ${email}`);
   setEmail("");
    }
 
  }
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 border-t border-border font-family-main">
    <div className="py-12 border-b border-border">
      <div className="mx-auto text-center max-w-2xl">
        <h3 className="mb-4 text-2xl font-bold text-foreground">Stay in the loop</h3>
        <p className="text-muted mb-6">Subscribe to our newsletter for exclusive offers, new arrivals, and style inspiration.</p>
        <form onSubmit={newsletteremail} className="flex max-w-md mx-auto gap-2">
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter your email" className="w-full h-9 rounded-2xl shadow-lg px-3 py-1 border border-border text-base md:text-sm disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-main focus-visible:outline-none"/>
<button  className="bg-main shadow h-9 inline-flex justify-center items-center px-4 py-2 rounded-2xl transition-colors hover:bg-main/90">
<ArrowRight className="w-4 h-4 "/>
</button>
        </form>
      </div>
    </div>
    <div className="py-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
<div className="lg:col-span-2">
  <a href="/sneakers-shop/" className="text-2xl font-family-main"><span className="text-black">BLOOM</span><span className="text-main">SHOP</span></a>
  <p className="text-muted max-w-sm mb-6 ">Discover unique products that inspire your lifestyle. Quality craftsmanship meets modern design.</p>
  <div className="space-y-3">
    <div className="flex items-center gap-3 text-sm"><MapPin className="w-4 h-4 text-main"/><span className="text-muted">123 Fashion Street, Style City, SC 12345</span></div>
    <div className="flex items-center gap-3 text-sm"><Phone className="w-4 h-4 text-main"/><span className="text-muted">+1 (555) 123-4567</span></div>
    <div className="flex items-center gap-3 text-sm"><Mail className="w-4 h-4 text-main"/><span className="text-muted">hello@bloomshop.com</span></div>
  </div>
  <div className="flex gap-3 items-center justify-start mt-6">
    <a aria-label='Facebook' className='flex justify-center items-center bg-gray-100 rounded-full w-10 h-10 transition-colors duration-300 hover:bg-main' href="#"><FontAwesomeIcon icon={faFacebook}/></a>
    <a aria-label='Twitter' className='flex justify-center items-center bg-gray-100 rounded-full w-10 h-10 transition-colors duration-300 hover:bg-main' href="#"><FontAwesomeIcon icon={faTwitter}/></a>
    <a aria-label='Instagram' className='flex justify-center items-center bg-gray-100 rounded-full w-10 h-10 transition-colors duration-300 hover:bg-main' href="#"><FontAwesomeIcon icon={faInstagram}/></a>
    <a  aria-label='Github'className='flex justify-center items-center bg-gray-100 rounded-full w-10 h-10 transition-colors duration-300 hover:bg-main' href="#"><FontAwesomeIcon icon={faGithub} /></a>
  </div>
</div>
<div>
  <h4 className='text-sm text-black font-semibold tracking-wider mb-4'>SHOP</h4>
<ul className='space-y-5 text-muted text-sm'>
  <li><a href='' className='hover:text-foreground transition-colors duration-200'>All Products</a></li>
  <li><a href='' className='hover:text-foreground transition-colors duration-200'>New Arrivals</a></li>
  <li><a href='' className='hover:text-foreground transition-colors duration-200'>Sale</a></li>
  <li><a href='' className='hover:text-foreground transition-colors duration-200'>Featured</a></li>
</ul>
</div>
<div>
   <h4 className='text-sm text-black font-semibold tracking-wider mb-4'>CUSTOMER CARE</h4>
<ul className='space-y-5 text-muted text-sm'>
  <li><Link to="/Contact" className='hover:text-foreground transition-colors duration-200'>Contact Us</Link></li>
  <li><a href='#' className='hover:text-foreground transition-colors duration-200'>Help Center</a></li>
  <li><a href='#' className='hover:text-foreground transition-colors duration-200'>Shipping Info</a></li>
  <li><a href='#' className='hover:text-foreground transition-colors duration-200'>Returns & Exchanges</a></li>
</ul>
</div>
<div>
    <h4 className='text-sm text-black font-semibold tracking-wider mb-4'>COMPANY</h4>
<ul className='space-y-5 text-muted text-sm'>
  <li><a href='#' className='hover:text-foreground transition-colors duration-200'>About Us</a></li>
  <li><a href='#' className='hover:text-foreground transition-colors duration-200'>Careers</a></li>
  <li><a href='#' className='hover:text-foreground transition-colors duration-200'>Blog</a></li>
  <li><a href='#' className='hover:text-foreground transition-colors duration-200'>Press</a></li>
</ul>
</div>
<div>
     <h4 className='text-sm text-black font-semibold tracking-wider mb-4'>LEGAL</h4>
<ul className='space-y-5 text-muted text-sm'>
  <li><a href='#' className='hover:text-foreground transition-colors duration-200'>Privacy Policy</a></li>
  <li><a href='#' className='hover:text-foreground transition-colors duration-200'>Terms & Conditions</a></li>
  <li><a href='#' className='hover:text-foreground transition-colors duration-200'>Cookie Policy</a></li>
  <li><a href='#' className='hover:text-foreground transition-colors duration-200'>Accessibility</a></li>
</ul>
</div>
</div>
    </div>
    <div className=' flex gap-4 flex-col items-center justify-between pb-6 pt-10 mx-auto px-4 border-t border-border md:flex-row'>
<div className='space-y-2 sm:space-y-0'>
  <div className='flex gap-2 flex-col sm:flex-row items-center text-muted text-sm justify-center '>© 2026 BloomShop™. Made with <Heart className='w-4 h-4 text-red-500 fill-current'/> All Rights Reserved.</div>
  <div className='flex justify-center items-center flex-col sm:flex-row gap-1 text-sm text-muted '><div>Developed by <a className="font-bold transition-colors duration-300 hover:text-main" target='_blank' href='https://github.com/bakri433'>Bakri433</a> </div><div>• Distributed by<a className='font-bold transition-colors duration-300 hover:text-main' href='https://themewagon.com/'>ThemeWagon</a></div></div>
</div>
<div><ul className='flex items-center space-x-5 text-sm text-muted'>
  <li><a href='#' className='transition-colors duration-200 hover:text-foreground'>Privacy</a></li>
  <li><a href='#' className='transition-colors duration-200 hover:text-foreground'>Terms</a></li>
  <li><a href='#' className='transition-colors duration-200 hover:text-foreground'>Cookies</a></li>
  </ul></div>
    </div>
    </div>
  )
}

export default Footer;
