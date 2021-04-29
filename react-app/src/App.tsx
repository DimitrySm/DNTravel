import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import CitiesPage from "./views/CitiesPage/CitiesPage";
import MainPage from "./views/MainPage/MainPage";
import Footer from "./components/Footer/Footer";
import BlogMenuPage from "./views/BlogMenuPage/BlogMenuPage";
import AboutUsPage from "./views/AboutUsPage/AboutUsPage";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  const [closedHeaderMenu, setClosedHeaderMenu] = useState(true);
  const [closedBlogMenu, setclosedBlogMenu] = useState(true);

  const onBlogMenuClick = () => {
    if (closedBlogMenu === true) {
      setclosedBlogMenu(false);
    } else {
      setclosedBlogMenu(true);
    }
  };

  const onClick = () => {
    if (closedHeaderMenu === true) {
      setClosedHeaderMenu(false);
    } else {
      setClosedHeaderMenu(true);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header onClick={onClick} closedHeaderMenu={closedHeaderMenu} />
        <Route path="/main" render={() => <MainPage />} />
        <Route path="/cities" render={() => <CitiesPage />} />
        <Route
          path="/blogMenu"
          render={() => (
            <BlogMenuPage
              closedBlogMenu={closedBlogMenu}
              onBlogMenuClick={onBlogMenuClick}
            />
          )}
        />
        <Route path="/aboutUs" render={() => <AboutUsPage />} />

        <Route path="/aboutUs" render={() => <Footer />} />
        <Route path="/main" render={() => <Footer />} />
        <Route path="/blogMenu" render={() => <Footer />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
