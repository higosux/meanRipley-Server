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

exports.eliminarDestinatario = async (req, res) => {

    try {
        
        let destinatario = await Destinatario.findById(req.params.id);
        

        if(!destinatario){
            res.status(404).json({ msg: 'No existe el destinatario'})
        }

        await Destinatario.findOneAndRemove({ _id: req.params.id });
        
        res.json({msg: 'Destinatario eliminado con éxito'});
        

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error.')
    }

}