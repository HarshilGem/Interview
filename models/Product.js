import mongoose   from 'mongoose';

const ProductSec = new mongoose.Schema({
    transaction_date:{
        type: Date,
        require: true,
    },

    warehouse_code:{
        type: String,
        require: true
    },
    products: [
        
            {
                product_code: {type: String, require: true},
                quantity: {type: Number, require: true},
                volume: {type: Number, require: true},
                location_code: {type: String, require: true}
            }
        
        ]
    
},{timestamps: true});

const Product = mongoose.model('ProductSec', ProductSec);

export default Product;



