const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['DFW', 'ORD', 'LAX', 'JFK', 'ATL']
    },
    arrival: {
        type: Date
    }
});


const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United', 'Delta']
    },
    airport: {
        type: String,
        enum: ['DFW', 'ORD', 'LAX', 'JFK', 'ATL'],
        default: 'DFW'
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        required: true
    },
    departs: {
        type: Date,
        min: '2023-02-18',
        max: '2025-01-01',
        default: '2024-02-18'
    },
    destinations: [destinationSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);