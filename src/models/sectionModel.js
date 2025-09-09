import prisma from "../../prisma/prisma.js";

class SectionModel {
  // Obter todas as seções
  async findAll(touristSpotId, pagina = 1, limite = 10) {
    if (Number(pagina) < 1) pagina = 1;
    if (Number(limite) < 1 || Number(limite) > 100) limite = 10;

    const skip = (Number(pagina) - 1) * Number(limite);

    const where = {};
    if (touristSpotId) {
      where.touristSpotId = Number(touristSpotId);
    }

    const secoes = await prisma.section.findMany({
      skip,
      take: Number(limite),
      where,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        collection: {
          select: {
            id: true,
            name: true,
            region: true,
            rating: true,
            imageUrl: true,
          },
        },
      },
    });

    const totalExibidos = secoes.length;
    const totalGeral = await prisma.section.count({ where });

    return { totalExibidos, totalGeral, secoes };
  }

  // Obter uma seção pelo ID
  async findById(id) {
    return await prisma.section.findUnique({
      where: { id: Number(id) },
      include: {
        collection: true,
      },
    });
  }

  // Criar uma nova seção
  async create(title, text, imageUrl, touristSpotId) {
    return await prisma.section.create({
      data: {
        title,
        text,
        imageUrl,
        touristSpotId: Number(touristSpotId),
      },
    });
  }

  // Atualizar uma seção
  async update(id, title, text, imageUrl, touristSpotId) {
    const secao = await this.findById(id);
    if (!secao) return null;

    return await prisma.section.update({
      where: { id: Number(id) },
      data: {
        title,
        text,
        imageUrl,
        touristSpotId: Number(touristSpotId),
      },
    });
  }

  // Remover uma seção
  async delete(id) {
    const secao = await this.findById(id);
    if (!secao) return null;

    await prisma.section.delete({
      where: { id: Number(id) },
    });

    return true;
  }
}

export default new SectionModel();
