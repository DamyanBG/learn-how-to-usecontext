import { useContext, useEffect, useRef } from "react";
import "./Cart.css";
import { CartContext, ProductsContext } from "./ReducerContext";
import { createPdfFromElement } from "../../utils/pdfUtils";



const Cart = () => {
    const cart = useContext(CartContext);
    const products = useContext(ProductsContext);

    const cartRef = useRef(null)

    const sortedCart = cart.reduce((acc, c) => {
        if (acc[c]) {
            return { ...acc, [c]: acc[c] + 1 };
        }
        return { ...acc, [c]: 1 };
    }, {});

    const findPrice = (productName) =>
        products.find((product) => product.name === productName).price;

    const findImage = (productName) => products.find((product) => product.name === productName).image;

    const productsView = (cart.length > 0 &&
        Object.keys(sortedCart).map((key) => {
            const price = findPrice(key);
            const image = findImage(key);
            const quantity = sortedCart[key];
            const total = price * quantity;
            return (
                // <p key={key}>{`${key}: ${sortedCart[key]}`}</p>
                <tr key={key}>
                    <td>{key}</td>
                    <td>
                        <img src={image} alt="Product" width="30px" />
                    </td>
                    <td>{quantity}</td>
                    <td><strong>USD</strong>{" "}{price}</td>
                    <td><strong>USD</strong>{" "}{total}</td>
                </tr>
            );
        })) || <p>No products in the cart!</p>;

    const handleOnExportClick = () => {
        console.log('Export PDF triggered')
        createPdfFromElement(
            cartRef.current,
            (pdf) => {
                pdf.save("cart.pdf")
            }
        )
    }

    // useEffect(() => {
    //     if (!secondPartPDFChildren || !pdfContent) return
    //     import("utils/pdfUtils").then((module) => {
    //         const { createAddPagePdfCallback, createPdfFromElement } = module
    //         createPdfFromElement(
    //             mainPartPDFRef.current,
    //             createAddPagePdfCallback(
    //                 secondPartPDFRef.current,
    //                 (doc) => {
    //                     const pdfBlob = doc.output("blob")
    //                     uploadFileToBlobStorage(pdfBlob, `quotes/${quoteId}/PDF`, `quote-${quoteId}.pdf`)
    //                         .then(() => setIsCreatingPdf(false))
    //                 }
    //             )
    //         )
    //     })
    // }, [secondPartPDFChildren, pdfContent])


    return (
        <section id="cart-section" ref={cartRef}>
            <div className="cart-container">
                <h4>Products:</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Product name</th>
                            <th>Image</th>
                            <th>Quantity</th>
                            <th>
                                Price
                            </th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                    {productsView}
                    {productsView}
                    {productsView}
                    {productsView}
                    {productsView}
                    {productsView}
                    {productsView}
                    {productsView}
                    {productsView}
                    {productsView}
                    {productsView}
                    {productsView}
                    </tbody>
                </table>
            </div>
            <div className="button-container">
                <button onClick={handleOnExportClick}>Export PDF</button>
            </div>
        </section>
    );
};

export default Cart;
