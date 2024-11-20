import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppNavigator from "./AppNavigator";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <AppNavigator />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;