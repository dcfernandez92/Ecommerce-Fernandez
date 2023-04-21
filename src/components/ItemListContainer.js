import React from "react";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore'

function ItemListContainer() {

    const [data, setData] = useState([])
    const {id} = useParams()

    useEffect(() => {
        const queryDb = getFirestore()
        const queryCollection = collection(queryDb, 'items')
        if(id){
            const queryFilter = query(queryCollection, where('categoryId', '==', id))
            getDocs(queryFilter).then(res=>setData(res.docs.map(p=>({id: p.id, ...p.data()}))))
        }else{
            getDocs(queryCollection).then(res=>setData(res.docs.map(p=>({id: p.id, ...p.data()}))))
        }
    },[id])

    return (        
        <div className="container p-4">
            <div className="row">
                <ItemList item={data}/>
            </div>
        </div>
    )
}

export default ItemListContainer;