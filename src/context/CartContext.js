import  {createContext, useState, useContext} from 'react'

export const CartContext = createContext(0)

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([])

    const totalPrice = () => {
        return cart.reduce((prev,act) => prev + act.quantity * act.price, 0)
    }

    const totalProducts = () => cart.reduce((acum,actualProduct) => acum + actualProduct.quantity,0)
    
    const clearCart = () => setCart([])

    const isInCart = (id) => cart.find(product => product.id === id) ? true: false

    const removeItem = (id) => setCart(cart.filter(product=>product.id !== id))

    const addItem = (item, quantity) => {
        if(isInCart(item.id)){
            const index = cart.findIndex(prod => prod.id === item.id)
            const aux = [...cart]
            aux[index].quantity += quantity
            setCart(aux)        
        } else{
            setCart([...cart, {...item, quantity}])
        }
    }

    return (
        <CartContext.Provider value={{ cart, addItem, totalPrice, totalProducts, clearCart, isInCart, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}