import { Link } from "react-router-dom";
import Borders from "./Borders.js";

const Country = (props) => {
    const { country, allCountries } = props;

    const { 
        population, region, subregion, capital,
        topLevelDomain, currencies, languages
    } = country;

    const displayedCurrencies = currencies.map((currency) => {
        return currency.name;
    });

    const displayedLanguages = languages.map((language) => {
        return language.name;
    });

    return (
        <div>
            <Link to="/">back</Link>
            <div className="flag-container">
                <img src={country.flags.svg} alt={`${country.name}'s flag`} />
            </div>

            <div className="info">

                <div className="info-1">
                    <p><span className="info-span">Native name:</span> {country.name}</p>
                    <p><span className="info-span">Population:</span> {population}</p>
                    <p><span className="info-span">Region:</span> {region}</p>
                    <p><span className="info-span">Sub Region:</span> {subregion}</p>
                    <p><span className="info-span">Capital:</span> {capital}</p>
                </div>

                <div className="info-2">
                    <p><span className="info-span">Top Level Domain:</span> {topLevelDomain}</p>
                    <p><span className="info-span">{currencies.length > 1 ? "Currencies" : "Currency"}: </span> 
                        {displayedCurrencies.join(", ")}
                    </p>
                    <p><span className="info-span">{languages.length > 1 ? "Languages" : "Language"}: </span> 
                        {displayedLanguages.join(", ")}
                    </p>
                </div>

                {"borders" in country ? 
                <Borders country={country} allCountries={allCountries} /> 
                : null
                }
            </div>
        </div>
    )
}

export default Country;