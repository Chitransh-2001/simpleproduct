import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { fetchProducts,addToCart } from '../redux/actions';

const ProductList = () => {
    const dispatch=useDispatch();
    const products=useSelector(state=> state.product);
    console.log("sdndndvd",products)
    useEffect(()=>{
      console.log("fetchingproduct")
        dispatch(fetchProducts())
    },[])
    const handleAddToCart=(product)=>{
          dispatch(addToCart(product));
    }
   
  return (
    <div>
        <h1>Products</h1>
       {products.map((product)=>(
            <div key={product.id}>
                 <h3>{product.name}</h3>
                 <p>{product.price}</p>
                 <button onClick={()=>handleAddToCart(product)}>Add to Cart</button>
                </div>
       ))}
    </div>
  )
}

export default ProductList