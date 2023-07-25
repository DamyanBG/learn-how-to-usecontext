import { useContext, useEffect } from "react";
import Product from "./Product";
import { fakeFetchProducts } from "../../common/fakeFetchProducts";
import "./ProductsList.css";
import { ProductsContext, ProductsDispatchContext } from "./ReducerContext";

const ProductsList = () => {
    const products = useContext(ProductsContext);
    const dispatchProducts = useContext(ProductsDispatchContext);

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

    return (
        <div className="products-container">
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductsList;
