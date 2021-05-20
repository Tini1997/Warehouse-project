
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const warehouseSchema = new Schema({

    warehouse_number: {
        type: Number,
        unique: true,
        require: true,
    },
   });
module.exports = mongoose.model('warehouse', warehouseSchema);