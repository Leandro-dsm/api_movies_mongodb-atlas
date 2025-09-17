import mongoose from "mongoose";

// Criando um documento
const descriptionSchema = new mongoose.Schema({
  genre: String,
  platform: String,
  rating: String
});

const moviesSchema = new mongoose.Schema({
    title: String,
    year: String,
    local: String,
    price: Number
});

const Movie = mongoose.model('Movie', moviesSchema);

export default Movie;