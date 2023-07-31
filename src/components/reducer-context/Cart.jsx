import { useContext } from "react";
import "./Cart.css";
import { CartContext, ProductsContext } from "./ReducerContext";

const Cart = () => {
    const cart = useContext(CartContext);
    const products = useContext(ProductsContext);

    const sortedCart = cart.reduce((acc, c) => {
        if (acc[c]) {
            return { ...acc, [c]: acc[c] + 1 };
        }
        return { ...acc, [c]: 1 };
    }, {});

    const findPrice = (productName) =>
        products.find((product) => product.name === productName).price;

    const productsView = (cart.length > 0 &&
        Object.keys(sortedCart).map((key) => {
            const price = findPrice(key);
            const quantity = sortedCart[key];
            const total = price * quantity;
            return (
                // <p key={key}>{`${key}: ${sortedCart[key]}`}</p>
                <tr key={key}>
                    <td>{key}</td>
                    <td>{quantity}</td>
                    <td>{price}</td>
                    <td>{total}</td>
                </tr>
            );
        })) || <p>No products in the cart!</p>;

    const handleOnExportClick = () => {
        console.log('Export PDF triggered')
    }

    return (
        <section>
            <div className="cart-container">
                <h4>Products:</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Product name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>{productsView}</tbody>
                </table>
            </div>
            <div className="button-container">
                <button onClick={handleOnExportClick}>Export PDF</button>
            </div>
        </section>
    );
};

export default Cart;
