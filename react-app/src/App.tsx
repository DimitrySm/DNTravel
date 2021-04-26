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

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUsPage />
      {/* <AttractionPage /> */}
      {/* <BlogMenuPage /> */}
      {/* <BlogPostPage /> */}
      {/* <BlogsPage /> */}
      {/* <MainPage /> */}
      {/* <CityPage /> */}
      {/* <CitiesPage /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
