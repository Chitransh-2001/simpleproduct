const express =require('express');
const Order =require('../Model/Order');
const Cart = require('../Model/Cart');
const router=express.Router();
router.post('/checkout',async(req,res)=>{
    const {userId}=req.body;
    try{
        const cart=await Cart.findOne({userId}).populate('products.productId');
        if(!cart||cart.products.length===0 ){
            return res.status(400).json({message:'Cart is empty'});
        }
        const totalAmount=cart.products.reduce((total,item)=>{
            return total+item.productId.price*item.quantity;
        },0)
        const order=new Order({
            userId,
            products:cart.products,
            totalAmount,
        });
        await order.save();
        cart.products  =[]
        await cart.save();
        res.json({message:'Order Placed Successfully',order,totalAmount})
    }catch(err){
        res.status(500).json({message:'Error in processing Checkout'})
    }

})
module.exports=router;