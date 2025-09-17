// importando Express
import express from "express";
// importando Mongoose

import movieRoutes from "./routes/moviesRoutes.js";

import Movie from "./models/movies.js";

import mongoose from "./config/db-connection.js";

const app = express();

// Configurações do Express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", movieRoutes);
app.get("/", async (req, res) => {
   try{
    const movies = await Movie.find();
    res.status(200).json({ games: games });
   }catch (error){
    console.log(error);
    res.status(500).json({error: "Erro interno do servidor."});
   }
});


//iniciando conexão com banco de dados do MongoDB
//mongoose.connect("mongodb://127.0.0.1:27017/api_movies")

// rodando a API na porta 4000
const port = 4000;
app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    console.log(`API rodando em http//localhost:${port}.`);
});

