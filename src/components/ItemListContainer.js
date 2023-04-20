import React from "react";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import arrayBooks from "../json/arrayBooks.json"
import ItemList from "./ItemList"

function ItemListContainer() {
    
    const [item, setItem] = useState([])
    const {id} = useParams()

    useEffect(() =>{
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? arrayBooks.filter(item => item.genre  === id) : arrayBooks)
            })
        })

        promise.then((data) => {
            setItem(data)
        })
    },[id])   

    return (        
        <div className="container">
            <div className="row">
                <ItemList item={item}/>
            </div>
        </div>
    )
}

export default ItemListContainer;