import { Link } from "react-router-dom";

function Cocktail({ key, name, thumb, id }) {
    return (
        <div className="col-12 col-sm-6 col-md-4 drink-card-wrap">
            <div className="drink-card">
                <div className="img-wrap">
                    <img src={ thumb } width="250" alt={ name } />
                </div>
                <div className="drink-card-content">
                <h3>{ name }</h3>
                <Link to={`/cocktail/${id}`}>
                <button>Find out more</button>
                </Link>
                </div>
             </div>
        </div>
    );
}

export default Cocktail