import React from 'react'
import Banner from "../../Banner/Banner"
import Details from '../../Details/Details';
import Navbar from "../../Navbar/Nabar"
import Service from '../../Service/Service';
import Footer from "../../Footer/Footer"
import Journal from '../../Journal/Journal';
const Home = () => {
  return (
    <div>
<Banner/>
<Details/>
<Service/>
<Journal/>
    </div>
  )
}

export default Home