import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./Signup";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/registration" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
