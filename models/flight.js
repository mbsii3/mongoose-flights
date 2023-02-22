const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['DFW', 'ORD', 'LAX', 'JFK', 'ATL']
    },
    arrival: {
        type: Date,
        default: '02-22-2023'
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
        min: '02-22-2023',
        max: '01-01-2024',
        default: '02-22-2023'
    },
    destinations: [destinationSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);