import express from "express";

const moviesRoutes = express.Router();

import moviesController from "../controllers/moviesController.js";

// Endpoint para listar todos Movies
moviesRoutes.get("/movies", moviesController.getALLMovies);

// Endpont para cadastrar um Movie
moviesRoutes.post("/movies", moviesController.createMovie);

// Endpoint para Deletar Movie
moviesRoutes.delete("/movies/:id", moviesController.deleteMovie);

// Endpoint para Alterar Movie
moviesRoutes.put("/movies/:id", moviesController.updateMovie);

// Endpoint para Listar Movie
moviesRoutes.get("/movies/:id", moviesController.getOneMOvie);

export default moviesRoutes;