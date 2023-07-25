import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ProductsList from './components/separated-contexts/ProductsList'
import Cart from './components/separated-contexts/Cart'
import { ProductsContextProvider } from './components/separated-contexts/ProductsContext'
import { CartContextProvider } from './components/separated-contexts/CartContext'

function AppSeparateContexts() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <>
      <Header setIsCartOpen={setIsCartOpen} />
      <ProductsContextProvider>
        <CartContextProvider>
          <div style={{ display: "flex" }}>
            <ProductsList />
            {isCartOpen && <Cart />}
          </div>
        </CartContextProvider>
      </ProductsContextProvider>
    </>
  )
}

export default AppSeparateContexts
