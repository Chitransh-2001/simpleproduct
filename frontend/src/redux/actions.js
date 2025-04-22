import axios from 'axios';
export const FETCH_PRODUCTS="FETCH_PRODUCTS";
export const ADD_TO_CART="ADD_TO_CART";
export const  REMOVE_FROM_CART="REMOVE_FROM_CART";
export const CHECKOUT="CHECKOUT";
export const fetchProducts=()=>async(dispatch)=>{
    console.log("fetching data from the api")
    const res= await axios.get("http://localhost:5000/api/product");
     console.log("fetchproduct",res.data)
    dispatch({type:FETCH_PRODUCTS,payload:res.data});
    // console.log("dispatch Product",res.data)
    
};
export const addToCart=(product)=>{
      
    return{type:ADD_TO_CART,payload:product};
   
};
export const removeFromCart=(productId)=>{
    return{type:REMOVE_FROM_CART,payload:productId};
}
export const checkout=(cart)=>async(dispatch)=>{
    const res=await axios.post("http://localhost:5000/api/checkout",{cart});
    dispatch({type:"CHECKOUT",payload:res.data})
}
  