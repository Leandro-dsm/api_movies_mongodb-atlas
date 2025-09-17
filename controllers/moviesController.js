import movieService from "../services/moviesService.js";
import { ObjectId } from "mongodb";
// função para listar
const getALLMovies = async (req, res) => {
    try {
        const movies = await movieService.getALL();
        res.status(200).json({ movies: movies });
    } catch (error) {
      console.log(error);
        res.status(500).json({ error: " Erro interno dos servidor."});
      }
    };
// Cadastrado um Movie

const createMovie = async (req,res) => {
    try {
        const { title, year, price, description} = req.body;
        await movieService.Create(title, year, price, description);
        res.sendStatus(201); // código 201 (CREATED)
    } catch (error) {
        console.log(error);
        res.status(500).json({ erro: "Erro interno do servidor."});
    }
};

// Deletando um Movie
const deleteMovie = async (req, res) => { 
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      await movieService.Delete(id);
      res.sendStatus(204); // Código 204 (NO CONTENT) - Requisição bem sucedida, mas não há conteúdo para retornar.
    } else {
      // Se o ID não for válido
      res.status(400).json({ error: "A ID enviada é inválida" });
      // Código 400 (BAD REQUEST) - Requisição mal formada
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });

    // res.status(500).json({}) -> Para enviar json junto
    // res.sendStatus(500) -> Somente código de status
  }
};

// alterar Movie
const updateMovie = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const { title, year, price, description } = req.body;
      const movie = await movieService.Update(title, year, price, description);
      res.status(200).json({movie}); // Código 200 (OK)
    } else {
      res.sendStatus(400); // Código 400 (BAD REQUEST)
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// funçao para busvar um unico jogo
const getOneMOvie = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const movie = await movieService.getOne(id);
      if (!game) {
        res.status(404).json({ error: "o jogo não foi encontrado." });
      } else {
        res.status(200).json({ movie });
      }
    } else {
      res.status(400).json({ error: `A ID enviada é invalida` });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
    export default { getALLMovies, createMovie, deleteMovie,updateMovie, getOneMOvie};