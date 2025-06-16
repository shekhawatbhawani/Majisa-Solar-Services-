import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroSection from './Components/Hero';
import Navbar from './Components/NavBar';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import FAQ from './Components/FAQs';
import About from './Components/About';
import Services from './Components/Services';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;