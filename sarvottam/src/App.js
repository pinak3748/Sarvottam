import './App.css';
import Navbar from './Component/Navbar';
import Home from './Sections/Home';
function App() {
  return (
    <div className="w-full">
      <Navbar />
      <div className='pt-[70px]'>
        <Home />
      </div>
    </div>
  );
}

export default App;
