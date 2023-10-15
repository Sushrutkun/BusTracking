const mongoose = require("mongoose");

const citySchema = mongoose.Schema({
    buses: {
    type: Array,
    default: [],


    },
    name: {
        type: String,
        required: true,
        unique: true,
    },

});

const City = mongoose.models.City || mongoose.model("City", citySchema);

export default City;