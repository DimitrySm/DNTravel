import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import CitiesPage from "./views/CitiesPage/CitiesPage";
import MainPage from "./views/MainPage/MainPage";
import BlogMenuPage from "./views/BlogMenuPage/BlogMenuPage";
import AboutUsPage from "./views/AboutUsPage/AboutUsPage";
import { BrowserRouter, Route } from "react-router-dom";

import budapestCardImage from "./assets/images/cities/budapest/budapest-city-card.jpg";
import warsawatCardImage from "./assets/images/cities/warsawa/warsaw-city.jpg";
import CityPage from "./views/CityPage/CityPage";

function App() {
  const [closedHeaderMenu, setClosedHeaderMenu] = useState(true);
  const [closedBlogMenu, setclosedBlogMenu] = useState(true);

  const citiesState = [
    {
      id: 1,
      city: "Варшава",
      country: "Польша",
      discription:
        "столица Польши, архитектура которой отражает долгую и сложную историю города. Здесь можно увидеть готические церкви и неоклассические дворцы, типовые дома советского периода и современные небоскребы.",
      backgroundCardImage: warsawatCardImage,
    },
    {
      id: 2,
      city: "Будапешт",
      country: "Венгрия",
      discription:
        "столица Польши, архитектура которой отражает долгую и сложную историю города. Здесь можно увидеть готические церкви и неоклассические дворцы, типовые дома советского периода и современные небоскребы.",
      backgroundCardImage: budapestCardImage,
    },
  ];

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
        <Route
          path="/main"
          render={() => <MainPage citiesState={citiesState} />}
        />
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

        <Route path="/city" render={() => <CityPage />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
