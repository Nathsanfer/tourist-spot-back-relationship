import SectionModel from "../models/sectionModel.js";

class SectionController {
  // GET /secoes
  async getAllSections(req, res) {
    const touristSpotId = req.query.touristSpotId;
    const pagina = req.query.pagina || 1;
    const limite = req.query.limite || 10;

    try {
      const secoes = await SectionModel.findAll(touristSpotId, pagina, limite);
      res.json(secoes);
    } catch (error) {
      console.error("Erro ao buscar as seções:", error);
      res.status(500).json({ error: "Erro ao buscar as seções" });
    }
  }

  // GET /secoes/:id
  async getSectionById(req, res) {
    try {
      const { id } = req.params;

      const secao = await SectionModel.findById(id);

      if (!secao) {
        return res.status(404).json({ error: "Seção não encontrada!" });
      }

      res.json(secao);
    } catch (error) {
      console.error("Erro ao buscar seção:", error);
      res.status(500).json({ error: "Erro ao buscar seção!" });
    }
  }

  // POST /secoes
  async createSection(req, res) {
    try {
      const { title, text, imageUrl, touristSpotId } = req.body;

      // Validação básica
      if (!title || !text || !touristSpotId) {
        return res.status(400).json({
          error:
            "Os campos título, texto e id do ponto turístico são obrigatórios",
        });
      }

      const newSection = await SectionModel.create(
        title,
        text,
        imageUrl,
        touristSpotId
      );

      if (!newSection) {
        return res.status(400).json({ error: "Erro ao criar seção" });
      }

      res.status(201).json({
        message: "Seção criada com sucesso",
        newSection,
      });
    } catch (error) {
      console.error("Erro ao criar seção:", error);
      res.status(500).json({ error: "Erro ao criar seção" });
    }
  }

  // PUT /secoes/:id
  async updateSection(req, res) {
    try {
      const { id } = req.params;
      const { title, text, imageUrl, touristSpotId } = req.body;

      const updatedSection = await SectionModel.update(
        id,
        title,
        text,
        imageUrl,
        touristSpotId
      );

      if (!updatedSection) {
        return res.status(404).json({ error: "Seção não encontrada" });
      }

      res.json(updatedSection);
    } catch (error) {
      console.error("Erro ao atualizar seção:", error);
      res.status(500).json({ error: "Erro ao atualizar seção!" });
    }
  }

  // DELETE /secoes/:id
  async deleteSection(req, res) {
    try {
      const { id } = req.params;

      const result = await SectionModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "Seção não encontrada!" });
      }

      res.status(200).json({
        message: "Seção removida com sucesso",
      });
    } catch (error) {
      console.error("Erro ao remover seção:", error);
      res.status(500).json({ error: "Erro ao remover seção!" });
    }
  }
}

export default new SectionController();
