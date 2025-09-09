import express from "express";
import TouristSpotController from "../controllers/touristSpotController.js";

const touristSpotRouter = express.Router();

// Rotas de Pontos Turísticos
// GET /pontos-turisticos - Listar todos os pontos turísticos
touristSpotRouter.get("/", TouristSpotController.getAllTouristSpots);

// GET /pontos-turisticos/:id - Obter um ponto turístico pelo ID
touristSpotRouter.get("/:id", TouristSpotController.getTouristSpotById);

// POST /pontos-turisticos - Criar um novo ponto turístico
touristSpotRouter.post("/", TouristSpotController.createTouristSpot);

// PUT /pontos-turisticos/:id - Atualizar um ponto turístico
touristSpotRouter.put("/:id", TouristSpotController.updateTouristSpot);

// DELETE /pontos-turisticos/:id - Remover um ponto turístico
touristSpotRouter.delete("/:id", TouristSpotController.deleteTouristSpot);

export default touristSpotRouter;
