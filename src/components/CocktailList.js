import React from 'react';

import Cocktail from './Cocktail';
import Buttons from './Buttons';

import { Container, Row } from 'react-bootstrap';
import _ from 'lodash';

export default class CocktailList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cocktails: [],
            searchCocktails: []
        };
    }

    componentDidMount() {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`)
        .then((res) => res.json())
        .then(({drinks}) => {
            console.log(drinks);
            this.setState({ cocktails: drinks });
        })
        .catch((error) => console.error(error));
    }

    render() {

        const searchCocktail = _.debounce((event) => {
            const searchTerm = event.target.value;
        
            if(searchTerm.length === 0) {
              return this.setState({ searchCocktails: [] });
            }
        
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchTerm}`)
            .then((res) => res.json())
            .then(({drinks}) => {
                console.log(drinks);
                this.setState({ searchCocktails: drinks });
            })
            .catch((error) => console.error(error));
        }, 500);

        return (

            <div className='home-page-wrapper'>
            
                <Container>

                    <Row>
                        <div className="cocktail-search search-row">
                            <input type="text" placeholder="Search ingredient" id="cocktailSearch" onChange={(event) => searchCocktail(event)}></input>
                            <h1>Quick search by popular alcoholic drinks</h1>
                            <div className="buttons-container">
                                <Buttons searchCocktail={searchCocktail} />
                            </div>
                        </div>
                    </Row>

                    <Row>

                        {this.state.searchCocktails.length > 0 && this.state.searchCocktails.map((cocktail) => {
                            return (
                            <Cocktail 
                                key={cocktail.idDrink}
                                id={cocktail.idDrink}
                                name={cocktail.strDrink}
                                thumb={cocktail.strDrinkThumb}
                            />)
                        })}

                        {this.state.searchCocktails.length === 0 && this.state.cocktails.map((cocktail) => {
                            return (
                            <Cocktail
                                key={cocktail.idDrink}
                                id={cocktail.idDrink}
                                name={cocktail.strDrink}
                                thumb={cocktail.strDrinkThumb}
                            />)
                        })}

                    </Row> 

                </Container>

            </div>
            
        );
    }
}