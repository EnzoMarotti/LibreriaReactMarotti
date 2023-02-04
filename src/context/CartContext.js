import { useState, useContext, createContext } from "react";
 const CartContext = createContext ([]);
 //Exportamos una función "useCartContext" para ahorrar codigo. Esta función va a enviar como parámetro el "CartContext"
export const useCartContext = () => useContext (CartContext)


const CartProvider = ( {children }) => {

//UseState para crear el carrito dinámico
 const [cart, SetCart] = useState ([]);

//Función agregar al carrito.
const addProduct = (Product, newContador) => {
    let newCart;
    let product = cart.find (product => product.id === Product.id);
    if (product){
        product.Contador += newContador;
        newCart = [...cart];
    } else {
        product = {...Product, Contador: newContador};
        newCart = [...cart, product];
    }
    SetCart (newCart);
}

console.log ('carrito', cart);

//Función para limpiar el carrito:
const clearCart = () => SetCart ([]);

//Función find para saber si un producto está en el carrito.
const isInCart = (id) => {
    return cart.find(Products=> Products.id === id) ? true :false;
}

//Función para remover productos del carrito.
const removeProduct = (id) => SetCart(cart.filter(Products => Products.id !== id));

//Función para ver los productos en el carrito.
const totalProducts = () => {
     cart.reduce ((acumulador, productoActual) => acumulador + productoActual.Contador, 0);
}

//Funcion para hacer el calculo del precio total en el carrito.
const totalPrice = () => {
    return cart.reduce ((prev, act) => prev + act.Contador * act.precio , 0)
}

 return (
    <CartContext.Provider value= {{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProducts,
        cart
    }}>
        {children}
    </CartContext.Provider>
)
}

export default CartProvider
