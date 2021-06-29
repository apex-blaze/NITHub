import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Contactus from "./components/Contactus";

import Aboutus from "./components/Aboutus";
function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Services />
      <Contactus />
      <Aboutus />

      <Footer/>
    </div>
  );
}
export default App;
