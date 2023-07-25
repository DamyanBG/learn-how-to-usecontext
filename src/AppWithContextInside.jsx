import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductsList from "./components/context-in-app/ProductsList";
import Cart from "./components/context-in-app/Cart";
import { ContextInApp } from "./components/context-in-app/ContextInApp";

function AppWithContextInside() {
    const [isCartOpen, setIsCartOpen] = useState(false);

    // States for the context
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    return (
        <>
            <Header setIsCartOpen={setIsCartOpen} />
            <ContextInApp.Provider
                value={{
                    products,
                    setProducts,
                    cart,
                    setCart,
                }}
            >
                <div style={{ display: "flex" }}>
                    <ProductsList />
                    {isCartOpen && <Cart />}
                </div>
            </ContextInApp.Provider>
        </>
    );
}

export default AppWithContextInside;
