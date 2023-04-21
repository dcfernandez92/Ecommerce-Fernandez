import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">El Ateneo</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/category/Fantasy' className="nav-link">Fantasía</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/category/scienceFiction' className="nav-link">Ciencia Ficción</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/category/thriller' className="nav-link">Thriller</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <Link to="/cart" className="nav-link"><CartWidget /></Link>
                </div>
            </div>
        </nav>

    )
}

export default NavBar;