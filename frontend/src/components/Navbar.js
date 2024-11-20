import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between">
      <div className="text-xl font-bold">MyApp</div>
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/signin" className="hover:underline">
            Sign In
          </Link>
        </li>
        <li>
          <Link to="/register" className="hover:underline">
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;