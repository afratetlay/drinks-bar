import React from 'react';
import axios from 'axios'
import Cocktail from './Cocktail';

export default class CocktailList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cocktails: []
        };
    }

    componentDidMount() {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=gin`)
            .then(res => {
                console.log(res);
                const cocktails = res.data.drinks;
                this.setState({ cocktails });
            })
    }

    render() {
        return (
            <div className="cocktail-list">
                {this.state.cocktails.map((cocktail) => {
                    return <Cocktail name={cocktail.strDrink} thumb={cocktail.strDrinkThumb} key={cocktail.idDrink} />
                })}
            </div>
        );
    }
}