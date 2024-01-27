const express = require('express');

const UserRouter=require('./router/userRouter');
const OrderRouter=require('./router/orderRouter');


const cors = require('cors');


const app=express();
const port=5000;

app.use(express.json());
app.use(cors({
    orgin: 'http://localhost:5173'

}));

app.post(express.json());
app.post(cors({
    orgin: 'http://localhost:5173'

}));


app.use('/user',UserRouter);
app.use('/order',OrderRouter);



app.listen(port,() =>{console.log('Server Started !!')});