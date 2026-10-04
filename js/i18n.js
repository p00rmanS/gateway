/* Guest guide copy, one entry per language. The order here is the order of the language picker.

   ADDING A LANGUAGE
   1. Copy the whole "en" block below, paste it at the end, and change its key (e.g. "tl" for Tagalog,
      "sm" for Samoan, "to" for Tongan, "th" for Thai, "hi" for Hindi).
   2. Set "name" (how the language calls itself, e.g. "Tagalog") and "htmlLang" (e.g. "tl").
   3. Translate every text value. Keep {start}, {gates} and {m} exactly as they are — the app fills in times there.
   4. Add a flag image at assets/flags/<key>.svg (any 4:3 SVG). If it's missing, the name shows without a flag.
   5. Raise the ?v= number in index.html and VERSION in sw.js so phones pick up the change.
   Nothing else needs editing: the picker, offline cache and language auto-detect all read this list. */
self.I18N = {
  "en": {
    "name": "English",
    "htmlLang": "en",
    "greet": "Aloha! Welcome",
    "sub": "Welcome to Gateway Buffet",
    "qr": "Scan to open on your phone",
    "tabs": {
      "guide": "Welcome Guide",
      "acts": "Things to Do",
      "close": "Before You Go"
    },
    "guide": {
      "items": [
        {
          "id": "self",
          "title": "Self-Service Restaurant",
          "text": "This is a self-service restaurant. Please help yourself to as much food as you like, and enjoy your meal."
        },
        {
          "id": "buffet",
          "title": "Buffet Areas & Food",
          "text": "We offer a kids' menu, sirloin steak, assorted meats, chicken, ahi sashimi, poke (marinated raw fish), seafood, vegetables, and rice. Drinks are available at the drink stations on both sides of the building. Plates are located beneath the buffet line and in the salad and dessert area."
        },
        {
          "id": "plates",
          "title": "Plates & Utensils",
          "text": "Plates and utensils (spoons, forks, etc.) are in the salad and dessert area. If you need anything, please ask any member of our staff."
        },
        {
          "id": "after",
          "title": "After Your Meal",
          "text": "Please stack used plates neatly on one side of your table, and our staff will collect them. Feel free to take a clean plate whenever you would like more."
        },
        {
          "id": "allergy",
          "title": "Food Allergies",
          "text": "If you have food allergies, please {link}view our allergy guide{/link} for ingredient lists, allergen information, and options for your diet."
        },
        {
          "id": "restroom",
          "title": "Restrooms",
          "text": "Restrooms are on the opposite side of the building: women's on the left, men's on the right. If you need to step outside, please get a hand stamp before leaving so you can return."
        },
        {
          "id": "robot",
          "title": "Serving Robot",
          "text": "Please do not touch the serving robot or place plates on it. Our staff will collect plates as they pass by."
        },
        {
          "id": "coupon",
          "title": "Discount Coupons",
          "text": "Discount coupons are available for select shops in the Hukilau Marketplace. If you haven't received one yet, please ask your server. Don't miss out!"
        }
      ],
      "foot": "Enjoy your meal!"
    },
    "acts": {
      "head": "Before the show",
      "foot": "No rush, enjoy your dessert first!",
      "show": {
        "title": "Night Show",
        "text": "Attending the night show this evening? It begins at {start} PM, and gates open at {gates} PM. Your seats are reserved, so please arrive on time. If your seats are not reserved, an usher will be happy to help. The theater is a 5–7 minute walk from here."
      },
      "items": [
        {
          "title": "Hukilau Marketplace",
          "subtitle": "",
          "text": "Shop for gifts, snacks, and souvenirs before the shops close.",
          "chips": [
            "Until 7:00 PM"
          ]
        },
        {
          "title": "Lāʻie Tram Tour",
          "subtitle": "",
          "text": "Ride around the small town of Lāʻie and the BYU–Hawaii campus, with a 15-minute stop at the beautiful grounds of the Lāʻie Hawaiʻi Temple of The Church of Jesus Christ of Latter-day Saints.",
          "chips": [
            "Every 20 min",
            "3:00–6:30 PM",
            "35 min ride"
          ]
        },
        {
          "title": "Hawaiian Journey Theater",
          "subtitle": "Jeri's Fire Knife Show",
          "text": "The story of fire knife competition, told by Jeri, a longtime defending champion who began fire knife dancing at a young age.",
          "chips": [
            "Every 30 min",
            "1:30–6:30 PM",
            "Last show: 6:30 PM"
          ]
        },
        {
          "title": "Polynesian Football Hall of Fame",
          "subtitle": "",
          "text": "A gallery honoring Polynesian football legends, featuring plaques, photos, memorabilia, an interactive display, and a Wall of Honor. It is located directly across from Gateway Buffet, inside the PCC Welcome Center.",
          "chips": [
            "Until 7:00 PM"
          ]
        }
      ]
    },
    "close": {
      "thanks": {
        "title": "Mahalo, ʻOhana!",
        "text": "Thank you for joining us at Gateway Buffet tonight. It has been a pleasure serving you, so please take all the time you need."
      },
      "review": {
        "title": "Share your experience",
        "text": "When you have a moment, please scan the QR code and tap TripAdvisor. We'd love to hear about your meal, your server, and your whole day at PCC, including the village, tonight's buffet, and the night show. We'd be grateful for your honest review. If you enjoyed your evening with us, a 5-star review would mean a great deal to our team."
      },
      "survey": {
        "title": "A note for later",
        "text": "In about a week, the person who purchased your tickets will receive a short email survey from PCC about your overall visit. If you enjoyed your visit, please rate us a 10."
      },
      "server": "Your server tonight:",
      "end": "Mahalo nui loa, and enjoy the rest of your evening!",
      "qrNote": "Your server will show you the QR code."
    },
    "status": {
      "open": "Open now",
      "soon": "Closing soon",
      "ended": "Closed for today",
      "next": "Next:",
      "gatesIn": "Gates open in {m} min",
      "gatesOpen": "Gates open · show in {m} min",
      "gates": "Gates open",
      "starts": "Show starts",
      "scanHint": "Scan the QR code, then tap TripAdvisor"
    }
  },
  "es": {
    "name": "Español",
    "htmlLang": "es",
    "greet": "¡Aloha! Bienvenidos",
    "sub": "Bienvenidos a Gateway Buffet",
    "qr": "Escanee para abrir en su teléfono",
    "tabs": {
      "guide": "Guía",
      "acts": "Qué hacer",
      "close": "Antes de irse"
    },
    "guide": {
      "items": [
        {
          "id": "self",
          "title": "Restaurante de autoservicio",
          "text": "Este es un restaurante de autoservicio. Sírvanse todo lo que deseen y disfruten de su comida."
        },
        {
          "id": "buffet",
          "title": "Buffet y comida",
          "text": "Ofrecemos menú infantil, filete de res (sirloin), carnes variadas, pollo, sashimi de atún (ahi), poke (pescado crudo marinado), mariscos, verduras y arroz. Las bebidas se encuentran en las estaciones de bebidas, a ambos lados del edificio. Los platos están debajo de la barra del buffet y en el área de ensaladas y postres."
        },
        {
          "id": "plates",
          "title": "Platos y cubiertos",
          "text": "Los platos y cubiertos (cucharas, tenedores, etc.) se encuentran en el área de ensaladas y postres. Si necesitan algo, nuestro personal con gusto les ayudará."
        },
        {
          "id": "after",
          "title": "Después de comer",
          "text": "Por favor, apilen los platos usados a un lado de la mesa; el personal los recogerá. Pueden tomar un plato limpio cada vez que deseen servirse más."
        },
        {
          "id": "allergy",
          "title": "Alergias alimentarias",
          "text": "Si tienen alergias alimentarias, por favor {link}consulten nuestra guía de alérgenos{/link}, donde encontrarán la lista de ingredientes, información sobre alérgenos y opciones para su dieta."
        },
        {
          "id": "restroom",
          "title": "Baños",
          "text": "Los baños se encuentran al otro lado del edificio: el de mujeres a la izquierda y el de hombres a la derecha. Si necesitan salir, pidan un sello en la mano antes de hacerlo para poder volver a entrar."
        },
        {
          "id": "robot",
          "title": "Robot mesero",
          "text": "Por favor, no toquen el robot mesero ni coloquen platos sobre él. El personal recogerá los platos al pasar por las mesas."
        },
        {
          "id": "coupon",
          "title": "Cupones de descuento",
          "text": "¡Tenemos cupones de descuento para tiendas seleccionadas del Hukilau Marketplace! Si aún no han recibido uno, pídanlo a su mesero. No se los pierdan."
        }
      ],
      "foot": "¡Buen provecho!"
    },
    "acts": {
      "head": "Antes del espectáculo",
      "foot": "Sin prisa: ¡disfruten primero su postre!",
      "show": {
        "title": "Espectáculo nocturno",
        "text": "¿Asistirán al espectáculo nocturno esta noche? Comienza a las {start} p. m. y las puertas abren a las {gates} p. m. Sus asientos están reservados, así que les pedimos llegar a tiempo. Si sus asientos no están reservados, un acomodador con gusto les ayudará. El teatro está a 5–7 minutos a pie."
      },
      "items": [
        {
          "title": "Hukilau Marketplace",
          "subtitle": "",
          "text": "Compren regalos, bocadillos y recuerdos antes de que cierren las tiendas.",
          "chips": [
            "Hasta las 7:00 p. m."
          ]
        },
        {
          "title": "Tram Tour por Lāʻie",
          "subtitle": "",
          "text": "Recorran el pequeño pueblo de Lāʻie y el campus de BYU–Hawaii, con una parada de 15 minutos en los hermosos jardines del Templo de Lāʻie, Hawái, de La Iglesia de Jesucristo de los Santos de los Últimos Días.",
          "chips": [
            "Cada 20 min",
            "3:00–6:30 p. m.",
            "Duración: 35 min"
          ]
        },
        {
          "title": "Hawaiian Journey Theater",
          "subtitle": "Espectáculo de cuchillo de fuego de Jeri",
          "text": "La historia de las competencias de cuchillo de fuego, contada por Jeri, campeón que defendió su título durante muchos años y que comenzó a practicar desde muy joven.",
          "chips": [
            "Cada 30 min",
            "1:30–6:30 p. m.",
            "Última función: 6:30 p. m."
          ]
        },
        {
          "title": "Salón de la Fama del Fútbol Americano Polinesio",
          "subtitle": "",
          "text": "Una galería que honra a las leyendas polinesias del fútbol americano, con placas, fotos, recuerdos, una pantalla interactiva y un Muro de Honor. Está justo enfrente de Gateway Buffet, dentro del Welcome Center de PCC.",
          "chips": [
            "Hasta las 7:00 p. m."
          ]
        }
      ]
    },
    "close": {
      "thanks": {
        "title": "¡Mahalo, ʻOhana!",
        "text": "Gracias por acompañarnos esta noche en Gateway Buffet. Ha sido un placer atenderlos; por favor, tómense todo el tiempo que necesiten."
      },
      "review": {
        "title": "Compartan su experiencia",
        "text": "Cuando tengan un momento, por favor escaneen el código QR y toquen TripAdvisor. Nos encantaría conocer su opinión sobre la comida, su mesero y todo su día en PCC, incluidos la aldea, el buffet y el espectáculo nocturno de esta noche. Les agradeceríamos mucho su opinión sincera. Si disfrutaron de su velada con nosotros, una reseña de 5 estrellas significaría muchísimo para nuestro equipo."
      },
      "survey": {
        "title": "Una nota para después",
        "text": "En aproximadamente una semana, la persona que compró los boletos recibirá de PCC una breve encuesta por correo electrónico sobre su visita en general. Si disfrutaron de su visita, por favor califíquennos con un 10."
      },
      "server": "Su mesero esta noche:",
      "end": "¡Mahalo nui loa y disfruten el resto de su noche!",
      "qrNote": "Su mesero les mostrará el código QR."
    },
    "status": {
      "open": "Abierto ahora",
      "soon": "Cierra pronto",
      "ended": "Cerrado por hoy",
      "next": "Próximo:",
      "gatesIn": "Las puertas abren en {m} min",
      "gatesOpen": "Puertas abiertas · espectáculo en {m} min",
      "gates": "Apertura de puertas",
      "starts": "Inicio del espectáculo",
      "scanHint": "Escaneen el código QR y toquen TripAdvisor"
    }
  },
  "pt": {
    "name": "Português",
    "htmlLang": "pt-BR",
    "greet": "Aloha! Bem-vindos",
    "sub": "Bem-vindos ao Gateway Buffet",
    "qr": "Escaneiem para abrir no celular",
    "tabs": {
      "guide": "Informações",
      "acts": "O que fazer",
      "close": "Antes de ir"
    },
    "guide": {
      "items": [
        {
          "id": "self",
          "title": "Restaurante self-service",
          "text": "Este é um restaurante self-service. Sirvam-se à vontade e aproveitem a refeição."
        },
        {
          "id": "buffet",
          "title": "Buffet e pratos",
          "text": "Temos cardápio infantil, contrafilé, carnes variadas, frango, sashimi de atum (ahi), poke (peixe cru marinado), frutos do mar, legumes e arroz. As bebidas ficam nas estações de bebidas, dos dois lados do prédio. Os pratos ficam embaixo do balcão do buffet e na área de saladas e sobremesas."
        },
        {
          "id": "plates",
          "title": "Pratos e talheres",
          "text": "Pratos e talheres (colheres, garfos etc.) ficam na área de saladas e sobremesas. Se precisarem de algo, falem com a nossa equipe."
        },
        {
          "id": "after",
          "title": "Depois da refeição",
          "text": "Por favor, empilhem os pratos usados em um canto da mesa; nossa equipe vai recolhê-los. Fiquem à vontade para pegar um prato limpo e se servir novamente."
        },
        {
          "id": "allergy",
          "title": "Alergias alimentares",
          "text": "Se vocês têm alergia alimentar, por favor {link}consultem nosso guia de alergias{/link}, com a lista de ingredientes, informações sobre alérgenos e opções para a sua dieta."
        },
        {
          "id": "restroom",
          "title": "Banheiros",
          "text": "Os banheiros ficam do outro lado do prédio: feminino à esquerda, masculino à direita. Se precisarem sair, peçam um carimbo na mão antes, para poder entrar novamente."
        },
        {
          "id": "robot",
          "title": "Robô garçom",
          "text": "Por favor, não toquem no robô garçom nem coloquem pratos sobre ele. Nossa equipe recolhe os pratos ao passar pelas mesas."
        },
        {
          "id": "coupon",
          "title": "Cupons de desconto",
          "text": "Temos cupons de desconto para lojas selecionadas do Hukilau Marketplace! Se ainda não receberam o seu, peçam ao seu garçom. Não percam."
        }
      ],
      "foot": "Bom apetite!"
    },
    "acts": {
      "head": "Antes do show",
      "foot": "Sem pressa, aproveitem a sobremesa primeiro!",
      "show": {
        "title": "Show noturno",
        "text": "Vocês vão ao show noturno hoje? Ele começa às {start} da noite e os portões abrem às {gates}. Os lugares de vocês estão reservados, então, por favor, cheguem no horário. Se os lugares não estiverem reservados, peçam ajuda a um funcionário do teatro. O teatro fica a 5–7 minutos a pé."
      },
      "items": [
        {
          "title": "Hukilau Marketplace",
          "subtitle": "",
          "text": "Comprem presentes, lanches e lembrancinhas antes de as lojas fecharem.",
          "chips": [
            "Até 19h"
          ]
        },
        {
          "title": "Tram Tour de Lāʻie",
          "subtitle": "",
          "text": "Passeiem pela pequena cidade de Lāʻie e pelo campus da BYU–Hawaii, com uma parada de 15 minutos nos lindos jardins do Templo de Lāʻie, no Havaí, da Igreja de Jesus Cristo dos Santos dos Últimos Dias.",
          "chips": [
            "A cada 20 min",
            "15h–18h30",
            "Passeio de 35 min"
          ]
        },
        {
          "title": "Hawaiian Journey Theater",
          "subtitle": "Show de faca de fogo do Jeri",
          "text": "A história das competições de faca de fogo, contada por Jeri, campeão que defendeu o título por anos e começou ainda bem jovem.",
          "chips": [
            "A cada 30 min",
            "13h30–18h30",
            "Última sessão: 18h30"
          ]
        },
        {
          "title": "Polynesian Football Hall of Fame",
          "subtitle": "",
          "text": "Uma galeria que homenageia lendas polinésias do futebol americano, com placas, fotos, recordações, uma tela interativa e um Mural de Honra. Fica bem em frente ao Gateway Buffet, no Welcome Center do PCC.",
          "chips": [
            "Até 19h"
          ]
        }
      ]
    },
    "close": {
      "thanks": {
        "title": "Mahalo, ʻOhana!",
        "text": "Obrigado por jantarem conosco no Gateway Buffet esta noite. Foi um prazer atendê-los; fiquem à vontade, sem pressa."
      },
      "review": {
        "title": "Compartilhem sua experiência",
        "text": "Quando tiverem um momento, por favor, escaneiem o QR code e toquem em TripAdvisor. Adoraríamos saber sobre a refeição, o seu garçom e todo o seu dia no PCC, incluindo a vila, o buffet e o show noturno. Agradeceríamos muito a sua avaliação sincera. Se vocês aproveitaram a noite conosco, uma avaliação de 5 estrelas significaria muito para a nossa equipe."
      },
      "survey": {
        "title": "Um aviso para depois",
        "text": "Em cerca de uma semana, quem comprou os ingressos vai receber do PCC uma pesquisa curta por e-mail sobre a visita como um todo. Se vocês gostaram da visita, por favor, nos deem nota 10."
      },
      "server": "Seu garçom esta noite:",
      "end": "Mahalo nui loa e aproveitem o resto da noite!",
      "qrNote": "Seu garçom vai mostrar o QR code a vocês."
    },
    "status": {
      "open": "Aberto agora",
      "soon": "Fecha em breve",
      "ended": "Fechado por hoje",
      "next": "Próximo:",
      "gatesIn": "Portões abrem em {m} min",
      "gatesOpen": "Portões abertos · show em {m} min",
      "gates": "Abertura dos portões",
      "starts": "Início do show",
      "scanHint": "Escaneiem o QR code e toquem em TripAdvisor"
    }
  },
  "fr": {
    "name": "Français",
    "htmlLang": "fr",
    "greet": "Aloha ! Bienvenue",
    "sub": "Bienvenue au Gateway Buffet",
    "qr": "Scannez pour ouvrir sur votre téléphone",
    "tabs": {
      "guide": "Infos",
      "acts": "À faire",
      "close": "Avant de partir"
    },
    "guide": {
      "items": [
        {
          "id": "self",
          "title": "Restaurant en libre-service",
          "text": "Notre restaurant fonctionne en libre-service. Servez-vous autant que vous le souhaitez et profitez de votre repas."
        },
        {
          "id": "buffet",
          "title": "Buffet et plats",
          "text": "Vous trouverez un menu enfant, du faux-filet, des viandes variées, du poulet, du sashimi de thon (ahi), du poke (poisson cru mariné), des fruits de mer, des légumes et du riz. Les boissons sont disponibles aux fontaines situées des deux côtés du bâtiment. Les assiettes se trouvent sous le buffet et dans l'espace salades et desserts."
        },
        {
          "id": "plates",
          "title": "Assiettes et couverts",
          "text": "Les assiettes et les couverts (cuillères, fourchettes, etc.) se trouvent dans l'espace salades et desserts. Si vous avez besoin de quoi que ce soit, n'hésitez pas à vous adresser au personnel."
        },
        {
          "id": "after",
          "title": "Après le repas",
          "text": "Merci d'empiler vos assiettes usagées sur un côté de la table ; le personnel les débarrassera. N'hésitez pas à prendre une assiette propre pour vous resservir."
        },
        {
          "id": "allergy",
          "title": "Allergies alimentaires",
          "text": "En cas d'allergie alimentaire, {link}consultez notre guide des allergènes{/link} : liste des ingrédients, informations sur les allergènes et options adaptées à votre régime."
        },
        {
          "id": "restroom",
          "title": "Toilettes",
          "text": "Les toilettes se trouvent de l'autre côté du bâtiment : femmes à gauche, hommes à droite. Si vous devez sortir, demandez un tampon sur la main avant de partir afin de pouvoir revenir."
        },
        {
          "id": "robot",
          "title": "Robot serveur",
          "text": "Merci de ne pas toucher le robot serveur et de ne pas y poser d'assiettes. Le personnel débarrasse les assiettes en passant."
        },
        {
          "id": "coupon",
          "title": "Bons de réduction",
          "text": "Profitez de bons de réduction dans certaines boutiques du Hukilau Marketplace. Si vous n'en avez pas encore reçu, demandez-en un à votre serveur. À ne pas manquer !"
        }
      ],
      "foot": "Bon appétit !"
    },
    "acts": {
      "head": "Avant le spectacle",
      "foot": "Rien ne presse, savourez d'abord votre dessert !",
      "show": {
        "title": "Spectacle du soir",
        "text": "Vous assistez au spectacle du soir ? Il commence à {start} du soir et les portes ouvrent à {gates}. Vos places sont réservées : merci d'arriver à l'heure. Si vos places ne sont pas réservées, un placeur se fera un plaisir de vous aider. Le théâtre se trouve à 5–7 minutes à pied."
      },
      "items": [
        {
          "title": "Hukilau Marketplace",
          "subtitle": "",
          "text": "Achetez cadeaux, en-cas et souvenirs avant la fermeture des boutiques.",
          "chips": [
            "Jusqu'à 19 h"
          ]
        },
        {
          "title": "Tram Tour de Lāʻie",
          "subtitle": "",
          "text": "Faites le tour de la petite ville de Lāʻie et du campus de BYU–Hawaii, avec un arrêt de 15 minutes dans les magnifiques jardins du temple de Lāʻie (Hawaï) de l'Église de Jésus-Christ des Saints des Derniers Jours.",
          "chips": [
            "Toutes les 20 min",
            "15 h – 18 h 30",
            "Trajet de 35 min"
          ]
        },
        {
          "title": "Hawaiian Journey Theater",
          "subtitle": "Le spectacle de couteau de feu de Jeri",
          "text": "L'histoire des compétitions de couteau de feu, racontée par Jeri, champion qui a défendu son titre pendant des années et qui a commencé tout jeune.",
          "chips": [
            "Toutes les 30 min",
            "13 h 30 – 18 h 30",
            "Dernière séance : 18 h 30"
          ]
        },
        {
          "title": "Polynesian Football Hall of Fame",
          "subtitle": "",
          "text": "Une galerie qui rend hommage aux légendes polynésiennes du football américain : plaques, photos, souvenirs, écran interactif et mur d'honneur. Juste en face du Gateway Buffet, dans le Welcome Center du PCC.",
          "chips": [
            "Jusqu'à 19 h"
          ]
        }
      ]
    },
    "close": {
      "thanks": {
        "title": "Mahalo, ʻOhana !",
        "text": "Merci d'avoir dîné avec nous au Gateway Buffet ce soir. Ce fut un plaisir de vous servir ; prenez tout votre temps."
      },
      "review": {
        "title": "Partagez votre expérience",
        "text": "Quand vous aurez un moment, merci de scanner le code QR et de toucher TripAdvisor. Nous aimerions connaître votre avis sur votre repas, votre serveur et toute votre journée au PCC, y compris le village, le buffet et le spectacle du soir. Nous vous serions très reconnaissants de nous laisser un avis sincère. Si vous avez apprécié votre soirée parmi nous, un avis 5 étoiles compterait énormément pour notre équipe."
      },
      "survey": {
        "title": "Une note pour plus tard",
        "text": "Dans environ une semaine, la personne qui a acheté vos billets recevra du PCC un court questionnaire par e-mail sur l'ensemble de votre visite. Si vous avez apprécié votre visite, merci de nous donner la note de 10."
      },
      "server": "Votre serveur ce soir :",
      "end": "Mahalo nui loa, et excellente soirée !",
      "qrNote": "Votre serveur vous présentera le code QR."
    },
    "status": {
      "open": "Ouvert",
      "soon": "Ferme bientôt",
      "ended": "Fermé pour aujourd'hui",
      "next": "Prochain :",
      "gatesIn": "Ouverture des portes dans {m} min",
      "gatesOpen": "Portes ouvertes · spectacle dans {m} min",
      "gates": "Ouverture des portes",
      "starts": "Début du spectacle",
      "scanHint": "Scannez le code QR, puis touchez TripAdvisor"
    }
  },
  "de": {
    "name": "Deutsch",
    "htmlLang": "de",
    "greet": "Aloha! Willkommen",
    "sub": "Willkommen im Gateway Buffet",
    "qr": "Zum Öffnen auf dem Handy scannen",
    "tabs": {
      "guide": "Hinweise",
      "acts": "Aktivitäten",
      "close": "Zum Abschied"
    },
    "guide": {
      "items": [
        {
          "id": "self",
          "title": "Selbstbedienungsrestaurant",
          "text": "Dies ist ein Selbstbedienungsrestaurant. Nehmen Sie sich so viel, wie Sie möchten, und genießen Sie Ihr Essen."
        },
        {
          "id": "buffet",
          "title": "Buffetbereiche & Speisen",
          "text": "Es gibt ein Kindermenü, Sirloin-Steak, verschiedene Fleischgerichte, Hähnchen, Ahi-Sashimi (Thunfisch), Poke (marinierter roher Fisch), Meeresfrüchte, Gemüse und Reis. Getränke finden Sie an den Getränkestationen auf beiden Seiten des Gebäudes. Teller stehen unter der Buffettheke sowie im Salat- und Dessertbereich bereit."
        },
        {
          "id": "plates",
          "title": "Teller & Besteck",
          "text": "Teller und Besteck (Löffel, Gabeln usw.) finden Sie im Salat- und Dessertbereich. Wenn Sie etwas brauchen, fragen Sie gerne unser Personal."
        },
        {
          "id": "after",
          "title": "Nach dem Essen",
          "text": "Bitte stapeln Sie benutzte Teller ordentlich an einer Seite des Tisches. Unser Personal räumt sie ab. Für eine weitere Runde nehmen Sie sich gerne einen sauberen Teller."
        },
        {
          "id": "allergy",
          "title": "Lebensmittelallergien",
          "text": "Bei Lebensmittelallergien finden Sie in unserem {link}Allergen-Leitfaden{/link} Zutatenlisten, Allergeninformationen und passende Optionen für Ihre Ernährung."
        },
        {
          "id": "restroom",
          "title": "Toiletten",
          "text": "Die Toiletten befinden sich auf der gegenüberliegenden Seite des Gebäudes: Damen links, Herren rechts. Wenn Sie kurz hinausgehen möchten, lassen Sie sich bitte vorher einen Handstempel geben, damit Sie wieder eingelassen werden können."
        },
        {
          "id": "robot",
          "title": "Servierroboter",
          "text": "Bitte berühren Sie den Servierroboter nicht und stellen Sie keine Teller darauf. Unser Personal sammelt die Teller beim Vorbeigehen ein."
        },
        {
          "id": "coupon",
          "title": "Rabattgutscheine",
          "text": "Für ausgewählte Geschäfte im Hukilau Marketplace erhalten Sie bei uns Rabattgutscheine. Falls Sie noch keinen erhalten haben, fragen Sie bitte Ihre Bedienung – nicht verpassen!"
        }
      ],
      "foot": "Guten Appetit!"
    },
    "acts": {
      "head": "Vor der Show",
      "foot": "Keine Eile, genießen Sie zuerst Ihr Dessert!",
      "show": {
        "title": "Abendshow",
        "text": "Besuchen Sie heute die Abendshow? Sie beginnt um {start} Uhr abends, Einlass ist ab {gates} Uhr. Ihre Plätze sind reserviert, bitte seien Sie daher pünktlich. Falls Ihre Plätze nicht reserviert sind, hilft Ihnen gerne ein Platzanweiser. Das Theater ist 5–7 Gehminuten entfernt."
      },
      "items": [
        {
          "title": "Hukilau Marketplace",
          "subtitle": "",
          "text": "Kaufen Sie Geschenke, Snacks und Souvenirs, bevor die Geschäfte schließen.",
          "chips": [
            "Bis 19:00 Uhr"
          ]
        },
        {
          "title": "Lāʻie Tram-Tour",
          "subtitle": "",
          "text": "Fahren Sie durch den kleinen Ort Lāʻie und über den Campus der BYU–Hawaii, mit einem 15-minütigen Halt auf dem wunderschönen Gelände des Lāʻie-Hawaiʻi-Tempels der Kirche Jesu Christi der Heiligen der Letzten Tage.",
          "chips": [
            "Alle 20 Min.",
            "15:00–18:30 Uhr",
            "35 Min. Fahrt"
          ]
        },
        {
          "title": "Hawaiian Journey Theater",
          "subtitle": "Jeris Feuermesser-Show",
          "text": "Die Geschichte der Feuermesser-Wettbewerbe, erzählt von Jeri, einem langjährigen Titelverteidiger, der schon in jungen Jahren mit dem Feuermesser begann.",
          "chips": [
            "Alle 30 Min.",
            "13:30–18:30 Uhr",
            "Letzte Show: 18:30 Uhr"
          ]
        },
        {
          "title": "Polynesian Football Hall of Fame",
          "subtitle": "",
          "text": "Eine Galerie zu Ehren polynesischer Football-Legenden mit Plaketten, Fotos, Erinnerungsstücken, einer interaktiven Station und einer Ehrenwand. Direkt gegenüber dem Gateway Buffet im PCC Welcome Center.",
          "chips": [
            "Bis 19:00 Uhr"
          ]
        }
      ]
    },
    "close": {
      "thanks": {
        "title": "Mahalo, ʻOhana!",
        "text": "Vielen Dank, dass Sie heute Abend im Gateway Buffet zu Gast waren. Es war uns eine Freude, Sie zu bedienen. Lassen Sie sich ruhig Zeit."
      },
      "review": {
        "title": "Teilen Sie Ihre Erfahrung",
        "text": "Wenn Sie einen Moment Zeit haben, scannen Sie bitte den QR-Code und tippen Sie auf TripAdvisor. Wir würden gerne erfahren, wie Ihnen das Essen, der Service und Ihr ganzer Tag im PCC gefallen haben – einschließlich des Dorfes, des Buffets und der Abendshow. Wir würden uns sehr über Ihre ehrliche Bewertung freuen. Wenn Ihnen der Abend bei uns gefallen hat, würde eine 5-Sterne-Bewertung unserem Team sehr viel bedeuten."
      },
      "survey": {
        "title": "Ein Hinweis für später",
        "text": "In etwa einer Woche erhält die Person, die Ihre Tickets gekauft hat, eine kurze E-Mail-Umfrage vom PCC zu Ihrem gesamten Besuch. Wenn Ihnen Ihr Besuch gefallen hat, bewerten Sie uns bitte mit einer 10."
      },
      "server": "Ihre Bedienung heute Abend:",
      "end": "Mahalo nui loa und noch einen schönen Abend!",
      "qrNote": "Ihre Bedienung zeigt Ihnen gerne den QR-Code."
    },
    "status": {
      "open": "Jetzt geöffnet",
      "soon": "Schließt bald",
      "ended": "Heute geschlossen",
      "next": "Nächste:",
      "gatesIn": "Einlass in {m} Min.",
      "gatesOpen": "Einlass läuft · Show in {m} Min.",
      "gates": "Einlass",
      "starts": "Showbeginn",
      "scanHint": "QR-Code scannen, dann auf TripAdvisor tippen"
    }
  },
  "nl": {
    "name": "Nederlands",
    "htmlLang": "nl",
    "greet": "Aloha! Welkom",
    "sub": "Welkom bij Gateway Buffet",
    "qr": "Scan om te openen op uw telefoon",
    "tabs": {
      "guide": "Info",
      "acts": "Te doen",
      "close": "Tot ziens"
    },
    "guide": {
      "items": [
        {
          "id": "self",
          "title": "Zelfbedieningsrestaurant",
          "text": "Dit is een zelfbedieningsrestaurant. Neem zoveel als u wilt en geniet van uw maaltijd."
        },
        {
          "id": "buffet",
          "title": "Buffet en gerechten",
          "text": "Er is een kindermenu, entrecote, diverse vleesgerechten, kip, ahi-sashimi (tonijn), poke (gemarineerde rauwe vis), zeevruchten, groenten en rijst. Drankjes vindt u bij de drankstations aan beide kanten van het gebouw. Borden staan onder het buffet en bij de salade- en dessertafdeling."
        },
        {
          "id": "plates",
          "title": "Borden en bestek",
          "text": "Borden en bestek (lepels, vorken, enz.) vindt u bij de salade- en dessertafdeling. Vraag het gerust aan ons personeel als u iets nodig heeft."
        },
        {
          "id": "after",
          "title": "Na de maaltijd",
          "text": "Wilt u gebruikte borden netjes aan één kant van de tafel stapelen? Ons personeel ruimt ze af. Neem gerust een schoon bord voor een volgende ronde."
        },
        {
          "id": "allergy",
          "title": "Voedselallergieën",
          "text": "Heeft u een voedselallergie? Bekijk dan onze {link}allergenengids{/link} met ingrediëntenlijsten, allergeneninformatie en opties die bij uw dieet passen."
        },
        {
          "id": "restroom",
          "title": "Toiletten",
          "text": "De toiletten bevinden zich aan de andere kant van het gebouw: dames links, heren rechts. Gaat u naar buiten, laat dan eerst een stempel zetten zodat u weer naar binnen kunt."
        },
        {
          "id": "robot",
          "title": "Bedieningsrobot",
          "text": "Raak de bedieningsrobot alstublieft niet aan en zet er geen borden op. Ons personeel haalt de borden op wanneer het langskomt."
        },
        {
          "id": "coupon",
          "title": "Kortingsbonnen",
          "text": "Er zijn kortingsbonnen voor geselecteerde winkels in de Hukilau Marketplace. Heeft u er nog geen gekregen? Vraag er dan gerust een aan uw ober. Mis ze niet!"
        }
      ],
      "foot": "Eet smakelijk!"
    },
    "acts": {
      "head": "Voor de show",
      "foot": "Geen haast, geniet eerst van uw dessert!",
      "show": {
        "title": "Avondshow",
        "text": "Gaat u vanavond naar de avondshow? Die begint om {start} uur 's avonds en de deuren gaan open om {gates} uur. Uw plaatsen zijn gereserveerd, dus kom alstublieft op tijd. Zijn uw plaatsen niet gereserveerd, vraag dan een plaatsaanwijzer om hulp. Het theater ligt op 5–7 minuten lopen."
      },
      "items": [
        {
          "title": "Hukilau Marketplace",
          "subtitle": "",
          "text": "Shop cadeaus, snacks en souvenirs voordat de winkels sluiten.",
          "chips": [
            "Tot 19.00 uur"
          ]
        },
        {
          "title": "Lāʻie Tram Tour",
          "subtitle": "",
          "text": "Rijd door het stadje Lāʻie en over de campus van BYU–Hawaii, met een stop van 15 minuten bij het prachtige terrein van de Lāʻie Hawaiʻi-tempel van De Kerk van Jezus Christus van de Heiligen der Laatste Dagen.",
          "chips": [
            "Elke 20 min",
            "15.00–18.30 uur",
            "Rit van 35 min"
          ]
        },
        {
          "title": "Hawaiian Journey Theater",
          "subtitle": "Jeri's vuurmesshow",
          "text": "Het verhaal van vuurmeswedstrijden, verteld door Jeri, een jarenlange titelverdediger die al op jonge leeftijd met het vuurmes begon.",
          "chips": [
            "Elke 30 min",
            "13.30–18.30 uur",
            "Laatste show: 18.30 uur"
          ]
        },
        {
          "title": "Polynesian Football Hall of Fame",
          "subtitle": "",
          "text": "Een galerie ter ere van Polynesische footballlegendes, met plaquettes, foto's, aandenkens, een interactief scherm en een erewand. Recht tegenover Gateway Buffet, in het Welcome Center van het PCC.",
          "chips": [
            "Tot 19.00 uur"
          ]
        }
      ]
    },
    "close": {
      "thanks": {
        "title": "Mahalo, ʻOhana!",
        "text": "Hartelijk dank dat u vanavond bij Gateway Buffet heeft gegeten. Het was ons een genoegen u te bedienen. Neemt u gerust de tijd."
      },
      "review": {
        "title": "Deel uw ervaring",
        "text": "Als u even tijd heeft, scan dan alstublieft de QR-code en tik op TripAdvisor. We horen graag over uw maaltijd, uw ober en uw hele dag in het PCC, inclusief het dorp, het buffet en de avondshow. Wij zouden uw eerlijke beoordeling zeer op prijs stellen. Heeft u genoten van uw avond bij ons, dan zou een beoordeling van 5 sterren ons team heel veel betekenen."
      },
      "survey": {
        "title": "Een bericht voor later",
        "text": "Over ongeveer een week ontvangt degene die uw tickets heeft gekocht een korte e-mailenquête van het PCC over uw hele bezoek. Heeft u genoten van uw bezoek, geef ons dan alstublieft een 10."
      },
      "server": "Uw ober vanavond:",
      "end": "Mahalo nui loa, en nog een fijne avond!",
      "qrNote": "Uw ober laat u graag de QR-code zien."
    },
    "status": {
      "open": "Nu open",
      "soon": "Sluit binnenkort",
      "ended": "Gesloten voor vandaag",
      "next": "Volgende:",
      "gatesIn": "Deuren open over {m} min",
      "gatesOpen": "Deuren open · show over {m} min",
      "gates": "Deuren open",
      "starts": "Show begint",
      "scanHint": "Scan de QR-code en tik op TripAdvisor"
    }
  },
  "vi": {
    "name": "Tiếng Việt",
    "htmlLang": "vi",
    "greet": "Aloha! Xin chào quý khách",
    "sub": "Chào mừng đến Gateway Buffet",
    "qr": "Quét để mở trên điện thoại",
    "tabs": {
      "guide": "Hướng dẫn",
      "acts": "Hoạt động",
      "close": "Trước khi về"
    },
    "guide": {
      "items": [
        {
          "id": "self",
          "title": "Nhà hàng tự phục vụ",
          "text": "Đây là nhà hàng tự phục vụ. Quý khách có thể tự lấy món ăn tùy thích và thưởng thức bữa ăn."
        },
        {
          "id": "buffet",
          "title": "Khu buffet và món ăn",
          "text": "Nhà hàng có thực đơn trẻ em, bít tết thăn bò, các món thịt, gà, sashimi cá ngừ, poke (cá sống trộn gia vị), hải sản, rau và cơm. Đồ uống có tại quầy nước ở hai bên tòa nhà. Đĩa được đặt bên dưới quầy buffet và tại khu salad & tráng miệng."
        },
        {
          "id": "plates",
          "title": "Đĩa và dụng cụ ăn",
          "text": "Đĩa và dụng cụ ăn (thìa, nĩa, v.v.) có ở khu salad & tráng miệng. Nếu cần hỗ trợ, quý khách vui lòng liên hệ nhân viên."
        },
        {
          "id": "after",
          "title": "Sau khi ăn",
          "text": "Xin vui lòng xếp gọn đĩa đã dùng ở một bên bàn, nhân viên sẽ đến dọn. Quý khách có thể lấy đĩa sạch để ăn thêm."
        },
        {
          "id": "allergy",
          "title": "Dị ứng thực phẩm",
          "text": "Nếu quý khách bị dị ứng thực phẩm, vui lòng {link}xem hướng dẫn về dị ứng{/link} để biết thành phần, thông tin về chất gây dị ứng và các lựa chọn phù hợp với chế độ ăn."
        },
        {
          "id": "restroom",
          "title": "Nhà vệ sinh",
          "text": "Nhà vệ sinh ở phía bên kia tòa nhà: nữ bên trái, nam bên phải. Nếu quý khách cần ra ngoài, vui lòng đóng dấu tay trước khi ra để có thể vào lại."
        },
        {
          "id": "robot",
          "title": "Robot phục vụ",
          "text": "Quý khách vui lòng không chạm vào robot phục vụ và không đặt đĩa lên robot. Nhân viên sẽ dọn đĩa khi đi ngang qua."
        },
        {
          "id": "coupon",
          "title": "Phiếu giảm giá",
          "text": "Chúng tôi có phiếu giảm giá cho một số cửa hàng tại Hukilau Marketplace. Nếu quý khách chưa nhận được, vui lòng hỏi người phục vụ. Quý khách đừng bỏ lỡ!"
        }
      ],
      "foot": "Chúc quý khách ngon miệng!"
    },
    "acts": {
      "head": "Trước giờ biểu diễn",
      "foot": "Quý khách cứ thong thả thưởng thức món tráng miệng trước nhé!",
      "show": {
        "title": "Chương trình biểu diễn tối",
        "text": "Quý khách sẽ xem chương trình biểu diễn tối nay chứ? Chương trình bắt đầu lúc {start} tối, cổng mở lúc {gates} tối. Chỗ ngồi đã được giữ sẵn, vì vậy xin vui lòng đến đúng giờ. Nếu chỗ ngồi chưa được giữ, xin hãy nhờ nhân viên hướng dẫn hỗ trợ. Nhà hát cách đây 5–7 phút đi bộ."
      },
      "items": [
        {
          "title": "Hukilau Marketplace",
          "subtitle": "",
          "text": "Mua quà, đồ ăn vặt và đồ lưu niệm trước khi cửa hàng đóng cửa.",
          "chips": [
            "Đến 7:00 tối"
          ]
        },
        {
          "title": "Tour xe điện Lāʻie",
          "subtitle": "",
          "text": "Dạo quanh thị trấn nhỏ Lāʻie và khuôn viên trường BYU–Hawaii, dừng 15 phút tại khuôn viên Đền Thờ Lāʻie xinh đẹp của Giáo Hội Các Thánh Hữu Ngày Sau của Chúa Giê Su Ky Tô.",
          "chips": [
            "Mỗi 20 phút",
            "3:00–6:30 chiều",
            "Thời lượng: 35 phút"
          ]
        },
        {
          "title": "Hawaiian Journey Theater",
          "subtitle": "Màn trình diễn dao lửa của Jeri",
          "text": "Câu chuyện về các cuộc thi múa dao lửa, do Jeri kể lại. Anh là nhà vô địch nhiều năm liền và bắt đầu múa dao lửa từ khi còn nhỏ.",
          "chips": [
            "Mỗi 30 phút",
            "1:30–6:30 chiều",
            "Suất cuối: 6:30 tối"
          ]
        },
        {
          "title": "Đại sảnh Danh vọng Bóng bầu dục Polynesia",
          "subtitle": "",
          "text": "Phòng trưng bày tôn vinh các huyền thoại bóng bầu dục Polynesia với bảng vinh danh, ảnh, kỷ vật, màn hình tương tác và Bức tường Danh dự. Nằm ngay đối diện Gateway Buffet, trong Welcome Center của PCC.",
          "chips": [
            "Đến 7:00 tối"
          ]
        }
      ]
    },
    "close": {
      "thanks": {
        "title": "Mahalo, ʻOhana!",
        "text": "Cảm ơn quý khách đã dùng bữa tối tại Gateway Buffet. Thật vinh hạnh khi được phục vụ quý khách. Xin cứ thong thả, không cần vội."
      },
      "review": {
        "title": "Chia sẻ trải nghiệm",
        "text": "Khi có thời gian, quý khách vui lòng quét mã QR và chọn TripAdvisor. Chúng tôi rất mong được nghe về bữa ăn, người phục vụ và cả ngày của quý khách tại PCC, bao gồm ngôi làng, bữa buffet và buổi biểu diễn tối nay. Chúng tôi rất trân trọng những đánh giá chân thành của quý khách. Nếu quý khách đã có một buổi tối vui vẻ cùng chúng tôi, một đánh giá 5 sao sẽ là niềm khích lệ rất lớn đối với đội ngũ chúng tôi."
      },
      "survey": {
        "title": "Lưu ý sau chuyến đi",
        "text": "Khoảng một tuần nữa, người đã mua vé sẽ nhận được một email khảo sát ngắn từ PCC về chuyến tham quan. Nếu quý khách hài lòng với chuyến tham quan, xin hãy chấm cho chúng tôi 10 điểm."
      },
      "server": "Người phục vụ tối nay:",
      "end": "Mahalo nui loa! Chúc quý khách buổi tối thật vui vẻ!",
      "qrNote": "Người phục vụ sẽ đưa mã QR cho quý khách."
    },
    "status": {
      "open": "Đang mở",
      "soon": "Sắp đóng",
      "ended": "Hôm nay đã kết thúc",
      "next": "Tiếp theo:",
      "gatesIn": "Cổng mở sau {m} phút",
      "gatesOpen": "Cổng đã mở · biểu diễn sau {m} phút",
      "gates": "Mở cổng",
      "starts": "Giờ biểu diễn",
      "scanHint": "Quét mã QR rồi chọn TripAdvisor"
    }
  },
  "zhs": {
    "name": "简体中文",
    "htmlLang": "zh-Hans",
    "greet": "Aloha！欢迎光临",
    "sub": "欢迎光临 Gateway Buffet",
    "qr": "扫码在手机上打开",
    "tabs": {
      "guide": "用餐须知",
      "acts": "表演前活动",
      "close": "离开之前"
    },
    "guide": {
      "items": [
        {
          "id": "self",
          "title": "自助餐厅",
          "text": "这里是自助餐厅。请随意取用您喜欢的食物，尽情享用。"
        },
        {
          "id": "buffet",
          "title": "自助区与菜品",
          "text": "提供儿童餐、西冷牛排、各式肉类、鸡肉、金枪鱼生鱼片、夏威夷拌生鱼（poke）、海鲜、蔬菜和米饭。饮料位于建筑两侧的饮料区。餐盘放在自助餐台下方以及沙拉和甜点区。"
        },
        {
          "id": "plates",
          "title": "餐盘与餐具",
          "text": "餐盘和餐具（勺子、叉子等）在沙拉和甜点区。如有需要，请告诉工作人员。"
        },
        {
          "id": "after",
          "title": "用餐后",
          "text": "请将用过的餐盘整齐叠放在桌子一侧，工作人员会来收走。再次取餐时请使用干净的餐盘。"
        },
        {
          "id": "allergy",
          "title": "食物过敏",
          "text": "如果您有食物过敏，请{link}查看过敏信息指南{/link}，了解配料表、过敏原信息以及适合您饮食需求的选择。"
        },
        {
          "id": "restroom",
          "title": "洗手间",
          "text": "洗手间位于建筑的另一侧：女洗手间在左边，男洗手间在右边。如需外出，请在离开前于手上盖章，以便重新入场。"
        },
        {
          "id": "robot",
          "title": "送餐机器人",
          "text": "请勿触碰送餐机器人或在上面放置餐盘。工作人员经过时会收走餐盘。"
        },
        {
          "id": "coupon",
          "title": "优惠券",
          "text": "我们还提供 Hukilau Marketplace 部分商店可用的优惠券。如果您还没有收到，请向您的服务员索取，千万不要错过！"
        }
      ],
      "foot": "祝您用餐愉快！"
    },
    "acts": {
      "head": "表演开始前可以做的事",
      "foot": "不用着急，先享用甜点吧！",
      "show": {
        "title": "夜间表演",
        "text": "今晚要去观看夜间表演吗？表演于晚上{start}开始，晚上{gates}开放入场。您的座位已预留，请准时到场。如果您的座位没有预留，请向引座员寻求帮助。步行到剧场约5–7分钟。"
      },
      "items": [
        {
          "title": "Hukilau 市集",
          "subtitle": "",
          "text": "在商店关门前选购礼物、零食和纪念品。",
          "chips": [
            "营业至晚上7:00"
          ]
        },
        {
          "title": "Lāʻie 游览电车",
          "subtitle": "",
          "text": "乘车游览 Lāʻie 小镇和杨百翰大学夏威夷分校校园，并在美丽的耶稣基督后期圣徒教会 Lāʻie 圣殿园区停留15分钟。",
          "chips": [
            "每20分钟一班",
            "下午3:00–6:30",
            "全程35分钟"
          ]
        },
        {
          "title": "Hawaiian Journey 剧院",
          "subtitle": "Jeri 的火刀表演",
          "text": "讲述火刀比赛的历史，由多届卫冕冠军 Jeri 亲自呈现，他从小就开始练习火刀舞。",
          "chips": [
            "每30分钟一场",
            "下午1:30–6:30",
            "末场：晚上6:30"
          ]
        },
        {
          "title": "波利尼西亚美式橄榄球名人堂",
          "subtitle": "",
          "text": "展示波利尼西亚美式橄榄球传奇人物的成就，包括纪念牌匾、照片、纪念品、互动展示和荣誉墙。就在 Gateway Buffet 对面的 PCC 游客中心内。",
          "chips": [
            "开放至晚上7:00"
          ]
        }
      ]
    },
    "close": {
      "thanks": {
        "title": "Mahalo，ʻOhana！",
        "text": "感谢您今晚光临 Gateway Buffet。很荣幸为您服务，请慢慢享用，不必着急。"
      },
      "review": {
        "title": "分享您的体验",
        "text": "方便的时候，请扫描二维码并点击 TripAdvisor。我们很想听听您对餐点、服务员以及您在PCC一整天的感受，包括村落参观、今晚的自助餐和夜间表演。我们诚挚期待您真实的评价。如果您今晚度过了愉快的时光，一个五星好评对我们的团队将意义非凡。"
      },
      "survey": {
        "title": "温馨提示",
        "text": "大约一周后，购票人会收到PCC发送的一份简短的电子邮件问卷，询问您此次参观的整体体验。如果您喜欢这次参观，请给我们打10分。"
      },
      "server": "今晚为您服务的是：",
      "end": "Mahalo nui loa！祝您有个愉快的夜晚！",
      "qrNote": "您的服务员会为您出示二维码。"
    },
    "status": {
      "open": "开放中",
      "soon": "即将结束",
      "ended": "今日已结束",
      "next": "下次：",
      "gatesIn": "{m}分钟后开放入场",
      "gatesOpen": "已开放入场 · {m}分钟后开演",
      "gates": "开放入场",
      "starts": "表演开始",
      "scanHint": "扫描二维码，然后点击 TripAdvisor"
    }
  },
  "zht": {
    "name": "繁體中文",
    "htmlLang": "zh-Hant",
    "greet": "Aloha！歡迎光臨",
    "sub": "歡迎光臨 Gateway Buffet",
    "qr": "掃描在手機上開啟",
    "tabs": {
      "guide": "用餐須知",
      "acts": "表演前活動",
      "close": "離開之前"
    },
    "guide": {
      "items": [
        {
          "id": "self",
          "title": "自助餐廳",
          "text": "這裡是自助餐廳。請隨意取用您喜歡的食物，盡情享用。"
        },
        {
          "id": "buffet",
          "title": "自助區與菜色",
          "text": "提供兒童餐、沙朗牛排、各式肉類、雞肉、鮪魚生魚片、夏威夷拌生魚（poke）、海鮮、蔬菜和白飯。飲料位於建築兩側的飲料區。餐盤放在自助餐檯下方以及沙拉和甜點區。"
        },
        {
          "id": "plates",
          "title": "餐盤與餐具",
          "text": "餐盤和餐具（湯匙、叉子等）在沙拉和甜點區。如有需要，請告訴工作人員。"
        },
        {
          "id": "after",
          "title": "用餐後",
          "text": "請將用過的餐盤整齊疊放在桌子一側，工作人員會來收走。再次取餐時請使用乾淨的餐盤。"
        },
        {
          "id": "allergy",
          "title": "食物過敏",
          "text": "如果您有食物過敏，請{link}查看過敏資訊指南{/link}，了解成分表、過敏原資訊以及適合您飲食需求的選擇。"
        },
        {
          "id": "restroom",
          "title": "洗手間",
          "text": "洗手間位於建築的另一側：女洗手間在左邊，男洗手間在右邊。如需外出，請在離開前於手上蓋章，以便重新入場。"
        },
        {
          "id": "robot",
          "title": "送餐機器人",
          "text": "請勿觸碰送餐機器人或在上面放置餐盤。工作人員經過時會收走餐盤。"
        },
        {
          "id": "coupon",
          "title": "優惠券",
          "text": "我們還提供 Hukilau Marketplace 部分商店可用的優惠券。如果您還沒有收到，請向您的服務人員索取，千萬不要錯過！"
        }
      ],
      "foot": "祝您用餐愉快！"
    },
    "acts": {
      "head": "表演開始前可以做的事",
      "foot": "不用急，先享用甜點吧！",
      "show": {
        "title": "夜間表演",
        "text": "今晚要去觀賞夜間表演嗎？表演於晚上{start}開始，晚上{gates}開放入場。您的座位已預留，請準時到場。如果您的座位沒有預留，請向帶位人員尋求協助。步行到劇場約5–7分鐘。"
      },
      "items": [
        {
          "title": "Hukilau 市集",
          "subtitle": "",
          "text": "在商店打烊前選購禮物、零食和紀念品。",
          "chips": [
            "營業至晚上7:00"
          ]
        },
        {
          "title": "Lāʻie 遊覽電車",
          "subtitle": "",
          "text": "搭車遊覽 Lāʻie 小鎮和楊百翰大學夏威夷分校校園，並在美麗的耶穌基督後期聖徒教會 Lāʻie 聖殿園區停留15分鐘。",
          "chips": [
            "每20分鐘一班",
            "下午3:00–6:30",
            "全程35分鐘"
          ]
        },
        {
          "title": "Hawaiian Journey 劇院",
          "subtitle": "Jeri 的火刀表演",
          "text": "講述火刀比賽的歷史，由多屆衛冕冠軍 Jeri 親自呈現，他從小就開始練習火刀舞。",
          "chips": [
            "每30分鐘一場",
            "下午1:30–6:30",
            "末場：晚上6:30"
          ]
        },
        {
          "title": "玻里尼西亞美式足球名人堂",
          "subtitle": "",
          "text": "展示玻里尼西亞美式足球傳奇人物的成就，包括紀念牌匾、照片、紀念品、互動展示和榮譽牆。就在 Gateway Buffet 對面的 PCC 遊客中心內。",
          "chips": [
            "開放至晚上7:00"
          ]
        }
      ]
    },
    "close": {
      "thanks": {
        "title": "Mahalo，ʻOhana！",
        "text": "感謝您今晚光臨 Gateway Buffet。很榮幸為您服務，請慢慢享用，不必著急。"
      },
      "review": {
        "title": "分享您的體驗",
        "text": "方便的時候，請掃描QR碼並點擊 TripAdvisor。我們很想聽聽您對餐點、服務人員以及您在PCC一整天的感受，包括村落導覽、今晚的自助餐和夜間表演。我們誠摯期待您真實的評價。如果您今晚度過了愉快的時光，一個五星好評對我們的團隊將意義非凡。"
      },
      "survey": {
        "title": "貼心提醒",
        "text": "大約一週後，購票人會收到PCC寄出的一份簡短的電子郵件問卷，詢問您此次參觀的整體體驗。如果您喜歡這次參觀，請給我們打10分。"
      },
      "server": "今晚為您服務的是：",
      "end": "Mahalo nui loa！祝您有個愉快的夜晚！",
      "qrNote": "您的服務人員會為您出示QR碼。"
    },
    "status": {
      "open": "開放中",
      "soon": "即將結束",
      "ended": "今日已結束",
      "next": "下次：",
      "gatesIn": "{m}分鐘後開放入場",
      "gatesOpen": "已開放入場 · {m}分鐘後開演",
      "gates": "開放入場",
      "starts": "表演開始",
      "scanHint": "掃描QR碼，然後點擊 TripAdvisor"
    }
  },
  "ko": {
    "name": "한국어",
    "htmlLang": "ko",
    "greet": "알로하! 환영합니다",
    "sub": "Gateway Buffet에 오신 것을 환영합니다",
    "qr": "스캔하여 휴대폰에서 열기",
    "tabs": {
      "guide": "이용 안내",
      "acts": "즐길 거리",
      "close": "떠나시기 전에"
    },
    "guide": {
      "items": [
        {
          "id": "self",
          "title": "셀프 서비스 레스토랑",
          "text": "이곳은 셀프 서비스 레스토랑입니다. 원하시는 만큼 음식을 직접 가져다 드시고, 즐거운 식사 되세요."
        },
        {
          "id": "buffet",
          "title": "뷔페 구역 및 음식 종류",
          "text": "어린이 메뉴, 등심 스테이크, 다양한 고기 요리, 닭고기, 참치 사시미, 포케(양념한 생선회), 해산물, 채소, 밥이 준비되어 있습니다. 음료는 건물 양쪽에 있는 음료 코너에서 이용하실 수 있습니다. 접시는 뷔페 라인 아래쪽과 샐러드 및 디저트 구역에 있습니다."
        },
        {
          "id": "plates",
          "title": "접시와 식기류",
          "text": "접시와 식기류(숟가락, 포크 등)는 샐러드 및 디저트 구역에서 이용하실 수 있습니다. 필요하시면 직원에게 말씀해 주세요."
        },
        {
          "id": "after",
          "title": "식사 후",
          "text": "사용하신 접시는 테이블 한쪽에 가지런히 쌓아 주세요. 직원이 수거해 갑니다. 원하시면 깨끗한 접시를 다시 가져가실 수 있습니다."
        },
        {
          "id": "allergy",
          "title": "식품 알레르기",
          "text": "식품 알레르기가 있으신 경우, {link}알레르기 안내 페이지{/link}에서 재료 목록과 알레르기 정보, 고객님의 식단에 맞는 메뉴를 확인해 주세요."
        },
        {
          "id": "restroom",
          "title": "화장실",
          "text": "화장실은 건물 반대편에 있습니다. 여성 화장실은 왼쪽, 남성 화장실은 오른쪽입니다. 밖으로 나가실 경우, 다시 입장하실 수 있도록 나가시기 전에 손등에 스탬프를 받아 주세요."
        },
        {
          "id": "robot",
          "title": "서빙 로봇",
          "text": "서빙 로봇을 만지거나 로봇 위에 접시를 올리지 말아 주세요. 직원이 테이블을 지나가며 접시를 수거합니다."
        },
        {
          "id": "coupon",
          "title": "할인 쿠폰",
          "text": "후클라우 마켓플레이스 내 일부 매장에서 사용할 수 있는 할인 쿠폰도 준비되어 있습니다. 아직 받지 못하셨다면 담당 서버에게 요청해 주세요. 놓치지 마세요!"
        }
      ],
      "foot": "맛있는 식사 되세요!"
    },
    "acts": {
      "head": "쇼 시작 전 즐길 거리",
      "foot": "서두르지 마시고 디저트 먼저 즐기세요!",
      "show": {
        "title": "나이트 쇼",
        "text": "오늘 나이트 쇼를 보러 가시나요? 쇼는 저녁 {start}에 시작하며, 입장은 저녁 {gates}부터 가능합니다. 좌석이 지정되어 있으니 시간에 맞춰 와 주세요. 좌석이 지정되어 있지 않다면 안내원에게 도움을 요청해 주세요. 극장까지 도보 5~7분입니다."
      },
      "items": [
        {
          "title": "후클라우 마켓플레이스",
          "subtitle": "",
          "text": "상점이 문을 닫기 전에 선물, 간식, 기념품을 쇼핑해 보세요.",
          "chips": [
            "저녁 7시까지"
          ]
        },
        {
          "title": "라이에 트램 투어",
          "subtitle": "",
          "text": "라이에 마을과 BYU–하와이 캠퍼스를 둘러보고, 예수 그리스도 후기 성도 교회의 아름다운 라이에 성전 부지에서 15분간 머뭅니다.",
          "chips": [
            "20분 간격",
            "오후 3:00–6:30",
            "소요 시간 35분"
          ]
        },
        {
          "title": "하와이안 저니 극장",
          "subtitle": "제리의 파이어 나이프 쇼",
          "text": "어린 시절부터 파이어 나이프를 시작해 오랫동안 챔피언 자리를 지켜 온 제리가 파이어 나이프 대회의 역사를 들려드립니다.",
          "chips": [
            "30분 간격",
            "오후 1:30–6:30",
            "마지막 공연: 오후 6:30"
          ]
        },
        {
          "title": "폴리네시안 풋볼 명예의 전당",
          "subtitle": "",
          "text": "명판, 사진, 기념품, 인터랙티브 전시, 명예의 벽으로 폴리네시아 풋볼 전설들의 업적을 소개하는 갤러리입니다. Gateway Buffet 바로 맞은편 PCC 웰컴 센터에 있습니다.",
          "chips": [
            "저녁 7시까지"
          ]
        }
      ]
    },
    "close": {
      "thanks": {
        "title": "Mahalo, ʻOhana!",
        "text": "오늘 저녁 Gateway Buffet를 찾아주셔서 진심으로 감사드립니다. 여러분을 모실 수 있어 영광이었습니다. 서두르지 마시고 천천히 즐기세요."
      },
      "review": {
        "title": "경험을 들려주세요",
        "text": "편하실 때 QR 코드를 스캔하고 TripAdvisor를 눌러 주세요. 식사, 담당 서버, 그리고 빌리지, 오늘 저녁 뷔페와 나이트 쇼를 포함한 PCC에서의 하루에 대해 듣고 싶습니다. 솔직한 후기를 남겨 주시면 진심으로 감사하겠습니다. 오늘 저녁이 즐거우셨다면, 별 5개 후기는 저희 팀에게 큰 힘이 됩니다."
      },
      "survey": {
        "title": "나중에 받으실 안내",
        "text": "약 일주일 후, 티켓을 구매하신 분께 PCC에서 전반적인 방문 경험에 대한 짧은 이메일 설문을 보내드립니다. 방문이 즐거우셨다면 10점으로 평가해 주세요."
      },
      "server": "오늘 담당 서버:",
      "end": "Mahalo nui loa! 즐거운 저녁 보내세요!",
      "qrNote": "QR 코드는 담당 서버가 보여 드립니다."
    },
    "status": {
      "open": "운영 중",
      "soon": "곧 마감",
      "ended": "오늘 운영 종료",
      "next": "다음:",
      "gatesIn": "{m}분 후 입장 시작",
      "gatesOpen": "입장 중 · {m}분 후 공연",
      "gates": "입장 시작",
      "starts": "공연 시작",
      "scanHint": "QR 코드 스캔 후 TripAdvisor를 눌러 주세요"
    }
  },
  "ja": {
    "name": "日本語",
    "htmlLang": "ja",
    "greet": "アロハ！ようこそ",
    "sub": "Gateway Buffetへようこそ",
    "qr": "スマホで開くにはスキャン",
    "tabs": {
      "guide": "ご利用案内",
      "acts": "おすすめ",
      "close": "お帰りの前に"
    },
    "guide": {
      "items": [
        {
          "id": "self",
          "title": "セルフサービスのレストラン",
          "text": "当店はセルフサービスのレストランです。お好きなだけお料理をお取りいただき、お食事をお楽しみください。"
        },
        {
          "id": "buffet",
          "title": "ビュッフェエリアとお料理",
          "text": "キッズメニュー、サーロインステーキ、各種肉料理、チキン、アヒ（マグロ）の刺身、ポキ（ハワイ風の生魚の和え物）、シーフード、野菜、ご飯をご用意しています。お飲み物は建物の両側にあるドリンクコーナーにございます。お皿はビュッフェラインの下段とサラダ・デザートエリアにございます。"
        },
        {
          "id": "plates",
          "title": "お皿とカトラリー",
          "text": "お皿とカトラリー（スプーン、フォークなど）はサラダ・デザートエリアにございます。必要な場合はスタッフにお声がけください。"
        },
        {
          "id": "after",
          "title": "お食事の後",
          "text": "使用済みのお皿はテーブルの端にまとめて重ねてください。スタッフが回収いたします。おかわりの際は新しいお皿をお使いください。"
        },
        {
          "id": "allergy",
          "title": "食物アレルギー",
          "text": "食物アレルギーをお持ちの方は、{link}アレルギー情報ページ{/link}で原材料・アレルギー情報・お食事に合ったメニューをご確認ください。"
        },
        {
          "id": "restroom",
          "title": "お手洗い",
          "text": "お手洗いは建物の反対側にございます。女性用は左側、男性用は右側です。外に出られる場合は、再入場のため出る前にスタンプを押してもらってください。"
        },
        {
          "id": "robot",
          "title": "配膳ロボット",
          "text": "配膳ロボットに触れたり、お皿を載せたりしないでください。スタッフがテーブルを回ってお皿を回収いたします。"
        },
        {
          "id": "coupon",
          "title": "割引クーポン",
          "text": "フキラウ・マーケットプレイス内の一部店舗で使える割引クーポンもございます。まだお受け取りでない場合は、担当スタッフにお申し付けください。お見逃しなく！"
        }
      ],
      "foot": "どうぞお召し上がりください！"
    },
    "acts": {
      "head": "ショー前のおすすめ",
      "foot": "お急ぎにならず、まずはデザートをお楽しみください！",
      "show": {
        "title": "ナイトショー",
        "text": "今夜のナイトショーにご参加ですか？ショーは午後{start}開始、開場は午後{gates}です。お席は指定済みですので、時間どおりにお越しください。お席が指定されていない場合は、案内係にお声がけください。劇場までは徒歩5〜7分です。"
      },
      "items": [
        {
          "title": "フキラウ・マーケットプレイス",
          "subtitle": "",
          "text": "お店が閉まる前に、お土産やお菓子、記念品のお買い物をどうぞ。",
          "chips": [
            "午後7時まで"
          ]
        },
        {
          "title": "ライエ・トラムツアー",
          "subtitle": "",
          "text": "ライエの町とBYUハワイ校のキャンパスを巡り、末日聖徒イエス・キリスト教会の美しいライエ神殿の敷地に15分間立ち寄ります。",
          "chips": [
            "20分ごと",
            "午後3:00〜6:30",
            "所要時間35分"
          ]
        },
        {
          "title": "ハワイアン・ジャーニー・シアター",
          "subtitle": "ジェリのファイヤーナイフショー",
          "text": "幼い頃からファイヤーナイフを始め、長年チャンピオンの座を守ってきたジェリが、ファイヤーナイフ競技の歴史を紹介します。",
          "chips": [
            "30分ごと",
            "午後1:30〜6:30",
            "最終回：午後6:30"
          ]
        },
        {
          "title": "ポリネシアン・フットボール殿堂",
          "subtitle": "",
          "text": "記念プレート、写真、記念品、インタラクティブ展示、名誉の壁で、ポリネシアのフットボール界の伝説たちの功績を紹介するギャラリーです。Gateway Buffetのすぐ向かい、PCCのウェルカムセンター内にあります。",
          "chips": [
            "午後7時まで"
          ]
        }
      ]
    },
    "close": {
      "thanks": {
        "title": "Mahalo、ʻOhana！",
        "text": "今夜はGateway Buffetにお越しいただき、誠にありがとうございます。皆さまのお食事をお手伝いできて光栄です。どうぞごゆっくりお過ごしください。"
      },
      "review": {
        "title": "ご感想をお聞かせください",
        "text": "お時間のある時に、QRコードを読み取ってTripAdvisorをタップしてください。お料理や担当スタッフ、そしてビレッジ、今夜のビュッフェやナイトショーを含めたPCCでの一日について、ぜひお聞かせください。率直なご感想をお寄せいただけましたら幸いです。今宵のひとときをお楽しみいただけましたら、星5つのレビューは私どもスタッフにとって大きな励みとなります。"
      },
      "survey": {
        "title": "後日のご案内",
        "text": "約1週間後、チケットをご購入された方にPCCから今回のご訪問全体についての簡単なアンケートメールが届きます。ご訪問を楽しんでいただけましたら、ぜひ10点をおつけください。"
      },
      "server": "本日の担当：",
      "end": "Mahalo nui loa！素敵な夜をお過ごしください！",
      "qrNote": "QRコードは担当スタッフがご提示いたします。"
    },
    "status": {
      "open": "営業中",
      "soon": "まもなく終了",
      "ended": "本日終了",
      "next": "次回：",
      "gatesIn": "開場まで{m}分",
      "gatesOpen": "開場中・開演まで{m}分",
      "gates": "開場",
      "starts": "開演",
      "scanHint": "QRコードを読み取り、TripAdvisorをタップ"
    }
  },
  "da": {
    "name": "Dansk",
    "htmlLang": "da",
    "greet": "Aloha! Velkommen",
    "sub": "Velkommen til Gateway Buffet",
    "qr": "Scan for at åbne guiden på jeres telefon",
    "tabs": {
      "guide": "Info",
      "acts": "Oplevelser",
      "close": "Inden I går"
    },
    "guide": {
      "items": [
        {
          "id": "self",
          "title": "Selvbetjeningsrestaurant",
          "text": "Dette er en selvbetjeningsrestaurant. Tag gerne så meget mad, I har lyst til, og nyd måltidet."
        },
        {
          "id": "buffet",
          "title": "Buffet og retter",
          "text": "Vi tilbyder børnemenu, sirloin steak, forskellige kødretter, kylling, ahi-sashimi (tun), poke (marineret rå fisk), skaldyr, grøntsager og ris. Drikkevarer finder I ved drikkestationerne i begge sider af bygningen. Tallerkener står under buffeten samt i salat- og dessertområdet."
        },
        {
          "id": "plates",
          "title": "Tallerkener og bestik",
          "text": "Tallerkener og bestik (skeer, gafler osv.) finder I i salat- og dessertområdet. Spørg endelig vores personale, hvis I mangler noget."
        },
        {
          "id": "after",
          "title": "Efter måltidet",
          "text": "Stil venligst brugte tallerkener pænt stablet i den ene side af bordet, så tager vores personale dem. Tag gerne en ren tallerken, når I vil have mere."
        },
        {
          "id": "allergy",
          "title": "Fødevareallergi",
          "text": "Har I en fødevareallergi, så {link}se vores allergiguide{/link} med ingredienslister, allergenoplysninger og muligheder, der passer til jeres kost."
        },
        {
          "id": "restroom",
          "title": "Toiletter",
          "text": "Toiletterne ligger i den modsatte side af bygningen: dametoilettet til venstre og herretoilettet til højre. Hvis I skal udenfor, så få venligst et stempel på hånden, inden I går, så I kan komme ind igen."
        },
        {
          "id": "robot",
          "title": "Serveringsrobot",
          "text": "Rør venligst ikke ved serveringsrobotten, og stil ikke tallerkener på den. Vores personale tager tallerkenerne, når de går forbi."
        },
        {
          "id": "coupon",
          "title": "Rabatkuponer",
          "text": "Der er rabatkuponer til udvalgte butikker i Hukilau Marketplace. Hvis I endnu ikke har fået en, så spørg venligst jeres tjener. Gå ikke glip af dem!"
        }
      ],
      "foot": "God appetit!"
    },
    "acts": {
      "head": "Før showet",
      "foot": "Ingen hast – nyd først jeres dessert!",
      "show": {
        "title": "Aftenshow",
        "text": "Skal I se aftenshowet i aften? Det begynder kl. {start} om aftenen, og dørene åbner kl. {gates}. Jeres pladser er reserveret, så kom venligst til tiden. Hvis jeres pladser ikke er reserveret, hjælper en af vores pladsanvisere jer gerne. Teatret ligger 5–7 minutters gang herfra."
      },
      "items": [
        {
          "title": "Hukilau Marketplace",
          "subtitle": "",
          "text": "Køb gaver, snacks og souvenirs, inden butikkerne lukker.",
          "chips": [
            "Til kl. 19.00"
          ]
        },
        {
          "title": "Lāʻie Tram Tour",
          "subtitle": "",
          "text": "Kør en tur rundt i den lille by Lāʻie og på BYU–Hawaii-campusset med et stop på 15 minutter ved de smukke haver omkring Lāʻie Hawaiʻi-templet, som tilhører Jesu Kristi Kirke af Sidste Dages Hellige.",
          "chips": [
            "Hvert 20. min.",
            "15.00–18.30",
            "Turen varer 35 min."
          ]
        },
        {
          "title": "Hawaiian Journey Theater",
          "subtitle": "Jeris ildknivshow",
          "text": "Historien om konkurrencer med ildkniv, fortalt af Jeri – en mangeårig forsvarende mester, der begyndte med ildkniven allerede som ung.",
          "chips": [
            "Hver 30. min.",
            "13.30–18.30",
            "Sidste show: 18.30"
          ]
        },
        {
          "title": "Polynesian Football Hall of Fame",
          "subtitle": "",
          "text": "Et galleri til ære for polynesiske legender inden for amerikansk fodbold med mindeplader, fotos, erindringsgenstande, en interaktiv skærm og en æresvæg. Det ligger lige over for Gateway Buffet i PCC's Welcome Center.",
          "chips": [
            "Til kl. 19.00"
          ]
        }
      ]
    },
    "close": {
      "thanks": {
        "title": "Mahalo, ʻOhana!",
        "text": "Tak, fordi I spiste med os på Gateway Buffet i aften. Det har været en fornøjelse at betjene jer, så tag jer endelig god tid."
      },
      "review": {
        "title": "Del jeres oplevelse",
        "text": "Når I har et øjeblik, så scan venligst QR-koden og tryk på TripAdvisor. Vi vil meget gerne høre om jeres måltid, jeres tjener og hele jeres dag på PCC, herunder landsbyen, aftenens buffet og aftenshowet. Vi vil sætte stor pris på en ærlig anmeldelse. Hvis I har nydt aftenen hos os, vil en anmeldelse med 5 stjerner betyde meget for vores team."
      },
      "survey": {
        "title": "En besked til senere",
        "text": "Om cirka en uge modtager den person, der købte jeres billetter, en kort spørgeundersøgelse på e-mail fra PCC om jeres samlede besøg. Hvis I nød besøget, så giv os venligst en 10'er."
      },
      "server": "Jeres tjener i aften:",
      "end": "Mahalo nui loa, og hav en dejlig aften!",
      "qrNote": "Jeres tjener viser jer gerne QR-koden."
    },
    "status": {
      "open": "Åbent nu",
      "soon": "Lukker snart",
      "ended": "Lukket for i dag",
      "next": "Næste:",
      "gatesIn": "Dørene åbner om {m} min.",
      "gatesOpen": "Dørene er åbne · show om {m} min.",
      "gates": "Dørene åbner",
      "starts": "Showet begynder",
      "scanHint": "Scan QR-koden, og tryk derefter på TripAdvisor"
    }
  },
  "sr": {
    "name": "Српски",
    "htmlLang": "sr-Cyrl",
    "greet": "Алоха! Добро дошли",
    "sub": "Добро дошли у Gateway Buffet",
    "qr": "Скенирајте да бисте отворили водич на телефону",
    "tabs": {
      "guide": "Упутство",
      "acts": "Активности",
      "close": "Пре одласка"
    },
    "guide": {
      "items": [
        {
          "id": "self",
          "title": "Ресторан са самопослуживањем",
          "text": "Ово је ресторан са самопослуживањем. Послужите се колико год желите и уживајте у оброку."
        },
        {
          "id": "buffet",
          "title": "Шведски сто и јела",
          "text": "Нудимо дечји мени, сирлоин стек, разне врсте меса, пилетину, ахи сашими (туна), поке (маринирана сирова риба), морске плодове, поврће и пиринач. Пића су доступна на станицама за пиће са обе стране зграде. Тањири се налазе испод шведског стола и у делу са салатама и десертима."
        },
        {
          "id": "plates",
          "title": "Тањири и прибор за јело",
          "text": "Тањири и прибор за јело (кашике, виљушке итд.) налазе се у делу са салатама и десертима. Ако вам било шта затреба, слободно се обратите нашем особљу."
        },
        {
          "id": "after",
          "title": "После оброка",
          "text": "Молимо вас да искоришћене тањире уредно сложите на једну страну стола, а наше особље ће их покупити. Слободно узмите чист тањир кад год пожелите још."
        },
        {
          "id": "allergy",
          "title": "Алергије на храну",
          "text": "Ако имате алергију на храну, {link}погледајте наш водич о алергенима{/link} са списком састојака, информацијама о алергенима и опцијама прилагођеним вашој исхрани."
        },
        {
          "id": "restroom",
          "title": "Тоалети",
          "text": "Тоалети се налазе на супротној страни зграде: женски лево, мушки десно. Ако треба да изађете, молимо вас да пре изласка добијете печат на руци како бисте могли поново да уђете."
        },
        {
          "id": "robot",
          "title": "Робот за послуживање",
          "text": "Молимо вас да не дирате робота за послуживање и да на њега не стављате тањире. Наше особље ће покупити тањире у пролазу."
        },
        {
          "id": "coupon",
          "title": "Купони за попуст",
          "text": "Купони за попуст важе у одабраним продавницама у Hukilau Marketplace. Ако још нисте добили купон, замолите свог конобара. Не пропустите их!"
        }
      ],
      "foot": "Пријатно!"
    },
    "acts": {
      "head": "Пре представе",
      "foot": "Без журбе, прво уживајте у десерту!",
      "show": {
        "title": "Вечерња представа",
        "text": "Идете ли вечерас на вечерњу представу? Почиње у {start} увече, а улаз се отвара у {gates}. Ваша места су резервисана, па вас молимо да стигнете на време. Ако ваша места нису резервисана, разводник ће вам радо помоћи. Позориште је удаљено 5–7 минута хода."
      },
      "items": [
        {
          "title": "Hukilau Marketplace",
          "subtitle": "",
          "text": "Купите поклоне, грицкалице и сувенире пре него што се продавнице затворе.",
          "chips": [
            "До 19:00"
          ]
        },
        {
          "title": "Обилазак места Lāʻie трамвајем",
          "subtitle": "",
          "text": "Провозајте се кроз градић Lāʻie и кампус BYU–Hawaii, уз паузу од 15 минута у прелепим вртовима храма Lāʻie Hawaiʻi Цркве Исуса Христа светаца последњих дана.",
          "chips": [
            "Сваких 20 мин",
            "15:00–18:30",
            "Вожња траје 35 мин"
          ]
        },
        {
          "title": "Hawaiian Journey Theater",
          "subtitle": "Џеријева представа са ватреним ножем",
          "text": "Прича о такмичењима са ватреним ножем коју приповеда Џери, дугогодишњи шампион који је вешто бранио титулу и који је са ватреним ножем почео још као дечак.",
          "chips": [
            "Сваких 30 мин",
            "13:30–18:30",
            "Последња представа: 18:30"
          ]
        },
        {
          "title": "Polynesian Football Hall of Fame",
          "subtitle": "",
          "text": "Галерија у част полинежанских легенди америчког фудбала, са плакетама, фотографијама, успоменама, интерактивним екраном и Зидом части. Налази се тачно преко пута Gateway Buffet, у PCC Welcome Center.",
          "chips": [
            "До 19:00"
          ]
        }
      ]
    },
    "close": {
      "thanks": {
        "title": "Mahalo, ʻOhana!",
        "text": "Хвала вам што сте вечерас били наши гости у Gateway Buffet. Било нам је задовољство да вас услужимо, па слободно останите колико год желите."
      },
      "review": {
        "title": "Поделите своје утиске",
        "text": "Када будете имали тренутак, молимо вас да скенирате QR код и додирнете TripAdvisor. Радо бисмо чули ваше утиске о оброку, конобару и целом дану у PCC, укључујући село, вечерашњи шведски сто и вечерњу представу. Били бисмо веома захвални на вашој искреној рецензији. Ако сте уживали у вечери са нама, рецензија са 5 звездица много би значила нашем тиму."
      },
      "survey": {
        "title": "Напомена за касније",
        "text": "За отприлике недељу дана, особа која је купила ваше улазнице добиће од PCC кратку анкету путем е-поште о вашој целокупној посети. Ако сте уживали у посети, молимо вас да нам дате оцену 10."
      },
      "server": "Ваш конобар вечерас:",
      "end": "Mahalo nui loa и пријатно вече!",
      "qrNote": "Ваш конобар ће вам показати QR код."
    },
    "status": {
      "open": "Отворено",
      "soon": "Ускоро се затвара",
      "ended": "Затворено за данас",
      "next": "Следеће:",
      "gatesIn": "Улаз се отвара за {m} мин",
      "gatesOpen": "Улаз је отворен · представа за {m} мин",
      "gates": "Отварање улаза",
      "starts": "Почетак представе",
      "scanHint": "Скенирајте QR код, па додирните TripAdvisor"
    }
  },
  "ar": {
    "name": "العربية",
    "htmlLang": "ar",
    "dir": "rtl",
    "greet": "ألوها! أهلاً وسهلاً بكم",
    "sub": "أهلاً بكم في Gateway Buffet",
    "qr": "امسحوا الرمز لفتح الدليل على هواتفكم",
    "tabs": {
      "guide": "دليل الضيوف",
      "acts": "أنشطة",
      "close": "قبل المغادرة"
    },
    "guide": {
      "items": [
        {
          "id": "self",
          "title": "مطعم بخدمة ذاتية",
          "text": "هذا مطعم بخدمة ذاتية. تفضّلوا بتناول ما تشاؤون من الطعام، ونتمنى لكم وجبة شهية."
        },
        {
          "id": "buffet",
          "title": "البوفيه والأطباق",
          "text": "نقدّم قائمة للأطفال، وستيك السيرلوين، ولحوماً متنوعة، ودجاجاً، وساشيمي التونة (أهي)، والبوكي (سمك نيء متبّل)، والمأكولات البحرية، والخضروات، والأرز. تتوفر المشروبات في محطات المشروبات على جانبي المبنى، وتوجد الأطباق أسفل خط البوفيه وفي ركن السلطات والحلويات."
        },
        {
          "id": "plates",
          "title": "الأطباق وأدوات المائدة",
          "text": "تجدون الأطباق وأدوات المائدة (الملاعق والشوك وغيرها) في ركن السلطات والحلويات. إذا احتجتم إلى أي شيء، فلا تترددوا في سؤال أحد أفراد فريقنا."
        },
        {
          "id": "after",
          "title": "بعد الوجبة",
          "text": "يُرجى وضع الأطباق المستعملة فوق بعضها بترتيب على أحد جانبي الطاولة، وسيقوم فريقنا بجمعها. ويمكنكم أخذ طبق نظيف متى رغبتم في المزيد."
        },
        {
          "id": "allergy",
          "title": "الحساسية الغذائية",
          "text": "إذا كانت لديكم حساسية غذائية، يُرجى {link}الاطلاع على دليل الحساسية{/link} لمعرفة المكونات ومعلومات مسببات الحساسية والخيارات المناسبة لنظامكم الغذائي."
        },
        {
          "id": "restroom",
          "title": "دورات المياه",
          "text": "تقع دورات المياه في الجهة المقابلة من المبنى: دورة مياه السيدات على اليسار، ودورة مياه الرجال على اليمين. إذا احتجتم إلى الخروج، يُرجى الحصول على ختم على اليد قبل المغادرة حتى تتمكنوا من الدخول مجدداً."
        },
        {
          "id": "robot",
          "title": "روبوت الخدمة",
          "text": "يُرجى عدم لمس روبوت الخدمة أو وضع الأطباق عليه. سيجمع فريقنا الأطباق أثناء مروره."
        },
        {
          "id": "coupon",
          "title": "قسائم الخصم",
          "text": "تتوفر قسائم خصم لمتاجر مختارة في Hukilau Marketplace. إذا لم تحصلوا على قسيمة بعد، يُرجى طلبها من النادل. لا تفوّتوها!"
        }
      ],
      "foot": "بالهناء والشفاء!"
    },
    "acts": {
      "head": "قبل العرض",
      "foot": "لا داعي للعجلة، استمتعوا بالحلوى أولاً!",
      "show": {
        "title": "العرض المسائي",
        "text": "هل ستحضرون العرض المسائي الليلة؟ يبدأ العرض الساعة {start} مساءً، وتُفتح البوابات الساعة {gates} مساءً. مقاعدكم محجوزة، لذا يُرجى الحضور في الموعد. وإذا لم تكن مقاعدكم محجوزة، فسيسعد أحد المرشدين بمساعدتكم. يبعد المسرح 5–7 دقائق سيراً على الأقدام."
      },
      "items": [
        {
          "title": "Hukilau Marketplace",
          "subtitle": "",
          "text": "تسوّقوا الهدايا والوجبات الخفيفة والتذكارات قبل إغلاق المتاجر.",
          "chips": [
            "حتى الساعة 7:00 مساءً"
          ]
        },
        {
          "title": "جولة الترام في Lāʻie",
          "subtitle": "",
          "text": "جولة حول بلدة Lāʻie الصغيرة وحرم جامعة BYU–Hawaii، مع توقف لمدة 15 دقيقة في الحدائق الجميلة لمعبد Lāʻie في هاواي التابع لكنيسة يسوع المسيح لقديسي الأيام الأخيرة.",
          "chips": [
            "كل 20 دقيقة",
            "3:00–6:30 مساءً",
            "مدة الجولة 35 دقيقة"
          ]
        },
        {
          "title": "Hawaiian Journey Theater",
          "subtitle": "عرض السكين النارية مع جيري",
          "text": "قصة مسابقات السكين النارية يرويها جيري، البطل الذي حافظ على لقبه سنوات طويلة وبدأ ممارسة السكين النارية منذ صغره.",
          "chips": [
            "كل 30 دقيقة",
            "1:30–6:30 مساءً",
            "آخر عرض: 6:30 مساءً"
          ]
        },
        {
          "title": "Polynesian Football Hall of Fame",
          "subtitle": "",
          "text": "معرض يكرّم أساطير كرة القدم الأمريكية من بولينيزيا، ويضم لوحات تذكارية وصوراً ومقتنيات وشاشة تفاعلية وجدار الشرف. يقع مباشرةً مقابل Gateway Buffet داخل مركز الترحيب في PCC.",
          "chips": [
            "حتى الساعة 7:00 مساءً"
          ]
        }
      ]
    },
    "close": {
      "thanks": {
        "title": "Mahalo, ʻOhana!",
        "text": "شكراً لانضمامكم إلينا في Gateway Buffet هذا المساء. لقد كان من دواعي سرورنا خدمتكم، فخذوا كل الوقت الذي تحتاجونه."
      },
      "review": {
        "title": "شاركونا تجربتكم",
        "text": "عندما يتسنى لكم الوقت، يُرجى مسح رمز QR والنقر على TripAdvisor. يسعدنا أن نسمع رأيكم في وجبتكم والنادل الذي خدمكم ويومكم كاملاً في PCC، بما في ذلك القرية وبوفيه الليلة والعرض المسائي. سنكون ممتنين جداً لتقييمكم الصادق. وإذا استمتعتم بأمسيتكم معنا، فإن تقييماً بخمس نجوم سيعني الكثير لفريقنا."
      },
      "survey": {
        "title": "ملاحظة لاحقة",
        "text": "بعد أسبوع تقريباً، سيتلقى الشخص الذي اشترى تذاكركم استبياناً قصيراً عبر البريد الإلكتروني من PCC حول زيارتكم بشكل عام. إذا استمتعتم بزيارتكم، يُرجى منحنا تقييم 10."
      },
      "server": "النادل الذي يخدمكم الليلة:",
      "end": "Mahalo nui loa، ونتمنى لكم أمسية سعيدة!",
      "qrNote": "سيعرض عليكم النادل رمز QR."
    },
    "status": {
      "open": "مفتوح الآن",
      "soon": "يُغلق قريباً",
      "ended": "مغلق لهذا اليوم",
      "next": "التالي:",
      "gatesIn": "تُفتح البوابات بعد {m} دقيقة",
      "gatesOpen": "البوابات مفتوحة · يبدأ العرض بعد {m} دقيقة",
      "gates": "فتح البوابات",
      "starts": "بدء العرض",
      "scanHint": "امسحوا رمز QR، ثم انقروا على TripAdvisor"
    }
  },
  "it": {
    "name": "Italiano",
    "htmlLang": "it",
    "greet": "Aloha! Benvenuti",
    "sub": "Benvenuti al Gateway Buffet",
    "qr": "Scansionate per aprire la guida sul telefono",
    "tabs": {
      "guide": "Info",
      "acts": "Da fare",
      "close": "Prima di andare"
    },
    "guide": {
      "items": [
        {
          "id": "self",
          "title": "Ristorante self-service",
          "text": "Questo è un ristorante self-service. Servitevi pure quanto desiderate e gustatevi il pasto."
        },
        {
          "id": "buffet",
          "title": "Buffet e piatti",
          "text": "Offriamo un menù per bambini, controfiletto (sirloin), carni assortite, pollo, sashimi di tonno (ahi), poke (pesce crudo marinato), frutti di mare, verdure e riso. Le bevande sono disponibili alle postazioni bevande su entrambi i lati dell'edificio. I piatti si trovano sotto il bancone del buffet e nell'area insalate e dessert."
        },
        {
          "id": "plates",
          "title": "Piatti e posate",
          "text": "Piatti e posate (cucchiai, forchette, ecc.) si trovano nell'area insalate e dessert. Per qualsiasi necessità, non esitate a chiedere al nostro personale."
        },
        {
          "id": "after",
          "title": "Dopo il pasto",
          "text": "Vi preghiamo di impilare ordinatamente i piatti usati su un lato del tavolo: il nostro personale passerà a ritirarli. Prendete pure un piatto pulito ogni volta che desiderate servirvi ancora."
        },
        {
          "id": "allergy",
          "title": "Allergie alimentari",
          "text": "In caso di allergie alimentari, {link}consultate la nostra guida agli allergeni{/link}: troverete l'elenco degli ingredienti, le informazioni sugli allergeni e le opzioni adatte alla vostra dieta."
        },
        {
          "id": "restroom",
          "title": "Servizi igienici",
          "text": "I servizi igienici si trovano sul lato opposto dell'edificio: donne a sinistra, uomini a destra. Se dovete uscire, vi preghiamo di farvi apporre un timbro sulla mano prima di uscire, così potrete rientrare."
        },
        {
          "id": "robot",
          "title": "Robot di servizio",
          "text": "Vi preghiamo di non toccare il robot di servizio e di non appoggiarvi sopra i piatti. Il nostro personale ritirerà i piatti passando tra i tavoli."
        },
        {
          "id": "coupon",
          "title": "Buoni sconto",
          "text": "Sono disponibili buoni sconto per alcuni negozi selezionati dell'Hukilau Marketplace. Se non l'avete ancora ricevuto, chiedetelo al vostro cameriere. Da non perdere!"
        }
      ],
      "foot": "Buon appetito!"
    },
    "acts": {
      "head": "Prima dello spettacolo",
      "foot": "Nessuna fretta, gustatevi prima il dessert!",
      "show": {
        "title": "Spettacolo serale",
        "text": "Andate allo spettacolo serale stasera? Inizia alle {start} di sera e i cancelli aprono alle {gates}. I vostri posti sono riservati, quindi vi preghiamo di arrivare puntuali. Se i vostri posti non sono riservati, una maschera sarà lieta di aiutarvi. Il teatro si trova a 5–7 minuti a piedi."
      },
      "items": [
        {
          "title": "Hukilau Marketplace",
          "subtitle": "",
          "text": "Acquistate regali, snack e souvenir prima della chiusura dei negozi.",
          "chips": [
            "Fino alle 19:00"
          ]
        },
        {
          "title": "Tram Tour di Lāʻie",
          "subtitle": "",
          "text": "Un giro della piccola cittadina di Lāʻie e del campus della BYU–Hawaii, con una sosta di 15 minuti nei bellissimi giardini del Tempio di Lāʻie, Hawaiʻi, della Chiesa di Gesù Cristo dei Santi degli Ultimi Giorni.",
          "chips": [
            "Ogni 20 min",
            "15:00–18:30",
            "Durata: 35 min"
          ]
        },
        {
          "title": "Hawaiian Journey Theater",
          "subtitle": "Lo spettacolo del coltello di fuoco di Jeri",
          "text": "La storia delle gare di coltello di fuoco, raccontata da Jeri, campione che ha difeso il suo titolo per molti anni e che ha iniziato fin da giovanissimo.",
          "chips": [
            "Ogni 30 min",
            "13:30–18:30",
            "Ultimo spettacolo: 18:30"
          ]
        },
        {
          "title": "Polynesian Football Hall of Fame",
          "subtitle": "",
          "text": "Una galleria dedicata alle leggende polinesiane del football americano, con targhe, fotografie, cimeli, uno schermo interattivo e un Muro d'Onore. Si trova proprio di fronte al Gateway Buffet, all'interno del Welcome Center del PCC.",
          "chips": [
            "Fino alle 19:00"
          ]
        }
      ]
    },
    "close": {
      "thanks": {
        "title": "Mahalo, ʻOhana!",
        "text": "Grazie per aver cenato con noi al Gateway Buffet questa sera. È stato un piacere servirvi: prendetevi tutto il tempo che desiderate."
      },
      "review": {
        "title": "Condividete la vostra esperienza",
        "text": "Quando avete un momento, vi preghiamo di scansionare il codice QR e toccare TripAdvisor. Ci farebbe piacere conoscere la vostra opinione sul pasto, sul vostro cameriere e sull'intera giornata al PCC, compresi il villaggio, il buffet di stasera e lo spettacolo serale. Vi saremmo molto grati per una recensione sincera. Se avete apprezzato la serata con noi, una recensione a 5 stelle significherebbe molto per il nostro team."
      },
      "survey": {
        "title": "Una nota per dopo",
        "text": "Tra circa una settimana, la persona che ha acquistato i biglietti riceverà dal PCC un breve sondaggio via e-mail sulla vostra visita. Se la visita vi è piaciuta, vi preghiamo di darci un 10."
      },
      "server": "Il vostro cameriere stasera:",
      "end": "Mahalo nui loa e buona serata!",
      "qrNote": "Il vostro cameriere vi mostrerà il codice QR."
    },
    "status": {
      "open": "Aperto ora",
      "soon": "Chiude a breve",
      "ended": "Chiuso per oggi",
      "next": "Prossimo:",
      "gatesIn": "Apertura cancelli tra {m} min",
      "gatesOpen": "Cancelli aperti · spettacolo tra {m} min",
      "gates": "Apertura cancelli",
      "starts": "Inizio spettacolo",
      "scanHint": "Scansionate il codice QR, poi toccate TripAdvisor"
    }
  },
  "th": {
    "name": "ไทย",
    "htmlLang": "th",
    "greet": "อะโลฮา! ยินดีต้อนรับ",
    "sub": "ยินดีต้อนรับสู่ Gateway Buffet",
    "qr": "สแกนเพื่อเปิดคู่มือบนโทรศัพท์ของท่าน",
    "tabs": {
      "guide": "คำแนะนำ",
      "acts": "กิจกรรม",
      "close": "ก่อนกลับ"
    },
    "guide": {
      "items": [
        {
          "id": "self",
          "title": "ร้านอาหารแบบบริการตนเอง",
          "text": "ร้านของเราเป็นร้านอาหารแบบบริการตนเอง เชิญตักอาหารได้ตามต้องการ และขอให้เพลิดเพลินกับมื้ออาหาร"
        },
        {
          "id": "buffet",
          "title": "บุฟเฟต์และรายการอาหาร",
          "text": "เรามีเมนูสำหรับเด็ก สเต๊กเซอร์ลอยน์ เนื้อสัตว์หลากหลายชนิด ไก่ ซาชิมิปลาทูน่า (อาฮิ) โปเกะ (ปลาดิบหมักเครื่องปรุง) อาหารทะเล ผัก และข้าว เครื่องดื่มมีให้บริการที่จุดเครื่องดื่มทั้งสองฝั่งของอาคาร ส่วนจานวางอยู่ใต้ไลน์บุฟเฟต์และบริเวณสลัดและของหวาน"
        },
        {
          "id": "plates",
          "title": "จานและช้อนส้อม",
          "text": "จานและช้อนส้อม (ช้อน ส้อม ฯลฯ) อยู่บริเวณสลัดและของหวาน หากต้องการความช่วยเหลือ สามารถสอบถามพนักงานของเราได้ทุกเมื่อ"
        },
        {
          "id": "after",
          "title": "หลังรับประทานอาหาร",
          "text": "กรุณาวางจานที่ใช้แล้วซ้อนกันให้เรียบร้อยไว้ที่ด้านใดด้านหนึ่งของโต๊ะ พนักงานของเราจะมาเก็บให้ หากต้องการรับประทานเพิ่ม เชิญหยิบจานใหม่ได้เลย"
        },
        {
          "id": "allergy",
          "title": "การแพ้อาหาร",
          "text": "หากท่านมีอาการแพ้อาหาร กรุณา{link}ดูคู่มือข้อมูลสารก่อภูมิแพ้{/link} เพื่อดูรายการส่วนผสม ข้อมูลสารก่อภูมิแพ้ และตัวเลือกที่เหมาะกับอาหารของท่าน"
        },
        {
          "id": "restroom",
          "title": "ห้องน้ำ",
          "text": "ห้องน้ำอยู่อีกฝั่งหนึ่งของอาคาร ห้องน้ำหญิงอยู่ทางซ้าย ห้องน้ำชายอยู่ทางขวา หากท่านต้องการออกไปด้านนอก กรุณาประทับตราที่มือก่อนออก เพื่อให้สามารถกลับเข้ามาได้"
        },
        {
          "id": "robot",
          "title": "หุ่นยนต์เสิร์ฟอาหาร",
          "text": "กรุณาอย่าสัมผัสหุ่นยนต์เสิร์ฟอาหาร หรือวางจานไว้บนหุ่นยนต์ พนักงานของเราจะเก็บจานเมื่อเดินผ่าน"
        },
        {
          "id": "coupon",
          "title": "คูปองส่วนลด",
          "text": "เรามีคูปองส่วนลดสำหรับร้านค้าที่ร่วมรายการใน Hukilau Marketplace หากท่านยังไม่ได้รับ กรุณาสอบถามพนักงานเสิร์ฟของท่าน อย่าพลาด!"
        }
      ],
      "foot": "ขอให้อร่อยกับมื้ออาหาร!"
    },
    "acts": {
      "head": "ก่อนเริ่มการแสดง",
      "foot": "ไม่ต้องรีบ เชิญเพลิดเพลินกับของหวานก่อน!",
      "show": {
        "title": "การแสดงภาคค่ำ",
        "text": "ท่านจะไปชมการแสดงภาคค่ำคืนนี้หรือไม่? การแสดงเริ่มเวลา {start} น. ช่วงค่ำ และประตูเปิดเวลา {gates} น. ที่นั่งของท่านได้รับการสำรองไว้แล้ว จึงขอให้มาถึงตรงเวลา หากที่นั่งของท่านยังไม่ได้สำรอง เจ้าหน้าที่นำที่นั่งยินดีให้ความช่วยเหลือ โรงละครอยู่ห่างออกไปเดินประมาณ 5–7 นาที"
      },
      "items": [
        {
          "title": "Hukilau Marketplace",
          "subtitle": "",
          "text": "เลือกซื้อของขวัญ ขนม และของที่ระลึกก่อนร้านค้าปิด",
          "chips": [
            "ถึง 19:00 น."
          ]
        },
        {
          "title": "ทัวร์รถรางเมืองลาอิเอ (Lāʻie)",
          "subtitle": "",
          "text": "นั่งรถรางชมเมืองเล็ก ๆ ลาอิเอ (Lāʻie) และวิทยาเขต BYU–Hawaii พร้อมแวะชมบริเวณอันงดงามของพระวิหารลาอิเอ ฮาวาย ของศาสนจักรของพระเยซูคริสต์แห่งวิสุทธิชนยุคสุดท้ายเป็นเวลา 15 นาที",
          "chips": [
            "ทุก 20 นาที",
            "15:00–18:30 น.",
            "ใช้เวลา 35 นาที"
          ]
        },
        {
          "title": "Hawaiian Journey Theater",
          "subtitle": "การแสดงมีดไฟของเจอร์รี",
          "text": "เรื่องราวของการแข่งขันมีดไฟ เล่าโดยเจอร์รี แชมป์ผู้ป้องกันตำแหน่งมาอย่างยาวนาน และเริ่มฝึกมีดไฟตั้งแต่ยังเด็ก",
          "chips": [
            "ทุก 30 นาที",
            "13:30–18:30 น.",
            "รอบสุดท้าย: 18:30 น."
          ]
        },
        {
          "title": "Polynesian Football Hall of Fame",
          "subtitle": "",
          "text": "แกลเลอรีเชิดชูตำนานอเมริกันฟุตบอลชาวโพลินีเซีย พร้อมแผ่นจารึก ภาพถ่าย ของที่ระลึก จอแสดงผลแบบอินเทอร์แอคทีฟ และกำแพงเกียรติยศ ตั้งอยู่ตรงข้าม Gateway Buffet ภายใน Welcome Center ของ PCC",
          "chips": [
            "ถึง 19:00 น."
          ]
        }
      ]
    },
    "close": {
      "thanks": {
        "title": "Mahalo, ʻOhana!",
        "text": "ขอขอบคุณที่มารับประทานอาหารกับเราที่ Gateway Buffet ในค่ำคืนนี้ เป็นเกียรติอย่างยิ่งที่ได้ให้บริการท่าน เชิญใช้เวลาได้ตามสบาย"
      },
      "review": {
        "title": "แบ่งปันประสบการณ์ของท่าน",
        "text": "เมื่อท่านสะดวก กรุณาสแกนคิวอาร์โค้ดแล้วแตะ TripAdvisor เรายินดีอย่างยิ่งที่จะได้รับฟังความคิดเห็นเกี่ยวกับมื้ออาหาร พนักงานเสิร์ฟ และวันทั้งวันของท่านที่ PCC ทั้งหมู่บ้าน บุฟเฟต์คืนนี้ และการแสดงภาคค่ำ เราจะขอบคุณเป็นอย่างยิ่งสำหรับรีวิวที่จริงใจของท่าน และหากท่านประทับใจกับค่ำคืนนี้ รีวิว 5 ดาวจะมีความหมายอย่างมากสำหรับทีมงานของเรา"
      },
      "survey": {
        "title": "ข้อมูลสำหรับภายหลัง",
        "text": "ในอีกประมาณหนึ่งสัปดาห์ ผู้ที่ซื้อบัตรของท่านจะได้รับแบบสอบถามสั้น ๆ ทางอีเมลจาก PCC เกี่ยวกับการเยี่ยมชมโดยรวม หากท่านประทับใจกับการเยี่ยมชม กรุณาให้คะแนนเรา 10 คะแนน"
      },
      "server": "พนักงานเสิร์ฟของท่านในค่ำคืนนี้:",
      "end": "Mahalo nui loa ขอให้ท่านมีค่ำคืนที่แสนสุข!",
      "qrNote": "พนักงานเสิร์ฟจะนำคิวอาร์โค้ดมาให้ท่าน"
    },
    "status": {
      "open": "เปิดอยู่",
      "soon": "ใกล้ปิดแล้ว",
      "ended": "ปิดแล้วสำหรับวันนี้",
      "next": "รอบถัดไป:",
      "gatesIn": "ประตูเปิดในอีก {m} นาที",
      "gatesOpen": "ประตูเปิดแล้ว · การแสดงเริ่มในอีก {m} นาที",
      "gates": "ประตูเปิด",
      "starts": "เริ่มการแสดง",
      "scanHint": "สแกนคิวอาร์โค้ด แล้วแตะ TripAdvisor"
    }
  }
};
