import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";

const AppNavigator = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppNavigator;