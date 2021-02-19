const restful = require('node-restful')
const mongoose = restful.mongoose

const todaSchema = new mongoose.Schema({
    description: { type: String, required: true },
    done: {type: Boolean, required: true, dafault: false},
    createdAt: { type: Date, default: Date.now }
})

module.export = restful.model('Todo', todaSchema)