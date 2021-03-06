const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AttractionSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    latitude: {
        type: Number
    },
    longitude: {
        type: Number
    },
    description: {
        type: String,
        required: true
    }, 
    rating: {
        type: Number,
    },
    imageUrl: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Attraction = mongoose.model('attraction', AttractionSchema);

module.exports = Attraction;