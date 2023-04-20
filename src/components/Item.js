import React from "react";
import { Link } from "react-router-dom";


const Item = ({item}) => {   
    
    return (

        <Link to={"/item/" + item.id} className="text-decoration-none">
            <div className="container">
                <div className="card">
                    <img src={item.img} className="card-img-top" alt={item.title} />
                    <div className="card-body text-center">
                            <p className="card-text">{item.title}</p>
                            <p className="card-text">{item.author}</p>
                    </div>
                    
                            
                </div>
            </div>               
        </Link>
    )
}

export default Item;