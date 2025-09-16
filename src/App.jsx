import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
import FooterNav from "./components/FooterNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Login from "./Pages/Login";
// import Register from "./Pages/Register";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Hero />} /> */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}

      </Routes>
      <FooterNav />
    </>
  );
}

export default App;