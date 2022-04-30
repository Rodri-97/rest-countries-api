import { Link } from "react-router-dom";

const Borders = (props) => {
    const { country, allCountries } = props;
    
    let borderCountries = [];

    country.borders.forEach((borderCountry) => {
        allCountries.forEach((country) => {
            if (country.alpha3Code === borderCountry) {
                borderCountries.push(country.name);
            }
        })
    })

    const displayedBorderCountries = country.borders.map((borderCountry, index) => {
        return <Link to={`/${borderCountries[index].toLowerCase().split(" ").join("-")}`} 
                    className="border-country-link"
                    key={borderCountry}
                >
            {borderCountries[index]}
        </Link>
    })

    return (
        <div className="border-countries">
            Border Countries: {displayedBorderCountries}
        </div>
    )
}

export default Borders;