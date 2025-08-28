import mongoose   from 'mongoose';

const WareHouseSc = new mongoose.Schema({
    location_code:{
        type: String,
        require: true,
        unique: true,
    },

    parent_of_location_code:{
        type: String,
        default: null
    },

    type_of_st: {
        type: String,
        enum: ['warehouse','storage'],
        require: true
    }

},{timestamps: true});

const WareHouse = mongoose.model('WareHouseSc', WareHouseSc);

export default WareHouse;



