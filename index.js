import express from "express";
import mongoose from "mongoose";
import { routerAPI } from "./routes/index.js";

const app = express();
const port = 3000;

// Conexión a MongoDB
mongoose.connect( 'mongodb://127.0.0.1:27017/contentconnect_db', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión exitosa a MongoDB');
});

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('<h1> CRUD de Usuarios </h1>');
});

routerAPI(app);

app.listen(port, () => {
  console.log('Servidor escuchando en el puerto ' + port);
});
