
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const productSchema = new Schema({

    title: {
        type: String,
        required: true,
        trim: true,
    },

    description: {
        type: String,
        required: true,
    },

    imageUrl: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    deviceType: {
        type: String,
        enum: ['mac', 'ipad', 'iphone', 'accessory']
    },

    isActive: {
        type: Boolean,
        required: true
    }

});

module.exports = new Model('Product', productSchema);