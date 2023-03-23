import React, { useState } from "react"
import ItemCount from "./ItemCount"

const ItemDetail = ({ item }) => {
    
    const [stock, setStock] = useState(5);

    function handleUpdateStock(newStock) {
        setStock(newStock);
    }

    return (
        <div className="row">
            {item.map(item =>
                <div className="container col-md-3">
                    <div className="card">
                        <img src={item.img} className="card-img-top" alt={item.title} />
                        <div className="card-body text-center">
                            <h3 className="card-text">{item.title}</h3>
                            <p className="card-text">{item.author}</p>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text">Stock: {stock}</p>
                            
                            <ItemCount stock={stock} initial={1} onUpdateStock={handleUpdateStock} />
                        </div>
                    </div>
                </div>
            )
            }
        </div>
    )
}

export default ItemDetail