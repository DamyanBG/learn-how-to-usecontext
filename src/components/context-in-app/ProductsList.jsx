import { useContext, useEffect } from "react"
import Product from "./Product"
import { fakeFetchProducts } from "../../common/fakeFetchProducts"
import "./ProductsList.css"
import { ContextInApp } from "./ContextInApp"

const ProductsList = () => {
    const { products, setProducts } = useContext(ContextInApp)
    
    const fetchProducts = async () => {
        const fetchedProducts = await fakeFetchProducts()
        setProducts(fetchedProducts)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className="products-container">
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductsList