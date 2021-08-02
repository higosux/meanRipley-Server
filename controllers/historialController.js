const Transferencia = require("../models/transferencia");
const Destinatario = require("../models/Destinatario");



exports.obtenerHistorial = async (req, res) => {

    try {
        
        const destinatario = await Destinatario.find();
        const transferencia = await Transferencia.find()

        let historial = [];
        transferencia.forEach( trans => {
            
            let [des] = destinatario.filter(des => des._id == trans.destinatario);
            
            
            if(trans.destinatario == des._id){
                
                historial.push({
                    'rut' : des.rut,
                    'nombre' : des.nombre,
                    'correo' : des.correo,
                    'telefono' : des.telefono,
                    'banco' : des.banco,
                    'tipoCuenta': des.tipoCuenta,
                    'numeroCuenta' : des.numeroCuenta,
                    'monto': trans.monto    
                })
                
                
            }
        });

        res.json(historial);
        

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error.')
    }

}
