import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Offers from "./components/Offers"
import Banner from "./components/Banner"
import Rooms from "./components/Rooms"
import Slider from "./components/Slider"
import Footer from "./components/Footer";
const App=()=>{
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Banner/>
      <Offers/>
      <Rooms/>
      <Slider/>
      <Footer/>
    </div>
  )
}

export default App
