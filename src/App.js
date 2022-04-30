import "./styles/App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Country from "./components/Country.js";

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
                path={`/${country.name.toLowerCase()}`}
                element={<Country country={country} />}
              />
          })}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;