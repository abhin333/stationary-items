import React from 'react'
import "./App.css";
import Banner from './Component/Banner/Banner';
import Details from './Component/Details/Details';
import Navbar from "./Component/Navbar/Nabar"
import Service from './Component/Service/Service';
import Footer from "./Component/Footer/Footer"

const App = () => {
  return (
    <div>
<Navbar/>
<Banner/>
<Details/>
<Service/>
<div style={{height:1000}}></div>
<Footer/>
    </div>
  )
}

export default App