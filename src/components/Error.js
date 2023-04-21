import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
    return (
        <div className="container-fluid d-flex justify-content-center mt-4 ">
            <div className="text-center bg-light rounded shadow p-4">
                <h1 className="display-3 text-danger">Error <b>404</b></h1>
                <p>La página que estás buscando no existe.</p>
                <Link to="/" className="btn btn-primary">Volver al inicio</Link>
            </div>
        </div>
    );
}

export default Error;