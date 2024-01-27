const mongoose = require('mongoose');

const url="mongodb+srv://ajaytyagi07:ajaytyagi8887@cluster0.7c6fh1x.mongodb.net/bookatable?retryWrites=true&w=majority"

mongoose.connect(url)
.then((result) => {
    console.log('connected to mongodb ')
    
}).catch((err) => {

    console.log(err);
    
});

module.exports=mongoose;