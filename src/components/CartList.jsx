import { Link } from "react-router-dom";
import { CartItem } from "./CartItem";

export function CartList({ cart, removeFromCart }) {
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <section>
            {
                cart.length > 0 ? (
                    <div>
                        {
                            cart.map((item) => (
                                <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
                            ))
                        }
                        <h2 className="py-4 text-xl text-center sm:text-right">Total a pagar: ${totalPrice.toFixed(2)}</h2>
                        <hr />
                        <div className="flex flex-col items-center">
                            <p className="py-4 text-sm text-center opacity-70">Los impuestos y cargos por envío se calculan en la siguiente ventana</p>
                            <Link
                                to='/checkout'
                                className="w-full py-2 text-center text-white bg-blue-500 rounded-lg sm:w-1/2"
                            >
                                Proceder al Pago
                            </Link>
                        </div>
                    </div>
                ) : (
                    <p className="text-xl text-center">El carrito está vacío.</p>
                )}
        </section >
    );
}
