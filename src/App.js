import "./styles/App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Country from "./components/Country.js";
import latinize from "latinize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [allCountries, setAllCountries] = useState([]);

  const hook = () => {
    const eventHandler = (response) => {
      const countriesData = response.data
      setAllCountries(countriesData)
    };

    const promise = axios.get("https://restcountries.com/v2/all");
    promise.then(eventHandler);
  };
  useEffect(hook, []);

  const [currentMode, setCurrentMode] = useState("light");

  return (
    <div className={`app ${currentMode === "light" ? "light" : "dark"}`}>
      <header className="header">
        <h1 className="title">Where in the world?</h1>
        <div className="mode-div" onClick={() => setCurrentMode(currentMode === "dark" ? "light" : "dark")}>
          <FontAwesomeIcon icon={currentMode === "light" ? faMoon : faSun} className="mode-icon" />
          {currentMode === "light" ? "Dark mode" : "Light mode"}
        </div>
      </header>

      <HashRouter>
        <Routes>
          <Route path="/" element={<Home allCountries={allCountries} />} />
          {allCountries.map((country) => {
              return <Route
                key={country.name} 
                path={
                  country.name.split(" ").length === 1 ?
                  `/${latinize(country.name.toLowerCase())}` :
                  `/${latinize(country.name.toLowerCase().split(" ").join("-"))}`
                }
                element={
                <Country 
                  country={country} 
                  allCountries={allCountries}
                />
                }
              />
          })}
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App;