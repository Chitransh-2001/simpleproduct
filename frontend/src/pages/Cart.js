import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { removeFromCart,checkout } from '../redux/actions';
const Cart = () => {
    const dispatch=useDispatch();
    const cart=useSelector(state=>state.cart)
    const handleRemoveFromCart=(productId)=>{
        dispatch(removeFromCart(productId));
    };
    const handleCheckout=()=>{
        dispatch(checkout(cart));
    }
  return (
    <div>
        <h1>Your Cart</h1>
        <div>
        {cart.length===0?(
            <p>No items in the cart</p>

        ):(
              cart.map((product)=>(
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <button onClick={()=>handleRemoveFromCart(product.id)}>Remove</button>
                        </div>
              ))
        )}
    </div>
    { cart.length>0 &&(
        <div>
        <button onClick={handleCheckout}>Checkout</button>
        </div>
    )}
    </div>
  );
};

export default Cart