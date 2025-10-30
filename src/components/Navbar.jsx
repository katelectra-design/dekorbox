import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ setTheme }) => (
  <nav className="flex justify-between items-center p-4 bg-opacity-30 backdrop-blur-md">
    <h1 className="text-2xl font-bold">DekorBox</h1>
    <div className="space-x-4">
      <Link to="/">Sākums</Link>
      <Link to="/par-mums">Par mums</Link>
      <Link to="/produkti">Produkti</Link>
      <Link to="/kontakti">Kontakti</Link>
    </div>
    <select
      onChange={(e) => setTheme(e.target.value)}
      className="ml-4 p-1 rounded"
    >
      <option value="christmas">🎄 Ziemassvētki</option>
      <option value="halloween">🎃 Helovīni</option>
      <option value="midsummer">🌼 Jāņi</option>
      <option value="easter">🐣 Lieldienas</option>
    </select>
  </nav>
);

export default Navbar;