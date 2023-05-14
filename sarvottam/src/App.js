import './App.css';
import Navbar from './Component/Navbar';
import Home from './Sections/Home';
import OurBrands from './Sections/OurBrands';
import OurProduct from './Sections/OurProduct';
import ContactUs from './Sections/ContactUs';
import Footer from './Sections/Footer';
import Gallery from './Sections/Gallery';
function App() {
  return (
    <div className="w-full">
      <Navbar />
      <div className=''>
        <Home />
        {/* <OurBrands /> */}
        {/* <OurProduct />
        <Home /> */}
        <Gallery /> 
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}

export default App;
