import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="w-full ">
      <ul className="w-full flex gap-8 items-center p-2 bg-slate-600 text-white">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
        
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
