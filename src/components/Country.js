import { Link } from "react-router-dom";

const Country = (props) => {
    const { country, allCountries } = props;

    const { 
        population, region, subregion, capital,
        topLevelDomain, currencies, languages,
        borders
    } = country;

    const displayedCurrencies = currencies.map((currency) => {
        return currency.name;
    });

    const displayedLanguages = languages.map((language) => {
        return language.name;
    });

    const getBorderCountries = () => {
        let borderCountries = [];

        borders.forEach((borderCountry) => {
            allCountries.forEach((country) => {
                if (country.alpha3Code === borderCountry) {
                    borderCountries.push(country.name);
                }
            })
        })

        return borderCountries;
    }

    const borderCountries = getBorderCountries();

    const displayedBorderCountries = borders.map((borderCountry, index) => {
        return <Link to={`/${borderCountries[index].toLowerCase().split(" ").join("-")}`} 
                    className="border-country-link"
                    key={borderCountry}
                >
            {borderCountries[index]}
        </Link>;
    })

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

                <div className="border-countries">
                    Border Countries: {displayedBorderCountries}
                </div>
            </div>
        </div>
    )
}

export default Country;