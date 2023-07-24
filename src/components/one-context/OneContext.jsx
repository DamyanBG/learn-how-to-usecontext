import { createContext, useState } from "react";

export const OneContext = createContext(null);

export const OneContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    return (
        <OneContext.Provider
            value={{
                products,
                setProducts,
                cart,
                setCart,
            }}
        >
            {children}
        </OneContext.Provider>
    );
};
