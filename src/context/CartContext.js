import { useState, useContext, createContext } from "react";
 const CartContext = createContext ([]);
 //Exportamos una función "useCartContext" para ahorrar codigo. Esta función va a enviar como parámetro el "CartContext"
export const useCartContext = () => useContext (CartContext)


const CartProvider = ( {children }) => {

//UseState para crear el carrito dinámico
 const [cart, SetCart] = useState ([]);

//Función agregar al carrito.
const addProduct = (item, newQuantity) => {
    const newCart = cart.filter(prod => prod.id !== item.id);
    newCart.push ({...item, quantity: newQuantity});
    SetCart(newCart);
}


//Función para limpiar el carrito:
const ClearCart = () => SetCart ([]);

//Función find para saber si un producto está en el carrito.
const isInCart = (id) => {
    return cart.find(Products=> Products.id) ? true :false;
}

//Función para remover productos del carrito.
const removeProduct = (id) => SetCart(cart.filter(Products => Products.id !== id));

 return (
    <CartContext.Provider value= {{
        ClearCart,
        isInCart,
        removeProduct,
        addProduct
    }}>
        {children}
    </CartContext.Provider>
)
}

export default CartProvider
