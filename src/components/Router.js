import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import { Checkout } from './Checkout';
import { ToastContainer } from 'react-toastify';
import Error from './Error';

export const Router = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<ItemListContainer />} />
          <Route path='/category/:id' exact element={<ItemListContainer />} />
          <Route path='/item/:id' exact element={<ItemDetailContainer />} />
          <Route path='/cart' exact element={<Checkout />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  )
}