const mongoose = require('mongoose');

const TransferenciaSchema = mongoose.Schema({    
    destinatario:       {type: String},
    monto:             {type: String},
});

module.exports = mongoose.model('Transferencia', TransferenciaSchema)