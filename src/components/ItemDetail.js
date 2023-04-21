import "../App.css"
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const ItemDetail = ({ item }) => {
    const { addItem } = useCartContext();

    const onAdd = (quantity) => {
        addItem(item, quantity);
    };

    return (
        <div className="row mt-5">
            <div className="col-md-8 mx-auto">
                <div className="card flex-row align-items-center">
                    <img
                        src={item.img}
                        className="card-img card-img-left flex-auto d-none d-md-block"
                        alt={item.title}
                    />
                    <div className="card-body text-center">
                        <h3 className="card-text">{item.title}</h3>
                        <p className="card-text">{item.author}</p>
                        <p className="card-text">{item.description}</p>
                        <p className="card-text">Precio: ${item.price} </p>
                        {item.stock !== 0 ? (
                            <p className="card-text">Stock: {item.stock}</p>
                        ) : (
                            <p className="card-text fw-bold text-danger">AGOTADO</p>
                        )}
                        <ItemCount stock={item.stock} onAdd={onAdd} />
                        <br />
                        <button className="btn btn-success">
                            <Link to="/cart" className="nav-link text-white">
                                Finalizar compra
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;