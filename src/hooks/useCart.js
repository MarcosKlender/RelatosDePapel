import { useState } from "react";

export function useCart() {
    const [cart, setCart] = useState([]);

    const addToCart = (book) => {
        setCart((prevCart) => {
            const isBookInCart = prevCart.find((item) => item.id === book.id);

            if (isBookInCart) {
                return prevCart.map((item) =>
                    item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }

            return [...prevCart, { ...book, quantity: 1 }];
        });
    };

    const removeFromCart = (bookId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== bookId));
    };

    const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

    return { cart, addToCart, removeFromCart, cartItemCount };
}