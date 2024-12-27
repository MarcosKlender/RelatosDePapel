import { CheckoutItem } from "./CheckoutItem"
import { PaymentMethod } from "./PaymentMethod";

export function CheckoutList({ cart, clearCart }) {
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <section>
            {
                cart.length > 0 ? (
                    <div>
                        {
                            cart.map((item) => (
                                <CheckoutItem key={item.id} item={item} />
                            ))
                        }
                        <div className="flex justify-between py-4 text-xl font-bold">
                            <p>Total</p>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>
                        <PaymentMethod clearCart={clearCart} />
                    </div>
                ) : (
                    <div className="text-center">
                        <p className="mb-4 text-xl">Pago no disponible</p>
                        <p>Prueba agregando libros al carrito primero.</p>
                    </div>
                )
            }
        </section >
    );
}
