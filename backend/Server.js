const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const ProductRoutes =require('./Routes/ProductRoutes');
const CartRoutes=require('./Routes/CartRoutes');
const OrderRoutes=require('./Routes/OrderRoutes')
const Cart=require('./Model/Cart');
const Order=require('./Model/Order');
const app=express();
mongoose.connect('mongodb://127.0.0.1:27017/Products',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("Connect to Database"))
.catch((err)=>console.log("Error connecting to the database",err))
app.use(cors());
app.use(express.json());
app.use('/api/',ProductRoutes);
app.use('/api/',CartRoutes);
app.use('/api/',OrderRoutes)
app.listen(5000,()=>{
    console.log("Server has successfully started on 5000");
})