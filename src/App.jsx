import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// We haven't created Footer yet, so I commented it out to prevent errors

// Import all the pages you just created
import Home from "./pages/Home";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import About from "./pages/About";
import ServicePortfolio from "./pages/ServicePortfolio";
import Partners from "./pages/Partners";
import Events from "./pages/Events";
import Publications from "./pages/Publications";
import WhoWeAre from "./pages/WhoWeAre";
import EventDetails from "./pages/EventDetails";
import JoinUs from "./pages/JoinUs";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white text-gray-800 font-sans">
        {/* Navbar */}
        <ScrollToTop />
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicePortfolio />} />
            <Route path="/events" element={<Events />} />
            {/* 2. ADD THIS NEW LINE: */}
            <Route path="/events/:slug" element={<EventDetails />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/publications" element={<Publications />} />
            {/* <Route path="join-us" element={<JoinUs />} /> */}
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer Placeholder */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
