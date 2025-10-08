import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import OurApproach from './pages/OurApproach';
import OurTeam from './pages/OurTeam';
import OurClients from './pages/OurClients';
import { TestimonialsSlider } from './components/TestimonialsSlider'; // ✅ استيراد السلايدر الصحيح
import OurAchievements from './pages/OurAchievements';
import Services from "./pages/Services"
import Languages from "./pages/Languages"
import Portfolio from "./pages/Portfolio"
import Industries from "./pages/Industries"
import WhyChooseUs from "./components/WhyChooseUs"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Industries />
      <Languages />
       <OurTeam />
      <OurApproach />
      <OurAchievements />
      <Portfolio />
      <OurClients />
      <TestimonialsSlider />   
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
