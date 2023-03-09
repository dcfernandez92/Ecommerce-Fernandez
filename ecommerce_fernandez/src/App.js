import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>        
      </header>
      <main>
        <ItemListContainer greeting="Bienvenidos a nuestro E-Commerce. No existen productos"/>
      </main>
    </div>
  );
}

export default App;
