import React from "react";

const styles = {
    fontFamily: 'courier',
    color: 'orange',
    backgroundColor: 'rgba(246, 116, 129, 0.1)'
}

function ItemListContainer(props) {

    return (        
        <div>
            <h1 style={styles}>{props.greeting}</h1>
        </div>
    )
}

export default ItemListContainer;