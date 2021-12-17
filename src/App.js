import CocktailList from './components/CocktailList'
import CocktailSearch from './components/CocktailSearch'

import './App.css';

function App() {
  return (
    <div className="App">
      <CocktailSearch />
      <CocktailList />
    </div>
  );
}

export default App;
