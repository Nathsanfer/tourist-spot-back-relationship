import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("Iniciando o seed...");

  // Limpar dados existentes
  await prisma.section.deleteMany({});
  await prisma.touristSpot.deleteMany({});

  // Criar pontos turísticos com suas seções

  // Região Nordeste

  const centroHistoricoOlinda = await prisma.touristSpot.create({
    data: {
      name: "Centro Histórico de Olinda",
      region: "Nordeste",
      rating: 4.8,
      imageUrl: "https://vitruvius.com.br/media/images/magazines/grid_9/b8b637dcb0e9_barreto_valoracao07.jpg",
      sections: {
        create: [
          {
            title: "Visão Geral",
            text: "O Centro Histórico de Olinda é um Patrimônio Cultural da Humanidade reconhecido pela UNESCO desde 1982. Com suas ladeiras, igrejas barrocas e casarões coloniais coloridos, o local preserva a essência da história e da cultura nordestina.",
            imageUrl: "https://vitruvius.com.br/media/images/magazines/grid_9/b8b637dcb0e9_barreto_valoracao07.jpg"
          },
          {
            title: "História",
            text: "Fundada em 1535 pelos portugueses, Olinda foi uma das cidades mais prósperas do período colonial graças à cana-de-açúcar. Sofreu invasões holandesas no século XVII, mas se reergueu, mantendo sua arquitetura colonial preservada até hoje.",
            imageUrl: "https://vitruvius.com.br/media/images/magazines/grid_9/b8b637dcb0e9_barreto_valoracao07.jpg"
          },
          {
            title: "Que atrações você pode encontrar?",
            text: "Entre os destaques estão o Alto da Sé, de onde se tem uma vista incrível do Recife, o Mosteiro de São Bento, a Igreja da Sé e os ateliês de artistas locais espalhados pelas ruas de pedra. Além disso, Olinda é famosa por seu carnaval de bonecos gigantes.",
            imageUrl: "https://vitruvius.com.br/media/images/magazines/grid_9/b8b637dcb0e9_barreto_valoracao07.jpg"
          },
          {
            title: "Culinária",
            text: "Olinda oferece sabores típicos do nordeste, como tapiocas recheadas, bolo de rolo, cartola (banana com queijo e açúcar) e pratos à base de frutos do mar, como peixes e camarões frescos preparados de forma regional.",
            imageUrl: "https://vitruvius.com.br/media/images/magazines/grid_9/b8b637dcb0e9_barreto_valoracao07.jpg"
          },
          {
            title: "Qual é o melhor momento para ir?",
            text: "O carnaval é o período mais famoso para visitar Olinda, com suas festas de rua vibrantes. Porém, para quem busca tranquilidade, os meses entre setembro e dezembro são ideais, já que o clima é agradável e há menos turistas.",
            imageUrl: "https://vitruvius.com.br/media/images/magazines/grid_9/b8b637dcb0e9_barreto_valoracao07.jpg"
          }
        ]
      }
    },
    include: {
      sections: true
    }
  });

  const portoDeGalinhas = await prisma.touristSpot.create({
    data: {
      name: "Praia de Porto de Galinhas",
      region: "Nordeste",
      rating: 4.9,
      imageUrl: "https://ipojuca.pe.gov.br/wp-content/uploads/2025/03/image-2-1024x665.png",
      sections: {
        create: [
          {
            title: "Visão Geral",
            text: "Porto de Galinhas é um dos destinos de praia mais famosos do Brasil, conhecido por suas águas cristalinas, piscinas naturais formadas por recifes de corais e jangadas coloridas que encantam os visitantes.",
            imageUrl: "https://ipojuca.pe.gov.br/wp-content/uploads/2025/03/image-2-1024x665.png"
          },
          {
            title: "História",
            text: "Originalmente chamada de Porto Rico, a região ganhou o nome Porto de Galinhas durante o período colonial, ligado ao tráfico de escravizados disfarçado de comércio de galinhas-d’angola. Hoje, é símbolo de turismo sustentável e belezas naturais.",
            imageUrl: "https://ipojuca.pe.gov.br/wp-content/uploads/2025/03/image-2-1024x665.png"
          },
          {
            title: "Que atrações você pode encontrar?",
            text: "As principais atrações são os passeios de jangada até as piscinas naturais, mergulhos com snorkel ou cilindro, praias como Maracaípe e Muro Alto, além de lojas e feirinhas de artesanato no centrinho de Porto.",
            imageUrl: "https://ipojuca.pe.gov.br/wp-content/uploads/2025/03/image-2-1024x665.png"
          },
          {
            title: "Culinária",
            text: "A gastronomia local é marcada por pratos à base de frutos do mar, como peixes grelhados, camarões e lagostas, além de opções típicas pernambucanas, como tapiocas recheadas e a tradicional peixada.",
            imageUrl: "https://ipojuca.pe.gov.br/wp-content/uploads/2025/03/image-2-1024x665.png"
          },
          {
            title: "Qual é o melhor momento para ir?",
            text: "Os meses entre setembro e março são ideais, com mar mais calmo e cristalino, perfeito para as piscinas naturais. Evitar o período de chuvas (maio a julho) garante uma experiência ainda melhor.",
            imageUrl: "https://ipojuca.pe.gov.br/wp-content/uploads/2025/03/image-2-1024x665.png"
          }
        ]
      }
    },
    include: {
      sections: true
    }
  });

  const lencoisMaranhenses = await prisma.touristSpot.create({
    data: {
      name: "Parque Nacional dos Lençóis Maranhenses",
      region: "Nordeste",
      rating: 4.9,
      imageUrl: "https://www.viagenscinematograficas.com.br/wp-content/uploads/2019/05/Barreirinhas-Lencois-Maranhenses-Lagoa-Azul-Capa.jpg",
      sections: {
        create: [
          {
            title: "Visão Geral",
            text: "O Parque Nacional dos Lençóis Maranhenses é um dos cenários naturais mais impressionantes do Brasil, formado por imensas dunas de areia branca intercaladas por lagoas cristalinas de água da chuva. Localizado em Barreirinhas, é um paraíso único no mundo.",
            imageUrl: "https://www.viagenscinematograficas.com.br/wp-content/uploads/2019/05/Barreirinhas-Lencois-Maranhenses-Lagoa-Azul-Capa.jpg"
          },
          {
            title: "História",
            text: "Criado em 1981, o parque abrange mais de 155 mil hectares de dunas, rios e lagoas sazonais. Apesar da aparência de deserto, o local recebe chuvas periódicas que formam suas famosas lagoas, tornando-o um ecossistema singular.",
            imageUrl: "https://www.viagenscinematograficas.com.br/wp-content/uploads/2019/05/Barreirinhas-Lencois-Maranhenses-Lagoa-Azul-Capa.jpg"
          },
          {
            title: "Que atrações você pode encontrar?",
            text: "Os principais atrativos são as lagoas Azul, Bonita e do Peixe, perfeitas para banho. Há passeios de jipe 4x4, trilhas pelas dunas, voos panorâmicos e experiências em comunidades tradicionais da região, como Atins e Santo Amaro.",
            imageUrl: "https://www.viagenscinematograficas.com.br/wp-content/uploads/2019/05/Barreirinhas-Lencois-Maranhenses-Lagoa-Azul-Capa.jpg"
          },
          {
            title: "Culinária",
            text: "A gastronomia local valoriza frutos do mar frescos, como peixes, camarões e caranguejos. Em Barreirinhas e Atins, restaurantes oferecem também pratos típicos do Maranhão, como o arroz de cuxá e a torta de camarão.",
            imageUrl: "https://www.viagenscinematograficas.com.br/wp-content/uploads/2019/05/Barreirinhas-Lencois-Maranhenses-Lagoa-Azul-Capa.jpg"
          },
          {
            title: "Qual é o melhor momento para ir?",
            text: "O melhor período para visitar é entre junho e setembro, quando as lagoas estão cheias após o período de chuvas. Nessa época, as águas estão cristalinas e as paisagens ficam ainda mais deslumbrantes.",
            imageUrl: "https://www.viagenscinematograficas.com.br/wp-content/uploads/2019/05/Barreirinhas-Lencois-Maranhenses-Lagoa-Azul-Capa.jpg"
          }
        ]
      }
    },
    include: {
      sections: true
    }
  });

  const praiaDoSancho = await prisma.touristSpot.create({
    data: {
      name: "Praia do Sancho",
      region: "Nordeste",
      rating: 5.0,
      imageUrl: "https://blog.blablacar.com.br/wp-content/uploads/2024/11/baia-do-sancho-2.webp",
      sections: {
        create: [
          {
            title: "Visão Geral",
            text: "A Praia do Sancho é considerada uma das praias mais bonitas do mundo, localizada no arquipélago de Fernando de Noronha. Com águas cristalinas, falésias cobertas por vegetação e uma biodiversidade marinha incrível, é um verdadeiro paraíso natural.",
            imageUrl: "https://blog.blablacar.com.br/wp-content/uploads/2024/11/baia-do-sancho-2.webp"
          },
          {
            title: "História",
            text: "Fernando de Noronha foi descoberto em 1503 e, ao longo dos séculos, serviu como presídio e base militar. A Praia do Sancho permaneceu isolada por muito tempo devido ao acesso difícil, o que ajudou a preservar sua beleza intocada.",
            imageUrl: "https://blog.blablacar.com.br/wp-content/uploads/2024/11/baia-do-sancho-2.webp"
          },
          {
            title: "Que atrações você pode encontrar?",
            text: "Além do banho em águas mornas e cristalinas, é possível praticar mergulho e snorkel para observar tartarugas, golfinhos e cardumes de peixes coloridos. O mirante próximo oferece uma das vistas mais espetaculares do arquipélago.",
            imageUrl: "https://blog.blablacar.com.br/wp-content/uploads/2024/11/baia-do-sancho-2.webp"
          },
          {
            title: "Culinária",
            text: "Embora a praia em si não tenha quiosques, Fernando de Noronha oferece uma culinária rica em frutos do mar frescos, como peixe grelhado, moqueca e lagosta. Restaurantes locais combinam tradição nordestina com toques contemporâneos.",
            imageUrl: "https://blog.blablacar.com.br/wp-content/uploads/2024/11/baia-do-sancho-2.webp"
          },
          {
            title: "Qual é o melhor momento para ir?",
            text: "Entre abril e setembro, quando o mar está mais calmo e as águas mais transparentes, é a época ideal para mergulhar e aproveitar as lagoas naturais. De dezembro a fevereiro, o destino atrai surfistas pelas ondas maiores.",
            imageUrl: "https://blog.blablacar.com.br/wp-content/uploads/2024/11/baia-do-sancho-2.webp"
          }
        ]
      }
    },
    include: {
      sections: true
    }
  });


  // Região Norte 

  const teatroAmazonas = await prisma.touristSpot.create({
    data: {
      name: "Teatro Amazonas",
      region: "Norte",
      rating: 4.8,
      imageUrl: "https://cdn-hweb.hsystem.com.br/5873d325c19a4207cc40b87c/9afe6c04d01545efbcc25f68dd272133.jpg",
      sections: {
        create: [
          {
            title: "Visão Geral",
            text: "O Teatro Amazonas é o maior símbolo cultural de Manaus e um dos mais belos teatros de ópera do mundo. Inaugurado em 1896, durante o ciclo da borracha, representa a riqueza e sofisticação do período.",
            imageUrl: "https://cdn-hweb.hsystem.com.br/5873d325c19a4207cc40b87c/9afe6c04d01545efbcc25f68dd272133.jpg"
          },
          {
            title: "História",
            text: "Construído com materiais importados da Europa, como mármore italiano e ferro inglês, o teatro foi projetado para colocar Manaus no centro da vida cultural mundial. Após anos de decadência, foi restaurado e hoje é palco de grandes eventos.",
            imageUrl: "https://cdn-hweb.hsystem.com.br/5873d325c19a4207cc40b87c/9afe6c04d01545efbcc25f68dd272133.jpg"
          },
          {
            title: "Que atrações você pode encontrar?",
            text: "O visitante pode assistir a óperas, concertos e espetáculos diversos, além de fazer visitas guiadas que mostram a arquitetura, a cúpula colorida com 36 mil peças de cerâmica e os salões luxuosos do teatro.",
            imageUrl: "https://cdn-hweb.hsystem.com.br/5873d325c19a4207cc40b87c/9afe6c04d01545efbcc25f68dd272133.jpg"
          },
          {
            title: "Culinária",
            text: "Nos arredores do teatro, é possível degustar pratos típicos da culinária amazônica, como tacacá, tambaqui assado e pratos à base de jambu e açaí. Restaurantes próximos oferecem uma verdadeira imersão gastronômica na cultura regional.",
            imageUrl: "https://cdn-hweb.hsystem.com.br/5873d325c19a4207cc40b87c/9afe6c04d01545efbcc25f68dd272133.jpg"
          },
          {
            title: "Qual é o melhor momento para ir?",
            text: "A melhor época para visitar é entre abril e junho, quando ocorre o Festival Amazonas de Ópera. No entanto, o teatro pode ser visitado durante todo o ano, seja para apreciar sua programação cultural ou explorar sua arquitetura icônica.",
            imageUrl: "https://cdn-hweb.hsystem.com.br/5873d325c19a4207cc40b87c/9afe6c04d01545efbcc25f68dd272133.jpg"
          }
        ]
      }
    },
    include: {
      sections: true
    }
  });

  const jalapao = await prisma.touristSpot.create({
    data: {
      name: "Jalapão",
      region: "Norte",
      rating: 4.9,
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/88/d0/03/cachoeira-do-formiga.jpg?w=700&h=400&s=1",
      sections: {
        create: [
          {
            title: "Visão Geral",
            text: "O Jalapão é um dos destinos mais incríveis do Tocantins, conhecido por sua natureza intocada, dunas douradas, cachoeiras cristalinas, fervedouros e paisagens de tirar o fôlego. É perfeito para quem busca aventura e contato direto com a natureza.",
            imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/88/d0/03/cachoeira-do-formiga.jpg?w=700&h=400&s=1"
          },
          {
            title: "História",
            text: "O Jalapão começou a ganhar destaque turístico nos anos 2000, quando suas belezas naturais foram reveladas ao grande público. A região é habitada por comunidades tradicionais, como quilombolas e artesãos, que mantêm viva a cultura local.",
            imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/88/d0/03/cachoeira-do-formiga.jpg?w=700&h=400&s=1"
          },
          {
            title: "Que atrações você pode encontrar?",
            text: "Entre os destaques estão as Dunas do Jalapão, a Cachoeira da Formiga, a Cachoeira da Velha, o Fervedouro do Ceiça e a Pedra Furada. Cada atração revela um espetáculo natural diferente, perfeito para ecoturismo e aventura.",
            imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/88/d0/03/cachoeira-do-formiga.jpg?w=700&h=400&s=1"
          },
          {
            title: "Culinária",
            text: "A culinária do Jalapão é simples e saborosa, com pratos regionais como galinha caipira, peixes de rio, arroz com pequi e o famoso capim-dourado, usado não na comida, mas no artesanato típico das comunidades locais.",
            imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/88/d0/03/cachoeira-do-formiga.jpg?w=700&h=400&s=1"
          },
          {
            title: "Qual é o melhor momento para ir?",
            text: "A melhor época para visitar é entre maio e setembro, durante a estação seca, quando as estradas estão em melhores condições e as paisagens ficam ainda mais exuberantes. No período chuvoso (novembro a abril), o acesso pode ser mais difícil.",
            imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/88/d0/03/cachoeira-do-formiga.jpg?w=700&h=400&s=1"
          }
        ]
      }
    },
    include: {
      sections: true
    }
  });

  const palacioRioNegro = await prisma.touristSpot.create({
    data: {
      name: "Palácio Rio Negro",
      region: "Norte",
      rating: 4.7,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/31/Pal%C3%A1cio_Rio_Negro%2C_Manaus_1.jpg",
      sections: {
        create: [
          {
            title: "Visão Geral",
            text: "O Palácio Rio Negro é um dos principais símbolos arquitetônicos e históricos de Manaus. Construído no início do século XX, durante o ciclo da borracha, destaca-se pela imponência e pela mistura de estilos arquitetônicos europeus.",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/31/Pal%C3%A1cio_Rio_Negro%2C_Manaus_1.jpg"
          },
          {
            title: "História",
            text: "Inaugurado em 1903, o palácio foi residência do rico comerciante alemão Karl Waldemar Scholz. Posteriormente, tornou-se sede do governo do Amazonas e hoje funciona como centro cultural aberto ao público.",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/31/Pal%C3%A1cio_Rio_Negro%2C_Manaus_1.jpg"
          },
          {
            title: "Que atrações você pode encontrar?",
            text: "No Palácio Rio Negro é possível visitar exposições de arte, conhecer salas históricas preservadas e jardins internos. O espaço também recebe eventos culturais, como concertos e apresentações teatrais.",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/31/Pal%C3%A1cio_Rio_Negro%2C_Manaus_1.jpg"
          },
          {
            title: "Culinária",
            text: "Embora o palácio não tenha restaurantes internos, sua localização no centro de Manaus permite fácil acesso a restaurantes que servem pratos típicos da culinária amazônica, como tambaqui assado, tacacá e jaraqui frito.",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/31/Pal%C3%A1cio_Rio_Negro%2C_Manaus_1.jpg"
          },
          {
            title: "Qual é o melhor momento para ir?",
            text: "O Palácio pode ser visitado durante todo o ano, mas entre junho e novembro o clima em Manaus é mais seco, o que facilita passeios pela cidade. Vale conferir a programação cultural para aproveitar exposições e eventos especiais.",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/31/Pal%C3%A1cio_Rio_Negro%2C_Manaus_1.jpg"
          }
        ]
      }
    },
    include: {
      sections: true
    }
  });

  const alterDoChao = await prisma.touristSpot.create({
    data: {
      name: "Alter do Chão",
      region: "Norte",
      rating: 4.8,
      imageUrl: "https://santarem.pa.gov.br/storage/posts/September2021/capa-hnLpB9.jpg",
      sections: {
        create: [
          {
            title: "Visão Geral",
            text: "Alter do Chão é conhecido como o 'Caribe Amazônico', com suas praias de areia branca, águas cristalinas e paisagens deslumbrantes na região do Rio Tapajós. É um destino perfeito para relaxar e se conectar com a natureza.",
            imageUrl: "https://santarem.pa.gov.br/storage/posts/September2021/capa-hnLpB9.jpg"
          },
          {
            title: "História",
            text: "A vila de Alter do Chão tem origens indígenas e coloniais, servindo como ponto estratégico de comércio fluvial. Com o tempo, tornou-se referência turística graças à beleza de suas praias e à preservação ambiental.",
            imageUrl: "https://santarem.pa.gov.br/storage/posts/September2021/capa-hnLpB9.jpg"
          },
          {
            title: "Que atrações você pode encontrar?",
            text: "Entre os destaques estão a Praia do Amor, a Ilha do Amor, o Lago Verde e passeios de barco pelo Rio Tapajós. O Festival de Pesca e eventos culturais locais também atraem visitantes durante o ano todo.",
            imageUrl: "https://santarem.pa.gov.br/storage/posts/September2021/capa-hnLpB9.jpg"
          },
          {
            title: "Culinária",
            text: "A gastronomia local valoriza peixes de água doce, como tucunaré e pirarucu, além de pratos regionais à base de mandioca e frutas amazônicas. Restaurantes na vila oferecem experiências típicas com ingredientes frescos da região.",
            imageUrl: "https://santarem.pa.gov.br/storage/posts/September2021/capa-hnLpB9.jpg"
          },
          {
            title: "Qual é o melhor momento para ir?",
            text: "O período ideal é entre agosto e dezembro, quando o rio está mais baixo e surgem as famosas praias de água doce. Durante as cheias (janeiro a julho), muitas áreas ficam submersas, dificultando passeios de praia.",
            imageUrl: "https://santarem.pa.gov.br/storage/posts/September2021/capa-hnLpB9.jpg"
          }
        ]
      }
    },
    include: {
      sections: true
    }
  });

  // Região Centro-Oeste

  const chapadaDosVeadeiros = await prisma.touristSpot.create({
    data: {
      name: "Parque Nacional da Chapada dos Veadeiros",
      region: "Centro-Oeste",
      rating: 4.9,
      imageUrl: "https://cdn-clubecandeias.s3.sa-east-1.amazonaws.com/uploads/2017/01/chapada-dos-veadeiros-GO-onde-fica-e-o-que-visitar.jpg",
      sections: {
        create: [
          {
            title: "Visão Geral",
            text: "O Parque Nacional da Chapada dos Veadeiros é um dos destinos naturais mais impressionantes do Brasil, com cânions, cachoeiras, formações rochosas e uma biodiversidade única. Localizado em Alto Paraíso, é ideal para ecoturismo e aventura.",
            imageUrl: "https://cdn-clubecandeias.s3.sa-east-1.amazonaws.com/uploads/2017/01/chapada-dos-veadeiros-GO-onde-fica-e-o-que-visitar.jpg"
          },
          {
            title: "História",
            text: "Criado em 1961, o parque protege os ecossistemas do Cerrado e áreas de importância geológica, como os cristais de quartzo e as cachoeiras formadas pelo Rio Preto. A região também possui forte presença de comunidades tradicionais e cultura local.",
            imageUrl: "https://cdn-clubecandeias.s3.sa-east-1.amazonaws.com/uploads/2017/01/chapada-dos-veadeiros-GO-onde-fica-e-o-que-visitar.jpg"
          },
          {
            title: "Que atrações você pode encontrar?",
            text: "As principais atrações incluem as cachoeiras de Santa Bárbara e Capivara, o Vale da Lua, os cânions do Rio Preto e trilhas ecológicas que proporcionam contato direto com a fauna e flora típicas do Cerrado.",
            imageUrl: "https://cdn-clubecandeias.s3.sa-east-1.amazonaws.com/uploads/2017/01/chapada-dos-veadeiros-GO-onde-fica-e-o-que-visitar.jpg"
          },
          {
            title: "Culinária",
            text: "Na região de Alto Paraíso, os visitantes encontram culinária regional, com pratos à base de mandioca, peixes de água doce e doces típicos do Cerrado, além de cafés e produtos artesanais de comunidades locais.",
            imageUrl: "https://cdn-clubecandeias.s3.sa-east-1.amazonaws.com/uploads/2017/01/chapada-dos-veadeiros-GO-onde-fica-e-o-que-visitar.jpg"
          },
          {
            title: "Qual é o melhor momento para ir?",
            text: "O período ideal para visitar é entre maio e setembro, na estação seca, quando as trilhas estão mais acessíveis e as cachoeiras apresentam suas águas mais cristalinas. Evitar a estação chuvosa garante segurança e melhor aproveitamento.",
            imageUrl: "https://cdn-clubecandeias.s3.sa-east-1.amazonaws.com/uploads/2017/01/chapada-dos-veadeiros-GO-onde-fica-e-o-que-visitar.jpg"
          }
        ]
      }
    },
    include: {
      sections: true
    }
  });

  const lagoaDaPrata = await prisma.touristSpot.create({
    data: {
      name: "Lagoa da Prata",
      region: "Centro-Oeste",
      rating: 4.7,
      imageUrl: "https://www.umviajante.com.br/wp-content/uploads/2022/09/rio-da-prata-flutuacao-bonito-ms-jardim-recanto-ecologico-vale-a-pena-3.jpg",
      sections: {
        create: [
          {
            title: "Visão Geral",
            text: "A Lagoa da Prata é um paraíso natural de Mato Grosso do Sul, conhecida por suas águas cristalinas e paisagens tranquilas. Ideal para quem busca contato com a natureza, flutuação e passeios ecológicos.",
            imageUrl: "https://www.umviajante.com.br/wp-content/uploads/2022/09/rio-da-prata-flutuacao-bonito-ms-jardim-recanto-ecologico-vale-a-pena-3.jpg"
          },
          {
            title: "História",
            text: "A região de Lagoa da Prata sempre foi marcada por sua riqueza natural e presença de rios e nascentes. Com o tempo, tornou-se um destino turístico importante para ecoturismo e esportes aquáticos.",
            imageUrl: "https://www.umviajante.com.br/wp-content/uploads/2022/09/rio-da-prata-flutuacao-bonito-ms-jardim-recanto-ecologico-vale-a-pena-3.jpg"
          },
          {
            title: "Que atrações você pode encontrar?",
            text: "Os visitantes podem praticar flutuação, mergulho, passeios de barco, trilhas ecológicas e observar a fauna e flora locais. É também um ótimo ponto para relaxar e apreciar a natureza preservada da região.",
            imageUrl: "https://www.umviajante.com.br/wp-content/uploads/2022/09/rio-da-prata-flutuacao-bonito-ms-jardim-recanto-ecologico-vale-a-pena-3.jpg"
          },
          {
            title: "Culinária",
            text: "A culinária local oferece pratos à base de peixes frescos, como pintado e pacu, além de pratos típicos do Mato Grosso do Sul, preparados com ingredientes regionais, como mandioca, milho e frutas da estação.",
            imageUrl: "https://www.umviajante.com.br/wp-content/uploads/2022/09/rio-da-prata-flutuacao-bonito-ms-jardim-recanto-ecologico-vale-a-pena-3.jpg"
          },
          {
            title: "Qual é o melhor momento para ir?",
            text: "O período ideal para visitar é entre maio e setembro, na estação seca, quando as águas estão mais cristalinas e as trilhas mais acessíveis, garantindo a melhor experiência para flutuação e passeios ecológicos.",
            imageUrl: "https://www.umviajante.com.br/wp-content/uploads/2022/09/rio-da-prata-flutuacao-bonito-ms-jardim-recanto-ecologico-vale-a-pena-3.jpg"
          }
        ]
      }
    },
    include: {
      sections: true
    }
  });

  const parqueDaCidade = await prisma.touristSpot.create({
    data: {
      name: "Parque da Cidade Sarah Kubitschek",
      region: "Centro-Oeste",
      rating: 4.8,
      imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/01/46/cd/visao-aerea.jpg?w=1200&h=-1&s=1",
      sections: {
        create: [
          {
            title: "Visão Geral",
            text: "O Parque da Cidade Sarah Kubitschek é um dos maiores parques urbanos do Brasil, localizado em Brasília. Com áreas verdes extensas, lagos e espaços para esportes e lazer, é um ponto de encontro de moradores e turistas.",
            imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/01/46/cd/visao-aerea.jpg?w=1200&h=-1&s=1"
          },
          {
            title: "História",
            text: "Inaugurado em 1978, o parque foi projetado pelo arquiteto Burle Marx e se tornou um símbolo da valorização de áreas verdes na capital federal. Recebeu melhorias ao longo dos anos e hoje é referência em lazer e esportes.",
            imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/01/46/cd/visao-aerea.jpg?w=1200&h=-1&s=1"
          },
          {
            title: "Que atrações você pode encontrar?",
            text: "O parque oferece ciclovias, pistas de corrida, quadras esportivas, playgrounds, lagos para pesca e piqueniques, além de eventos culturais e esportivos. É um espaço perfeito para atividades ao ar livre e contato com a natureza.",
            imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/01/46/cd/visao-aerea.jpg?w=1200&h=-1&s=1"
          },
          {
            title: "Culinária",
            text: "Nos arredores do parque há quiosques e cafés que oferecem lanches rápidos, sucos naturais e pratos típicos brasileiros, permitindo aproveitar a visita sem se deslocar para longe.",
            imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/01/46/cd/visao-aerea.jpg?w=1200&h=-1&s=1"
          },
          {
            title: "Qual é o melhor momento para ir?",
            text: "O parque pode ser visitado durante todo o ano, mas as manhãs e finais de tarde são ideais para atividades físicas, passeios e piqueniques, aproveitando o clima mais ameno e a iluminação natural para fotos incríveis.",
            imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/01/46/cd/visao-aerea.jpg?w=1200&h=-1&s=1"
          }
        ]
      }
    },
    include: {
      sections: true
    }
  });

  const chapadaDosGuimaraes = await prisma.touristSpot.create({
    data: {
      name: "Parque Nacional da Chapada dos Guimarães",
      region: "Centro-Oeste",
      rating: 4.9,
      imageUrl: "https://blog.blablacar.com.br/wp-content/uploads/2024/08/parque-nacional-chapada-dos-guimaraes.webp",
      sections: {
        create: [
          {
            title: "Visão Geral",
            text: "O Parque Nacional da Chapada dos Guimarães é um dos destinos naturais mais incríveis de Mato Grosso, com cânions, cachoeiras, mirantes e uma biodiversidade riquíssima. É ideal para ecoturismo e aventuras ao ar livre.",
            imageUrl: "https://blog.blablacar.com.br/wp-content/uploads/2024/08/parque-nacional-chapada-dos-guimaraes.webp"
          },
          {
            title: "História",
            text: "Criado em 1989, o parque protege formações rochosas do período pré-cambriano, rios cristalinos e uma fauna diversificada. A região tem importância arqueológica e cultural, com vestígios de ocupações antigas.",
            imageUrl: "https://blog.blablacar.com.br/wp-content/uploads/2024/08/parque-nacional-chapada-dos-guimaraes.webp"
          },
          {
            title: "Que atrações você pode encontrar?",
            text: "Destaques incluem a Cachoeira Véu de Noiva, o Mirante do Centro Geodésico, a Cidade de Pedra e trilhas que proporcionam contato com a flora e fauna locais. É possível praticar rapel, trekking e observação de aves.",
            imageUrl: "https://blog.blablacar.com.br/wp-content/uploads/2024/08/parque-nacional-chapada-dos-guimaraes.webp"
          },
          {
            title: "Culinária",
            text: "Nos arredores do parque, restaurantes oferecem pratos típicos do Centro-Oeste, com destaque para peixes de água doce, carne de sol, pratos com mandioca e doces regionais preparados com frutas locais.",
            imageUrl: "https://blog.blablacar.com.br/wp-content/uploads/2024/08/parque-nacional-chapada-dos-guimaraes.webp"
          },
          {
            title: "Qual é o melhor momento para ir?",
            text: "O período ideal para visitação é entre abril e setembro, na estação seca, quando as trilhas estão mais seguras e as cachoeiras apresentam águas cristalinas, proporcionando a melhor experiência de ecoturismo.",
            imageUrl: "https://blog.blablacar.com.br/wp-content/uploads/2024/08/parque-nacional-chapada-dos-guimaraes.webp"
          }
        ]
      }
    },
    include: {
      sections: true
    }
  });

  // Região Sudeste

  const cristoRedentor = await prisma.touristSpot.create({
    data: {
      name: "Cristo Redentor",
      region: "Sudeste",
      rating: 4.9,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Cristo_Redentor_-_Rio_de_Janeiro_-_20230321174546.jpg/2560px-Cristo_Redentor_-_Rio_de_Janeiro_-_20230321174546.jpg",
      sections: {
        create: [
          {
            title: "Visão Geral",
            text: "O Cristo Redentor é um dos principais cartões-postais do Brasil e do mundo. Localizado no Rio de Janeiro, ele simboliza paz, fé e acolhimento, recebendo milhões de visitantes todos os anos.",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Cristo_Redentor_-_Rio_de_Janeiro_-_20230321174546.jpg/2560px-Cristo_Redentor_-_Rio_de_Janeiro_-_20230321174546.jpg"
          },
          {
            title: "História",
            text: "Inaugurado em 1931, o Cristo Redentor foi projetado pelo engenheiro brasileiro Heitor da Silva Costa em colaboração com o artista francês Paul Landowski. A estátua é considerada uma das Sete Maravilhas do Mundo Moderno.",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Cristo_Redentor_-_Rio_de_Janeiro_-_20230321174546.jpg/2560px-Cristo_Redentor_-_Rio_de_Janeiro_-_20230321174546.jpg"
          },
          {
            title: "Que atrações você pode encontrar?",
            text: "Além da própria estátua, o visitante pode apreciar a vista panorâmica do Rio de Janeiro, incluindo a Baía de Guanabara, o Pão de Açúcar, as praias de Copacabana e Ipanema, e a imensidão do Parque Nacional da Tijuca.",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Cristo_Redentor_-_Rio_de_Janeiro_-_20230321174546.jpg/2560px-Cristo_Redentor_-_Rio_de_Janeiro_-_20230321174546.jpg"
          },
          {
            title: "Culinária",
            text: "Embora o Cristo em si não seja um polo gastronômico, os arredores do Rio oferecem culinária típica carioca, como feijoada, bolinho de bacalhau, caipirinha e frutos do mar fresquinhos.",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Cristo_Redentor_-_Rio_de_Janeiro_-_20230321174546.jpg/2560px-Cristo_Redentor_-_Rio_de_Janeiro_-_20230321174546.jpg"
          },
          {
            title: "Qual é o melhor momento para ir?",
            text: "O período da manhã costuma ser o melhor, com menor movimento e clima mais fresco. Meses de abril a junho oferecem clima ameno e vistas mais nítidas.",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Cristo_Redentor_-_Rio_de_Janeiro_-_20230321174546.jpg/2560px-Cristo_Redentor_-_Rio_de_Janeiro_-_20230321174546.jpg"
          }
        ]
      }
    },
    include: {
      sections: true
    }
  });

  const museuDoIpiranga = await prisma.touristSpot.create({
    data: {
      name: "Museu do Ipiranga",
      region: "Sudeste",
      rating: 4.7,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxgV98xlLOHsD7KBdcyObV9R4xLCIUgAIubA&s",
      sections: {
        create: [
          {
            title: "Visão Geral",
            text: "O Museu do Ipiranga, oficialmente Museu Paulista, é um dos principais museus históricos de São Paulo. Localizado no Parque da Independência, abriga importantes coleções relacionadas à história do Brasil e da independência.",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxgV98xlLOHsD7KBdcyObV9R4xLCIUgAIubA&s"
          },
          {
            title: "História",
            text: "Inaugurado em 1895, o museu foi projetado para celebrar a independência do Brasil. Sua arquitetura neoclássica é inspirada em palácios europeus e abriga obras e documentos históricos valiosos, preservando a memória do país.",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxgV98xlLOHsD7KBdcyObV9R4xLCIUgAIubA&s"
          },
          {
            title: "Que atrações você pode encontrar?",
            text: "O museu oferece exposições permanentes e temporárias, incluindo pinturas, esculturas, mobiliário e documentos históricos. O parque ao redor também é um atrativo, perfeito para passeios ao ar livre e fotos.",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxgV98xlLOHsD7KBdcyObV9R4xLCIUgAIubA&s"
          },
          {
            title: "Culinária",
            text: "Nas proximidades do museu, é possível encontrar cafés e restaurantes que oferecem pratos típicos paulistas e lanches rápidos, ideais para complementar a visita com uma pausa gastronômica.",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxgV98xlLOHsD7KBdcyObV9R4xLCIUgAIubA&s"
          },
          {
            title: "Qual é o melhor momento para ir?",
            text: "O museu pode ser visitado durante todo o ano, mas dias de semana são ideais para evitar grandes multidões. A primavera é perfeita para aproveitar o parque e as áreas externas floridas.",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxgV98xlLOHsD7KBdcyObV9R4xLCIUgAIubA&s"
          }
        ]
      }
    },
    include: {
      sections: true
    }
  });

  const serraDaCanastra = await prisma.touristSpot.create({
    data: {
      name: "Serra da Canastra",
      region: "Sudeste",
      rating: 4.9,
      imageUrl: "https://blog.blablacar.com.br/wp-content/uploads/2024/09/serra-da-canastra-cascata.webp",
      sections: {
        create: [
          {
            title: "Visão Geral",
            text: "A Serra da Canastra é um dos destinos naturais mais bonitos de Minas Gerais, famosa por suas cachoeiras, cânions, trilhas e pela nascente do Rio São Francisco. É perfeita para ecoturismo e aventuras ao ar livre.",
            imageUrl: "https://blog.blablacar.com.br/wp-content/uploads/2024/09/serra-da-canastra-cascata.webp"
          },
          {
            title: "História",
            text: "A região da Serra da Canastra tem grande importância histórica e cultural, preservando tradições mineiras, como a produção de queijo artesanal e a cultura rural, além de proteger ecossistemas nativos do cerrado e da mata atlântica.",
            imageUrl: "https://blog.blablacar.com.br/wp-content/uploads/2024/09/serra-da-canastra-cascata.webp"
          },
          {
            title: "Que atrações você pode encontrar?",
            text: "Entre os destaques estão a Cachoeira Casca d’Anta, o Parque Nacional da Serra da Canastra, trilhas ecológicas, mirantes e áreas de observação da fauna e flora locais. Também é possível visitar propriedades rurais e conhecer a produção de queijos artesanais.",
            imageUrl: "https://blog.blablacar.com.br/wp-content/uploads/2024/09/serra-da-canastra-cascata.webp"
          },
          {
            title: "Culinária",
            text: "A culinária local é típica mineira, destacando-se pelo famoso queijo Canastra, pratos com pequi, doce de leite e outras delícias regionais que refletem a tradição rural da área.",
            imageUrl: "https://blog.blablacar.com.br/wp-content/uploads/2024/09/serra-da-canastra-cascata.webp"
          },
          {
            title: "Qual é o melhor momento para ir?",
            text: "O período ideal é entre maio e setembro, na estação seca, quando as trilhas estão mais acessíveis e as cachoeiras apresentam águas limpas e cristalinas, garantindo uma experiência incrível de ecoturismo.",
            imageUrl: "https://blog.blablacar.com.br/wp-content/uploads/2024/09/serra-da-canastra-cascata.webp"
          }
        ]
      }
    },
    include: {
      sections: true
    }
  });

  const paoDeAcucar = await prisma.touristSpot.create({
    data: {
      name: "Pão de Açúcar",
      region: "Sudeste",
      rating: 4.9,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMvOiGpVjjCd5GL9h4w4jxVZUd6-XKT5pxnw&s",
      sections: {
        create: [
          {
            title: "Visão Geral",
            text: "O Pão de Açúcar é um dos cartões-postais mais famosos do Rio de Janeiro, oferecendo vistas panorâmicas da cidade, do mar e da Baía de Guanabara. É um dos destinos turísticos mais visitados do Brasil.",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMvOiGpVjjCd5GL9h4w4jxVZUd6-XKT5pxnw&s"
          },
          {
            title: "História",
            text: "O morro do Pão de Açúcar já era conhecido desde o período colonial, mas a famosa instalação do bondinho foi inaugurada em 1912, permitindo que visitantes desfrutassem das vistas espetaculares de maneira prática e segura.",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMvOiGpVjjCd5GL9h4w4jxVZUd6-XKT5pxnw&s"
          },
          {
            title: "Que atrações você pode encontrar?",
            text: "Além do bondinho, os visitantes podem explorar trilhas, mirantes e observar a natureza local. É possível também praticar escalada e fotografia panorâmica, aproveitando uma vista de 360° do Rio de Janeiro.",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMvOiGpVjjCd5GL9h4w4jxVZUd6-XKT5pxnw&s"
          },
          {
            title: "Culinária",
            text: "Nos arredores, há restaurantes e quiosques que servem pratos típicos cariocas, como frutos do mar, petiscos, sucos naturais e opções rápidas para complementar o passeio.",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMvOiGpVjjCd5GL9h4w4jxVZUd6-XKT5pxnw&s"
          },
          {
            title: "Qual é o melhor momento para ir?",
            text: "O melhor período é entre maio e setembro, na estação seca, quando o céu está mais limpo e é possível aproveitar as vistas panorâmicas. Final de tarde é ideal para ver o pôr do sol sobre a cidade.",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMvOiGpVjjCd5GL9h4w4jxVZUd6-XKT5pxnw&s"
          }
        ]
      }
    },
    include: {
      sections: true
    }
  });

  // Região Sul

  const cataratasDoIguacu = await prisma.touristSpot.create({
    data: {
      name: "Cataratas do Iguaçu",
      region: "Sul",
      rating: 4.9,
      imageUrl: "https://www.umviajante.com.br/wp-content/uploads/2021/01/cataratas-do-iguacu-onde-fica-como-chegar-foz-do-iguacu-parana-19.jpg",
      sections: {
        create: [
          {
            title: "Visão Geral",
            text: "As Cataratas do Iguaçu são um dos maiores espetáculos naturais do mundo, localizadas na fronteira entre Brasil e Argentina. Com mais de 270 quedas d’água, atraem turistas de todo o planeta.",
            imageUrl: "https://www.umviajante.com.br/wp-content/uploads/2021/01/cataratas-do-iguacu-onde-fica-como-chegar-foz-do-iguacu-parana-19.jpg"
          },
          {
            title: "História",
            text: "O Parque Nacional do Iguaçu foi criado em 1939 para proteger as cataratas e a biodiversidade local. Desde então, se tornou Patrimônio Natural da Humanidade pela UNESCO e um dos destinos turísticos mais visitados do Brasil.",
            imageUrl: "https://www.umviajante.com.br/wp-content/uploads/2021/01/cataratas-do-iguacu-onde-fica-como-chegar-foz-do-iguacu-parana-19.jpg"
          },
          {
            title: "Que atrações você pode encontrar?",
            text: "O parque oferece trilhas, passeios de barco próximos às quedas, mirantes panorâmicos e o famoso passeio do Macuco Safari. A fauna e flora locais também encantam visitantes, com aves, borboletas e animais silvestres.",
            imageUrl: "https://www.umviajante.com.br/wp-content/uploads/2021/01/cataratas-do-iguacu-onde-fica-como-chegar-foz-do-iguacu-parana-19.jpg"
          },
          {
            title: "Culinária",
            text: "Nos arredores, há restaurantes que oferecem pratos típicos do Sul do Brasil, além de culinária internacional. Peixes de água doce e pratos com influência paranaense são destaques para completar a visita.",
            imageUrl: "https://www.umviajante.com.br/wp-content/uploads/2021/01/cataratas-do-iguacu-onde-fica-como-chegar-foz-do-iguacu-parana-19.jpg"
          },
          {
            title: "Qual é o melhor momento para ir?",
            text: "O período ideal para visitar é entre março e maio, quando o volume de água é impressionante e as chuvas já não são tão intensas. Durante o inverno (junho a setembro), o clima é mais seco e as trilhas mais acessíveis.",
            imageUrl: "https://www.umviajante.com.br/wp-content/uploads/2021/01/cataratas-do-iguacu-onde-fica-como-chegar-foz-do-iguacu-parana-19.jpg"
          }
        ]
      }
    },
    include: {
      sections: true
    }
  });

  const ilhaDoMel = await prisma.touristSpot.create({
    data: {
      name: "Ilha do Mel",
      region: "Sul",
      rating: 4.8,
      imageUrl: "https://www.viagensecaminhos.com/wp-content/uploads/2017/08/ilha-do-mel-parana.jpg",
      sections: {
        create: [
          {
            title: "Visão Geral",
            text: "A Ilha do Mel é um paraíso ecológico no litoral do Paraná, conhecida por suas praias paradisíacas, trilhas e preservação ambiental. Um destino perfeito para relaxar, caminhar e apreciar a natureza.",
            imageUrl: "https://www.viagensecaminhos.com/wp-content/uploads/2017/08/ilha-do-mel-parana.jpg"
          },
          {
            title: "História",
            text: "A ilha possui vestígios de ocupações indígenas e históricas, incluindo faróis antigos e comunidades de pescadores. Hoje é um ponto turístico preservado, com restrições que protegem seu ecossistema.",
            imageUrl: "https://www.viagensecaminhos.com/wp-content/uploads/2017/08/ilha-do-mel-parana.jpg"
          },
          {
            title: "Que atrações você pode encontrar?",
            text: "Destaques incluem as praias de Encantadas e Praia Grande, o Farol das Conchas, trilhas ecológicas, grutas e mirantes. É um excelente local para mergulho, observação de aves e passeios de barco.",
            imageUrl: "https://www.viagensecaminhos.com/wp-content/uploads/2017/08/ilha-do-mel-parana.jpg"
          },
          {
            title: "Culinária",
            text: "A ilha oferece restaurantes e quiosques com frutos do mar frescos, peixes assados, camarões e pratos típicos da culinária praiana do Paraná, preparados de forma simples e saborosa.",
            imageUrl: "https://www.viagensecaminhos.com/wp-content/uploads/2017/08/ilha-do-mel-parana.jpg"
          },
          {
            title: "Qual é o melhor momento para ir?",
            text: "O período ideal é entre setembro e março, durante a estação quente, para aproveitar praias, trilhas e passeios ao ar livre. Nos meses de verão, a ilha recebe mais visitantes, mas o clima é perfeito para atividades na natureza.",
            imageUrl: "https://www.viagensecaminhos.com/wp-content/uploads/2017/08/ilha-do-mel-parana.jpg"
          }
        ]
      }
    },
    include: {
      sections: true
    }
  });

  const parqueDasAves = await prisma.touristSpot.create({
    data: {
      name: "Parque das Aves",
      region: "Sul",
      rating: 4.9,
      imageUrl: "https://rafaelguimaraes.me/wp-content/uploads/2024/02/Parque-das-Aves-Rafael-Guimaraes-5-1024x683.jpg",
      sections: {
        create: [
          {
            title: "Visão Geral",
            text: "O Parque das Aves é um dos principais pontos turísticos de Foz do Iguaçu, dedicado à preservação de aves brasileiras e estrangeiras. O visitante tem contato direto com a natureza e diversas espécies em viveiros amplos e bem cuidados.",
            imageUrl: "https://rafaelguimaraes.me/wp-content/uploads/2024/02/Parque-das-Aves-Rafael-Guimaraes-5-1024x683.jpg"
          },
          {
            title: "História",
            text: "Inaugurado em 1994, o parque nasceu do projeto de proteção de aves ameaçadas de extinção. Desde então, tornou-se referência em educação ambiental e conservação da fauna, recebendo turistas de todo o mundo.",
            imageUrl: "https://rafaelguimaraes.me/wp-content/uploads/2024/02/Parque-das-Aves-Rafael-Guimaraes-5-1024x683.jpg"
          },
          {
            title: "Que atrações você pode encontrar?",
            text: "O parque oferece trilhas ecológicas, viveiros interativos, exposições sobre aves e outros animais da fauna brasileira. É possível observar tucanos, araras, flamingos, papagaios e muitas outras espécies de perto.",
            imageUrl: "https://rafaelguimaraes.me/wp-content/uploads/2024/02/Parque-das-Aves-Rafael-Guimaraes-5-1024x683.jpg"
          },
          {
            title: "Culinária",
            text: "O parque possui quiosques e cafeterias que oferecem lanches rápidos, sucos e sobremesas. Embora o foco seja a experiência ecológica, é possível fazer uma pausa e apreciar a gastronomia leve do local.",
            imageUrl: "https://rafaelguimaraes.me/wp-content/uploads/2024/02/Parque-das-Aves-Rafael-Guimaraes-5-1024x683.jpg"
          },
          {
            title: "Qual é o melhor momento para ir?",
            text: "O parque pode ser visitado durante todo o ano. Dias de semana e períodos de manhã cedo garantem uma experiência mais tranquila e maior contato com as aves, evitando multidões.",
            imageUrl: "https://rafaelguimaraes.me/wp-content/uploads/2024/02/Parque-das-Aves-Rafael-Guimaraes-5-1024x683.jpg"
          }
        ]
      }
    },
    include: {
      sections: true
    }
  });

  const gramado = await prisma.touristSpot.create({
    data: {
      name: "Gramado",
      region: "Sul",
      rating: 4.8,
      imageUrl: "https://www.dicasdeviagem.com/wp-content/uploads/2019/06/pontos-turisticos-gramado-rs.jpg",
      sections: {
        create: [
          {
            title: "Visão Geral",
            text: "Gramado é uma das cidades mais charmosas do Rio Grande do Sul, famosa por seu clima europeu, arquitetura alpina e atrações turísticas durante todo o ano. É um destino perfeito para lazer, gastronomia e eventos culturais.",
            imageUrl: "https://www.dicasdeviagem.com/wp-content/uploads/2019/06/pontos-turisticos-gramado-rs.jpg"
          },
          {
            title: "História",
            text: "A cidade foi fundada por imigrantes alemães e italianos no século XIX, o que se reflete na arquitetura, na gastronomia e nas tradições locais. Gramado desenvolveu-se como um polo turístico de inverno e festas culturais.",
            imageUrl: "https://www.dicasdeviagem.com/wp-content/uploads/2019/06/pontos-turisticos-gramado-rs.jpg"
          },
          {
            title: "Que atrações você pode encontrar?",
            text: "Entre as atrações estão o Lago Negro, Mini Mundo, Rua Coberta, Snowland, museus e parques temáticos. A cidade também é famosa por eventos como o Natal Luz e o Festival de Cinema de Gramado.",
            imageUrl: "https://www.dicasdeviagem.com/wp-content/uploads/2019/06/pontos-turisticos-gramado-rs.jpg"
          },
          {
            title: "Culinária",
            text: "A gastronomia de Gramado valoriza chocolates artesanais, fondues, cafés coloniais, massas e vinhos regionais. Restaurantes e chocolaterias oferecem experiências típicas e sofisticadas.",
            imageUrl: "https://www.dicasdeviagem.com/wp-content/uploads/2019/06/pontos-turisticos-gramado-rs.jpg"
          },
          {
            title: "Qual é o melhor momento para ir?",
            text: "O melhor período para visitar é no inverno (junho a agosto), para aproveitar o clima frio, o fondue e o Natal Luz. A primavera e o verão também são ideais para explorar os parques e a natureza da região.",
            imageUrl: "https://www.dicasdeviagem.com/wp-content/uploads/2019/06/pontos-turisticos-gramado-rs.jpg"
          }
        ]
      }
    },
    include: {
      sections: true
    }
  });

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
