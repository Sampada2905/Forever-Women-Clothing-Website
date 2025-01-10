
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Kurtasets from './pages/Kurtasets';
import Kurtis from './pages/Kurtis';
import Sarees from './pages/Sarees';
import Coords from './pages/Coords';
import Lehengas from './pages/Lehengas';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path="signup" element={<Home/>}/>
      <Route path="login" element={<Home/>}/>
      <Route path="adminlogin" element={<Home/>}/>
      <Route path="cart" element={<Cart/>}/>
      <Route path="kurtasets" element={<Kurtasets/>}/>
      <Route path="kurtis" element={<Kurtis/>}/>
      <Route path="sarees" element={<Sarees/>}/>
      <Route path="coords" element={<Coords/>}/>
      <Route path="lehengas" element={<Lehengas/>}/>
    
    
    
      </Route>
    </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
