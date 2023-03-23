import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<ItemListContainer/>}/>
          <Route path='/category/:id' exact element={<ItemListContainer/>}/>
          <Route path='/item/:id' exact element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
      {/* <ItemListContainer greeting="Bienvenidos a nuestro E-Commerce. No existen productos" /> */}
    </div>
  );
}

export default App;
