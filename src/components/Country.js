const Country = (props) => {
    const { country } = props;

    return (
        <div>{country.name}</div>
    )
}

export default Country;