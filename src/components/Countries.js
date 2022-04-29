const Countries = (props) => {
    const { search, filteredCountries } = props;

    if (filteredCountries.length === 0 && search.length !== 0) {
        return <p>No match, specify another filter</p>
    }

    return (
        <div>
            {filteredCountries.map((country) => {
                return (
                    <div key={country.name}>
                        {country.name}
                    </div>
            )})}
        </div>
    )
}

export default Countries;