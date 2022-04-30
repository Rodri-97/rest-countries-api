import "./styles/App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Country from "./components/Country.js";
import latinize from "latinize";

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

  return (
    <div>
      <header className="header">
        <h1 className="title">Where in the world?</h1>
        <span>Dark mode</span>
      </header>

      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  )
}

export default App;