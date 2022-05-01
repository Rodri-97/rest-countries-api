import { Link } from "react-router-dom";
import Borders from "./Borders.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Country = (props) => {
    const { country, allCountries } = props;

    const { 
        population, region, subregion,
        topLevelDomain, languages
    } = country;

    let displayedCurrencies;

    if ("currencies" in country) {
        displayedCurrencies = country.currencies.map((currency) => {
            return currency.name;
        });
    }

    const displayedLanguages = languages.map((language) => {
        return language.name;
    });

    return (
        <div className="selected-country">
            <Link to="/" className="back-link">
                <FontAwesomeIcon icon={faArrowLeft} className="arrow-left" />
                <span>Back</span>
            </Link>

            <div className="main-content">
                <div className="flag-container">
                    <img 
                        src={country.flags.svg} 
                        alt={`${country.name}'s flag`}
                        className="selected-country-flag" 
                    />
                </div>

                <div className="info">

                    <div className="info-1">
                        <p><span className="info-span">Native name:</span> {country.name}</p>
                        <p><span className="info-span">Population:</span> {population}</p>
                        <p><span className="info-span">Region:</span> {region}</p>
                        <p><span className="info-span">Sub Region:</span> {subregion}</p>
                        {"capital" in country ? 
                        <p><span className="info-span">Capital:</span> {country.capital}</p>
                        : null
                        }
                        
                    </div>

                    <div className="info-2">
                        <p><span className="info-span">Top Level Domain:</span> {topLevelDomain}</p>
                        {"currencies" in country ?
                            <p><span className="info-span">{country.currencies.length > 1 ? "Currencies" : "Currency"}: </span> 
                                {displayedCurrencies.join(", ")}
                            </p>
                        : null
                        }
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
        </div>
    )
}

export default Country;