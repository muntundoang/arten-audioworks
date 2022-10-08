import "./App.css";
import { Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useEffect } from "react";
import Navbar from "./component/Navbar";
import Themain from "./pages/Themain";
import Rentals from "./pages/Rentals";
import Aboutus from "./pages/Aboutus";
import Value from "./pages/Value";
import Contact from "./pages/Contact";
import Equipment from "./pages/Equipment";
import Login2Form from "./pages/loginForm";

function App() {
  return (
    <div>
      <GoogleOAuthProvider clientId="395627301295-hnmrdrn70mjar8q1i423f01nh5uapbpd.apps.googleusercontent.com">
        <Navbar />
        <Routes>
          <Route path="/" element={<Themain />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/value" element={<Value />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login2Form />} />
        </Routes>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
