import { useContext } from "react"
import "./Cart.css"
import { CartContext } from "./CartContext"

const Cart = () => {
    const { cart } = useContext(CartContext)

    const sortedCart = cart.reduce((acc, c) => {
        if (acc[c]) {
            return { ...acc, [c]: acc[c] + 1}
        }
        return { ...acc, [c]: 1 }
    }, {})

    const productsView = cart.length > 0 && Object.keys(sortedCart).map((key) => (
        <p key={key}>{`${key}: ${sortedCart[key]}`}</p>
    )) || <p>No products in the cart!</p>

    return (
        <div className="cart-container">
            <h4>Products:</h4>
            {productsView}
        </div>
    )
}

export default Cart