import React, {createContext, useState} from  'react';
import {message} from 'antd';

export const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    // in this context, we will allow to add, remove, clear

    // loop through the cart, if the card (cartitem.id) has the same item as the one i am trying to add (item.id)
    const addToCart = (item) => {
        if(cart.some((cartItem) => cartItem && cartItem.id == item.id)) {
            message.error("Item is already in cart")
            console.log(cart)
        }
        else {
            // updating the cart by adding the item
            setCart((prevCart) => [...prevCart, item])
            console.log(cart)
        }
    }

    const removeFromCart = (productId) => {
        // is currentItem NOT equal to productId --> TRUE --> stay in the array 
        // is currentItem equal to productId --> FALSE --> removes from array 
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
    }
    
    const clearCart = () => {
        setCart([]);
    }

    const cartLogic = {
        cart, // cart: cart
        addToCart,
        removeFromCart,
        clearCart
    }

    return (
        <CartContext.Provider value={cartLogic}>{children}</CartContext.Provider>
    )
}

export default CartProvider