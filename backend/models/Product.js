const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    sku: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity:{
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
        default: 0,
    },
    supplier: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    }, // Now links to the User model
}, {
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;






 


