import react, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//STYLES
import { GlobalStyle } from "./styles/GlobalStyles";
import ResponsiveStyle from "./styles/ResponsiveStyles";
//COMPONENTS
import Header from "./Components/Header";
// PAGES
import Products from "./Components/Products.jsx";
import Value from "./Components/Value.jsx";
import Services from "./Components/Services.jsx";
import Contact from "./Components/Contact.jsx";
import { Card } from "./styles/Card.jsx";
import About from "./Components/About.jsx";
import Hero from "./Components/Hero";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <GlobalStyle />
      <Hero />
      <ResponsiveStyle>
        <Card flexDirection="column" padding="2px">
          <About />
          <Products />
          <Value />
          <Services />
          <Contact id="contact" />
        </Card>
      </ResponsiveStyle>
    </BrowserRouter>
  );
}

export default App;
