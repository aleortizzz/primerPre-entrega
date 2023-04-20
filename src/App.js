import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import CartWidget from './components/navBar/CartWidget/CartWidget';
import NavBar from './components/navBar/navBar';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <CartWidget/>
        <ItemListContainer greeting= {<h1 class="display-6">Bienvenido a la web</h1>} />

      </header>
    </div>
  );
}

export default App;




