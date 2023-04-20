import React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import arrayBooks from "../json/arrayBooks.json"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer() {
    
    const [item, setItem] = useState([])
    const {id} = useParams()

    useEffect(() =>{
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? arrayBooks.filter(item => item.id  === parseInt(id)) : arrayBooks)
            })
        })

        promise.then((data) => {
            setItem(data)
        })
    },[id])   


    return (        
        <div className="container">
            <div className="row">
                <ItemDetail item={item}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer;