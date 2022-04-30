import { Link } from "react-router-dom";

const Country = (props) => {
    const { country } = props;

    return (
        <div>
            <Link to="/">back</Link>
            <h1>{country.name}</h1>
        </div>
    )
}

export default Country;