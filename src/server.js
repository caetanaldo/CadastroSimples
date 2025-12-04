require("dotenv").config();
const express = require("express");
const usuarioRoutes = require("./routes/usuarioRoutes");

const app = express();
app.use(express.json());

app.use("/usuarios", usuarioRoutes);

const PORT = process.env.API_PORT;
app.listen(PORT, () => 
    console.log(`O servidor está rodando em localhost:${PORT}/`));