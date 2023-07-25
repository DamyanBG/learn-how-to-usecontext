import { useContext } from "react" 
import { CartContext } from "./CartContext"
import "./Product.css"

const Product = ({ product }) => {
    const { setCart } = useContext(CartContext)

    const handleOnAddToCart = () => {
        setCart((cart) => [...cart, product.name])
    }

    return (
        <section>
            <article>
                <h3>{product.name}</h3>
                <div className="image-container">
                    <img src={product.image} alt="Product" />
                </div>
                <p>Price: ${product.price}</p>
                <div>
                    <button onClick={handleOnAddToCart}>Add to cart</button>
                </div>
            </article>
        </section>
    )
}

export default Product