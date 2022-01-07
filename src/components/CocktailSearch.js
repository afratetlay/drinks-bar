import React from 'react';
import _, {debounce} from 'lodash';

export default class CocktailSearch extends React.Component {

    render() {

        const ingredientSearch = (event) => {
            
            // updateQuery = (query) => {
            //     debounce(() => query(this.setState({ query }), 500))
            //     this.onBookSearch(query)
            // }

            console.log(event.target.value);
        }

        return (
            <>
                {/* <div className="cocktail-search">
                    <input type="text" id="cocktailSearch" onkeyup="processChange()" onChange={(event) => ingredientSearch(event)}></input>
                    <button type="button" id="cocktailSearchBtn">Search</button>
                </div> */}
            </>
        );
    }
}