import {Router} from './components/Router'
import { CartProvider } from './context/CartContext'

const App = () => {

    return (
        <CartProvider>
            <Router/>
        </CartProvider>
    )
}

export default App

