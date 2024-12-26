import { BookCart } from "../components/BookCart"

export function Cart({ cart, removeFromCart }) {
    return (
        <>
            <h1 className="page-title">Mi Carrito</h1>
            <BookCart cart={cart} removeFromCart={removeFromCart} />
        </>
    )
}