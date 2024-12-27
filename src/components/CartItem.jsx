export function CartItem({ item, removeFromCart }) {
    return (
        <div className="flex flex-col justify-between gap-4 p-4 my-2 border rounded-lg sm:flex-row">
            <div className="flex flex-col gap-4 sm:flex-row">
                <img src={item.image} alt={item.title} className="object-cover w-20 h-20" />
                <div>
                    <h2 className="text-xl font-bold">{item.title}</h2>
                    <p>{item.author}</p>
                    <p>Cantidad: {item.quantity}</p>
                </div>
            </div>
            <div className="flex flex-row items-end justify-between sm:flex-col">
                <button
                    className="px-2 py-1 text-xs text-red-200 border border-red-600 rounded-lg"
                    onClick={() => removeFromCart(item.id)}
                >
                    Eliminar
                </button>
                <p className="text-xl text-emerald-400">${item.price.toFixed(2) * item.quantity}</p>
            </div>
        </div>
    )
}