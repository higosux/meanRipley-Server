const Destinatario = require("../models/destinatario");


exports.crearDestinatario = async (req,res) => {
    try {
        let destinatario;

        destinatario = new Destinatario(req.body);

        await destinatario.save();

        res.send(destinatario);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error.')
    }
}

exports.obtenerDestinatario = async (req, res) => {

    try {
        
        const destinatario = await Destinatario.find();
        res.json(destinatario);
        

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error.')
    }

}