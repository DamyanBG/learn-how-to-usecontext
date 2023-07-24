import { fakeProducts } from "./fakeProducts"

export const fakeFetchProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const products = fakeProducts
            resolve(products)
        }, 500)
    })
}