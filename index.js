
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config({ path: 'variables.env' });



app.use(express.json());
app.use('/api/destinatarios',require('./routes/destinatario'));
app.use('/api/transferencia',require('./routes/transferencia'));
app.use('/api/historial',require('./routes/historial'));

try{

        const PORT = process.env.PORT || 4000;
        app.use(cors());

       mongoose.connect(process.env.DB_MONGO, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
                    .then(() => app.listen(PORT, () => console.log(`Servidor corriendo en el puerto: ${PORT}`)))
                    .catch((error) => console.log(error.message));

     mongoose.set('useFindAndModify', false);
    }catch(err){

        console.log(err);
        process.exit(1);
    }
