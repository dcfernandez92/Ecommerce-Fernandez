import React from "react";
import CartWidget from "./CartWidget";

function NavBar() {

    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Maderas Don Juan</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Productos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Nosotros</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" >Contacto</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><CartWidget/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default NavBar;