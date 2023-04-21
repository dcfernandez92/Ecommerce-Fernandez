import React from "react";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore'

function ItemListContainer() {

    const [data, setData] = useState([])
    const {id} = useParams()

    // useEffect(() =>{
    //     const promise = new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve(id ? arrayBooks.filter(item => item.genre  === id) : arrayBooks)
    //         })
    //     })

    //     promise.then((data) => {
    //         setItem(data)
    //     })
    // },[id])   

    // useEffect(() =>{
    //     const getItems = async ()=>{
    //         try{
    //             const querySnapshot = await getDocs(collection(db, 'items'))
    //             const docs = []
    //             querySnapshot.forEach((doc)=>{
    //                 docs.push({...doc.data(),id:doc.id})
    //             })
    //             setItem(docs)

    //         }catch(error){
    //             console.log(error)
    //         }
    //     }
    //     getItems()
    // },[item])

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