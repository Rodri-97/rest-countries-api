import axios from "axios";
import { useState, useEffect } from "react";
import "./styles/App.css";
import Countries from "./components/Countries.js";

const App = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const hook = () => {
    const eventHandler = response => {
      const countriesData = response.data
      setAllCountries(countriesData)
    }

    const promise = axios.get("https://restcountries.com/v2/all")
    promise.then(eventHandler)
  }

  useEffect(hook, []);

  const handleSearchChange = event => setSearch(event.target.value);
  const handleFilterChange = (event) => setFilter(event.target.value);

  const filterOptions = [
    "All", "Africa", "Americas", "Asia", "Europe", "Oceania", "Polar"
  ];

  const displayedCountries = allCountries.filter((country) => {
    const lowerCaseCountry = country.name.toLowerCase();
    const lowerCaseSearch = search.toLowerCase();
    return lowerCaseCountry.includes(lowerCaseSearch) && (country.region === filter || filter === "All");
  });

  return (
    <div>
      <header className="header">
        <h1>Where in the world?</h1>
        <span>Dark mode</span>
      </header>
      <main className="main">
        <input className="search-bar" value={search} onChange={handleSearchChange} />

        <select className="filter" value={filter} onChange={handleFilterChange} >
          {filterOptions.map((filterOption) => {
            return <option key={filterOption} value={filterOption}>{filterOption}</option>
          })}
        </select>

        <Countries
          search={search}
          displayedCountries={displayedCountries}
          handleSearchChange={handleSearchChange}
        />
      </main>
    </div>
  )
}

export default App;