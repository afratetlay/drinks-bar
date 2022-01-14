import { render } from '@testing-library/react';
import React from 'react';


export default class Buttons extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
            active: false
        }
    }

    clickHandler = (e) => {
        // const currentState = this.state.active;
        // this.setState({ active: !currentState });
        const btns = document.querySelectorAll('.search-row button');
        btns.forEach(btn => btn.classList.remove('active'));
        e.target.className = 'active';
        
        // const selected = e.target.value;
        // const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${selected}`;
        //     fetch(url)
        //       .then(res => res.json())
        //       .then(data => this.setState({ cocktails: data }));
    }

    render() {
        return (
            <>
                <button 
                    id="vodka"
                    type="button"
                    onClick={this.clickHandler}
                    className={this.state.active ? 'active' : null}
                    value="vodka"
                >Vodka</button>
                <button 
                    id="whisky"
                    type="button"
                    onClick={this.clickHandler}
                    className={this.state.active ? 'active' : null}
                    value="whisky"
                >Whisky</button>
                <button 
                    id="wine"
                    type="button"
                    onClick={this.clickHandler}
                    className={this.state.active ? 'active' : null}
                    value="wine"
                >Wine</button>
                <button 
                    id="champagne"
                    type="button"
                    onClick={this.clickHandler}
                    className={this.state.active ? 'active' : null}
                    value="champagne"
                >Champagne</button>
            </>
        )
    }
}
