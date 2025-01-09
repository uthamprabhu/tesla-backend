const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    model: String,
    range: String,
    topSpeed: String,
    mph: String,
    price: {
        "Long Range Rear Wheel Drive": Number,
        "Long Range All Wheel Drive": Number,
        "Performance All Wheel Drive": Number
    },
    accessories: [String],
    description: String,
    others: {
        seatingCapacity: String,
        cargoSpace: String,
        charging: String
    }
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
