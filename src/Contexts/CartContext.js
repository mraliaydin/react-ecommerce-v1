import { createContext, useEffect, useState } from 'react';


//Actual value to access
export const CartContext = createContext({
    cart: [], increaseProduct: () => null, decreaseProduct: () => null, addToCart: () => null, totalPrice: 0, calculateTotalPrice: () => null
});

//The provider for the data
export const CartProvider = ({ children }) => {
    //here is where you set the initial value of the context.
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)





    const addToCart = (product) => {
        setCart((prevCart) => {
            const idx = prevCart.findIndex((d) => d.product.id === product.id);
            if (idx !== -1) {
                console.log("call");
                prevCart[idx].count += 1;
                const updatedCart = [...prevCart];
                localStorage.setItem("cart", JSON.stringify(updatedCart));
                return updatedCart;
            } else {
                const datum = {
                    product,
                    count: 1,
                };
                const updatedCart = [...prevCart, datum];
                localStorage.setItem("cart", JSON.stringify(updatedCart));
                return updatedCart;
            }
        });
    };

    const increaseProduct = (id) => {
        setCart((prevCart) => {
            const productIndex = prevCart.findIndex((item) => item.product.id === id);
            if (productIndex !== -1) {
                const updatedCart = [...prevCart];
                updatedCart[productIndex].count += 1;
                localStorage.setItem("cart", JSON.stringify(updatedCart));
                return updatedCart;
            } else {
                console.log(`Product with ID ${id} not found in cart`);
                return prevCart;
            }
        });
    };

    const decreaseProduct = (id) => {
        setCart((prevCart) => {
            const productIndex = prevCart.findIndex((item) => item.product.id === id);
            if (productIndex !== -1) {
                const updatedCart = [...prevCart];
                updatedCart[productIndex].count -= 1;
                localStorage.setItem("cart", JSON.stringify(updatedCart));
                return updatedCart;
            } else {
                console.log(`Product with ID ${id} not found in cart`);
                return prevCart;
            }
        });
    };


    const calculateTotalPrice = () => {
        let totalPrice = 0;
        if (cart.length > 0) {
            cart.forEach((item) => {
                const { product, count } = item;
                const price = product.price;
                totalPrice += count * price;
            });
            console.log(`Total price: ${totalPrice}`);
            setTotalPrice(totalPrice)
        } else {
            console.log('Cart is empty');
        }
    }

    useEffect(() => {
        calculateTotalPrice();
    }, [cart]);

    const value = { cart, increaseProduct, decreaseProduct, addToCart, totalPrice, calculateTotalPrice };
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};