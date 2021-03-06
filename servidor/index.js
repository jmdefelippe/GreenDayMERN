const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

const albumes = require('./routes/albumes');
const biografia = require('./routes/biografia');
const contactos = require('./routes/contactos');
const fotos = require('./routes/fotos');
const galerias = require('./routes/galerias');
const integrantes = require('./routes/integrantes');
const miniaturas = require('./routes/miniaturas');
const playlists = require('./routes/playlists');
const redesSociales = require('./routes/redesSociales');
const videos = require('./routes/videos');

// crear el servidor
const app = express();

// conectar a la base de datos
conectarDB();

// habilitar cors
app.use(cors());

// habilitar express.json
app.use(express.json({ extended: true }));

// puerto de la app
const port = process.env.port || 4000;

// importar rutas
app.use('/api/albumes', albumes);
app.use('/api/biografia', biografia);
app.use('/api/contactos', contactos);
app.use('/api/fotos', fotos);
app.use('/api/galerias', galerias);
app.use('/api/integrantes', integrantes);
app.use('/api/miniaturas', miniaturas);
app.use('/api/playlists', playlists);
app.use('/api/redesSociales', redesSociales);
app.use('/api/videos', videos);

// arrancar la app
app.listen(port, '0.0.0.0', () => {
    console.log(`El servidor está funcionando en el puerto ${port}`);
});



