import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { BrowserRouter } from 'react-router-dom'
import Favoritescontext from '../context/favoritescontext.jsx'
import Cartprovider from '../context/Cartcontext.jsx'
createRoot(document.getElementById('root')).render(
 
    <StrictMode>
        <Cartprovider>
     <Favoritescontext>
      <BrowserRouter basename='/sneakers-shop'> 
      
<App/>
     
     </BrowserRouter>
     </Favoritescontext>
     </Cartprovider>
 </StrictMode>
)
