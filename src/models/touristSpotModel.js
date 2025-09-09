import prisma from "../../prisma/prisma.js";

class TouristSpotModel {
  // Obter todos os pontos turísticos
  async findAll() {
    const spots = await prisma.touristSpot.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        sections: true, // já traz junto as seções (Visão Geral, História, etc.)
      },
    });

    return spots;
  }

  // Obter um ponto turístico pelo ID
  async findById(id) {
    const spot = await prisma.touristSpot.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        sections: true,
      },
    });

    return spot;
  }

  // Criar um novo ponto turístico
  async create(name, region, rating, imageUrl) {
    const newSpot = await prisma.touristSpot.create({
      data: {
        name,
        region,
        rating,
        imageUrl,
      },
    });

    return newSpot;
  }

  // Atualizar um ponto turístico
  async update(id, name, region, rating, imageUrl) {
    const spot = await this.findById(id);

    if (!spot) {
      return null;
    }

    const spotUpdated = await prisma.touristSpot.update({
      where: {
        id: Number(id),
      },
      data: {
        ...(name !== undefined && { name }),
        ...(region !== undefined && { region }),
        ...(rating !== undefined && { rating }),
        ...(imageUrl !== undefined && { imageUrl }),
      },
    });

    return spotUpdated;
  }

  // Remover um ponto turístico
  async delete(id) {
    const spot = await this.findById(id);

    if (!spot) {
      return null;
    }

    await prisma.touristSpot.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new TouristSpotModel();
