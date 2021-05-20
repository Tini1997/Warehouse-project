
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductSchema = new Schema({

    productId: {
        type: Number,
        unique: true,
        require: true,
    },
    productName: {
        type: String,
        require: true
    },
    
});
module.exports = mongoose.model('Product', ProductSchema);