import { Link } from "react-router-dom";

const Countries = (props) => {
    const { search, displayedCountries } = props;

    if (displayedCountries.length === 0 && search.length !== 0) {
        return <p>No match, specify another filter</p>
    }

    return (
        <div className="countries">
            {displayedCountries.map((country) => {
                return (
                    <Link to={`/${country.name.toLowerCase()}`}
                    key={country.name} className="country-link" >
                    <div key={country.name} className="country">
                        <div className="flag-container" style={{
                            backgroundImage: `url(${country.flags.svg})`
                        }}>
                        </div>
                        <div className="country-info">
                            <h2 className="country-name">{country.name}</h2>
                            <p><span className="info-span">Population:</span> {country.population}</p>
                            <p><span className="info-span">Region:</span> {country.region}</p>
                            <p><span className="info-span">Capital:</span> {country.capital}</p>
                        </div>
                    </div>
                </Link>
                )
            })}
        </div>
    )
}

export default Countries;