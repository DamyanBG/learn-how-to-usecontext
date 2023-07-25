import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ProductsList from './components/reducer-context/ProductsList'
import Cart from './components/reducer-context/Cart'
import { ReducerContextProvider } from './components/reducer-context/ReducerContext'

function AppWithReducerContext() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <>
      <Header setIsCartOpen={setIsCartOpen} />
      <ReducerContextProvider>
        <div style={{ display: "flex" }}>
          <ProductsList />
          {isCartOpen && <Cart />}
        </div>
      </ReducerContextProvider>
    </>
  )
}

export default AppWithReducerContext
