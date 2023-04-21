import React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { getFirestore, doc, getDoc } from 'firebase/firestore'

function ItemDetailContainer() {

    const [data, setData] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const queryDb = getFirestore()
        const queryDoc = doc(queryDb, 'items', id)
        getDoc(queryDoc)
            .then(res=>setData({id: res.id, ...res.data()}))
    },[id])

    return (
        <div className="container">
            <div className="row">
                <ItemDetail item={data} />
            </div>
        </div>
    )
}

export default ItemDetailContainer;