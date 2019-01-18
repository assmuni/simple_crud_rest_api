const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const geojsonSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
});

'## CREATE NINJA COLLECTION SCHEMA AND MODEL'
const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name field is require"]
    },
    rank: {
        type: String,
    },
    available: {
        type: Boolean,
        default: false
    },
    geometry: geojsonSchema

});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;