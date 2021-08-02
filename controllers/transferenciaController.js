const Transferencia = require("../models/transferencia");


exports.transferir = async (req,res) => {
    try {
        let transferir;

        transferir = new Transferencia(req.body);

        await transferir.save();

        res.send(transferir);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al realizar la transferencia.')
    }
}
