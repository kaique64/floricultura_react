const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    nomeU: { type: String, required: true },
    emailU: { type: String, required: true },
    cpfU: { type: String, required: true, index: true, unique: true },
    senhaU: { type: String, required: true }
}, {
    timestamps: true
});

const usuarios = mongoose.model('Usuarios1', DataSchema);

module.exports = usuarios;