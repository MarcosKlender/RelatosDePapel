import { CartItem } from "./CartItem";

export function BookCart({ cart, removeFromCart }) {
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
                        <h2 className="py-4 text-xl text-right">Total a pagar: ${totalPrice.toFixed(2)}</h2>
                        <hr />
                        <div className="flex flex-col items-center">
                            <p className="py-4 text-sm text-center opacity-70">Los impuestos y cargos por envío se calculan en la siguiente ventana</p>
                            <button
                                className="w-1/2 py-2 text-white bg-blue-500 rounded-lg"
                            >
                                Proceder al Pago
                            </button>
                        </div>
                    </div>
                ) : (
                    <p className="text-xl text-center">El carrito está vacío.</p>
                )}
        </section >
    );
}
