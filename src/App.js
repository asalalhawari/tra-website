import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import OurApproach from './pages/OurApproach';
import OurTeam from './pages/OurTeam';
// import OurClients from './pages/OurClients'; // ❌ حذف هذا الاستيراد القديم
import OurClientsAndTestimonials from './components/OurClientsAndTestimonials'; // ✅ استيراد المكون المدمج (باستخدام الاسم الافتراضي)
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
      <Services />
      <Industries />
      <Languages />
      <OurTeam />
      <OurApproach />
      <OurAchievements />
      <Portfolio />
      <OurClientsAndTestimonials />
    
      <Contact />
      <Footer />
    </div>
  )
}

export default App