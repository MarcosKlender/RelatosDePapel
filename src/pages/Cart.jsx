import { CartList } from "../components/CartList"

export function Cart({ cart, removeFromCart }) {
    return (
        <>
            <h1 className="page-title">Mi Carrito</h1>
            <CartList cart={cart} removeFromCart={removeFromCart} />
        </>
    )
}