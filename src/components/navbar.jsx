import React from 'react';
import { Link } from "react-router-dom";
import { ShoppingCart } from 'phosphor-react';
import "./navbar.css"

export const Navbar = () => {
  return (
    <div className="navbar">
      <h1>THRIFTIFY</h1>
        <div className="links">
        <Link to= "/"> Shop </Link>
        <Link to= "/cart"><ShoppingCart size = {32} /></Link>
        <Link to= "/contact"> Contact </Link>
        <Link to="/sell">Sell</Link>
        </div>
    </div>
  );
}

