const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const StockSchema = new Schema({

    productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product',
    require: true,
    },

    warehouse_number: {
   type:Number,
    require: true,
    },

    quantity:{
        type:String,
}
});
module.exports = mongoose.model('stock', StockSchema);