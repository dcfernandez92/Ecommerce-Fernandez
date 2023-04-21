import React from "react";
import ItemCount from "./ItemCount";
import { useState } from "react";

const styles = {
    width: '18rem'
}

export default function Card() {

    const [stock, setStock] = useState(5);

    function handleUpdateStock(newStock) {
        setStock(newStock);
    }

    return (
        <div className="card" style={styles}>
            <div className="card-body">
                <h5 className="card-title">Elantris</h5>
                <h6 className="card-subtitle mb-2 text-muted">Brandon Sanderson</h6>
                <p className="card-text">Elantris es una novela de fantasía independiente de Brandon Sanderson, publicada en abril de 2005 por Tor Books.</p>
                <ItemCount stock={stock} initial="1" onUpdateStock={handleUpdateStock} />
            </div>
        </div>
    )
}