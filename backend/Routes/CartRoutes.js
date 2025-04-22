const express=require('express');
const Cart=require('../Model/Cart')
const router=express.Router();
router.post('/cart',async(req,res)=>{
    const{userId,productId,quantity}=req.body;
    try{
        let cart=await Cart.findOne({userId});
        if(!cart){
            cart=new Cart({userId,products:[]});
        }
        const productIndex=cart.products.findIndex(p=>p.productId.toString()===productId);
        if(productIndex>=0){
          cart.products[productIndex].quantity+=quantity;

        }else{
            cart.products.push({productId,quantity})
        }
        await cart.save();
        res.status(200).json(cart);
    }catch(err){
        res.status(500).json({message:'Error in adding  to cart' })
    }
})
module.exports=router;