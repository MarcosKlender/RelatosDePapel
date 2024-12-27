import { useNavigate } from "react-router-dom"
import PayPal from "../assets/PayPal.svg"
import CreditCard from "../assets/CreditCard.svg"
import { toast } from "sonner"

export function PaymentMethod({ clearCart }) {
    const navigate = useNavigate();

    const handlePayment = () => {
        toast.success("Pago realizado con éxito");
        clearCart();
        navigate("/home");
    }

    return (
        <div className="flex flex-col items-center gap-4 mt-4 sm:flex-row">
            <button
                onClick={handlePayment}
                className="flex justify-center w-full gap-2 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 sm:w-1/2"
            >
                <img src={PayPal} alt="PayPal" />
                Pagar con PayPal
            </button>
            <button
                onClick={handlePayment}
                className="flex justify-center w-full gap-2 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 sm:w-1/2"
            >
                <img src={CreditCard} alt="PayPal" />
                Pagar con Tarjeta
            </button>
        </div>
    )
}