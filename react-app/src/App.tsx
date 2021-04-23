import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Cities from "./views/Cities/Cities";
import Main from "./views/Main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Main /> */}
      <Cities />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
