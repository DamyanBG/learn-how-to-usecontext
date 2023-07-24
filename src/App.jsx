import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ProductsList from './components/one-context/ProductsList'
import { OneContextProvider } from './components/one-context/OneContext'
import Cart from './components/one-context/Cart'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <>
      <Header setIsCartOpen={setIsCartOpen} />
      <OneContextProvider>
        <div style={{ display: "flex" }}>
          <ProductsList />
          {isCartOpen && <Cart />}
        </div>
      </OneContextProvider>
    </>
  )
}

export default App
