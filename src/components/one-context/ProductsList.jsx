import { useEffect, useState } from "react"
import Product from "./Product"
import { fakeFetchProducts } from "../../common/fakeFetchProducts"
import "./ProductsList.css"

const ProductsList = () => {
    const [products, setProducts] = useState([])
    
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