import React from "react";

import { Navbar } from "./components";
import {
  Header,
  About,
  Team,
  Lessons,
  Rentals,
  Gallery,
  ContactUs,
  Footer,
} from "./containers";

import './App.scss'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Team />
      <Lessons />
      <Rentals />
      <Gallery />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
