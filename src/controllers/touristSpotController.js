import TouristSpotModel from "../models/touristSpotModel.js";

class TouristSpotController {
  // GET /pontos-turisticos
  async getAllTouristSpots(req, res) {
    try {
      const spots = await TouristSpotModel.findAll();
      res.json(spots);
    } catch (error) {
      console.error("Erro ao buscar pontos turísticos:", error);
      res.status(500).json({ error: "Erro ao buscar pontos turísticos" });
    }
  }

  // GET /pontos-turisticos/:id
  async getTouristSpotById(req, res) {
    try {
      const { id } = req.params;

      const spot = await TouristSpotModel.findById(id);

      if (!spot) {
        return res.status(404).json({ error: "Ponto turístico não encontrado!" });
      }

      res.json(spot);
    } catch (error) {
      console.error("Erro ao buscar ponto turístico:", error);
      res.status(500).json({ error: "Erro ao buscar ponto turístico" });
    }
  }

  // POST /pontos-turisticos
  async createTouristSpot(req, res) {
    try {
      // Validação básica
      const { name, region, rating, imageUrl } = req.body;

      if (!name || !region) {
        return res.status(400).json({
          error: "Os campos nome e região são obrigatórios",
        });
      }

      // Criar novo ponto turístico
      const newSpot = await TouristSpotModel.create(name, region, rating, imageUrl);

      if (!newSpot) {
        return res.status(400).json({ error: "Erro ao criar ponto turístico" });
      }

      res.status(201).json({
        message: "Ponto turístico criado com sucesso",
        newSpot,
      });
    } catch (error) {
      console.error("Erro ao criar ponto turístico:", error);
      res.status(500).json({ error: "Erro ao criar ponto turístico" });
    }
  }

  // PUT /pontos-turisticos/:id
  async updateTouristSpot(req, res) {
    try {
      const { id } = req.params;
      const { name, region, rating, imageUrl } = req.body;

      const updatedSpot = await TouristSpotModel.update(id, name, region, rating, imageUrl);

      if (!updatedSpot) {
        return res.status(404).json({ error: "Ponto turístico não encontrado" });
      }

      res.json(updatedSpot);
    } catch (error) {
      console.error("Erro ao atualizar ponto turístico:", error);
      res.status(500).json({ error: "Erro ao atualizar ponto turístico" });
    }
  }

  // DELETE /pontos-turisticos/:id
  async deleteTouristSpot(req, res) {
    try {
      const { id } = req.params;

      const result = await TouristSpotModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "Ponto turístico não encontrado!" });
      }

      res.status(200).json({
        message: "Ponto turístico removido com sucesso",
      });
    } catch (error) {
      console.error("Erro ao remover ponto turístico:", error);
      res.status(500).json({ error: "Erro ao remover ponto turístico" });
    }
  }
}

export default new TouristSpotController();
