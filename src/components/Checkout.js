import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useCartContext } from "../context/CartContext"
import { getFirestore, addDoc, getDocs, getDoc, updateDoc, deleteDoc, collection, doc } from 'firebase/firestore'
import { toast } from 'react-toastify';

export const Checkout = () => {

    const { cart, totalPrice, clearCart, removeItem } = useCartContext()

    const datosFormulario = React.useRef()
    let navigate = useNavigate()

    const getProduct = async (id) => {
        const db = getFirestore()
        const product = await getDoc(doc(db, "items", id))
        const item = { ...product.data(), id: product.id }
        return item
    }

    const updateProduct = async (id, info) => {
        const db = getFirestore()
        await updateDoc(doc(db, "items", id), info)
    }

    const getPaymentOrder = async (id) => {
        const db = getFirestore()
        const paymentOrder = await getDoc(doc(db, "orders", id))
        const item = { ...paymentOrder.data(), id: paymentOrder.id }
        return item
    }

    const createPaymentOrder = async (customer, totalPrice, date) => {
        const db = getFirestore()
        const paymentOrder = await addDoc(collection(db, "orders"), {
            name: customer.name,
            email: customer.email,
            address: customer.address,
            cellphone: customer.cellphone,
            date: date,
            totalPrice: totalPrice
        })

        return paymentOrder
    }

    const verifyStock = async (cartProduct) => {
        const dbProduct = await getProduct(cartProduct.id);
        if (dbProduct.stock >= cartProduct.quantity) {
            dbProduct.stock -= cartProduct.quantity;
            await updateProduct(cartProduct.id, dbProduct);
        } else {
            throw new Error(`No hay suficiente stock para el libro: ${dbProduct.title}. Stock: ${dbProduct.stock} disponible/s`);
        }
    };

    const CreatePaymentAndCleanCart = async (customer, e) => {
        const paymentOrder = await createPaymentOrder(customer, totalPrice(), new Date().toISOString());
        const item = await getPaymentOrder(paymentOrder.id);
        toast.success(`¡Muchas gracias por su compra, su orden es ${item.id}`);
        clearCart();
        e.target.reset();
        navigate("/");
    };

    const submitForm = async (e) => {
        e.preventDefault();
        const formData = new FormData(datosFormulario.current);
        const customer = Object.fromEntries(formData);
        const aux = [...cart];

        try {
            await Promise.all(aux.map(verifyStock));
            await CreatePaymentAndCleanCart(customer, e);
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <>
            {cart.length === 0 ?
                <div className="container d-flex justify-content-center align-items-center p-4">
                    <div className="card text-center border-0">
                        <h1>Carrito vacío</h1>
                        <button className="btn btn-primary m-3"><Link className="nav-link text-white" to={'/'}>Continuar comprando</Link></button>
                    </div>
                </div>
                :
                <div className="container">
                    {cart.map((item) =>
                        <div className="card mb-3" key={item.id}>
                            <div className="row g-0">
                                <div className="col-md-2">
                                    <img src={item.img} className="img-fluid" alt={item.title} />
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h4 className="card-title">{item.title}</h4>
                                        <p className="card-text">Cantidad: {item.quantity}</p>
                                        <p className="card-text">Precio unitario: ${item.price}</p>
                                        <p className="card-text">Subtotal: ${item.price * item.quantity}</p>
                                        <button className="btn btn-danger" onClick={() => removeItem(item.id)}>Remover</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div>
                        <p><span className="fw-bold">Total: ${totalPrice()}</span></p>
                    </div>
                    <div className="container" style={{ marginTop: "20px" }}>
                        <form onSubmit={submitForm} ref={datosFormulario}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nombre y Apellido</label>
                                <input type="text" className="form-control" name="name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" name="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email2" className="form-label">Repetir Email</label>
                                <input type="email" className="form-control" name="email2" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="cellphone" className="form-label">Numero telefonico</label>
                                <input type="number" className="form-control" name="cellphone" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Dirección</label>
                                <input type="text" className="form-control" name="address" />
                            </div>
                            <button type="submit" className="btn btn-primary">Finalizar Compra</button>
                        </form>

                    </div>
                </div>
            }
        </>

    )
}