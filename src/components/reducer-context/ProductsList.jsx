import { useContext, useEffect } from "react";
import Product from "./Product";
import { fakeFetchProducts } from "../../common/fakeFetchProducts";
import "./ProductsList.css";
import { CartDispatchContext, ProductsContext, ProductsDispatchContext } from "./ReducerContext";

const ProductsList = () => {
    const products = useContext(ProductsContext);
    const dispatchProducts = useContext(ProductsDispatchContext);
    const dispatchCart = useContext(CartDispatchContext)

    const fetchProducts = async () => {
        const fetchedProducts = await fakeFetchProducts();
        dispatchProducts({
            type: "setProducts",
            productsForSet: fetchedProducts,
        });
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleOnProductClick = (e) => {
        e.stopPropagation()
        if (e.target.tagName !== "BUTTON") return
        const productName = e.target.id
        dispatchCart({
            type: "addProduct",
            newProduct: productName
        })
    }

    return (
        <div 
            className="products-container" 
            onClick={handleOnProductClick}
        >
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductsList;
