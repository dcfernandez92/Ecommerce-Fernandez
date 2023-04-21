import ItemCount from "./ItemCount"
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const ItemDetail = ({ item }) => {

    const { addItem } = useCartContext()

    const onAdd = (quantity) => {
        addItem(item, quantity)
    }

    return (
        <div className="row">
            <div className="container col-md-3">
                <div className="card">
                    <img src={item.img} className="card-img-top" alt={item.title} />
                    <div className="card-body text-center">
                        <h3 className="card-text">{item.title}</h3>
                        <p className="card-text">{item.author}</p>
                        <p className="card-text">{item.description}</p>
                        <p className="card-text">Precio: ${item.price} </p>
                        {item.stock !== 0 ? <p className="card-text">Stock: {item.stock}</p> : <p className="card-text fw-bold text-danger">AGOTADO</p>}
                        <ItemCount stock= {item.stock} onAdd={onAdd}/><br/>
                        <button className= "btn btn-success"><Link to="/cart" className="nav-link text-white">Finalizar compra</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail