import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroSection from './Components/Hero';
import Navbar from './Components/NavBar';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import FAQ from './Components/FAQs';
import About from './Components/About';
import Services from './Components/Services';
import BookInstallation from './Components/Book';
import QuoteForm from './Components/QuoteForm';
import SolarGallery from './Components/SolarGallery';
import ProjectList from './Components/Projects';
import Testimonials from './Components/Testimonials';
import TestimonialForm from './Components/TestimonialForm';
import AuthPage from './Components/AuthPage';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={< Services/>} />
        <Route path="/book" element={< BookInstallation/>} />
        <Route path="/quote" element={<QuoteForm/>} />
        {/* <Route path="/gallery" element={<SolarGallery/>} /> */}
        <Route path="/projects" element={<ProjectList/>} />
        <Route path="/testimonials" element={<Testimonials/>} />
        <Route path="/feedback" element={<TestimonialForm/>} />
        <Route path="/signup" element={<AuthPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;