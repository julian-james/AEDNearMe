import React from "react";
import { Route, Routes, Outlet } from 'react-router-dom';
import Home from "./pages/Home/Home";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer.js";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<p>nothing to see here, move on mate.</p>} />
      </Routes>

      <Footer/>

      <Outlet />
    </div>
  );
}

export default App;
