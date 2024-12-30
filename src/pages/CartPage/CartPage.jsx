import React from 'react'
import { useSelector } from 'react-redux'
import CartCard from '../../components/CartCard/CartCard'


const CartPage = () => {
    const cartProducts = useSelector((state) => state.cart.products)

  return (
    <div>
        <CartCard products={cartProducts}/>
    </div>
  )
}

export default CartPage