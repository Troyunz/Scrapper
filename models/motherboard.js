const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const motherboardSchema = new Schema({
    sku: {
        type: String,
        required: true,
        part: { unique: true }
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    site: {
        type: String,
        required: true
    },
    stock: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: '25h'
    }
});

const Motherboard = mongoose.model('Motherboard', motherboardSchema);
module.exports = Motherboard;