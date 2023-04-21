import { useCartContext } from "../context/CartContext";

function CartWidget() {
    
    const {totalProducts} = useCartContext()
    
    return (
        <button className="btn btn-primary">
            <i className="fa-solid fa-cart-shopping"> </i>
            {totalProducts() > 0 && <span className="cantCarrito">{totalProducts()}</span>}
        </button>
    )
}

export default CartWidget;