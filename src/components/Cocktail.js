function Cocktail({ key, name, thumb }) {
    return (
        <div className="col-6">

            <div className="cocktail">
                <h1>{ name }</h1>
                <img src={ thumb } width="250" alt={ name } />
            </div>

        </div>
    );
}

export default Cocktail