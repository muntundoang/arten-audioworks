import './App.css';
import { Routes, Route} from "react-router-dom";
import Navbar from './component/Navbar';
import Themain from './pages/Themain';
import Rentals from './pages/Rentals';
import Aboutus from './pages/Aboutus';
import Value from './pages/Value';
import Contact from './pages/Contact';
import Equipment from './pages/Equipment';
import LoginForm from './pages/loginRegisterFrom';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Themain />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/value" element={<Value />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginForm />} /> 
        </Routes>
    </div>
    
  );
}

export default App;
