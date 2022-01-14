function Cocktail({ key, name, thumb }) {
    return (
        <div className="col-12 col-sm-6 col-md-4 drink-card-wrap">

            <div className="img-wrap drink-card">
                <img src={ thumb } width="250" alt={ name } />
            </div>
            <div className="drink-card-content">
               <h3>{ name }</h3>
               <button>Find out more</button>
             </div>
        </div>
    );
}

export default Cocktail