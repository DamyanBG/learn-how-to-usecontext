import { useContext } from "react" 
import "./Product.css"
import { CartDispatchContext } from "./ReducerContext"

const Product = ({ product }) => {
    const dispatchCart = useContext(CartDispatchContext)

    const handleOnAddToCart = () => {
        dispatchCart({
            type: "addProduct",
            newProduct: product.name
        })
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
                    <button 
                        // onClick={handleOnAddToCart}
                        id={product.name}
                    >
                        Add to cart
                    </button>
                </div>
            </article>
        </section>
    )
}

export default Product