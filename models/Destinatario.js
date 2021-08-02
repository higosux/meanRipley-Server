const mongoose = require('mongoose');

const DestinatarioSchema = mongoose.Schema({
    rut:          {type: String},
    nombre:       {type: String},
    correo:       {type: String},
    telefono:     {type: Number},
    banco:        {type: String},
    tipoCuenta:   {type: String},
    numeroCuenta: {type: Number},

});

module.exports = mongoose.model('Destinatario', DestinatarioSchema)