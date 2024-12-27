export function CheckoutItem({ item }) {
    return (
        <div className="mb-4">
            <div className="flex justify-between">
                <h2 className="font-bold">{item.title}</h2>
                <p className="text-emerald-400">${item.price.toFixed(2) * item.quantity}</p>
            </div>
            <div className="flex flex-col">
                <p className="text-sm">Cantidad: {item.quantity}</p>
            </div>
            <hr className="mt-4 opacity-10" />
        </div>
    )
}