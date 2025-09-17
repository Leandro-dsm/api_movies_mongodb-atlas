import Movie from "../models/movies.js";

class movieService {
// buscando registros no banco
    async getALL() {
        try {
            const movies = await Movie.find();
            return movies;
        } catch (error) {
            console.log(error);
        }
    }
// cadastrando registros no banco
    async Create(title, year, price, descriptions){
        try{
            const newMovie = new Movie({
            title,
            year,
            price,
            descriptions,
            });
            await newMovie.save();
        } catch (error) {
            console.log(error);
        }
    }
// Deletando registros no banco
  async Delete(id) {
    try {
      await Movie.findByIdAndDelete(id);
      console.log(`Movie com a id: ${id} foi deletado com sucesso.`);
    } catch (error) {
      console.log(error);
    }
  }
// alterando regsitro no banco
async Update(id, title, year, price, descriptions) {
    try {
      const movie = await Movie.findByIdAndUpdate(
        id,
        {
        title,
        year,
        price,
        descriptions,
        },
        { new: true }
      );
      console.log(`Dados do movie com id ${id} alterados com sucesso.`);
      return movie;
    } catch (error) {
      console.log(error);
    }
  }
// buscar um inico movie
  async getOne(id) {
    try {
      const movie = await Movie.findOne({ _id: id });
      return movie;
    } catch (error) {
      console.log(error);
    }
  }
};
export default new movieService();