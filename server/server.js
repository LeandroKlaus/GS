const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Conecte-se ao MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://gs:123gs@gs.jn6fo.mongodb.net/gs?retryWrites=true&w=majority&appName=GS', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conexão ao MongoDB Atlas bem-sucedida');
}).catch((error) => {
  console.error('Erro ao conectar ao MongoDB Atlas:', error);
});

// Defina o modelo de moto
const motoSchema = new mongoose.Schema({
  modelo: String,
  imagem: String,
  consorcio: {
    descricao: String,
    valor: String
  },
  fichaTecnica: String // Novo campo para a ficha técnica
});

const Moto = mongoose.model('Moto', motoSchema);

// Rota para obter todas as motos
app.get('/motos', async (req, res) => {
  try {
    const motos = await Moto.find();
    res.json(motos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar motos', error });
  }
});

// Rota para adicionar uma nova moto
app.post('/motos', async (req, res) => {
  try {
    const novaMoto = new Moto(req.body);
    await novaMoto.save();
    res.json(novaMoto);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao salvar moto', error });
  }
});

// Rota para excluir uma moto
app.delete('/motos/:id', async (req, res) => {
  try {
    await Moto.findByIdAndDelete(req.params.id);
    res.json({ message: 'Moto excluída' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir moto', error });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
