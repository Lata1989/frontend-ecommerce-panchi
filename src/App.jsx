// Minuto 18 Tailwind
// https://www.youtube.com/watch?v=7E6um7NGmeE
// Tiempo 1:01:00
import { Routes, Route } from "react-router-dom";
// Rutas
import {About} from "./pages/About.jsx";
import {Cart} from "./pages/Cart.jsx";
import {Collection} from "./pages/Collection.jsx";
import {Contact} from "./pages/Contact.jsx";
import {Home} from "./pages/Home.jsx";
import {Login} from "./pages/Login.jsx";
import {Orders} from "./pages/Orders.jsx";
import {PlaceOrder} from "./pages/PlaceOrder.jsx";
import {Product} from "./pages/Product.jsx";
// Componentes
import { Navbar } from "./components/Navbar.jsx";


export const App = () => {
  return(
    <>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px[9vw]">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/collection' element={<Collection/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/place-order' element={<PlaceOrder/>}/>
          <Route path='/product/:productID' element={<Product/>}/>
        </Routes>
      </div>
    </>
  );
}

/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/