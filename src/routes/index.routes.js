import express from "express";

// Importar todas as rotas
import touristSpotRouter from "./touristSpotRoutes.js";
import sectionRouter from "./sectionRoutes.js";

const router = express.Router();

// Rotas públicas
router.use("/pontos-turisticos", touristSpotRouter);
router.use("/secoes", sectionRouter);

export default router;
