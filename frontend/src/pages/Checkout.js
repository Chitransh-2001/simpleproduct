import React from 'react'
import { useSelector } from 'react-redux';
const Checkout = () => {
    const order=useSelector(state=>state.order);
  return (
    <div>
        <h1>Checkout Page</h1>
        {order?(
            <div>
                <p>{order.message}</p>
                <p>Total Amount:{order.totalAmount}</p>
            </div>
        ):(
                <p>Checkout in Progress....</p>
        )}
    </div>
  )
}

export default Checkout