import PayPal from "../assets/PayPal.svg"
import CreditCard from "../assets/CreditCard.svg"

export function PaymentMethod() {
    return (
        <div className="flex flex-col items-center gap-4 mt-4">
            <button className="flex justify-center w-full gap-2 py-2 text-white rounded-lg bg-emerald-500 hover:bg-emerald-600 sm:w-1/2">
                <img src={PayPal} alt="PayPal" />
                Pagar con PayPal
            </button>
            <button className="flex justify-center w-full gap-2 py-2 text-white rounded-lg bg-emerald-500 hover:bg-emerald-600 sm:w-1/2">
                <img src={CreditCard} alt="PayPal" />
                Pagar con Tarjeta de Crédito
            </button>
        </div>
    )
}