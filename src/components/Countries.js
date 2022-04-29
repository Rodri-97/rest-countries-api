const Countries = (props) => {
    const { search, displayedCountries } = props;

    if (displayedCountries.length === 0 && search.length !== 0) {
        return <p>No match, specify another filter</p>
    }

    return (
        <div className="countries">
            {displayedCountries.map((country) => {
                return (
                    <div key={country.name}>
                        {country.name}
                    </div>
                )
            })}
        </div>
    )
}

export default Countries;