import './App.css';
import Navbar from './Component/Navbar';
import Home from './Sections/Home';
import OurBrands from './Sections/OurBrands';
import ContactUs from './Sections/ContactUs';
import Footer from './Sections/Footer';
import Gallery from './Sections/Gallery';
import ScrollableComponent from './Sections/ScrollableComponent';
function App() {
  return (
    <div className="w-full">
      <Navbar />
      <div className=''>
        <Home />
        <OurBrands />
        <ScrollableComponent />
        <Gallery />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}

export default App;
