import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";


export default function App() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    document.body.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <BrowserRouter>
      <Navbar lang={lang} setLang={setLang} />

      <Routes>
        <Route path="/" element={<Home lang={lang} />} />
        <Route path="/about" element={<About lang={lang} />} />
        <Route path="/services" element={<Services lang={lang} />} />
        <Route path="/contact" element={<Contact lang={lang} />} />
      </Routes>


<Footer lang={lang} />

    </BrowserRouter>
  );
}
