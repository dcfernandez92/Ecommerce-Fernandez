import React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import Error from "./Error"

function ItemDetailContainer() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        const queryDb = getFirestore()
        const queryDoc = doc(queryDb, 'items', id)
        getDoc(queryDoc)
            .then(res => {
                setData({ id: res.id, ...res.data() })
                setLoading(false)
            })
    }, [id])

    if (loading) {
        return (
            <div className="d-flex justify-content-center my-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (!data.title) {
        return <Error />
    }

    return (
        <div className="container">
            <div className="row">
                <ItemDetail item={data} />
            </div>
        </div>
    )
}

export default ItemDetailContainer;