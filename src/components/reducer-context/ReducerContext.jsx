import { createContext, useReducer, useState } from "react";

export const ProductsContext = createContext(null);
export const ProductsDispatchContext = createContext(null);

export const CartContext = createContext(null);
export const CartDispatchContext = createContext(null);

export const ReducerContextProvider = ({ children }) => {
    const [products, dispatchProducts] = useReducer(productsReducer, []);
    const [cart, dispatchCart] = useReducer(cartReducer, []);

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
            return [...cart, action.newProduct];
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
