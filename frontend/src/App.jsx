import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import AboutPreview from './components/AboutPreview';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import Blogs from './components/Blogs';
import CTA from './components/CTA';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import BlogPost from './components/BlogPost';
import { useLocation } from 'react-router-dom';

const Home = () => (
  <>
    <Hero />
    <Stats />
    <AboutPreview />
    <Services />
    <Projects />
    <Reviews />
    <Blogs />
    <Pricing />
    <Contact />
  </>
);

const PageWrapper = ({ children }) => (
  <div style={{ paddingTop: '50px', minHeight: 'calc(100vh - 200px)' }}>
    {children}
  </div>
);

function AppContent() {
  const location = useLocation();
  const hideCTA = location.pathname === '/' || location.pathname === '/contact';

  return (
    <div className="app-wrapper">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/reviews" element={<PageWrapper><Reviews /></PageWrapper>} />
        <Route path="/blogs" element={<PageWrapper><Blogs /></PageWrapper>} />
        <Route path="/blog/:id" element={<PageWrapper><BlogPost /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/privacy-policy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
        <Route path="/terms-of-service" element={<PageWrapper><TermsOfService /></PageWrapper>} />
      </Routes>
      {!hideCTA && <CTA />}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
