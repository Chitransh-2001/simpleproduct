const express=require('express')
const Product =require('../Model/Product');
const router=express.Router();
const products=
[
    {name:"Shirt",price:500},
    {name:"T-shirt",price:300},
    {name:"Black Shirt",price:600},
    {name:"Blue Shirt",price:450},
];
Product.insertMany(products).then(()=>console.log("Product added to the Database"))

router.get('/product',async(req,res)=>{
    try{
        const allProducts=await Product.find();
        console.log("allProduct",allProducts)
        res.json(allProducts);
    }catch(err){
        res.status(500).json({message:'Error Fetching Products'})
    }
})
module.exports=router;