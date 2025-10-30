import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sakums from "./pages/Sakums";
import ParMums from "./pages/ParMums";
import Produkti from "./pages/Produkti";
import Kontakti from "./pages/Kontakti";

const App = () => {
  const [theme, setTheme] = useState("christmas");

  const themeColors = {
    christmas: "bg-christmas text-white",
    halloween: "bg-halloween text-black",
    midsummer: "bg-midsummer text-white",
    easter: "bg-easter text-black"
  };

  return (
    <div className={`min-h-screen flex flex-col ${themeColors[theme]}`}>
      <Navbar setTheme={setTheme} />
      <main className="flex-grow p-6">
        <Routes>
          <Route path="/" element={<Sakums />} />
          <Route path="/par-mums" element={<ParMums />} />
          <Route path="/produkti" element={<Produkti />} />
          <Route path="/kontakti" element={<Kontakti />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;