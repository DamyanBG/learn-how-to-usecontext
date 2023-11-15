import { createContext, useReducer } from "react";

export const ProductsContext = createContext(null);
export const ProductsDispatchContext = createContext(null);

export const CartContext = createContext(null);
export const CartDispatchContext = createContext(null);

const cartInitialState = () => {
    const cartCookieValue = document.cookie
        .split("; ")
        .find((row) => row.startsWith("cart="))
        ?.split("=")[1];
    return cartCookieValue
        ? cartCookieValue.split(",")
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
            document.cookie = `cart=${newCartState}; path=/; max-age=${60 * 60 * 24 * 14}`
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
