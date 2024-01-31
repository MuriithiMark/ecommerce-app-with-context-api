import React from 'react'
import { useContext } from 'react'
import CartContext from '../../services/context/CartContext'

const CartIconDisplay = () => {
    const [state, dispatch] = useContext(CartContext);

const handleOpenCart = () => {
    dispatch({
        type: "OPEN_CART"
    })
}
  return (
    <>
    <button onClick={() => handleOpenCart()}>
        Cart: { state.products.length}
    </button>
    </>
  )
}

export default CartIconDisplay