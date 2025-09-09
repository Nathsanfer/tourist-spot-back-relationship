import express from "express";
import SectionController from "../controllers/sectionController.js";

const sectionRouter = express.Router();

// Rotas de Seções
// GET /secoes - Listar todas as Seções
sectionRouter.get("/", SectionController.getAllSections);

// GET /secoes/:id - Obter uma Seção pelo ID
sectionRouter.get("/:id", SectionController.getSectionById);

// POST /secoes - Criar uma nova Seção
sectionRouter.post("/", SectionController.createSection);

// PUT /secoes/:id - Atualizar uma Seção
sectionRouter.put("/:id", SectionController.updateSection);

// DELETE /secoes/:id - Remover uma Seção
sectionRouter.delete("/:id", SectionController.deleteSection);

export default sectionRouter;
