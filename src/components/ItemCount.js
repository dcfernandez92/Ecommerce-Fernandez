import React from "react";
import { useState } from "react";

export default function ItemCount({ stock, initial, onUpdateStock }) {

    const [count, setCount] = useState(parseInt(initial))
    const [cartButton, setCartButton] = useState(false);

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const restar = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }

    function onAdd () {
        let newStock = stock - count
        if(newStock >= 0){
            console.log("Compra realizada")            
        }
        onUpdateStock(newStock)
        setCount(parseInt(initial))
        if (newStock === 0){
            setCartButton(true)
        }
    }

    return (
        <div>
            <button className="btn btn-outline-primary" onClick={() => onAdd()} disabled={cartButton}>Agregar al carrito</button>
            <div className="input-group mb-3">
                <button className="btn btn-outline-primary" type="button" onClick={sumar}>+</button>
                <input type="text" className="form-control" placeholder={count} />
                <button className="btn btn-outline-primary" type="button" onClick={restar}>-</button>
            </div>
        </div>

    )
}