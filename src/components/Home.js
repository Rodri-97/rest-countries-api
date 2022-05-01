import { useState } from "react";
import Countries from "./Countries.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Home = (props) => {
    const { allCountries } = props;

    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");

    const handleSearchChange = (event) => setSearch(event.target.value);
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
      <div className="home">
        <div className="search-and-filter-container">
          <div className="search-container">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input 
              className="search-bar" 
              value={search} 
              onChange={handleSearchChange}
              placeholder="Search for a country..." 
            />
          </div>

          <select className="filter" value={filter} onChange={handleFilterChange} >
            {filterOptions.map((filterOption) => {
              return <option key={filterOption} value={filterOption}>{filterOption}</option>
            })}
          </select>
        </div>

        <Countries
          search={search}
          displayedCountries={displayedCountries}
          handleSearchChange={handleSearchChange}
        />
      </div>
    )
}

export default Home;