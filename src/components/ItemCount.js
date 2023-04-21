import React from "react";
import { useState } from "react";

export default function ItemCount({ stock, onAdd }) {

    const [count, setCount] = useState(0)
    
    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const decrease = () => {
        setCount(count - 1)
    }


    return (
        <div>            
            <div className="input-group mb-3">
                <button className="btn btn-outline-primary" type="button" onClick={sumar} disabled={count === stock}>+</button>
                <input type="text" className="form-control text-center" placeholder={count} />
                <button className="btn btn-outline-primary" type="button" onClick={decrease} disabled={count === 0}>-</button>
            </div>
            <button className="btn btn-outline-primary" onClick={() => onAdd(count)} disabled={count === 0} >Agregar al carrito</button>
        </div>
        
    )
}