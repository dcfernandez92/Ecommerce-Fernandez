import React from "react"
import Item from "./Item"

const ItemList = ({item}) => {
    return (
        <div className="row row-cols-1 row-cols-md-4 g-4">
            {item.map(item =>
                <div className="col" key={item.id}>
                    <Item item={item}/>
                </div>
            )}
        </div>
    )
}

export default ItemList;