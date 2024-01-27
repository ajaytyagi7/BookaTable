const {Schema,model} = require('../connection');

const myschema =new Schema({
    username:  String,
    dishes: Array,
    duration:String,
    bookDate:Date,
    restaurant: Object,
    additional:String
});

module.exports=model('order',myschema); 