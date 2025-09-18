import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("Iniciando o seed...");

  // Limpar dados existentes
  await prisma.section.deleteMany({});
  await prisma.touristSpot.deleteMany({});

  // Criar pontos turísticos com suas seções
  
  // Cristo Redentor - Rio de Janeiro
  const cristoRedentor = await prisma.touristSpot.create({
    data: {
      name: "Cristo Redentor",
      region: "Sudeste",
      rating: 4.9,
      imageUrl: "https://mobilidade.estadao.com.br/wp-content/uploads/2024/11/Imagem-destacada-Mobilidade-2024-11-21T165703.973.jpg.webp",
      sections: {
        create: [
          {
            title: "História",
            text: "O Cristo Redentor foi inaugurado em 1931 e é considerado uma das Sete Maravilhas do Mundo Moderno. A estátua art déco de Jesus Cristo foi projetada pelo engenheiro francês Paul Landowski e construída pelo brasileiro Heitor da Silva Costa.",
            imageUrl: "https://example.com/cristo-historia.jpg"
          },
          {
            title: "Localização",
            text: "A estátua está localizada no topo do Morro do Corcovado, a 710 metros de altitude, no Parque Nacional da Tijuca, na cidade do Rio de Janeiro.",
            imageUrl: "https://example.com/cristo-localizacao.jpg"
          },
          {
            title: "Características",
            text: "O Cristo Redentor possui 30 metros de altura (sem contar os 8 metros do pedestal) e 28 metros de largura. É feito de concreto armado e pedra-sabão.",
            imageUrl: null
          }
        ]
      }
    },
    include: {
      sections: true
    }
  });

  // Cataratas do Iguaçu - Paraná
  const cataratasIguacu = await prisma.touristSpot.create({
    data: {
      name: "Cataratas do Iguaçu",
      region: "Sul",
      rating: 4.8,
      imageUrl: "https://example.com/cataratas-iguacu.jpg",
      sections: {
        create: [
          {
            title: "Descrição",
            text: "As Cataratas do Iguaçu são um conjunto de cerca de 275 quedas d'água no Rio Iguaçu, localizada entre o Parque Nacional do Iguaçu (Brasil) e o Parque Nacional Iguazú (Argentina).",
            imageUrl: "https://example.com/cataratas-descricao.jpg"
          },
          {
            title: "Garganta do Diabo",
            text: "A maior e mais impressionante das quedas é a Garganta do Diabo, com 82 metros de altura. É possível observá-la tanto do lado brasileiro quanto argentino.",
            imageUrl: "https://example.com/garganta-diabo.jpg"
          },
          {
            title: "Fauna e Flora",
            text: "O parque abriga uma rica biodiversidade, incluindo mais de 2000 espécies de plantas, jaguares, pumas, quatis e mais de 400 espécies de aves.",
            imageUrl: null
          }
        ]
      }
    },
    include: {
      sections: true
    }
  });

  // Pelourinho - Salvador
  const pelourinho = await prisma.touristSpot.create({
    data: {
      name: "Pelourinho",
      region: "Nordeste",
      rating: 4.7,
      imageUrl: "https://example.com/pelourinho.jpg",
      sections: {
        create: [
          {
            title: "História Colonial",
            text: "O Pelourinho é o centro histórico de Salvador, declarado Patrimônio Mundial pela UNESCO em 1985. Representa o maior conjunto arquitetônico colonial da América Latina.",
            imageUrl: "https://example.com/pelourinho-historia.jpg"
          },
          {
            title: "Cultura Afro-Brasileira",
            text: "É considerado o berço da cultura afro-brasileira, com forte influência na música, dança, religião e culinária. Local de nascimento do Olodum e outros grupos culturais.",
            imageUrl: "https://example.com/pelourinho-cultura.jpg"
          }
        ]
      }
    },
    include: {
      sections: true
    }
  });

  // Lençóis Maranhenses - Maranhão
  const lencoisMaranhenses = await prisma.touristSpot.create({
    data: {
      name: "Lençóis Maranhenses",
      region: "Nordeste",
      rating: 4.8,
      imageUrl: "https://example.com/lencois-maranhenses.jpg",
      sections: {
        create: [
          {
            title: "Paisagem Única",
            text: "O Parque Nacional dos Lençóis Maranhenses possui uma área de 155 mil hectares de dunas de areia branca e lagoas de água doce cristalina, formando uma paisagem única no mundo.",
            imageUrl: "https://example.com/lencois-paisagem.jpg"
          },
          {
            title: "Formação das Lagoas",
            text: "Entre junho e setembro, as chuvas enchem as depressões entre as dunas, criando milhares de lagoas temporárias de águas cristalinas em tons de azul e verde.",
            imageUrl: "https://example.com/lencois-lagoas.jpg"
          },
          {
            title: "Melhor Época para Visitar",
            text: "O período ideal para visita é entre julho e setembro, quando as lagoas estão cheias e o acesso é mais fácil.",
            imageUrl: null
          }
        ]
      }
    },
    include: {
      sections: true
    }
  });

  // Fernando de Noronha - Pernambuco
  const fernandoNoronha = await prisma.touristSpot.create({
    data: {
      name: "Fernando de Noronha",
      region: "Nordeste",
      rating: 4.9,
      imageUrl: "https://example.com/fernando-noronha.jpg",
      sections: {
        create: [
          {
            title: "Arquipélago Paradisíaco",
            text: "Fernando de Noronha é um arquipélago vulcânico composto por 21 ilhas, declarado Patrimônio Mundial da Humanidade pela UNESCO devido à sua importância ecológica.",
            imageUrl: "https://example.com/noronha-arquipelago.jpg"
          },
          {
            title: "Vida Marinha",
            text: "As águas cristalinas abrigam uma rica vida marinha, incluindo golfinhos rotadores, tartarugas marinhas, tubarões e mais de 230 espécies de peixes.",
            imageUrl: "https://example.com/noronha-vida-marinha.jpg"
          },
          {
            title: "Praias Paradisíacas",
            text: "Possui algumas das praias mais belas do Brasil, como Baía do Sancho, Praia do Leão e Cacimba do Padre, famosas por suas águas cristalinas e paisagens deslumbrantes.",
            imageUrl: "https://example.com/noronha-praias.jpg"
          }
        ]
      }
    },
    include: {
      sections: true
    }
  });

  // Amazônia - Norte
  const amazonia = await prisma.touristSpot.create({
    data: {
      name: "Floresta Amazônica",
      region: "Norte",
      rating: 4.7,
      imageUrl: "https://example.com/amazonia.jpg",
      sections: {
        create: [
          {
            title: "Maior Floresta Tropical",
            text: "A Amazônia é a maior floresta tropical do mundo, cobrindo cerca de 5,5 milhões de km². Possui a maior biodiversidade do planeta, com milhões de espécies de plantas, animais e insetos.",
            imageUrl: "https://example.com/amazonia-floresta.jpg"
          },
          {
            title: "Rio Amazonas",
            text: "O Rio Amazonas é o maior rio do mundo em volume de água, percorrendo mais de 6.400 km desde sua nascente nos Andes peruanos até sua foz no oceano Atlântico.",
            imageUrl: "https://example.com/rio-amazonas.jpg"
          },
          {
            title: "Comunidades Tradicionais",
            text: "A região abriga diversas comunidades indígenas e ribeirinhas que mantêm tradições milenares e conhecimentos únicos sobre a floresta e seus recursos.",
            imageUrl: null
          }
        ]
      }
    },
    include: {
      sections: true
    }
  });

  console.log(`Cristo Redentor criado com ${cristoRedentor.sections.length} seções`);
  console.log(`Cataratas do Iguaçu criadas com ${cataratasIguacu.sections.length} seções`);
  console.log(`Pelourinho criado com ${pelourinho.sections.length} seções`);
  console.log(`Lençóis Maranhenses criados com ${lencoisMaranhenses.sections.length} seções`);
  console.log(`Fernando de Noronha criado com ${fernandoNoronha.sections.length} seções`);
  console.log(`Amazônia criada com ${amazonia.sections.length} seções`);

  console.log(
    `Seed concluído! Criados ${await prisma.touristSpot.count()} pontos turísticos e ${await prisma.section.count()} seções.`
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
