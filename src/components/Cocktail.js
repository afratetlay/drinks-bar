function Cocktail({ name, thumb }) {
    return (
        <div className="cocktail">
            <h1>{ name }</h1>
            <img src={ thumb } width="250" alt={ name } />
        </div>
    );
}

export default Cocktail