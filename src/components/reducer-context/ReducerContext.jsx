import { createContext, useEffect, useReducer, useState } from "react";

export const ProductsContext = createContext(null);
export const ProductsDispatchContext = createContext(null);

export const CartContext = createContext(null);
export const CartDispatchContext = createContext(null);

const cartInitialState = () => {
    const localState =  window.localStorage.getItem("cart");
    return localState
        ? JSON.parse(localState)
        : []
}

export const ReducerContextProvider = ({ children }) => {
    const [products, dispatchProducts] = useReducer(productsReducer, []);
    const [cart, dispatchCart] = useReducer(cartReducer, cartInitialState());

    return (
        <ProductsContext.Provider value={products}>
            <ProductsDispatchContext.Provider value={dispatchProducts}>
                <CartContext.Provider value={cart}>
                    <CartDispatchContext.Provider value={dispatchCart}>
                        {children}
                    </CartDispatchContext.Provider>
                </CartContext.Provider>
            </ProductsDispatchContext.Provider>
        </ProductsContext.Provider>
    );
};

const cartReducer = (cart, action) => {
    switch (action.type) {
        case "addProduct": {
            const newCartState = [...cart, action.newProduct];
            window.localStorage.setItem("cart", JSON.stringify(newCartState));
            return newCartState;
        }
        case "loadCart": {
            return action.loadedCart;
        }
        default: {
            throw Error("Unknown action: " + action.type);
        }
    }
};

const productsReducer = (products, action) => {
    switch (action.type) {
        case "setProducts": {
            return action.productsForSet;
        }
        default: {
            throw Error("Unknown action: " + action.type);
        }
    }
};
