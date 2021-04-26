import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import BlogPostPage from "./views/BlogPostPage/BlogPostPage";
import CitiesPage from "./views/CitiesPage/CitiesPage";
import CityPage from "./views/CityPage/CityPage";
import MainPage from "./views/MainPage/MainPage";
import Footer from "./components/Footer/Footer";
import BlogsPage from "./views/BlogsPage/BlogsPage";
import BlogMenuPage from "./views/BlogMenuPage/BlogMenuPage";
import AttractionPage from "./views/AttractionPage/AttractionPage";
import AboutUsPage from "./views/AboutUsPage/AboutUsPage";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route path="/main" render={() => <MainPage />} />
        <Route path="/cities" render={() => <CitiesPage />} />
        <Route path="/blogMenu" render={() => <BlogMenuPage />} />
        <Route path="/aboutUs" render={() => <AboutUsPage />} />

        <Route path="/aboutUs" render={() => <Footer />} />
        <Route path="/main" render={() => <Footer />} />
        <Route path="/blogMenu" render={() => <Footer />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
