const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['DFW', 'ORD', 'LAX', 'JFK', 'ATL'],
        default: 'DFW'
    },
    flightNo: {
        type: Number,
        required: 10-9999
    },
    departs: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});