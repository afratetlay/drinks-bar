import React from "react";
import CocktailList from './components/CocktailList';
// import Product from './components/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  
  return (
    <div className="App">
      <CocktailList  />
    </div>
  );
}

// import React, { Component } from 'react';
// // import CocktailList from './components/CocktailList'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';


// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       cocktails: [],
//       active: false
//     }
//   }

//   results = () => {
//     const data = this.state.cocktails.drinks;
//     console.log(data);
//     if (data) {
//       return data.map(cocktail => (
//         <div className="col-12 col-sm-6 col-md-4 drink-card-wrap" key={cocktail.idDrink}>
//           <div className="img-wrap drink-card">
//             <div className="img-wrap">
//               <img
//                 src={cocktail.strDrinkThumb}
//                 alt={cocktail.strDrink}
//               />
//             </div>
//             <div className="drink-card-content">
//               <h3>{cocktail.strDrink}</h3>
//               <button>Find out more</button>
//             </div>
//           </div>
//         </div>
//       ))
//     }
//   }

//   clickHandler = (e) => {
//     // const currentState = this.state.active;
//     // this.setState({ active: !currentState });
//     const btns = document.querySelectorAll('.search-row button');
//     btns.forEach(btn => btn.classList.remove('active'));
//     e.target.className = 'active';
    
//     const selected = e.target.value;
//     const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${selected}`;
//         fetch(url)
//           .then(res => res.json())
//           .then(data => this.setState({ cocktails: data }));
//   };

//   render() {
//     return (
//       <>
//         <div className="container">
//           <div className="row">
//             <h1 class="text-center text-uppercase">Pick up your favourite ingredinegt</h1>
//             <div className="search-row">
//               <button 
//                 id="vodka"
//                 type="button"
//                 onClick={this.clickHandler}
//                 className={this.state.active ? 'active' : null}
//                 value="vodka"
//               >Vodka</button>
//               <button 
//                 id="whisky"
//                 type="button"
//                 onClick={this.clickHandler}
//                 className={this.state.active ? 'active' : null}
//                 value="whisky"
//               >Whisky</button>
//               <button 
//                 id="wine"
//                 type="button"
//                 onClick={this.clickHandler}
//                 className={this.state.active ? 'active' : null}
//                 value="wine"
//               >Wine</button>
//               <button 
//                 id="champagne"
//                 type="button"
//                 onClick={this.clickHandler}
//                 className={this.state.active ? 'active' : null}
//                 value="champagne"
//               >Champagne</button>
//             </div>
//           </div>
//           <div className="row">{this.results()}</div>
//         </div>
//       </>
//     );
//   }
// }

export default App;
