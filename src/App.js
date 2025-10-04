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
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <OurApproach />
      <OurTeam />
      <OurClients />
      <TestimonialsSlider />   
      <OurAchievements />
      <Services />
      <Languages />
      <Portfolio />
      <Industries />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
