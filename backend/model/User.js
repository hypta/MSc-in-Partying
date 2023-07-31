const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name : { type: String, required: true, unique: true},
    password : { type: String, required: true},
    roomId : {type: String, default: null}
})

module.exports = mongoose.model('User', userSchema);