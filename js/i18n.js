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
    "qr": "Scan to open on your phone",
    "tabs": {
      "guide": "Welcome Guide",
      "acts": "Things to Do",
      "close": "Before You Go"
    },
    "guide": {
      "server": "Your server today:",
      "items": [
        {
          "id": "self",
          "title": "Self-Service Buffet",
          "text": "This is a self-service buffet. Please feel free to enjoy as much food as you like, and we hope you have a wonderful meal."
        },
        {
          "id": "buffet",
          "title": "Buffet Areas & Food",
          "text": "The buffet is organized into different food categories, so you may start anywhere you like.\nYou'll find selections such as a kids' menu, sirloin steak, assorted meats, chicken, ahi sashimi, poke, seafood, vegetables, rice, salads, and desserts.\nDrink stations are located on both sides of the building. Plates are available beneath the main buffet line and in the salad and dessert area."
        },
        {
          "id": "icecream",
          "title": "Ice Cream & Dole Pineapple Soft Serve",
          "text": "Ice cream stations are available on both sides of the building.\nDole pineapple soft serve is available on the Hauʻula side. Please ask a server for assistance."
        },
        {
          "id": "plates",
          "title": "Plates & Utensils",
          "text": "Plates are available throughout the buffet area.\nIf you need a new set of utensils, please ask one of our servers and they'll be happy to provide one for you."
        },
        {
          "id": "after",
          "title": "After Your Meal",
          "text": "When you are finished with a plate, please place it neatly to one side of your table, and our staff will collect it for you.\nIf you would like to return to the buffet, please use a clean plate each time."
        },
        {
          "id": "allergy",
          "title": "Food Allergies",
          "text": "If you have food allergies or dietary concerns, please {link}view our allergy guide{/link} for ingredient lists, allergen information, and available options."
        },
        {
          "id": "restroom",
          "title": "Restrooms",
          "text": "Restrooms are located on the opposite side of the building. The women's restroom is on the left, and the men's restroom is on the right.\nIf you need to step outside temporarily, please get a hand stamp before leaving so you can return."
        },
        {
          "id": "robot",
          "title": "Serving Robot",
          "text": "For your safety, please do not touch the serving robot or place plates or other items on it.\nOur staff will collect used plates from your table."
        },
        {
          "id": "charging",
          "title": "Charging Station",
          "text": "A phone charging station with secure lockers is located near the exit door.\nPlease follow the instructions posted at the station to charge your device and use the lockers."
        },
        {
          "id": "coupon",
          "title": "Discount Coupons",
          "text": "Discount coupons for select shops in the Hukilau Marketplace may be available during your visit.\nIf you have not received one, please ask your server."
        }
      ],
      "foot": "Enjoy Your Meal!",
      "footNote": "We hope you enjoy your time with us at Gateway Buffet."
    },
    "acts": {
      "head": "Before the Show",
      "foot": "Enjoy Your Time",
      "show": {
        "title": "Night Show",
        "text": "Attending the night show this evening? The show begins at {start} PM, with gates opening at {gates} PM.\nIf you already have assigned seats, please arrive in time to get comfortably settled. If you do not have an assigned seat, one of our ushers will be happy to assist you.\nThe theater is approximately a 5–7 minute walk from Gateway Buffet."
      },
      "items": [
        {
          "title": "Hukilau Marketplace",
          "subtitle": "",
          "text": "Take some time to explore the Hukilau Marketplace for gifts, snacks, souvenirs, and local finds before the shops close.",
          "chips": [
            "Until 7:30 PM"
          ]
        },
        {
          "title": "Lāʻie Tram Tour",
          "subtitle": "",
          "text": "Enjoy a scenic ride through the town of Lāʻie and the BYU–Hawaii campus.\nThe tour also includes a 15-minute stop at the grounds of the Lāʻie Hawaiʻi Temple of The Church of Jesus Christ of Latter-day Saints.",
          "chips": [
            "Every 20 minutes",
            "3:00–6:30 PM",
            "Approx. 35-minute ride"
          ]
        },
        {
          "title": "Hawaiian Journey Theater",
          "subtitle": "Jeri's Fire Knife Show",
          "text": "Discover the story and tradition of fire knife dancing through Jeri, a longtime fire knife competitor who began performing at a young age.",
          "chips": [
            "Every 30 minutes",
            "1:30–6:30 PM",
            "Last show at 6:30 PM"
          ]
        },
        {
          "title": "Polynesian Football Hall of Fame",
          "subtitle": "",
          "text": "Explore a gallery honoring Polynesian football legends, with plaques, photographs, memorabilia, interactive displays, and the Wall of Honor.\nIt is located directly across from Gateway Buffet inside the Polynesian Cultural Center's Welcome Center.",
          "chips": [
            "Until 7:00 PM"
          ]
        }
      ],
      "footNote": "No rush — enjoy your dessert first!"
    },
    "close": {
      "mention": "If {name} helped make your visit special, you're welcome to mention {name} when sharing your experience.",
      "ready": "Before You Go is now open.",
      "locked": {
        "text": "This section will become available a little later in your visit.\nPlease enjoy your meal and check back in about 25–30 minutes.",
        "note": "No rush — enjoy your time with us!",
        "soon": "Available in about {m} min"
      },
      "thanks": {
        "title": "Mahalo, ʻOhana!",
        "text": "Thank you for joining us at Gateway Buffet tonight. It has been a pleasure serving you, and we hope you enjoyed your time with us.\nPlease feel free to relax and enjoy the rest of your evening."
      },
      "review": {
        "title": "Share Your Experience",
        "text": "If you have a moment, we'd love to hear about your experience at the Polynesian Cultural Center.\nYour server will show you the QR code. Simply scan it and tap TripAdvisor to share feedback about your meal, your server, the villages, the buffet, or the night show.\nYour feedback helps our team continue improving the guest experience, and we truly appreciate you taking the time to share it."
      },
      "survey": {
        "title": "A Note for Later",
        "text": "About a week after your visit, the person who purchased the tickets may receive a short email survey from the Polynesian Cultural Center about the overall experience.\nIf you receive one, we'd be grateful if you took a moment to share your feedback there as well."
      },
      "server": "Your server tonight:",
      "end": "Mahalo Nui Loa",
      "qrNote": "Your server will show you the QR code when you're ready.",
      "endNote": "Thank you for spending part of your day with us.\nMahalo nui loa, and enjoy the rest of your evening!"
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
    "qr": "Escaneen para abrir la guía en su teléfono",
    "tabs": {
      "guide": "Guía",
      "acts": "Qué hacer",
      "close": "Antes de irse"
    },
    "guide": {
      "server": "Su mesero hoy:",
      "items": [
        {
          "id": "self",
          "title": "Buffet de autoservicio",
          "text": "Este es un buffet de autoservicio. Sírvanse con total libertad todo lo que deseen; esperamos que disfruten de una comida maravillosa."
        },
        {
          "id": "buffet",
          "title": "Áreas del buffet y comida",
          "text": "El buffet está organizado por categorías de comida, así que pueden comenzar por donde prefieran.\nEncontrarán opciones como menú infantil, filete de res (sirloin), carnes variadas, pollo, sashimi de atún (ahi), poke, mariscos, verduras, arroz, ensaladas y postres.\nLas estaciones de bebidas se encuentran a ambos lados del edificio. Hay platos debajo de la barra principal del buffet y en el área de ensaladas y postres."
        },
        {
          "id": "icecream",
          "title": "Helados y helado suave de piña Dole",
          "text": "Hay estaciones de helado a ambos lados del edificio.\nEl helado suave de piña Dole se encuentra del lado de Hauʻula. Si necesitan ayuda, pregunten a un mesero."
        },
        {
          "id": "plates",
          "title": "Platos y cubiertos",
          "text": "Hay platos disponibles en toda el área del buffet.\nSi necesitan cubiertos nuevos, pídanlos a uno de nuestros meseros; con gusto se los traerá."
        },
        {
          "id": "after",
          "title": "Después de comer",
          "text": "Cuando terminen con un plato, colóquenlo ordenadamente a un lado de la mesa y nuestro personal lo recogerá.\nSi desean volver al buffet, por favor usen un plato limpio cada vez."
        },
        {
          "id": "allergy",
          "title": "Alergias alimentarias",
          "text": "Si tienen alergias alimentarias o restricciones en su dieta, por favor {link}consulten nuestra guía de alérgenos{/link}, donde encontrarán la lista de ingredientes, información sobre alérgenos y las opciones disponibles."
        },
        {
          "id": "restroom",
          "title": "Baños",
          "text": "Los baños se encuentran al otro lado del edificio. El de mujeres está a la izquierda y el de hombres a la derecha.\nSi necesitan salir un momento, pidan un sello en la mano antes de hacerlo para poder volver a entrar."
        },
        {
          "id": "robot",
          "title": "Robot mesero",
          "text": "Por su seguridad, no toquen el robot mesero ni coloquen platos u otros objetos sobre él.\nNuestro personal recogerá los platos usados de su mesa."
        },
        {
          "id": "charging",
          "title": "Estación de carga",
          "text": "Cerca de la puerta de salida hay una estación de carga para teléfonos con casilleros seguros.\nSigan las instrucciones indicadas en la estación para cargar su dispositivo y usar los casilleros."
        },
        {
          "id": "coupon",
          "title": "Cupones de descuento",
          "text": "Es posible que durante su visita reciban cupones de descuento para tiendas seleccionadas del Hukilau Marketplace.\nSi no han recibido uno, pídanlo a su mesero."
        }
      ],
      "foot": "¡Buen provecho!",
      "footNote": "Esperamos que disfruten de su tiempo con nosotros en Gateway Buffet."
    },
    "acts": {
      "head": "Antes del espectáculo",
      "foot": "Disfruten de su tiempo",
      "show": {
        "title": "Espectáculo nocturno",
        "text": "¿Asistirán al espectáculo nocturno esta noche? El espectáculo comienza a las {start} p. m. y las puertas abren a las {gates} p. m.\nSi ya tienen asientos asignados, les recomendamos llegar con tiempo para acomodarse con calma. Si no tienen asiento asignado, uno de nuestros acomodadores con gusto les ayudará.\nEl teatro se encuentra aproximadamente a 5–7 minutos a pie de Gateway Buffet."
      },
      "items": [
        {
          "title": "Hukilau Marketplace",
          "subtitle": "",
          "text": "Tómense un tiempo para recorrer el Hukilau Marketplace y encontrar regalos, bocadillos, recuerdos y productos locales antes de que cierren las tiendas.",
          "chips": [
            "Hasta las 7:30 p. m."
          ]
        },
        {
          "title": "Recorrido en tranvía por Lāʻie",
          "subtitle": "",
          "text": "Disfruten de un recorrido panorámico por el pueblo de Lāʻie y el campus de BYU–Hawaii.\nEl recorrido incluye además una parada de 15 minutos en los jardines del Templo de Lāʻie, Hawái, de La Iglesia de Jesucristo de los Santos de los Últimos Días.",
          "chips": [
            "Cada 20 minutos",
            "3:00–6:30 p. m.",
            "Recorrido de aprox. 35 minutos"
          ]
        },
        {
          "title": "Hawaiian Journey Theater",
          "subtitle": "Espectáculo de cuchillo de fuego de Jeri",
          "text": "Descubran la historia y la tradición de la danza del cuchillo de fuego de la mano de Jeri, competidor con muchos años de trayectoria que comenzó a presentarse desde muy joven.",
          "chips": [
            "Cada 30 minutos",
            "1:30–6:30 p. m.",
            "Última función a las 6:30 p. m."
          ]
        },
        {
          "title": "Salón de la Fama del Fútbol Americano Polinesio",
          "subtitle": "",
          "text": "Recorran una galería que rinde homenaje a las leyendas polinesias del fútbol americano, con placas, fotografías, recuerdos, pantallas interactivas y el Muro de Honor.\nSe encuentra justo enfrente de Gateway Buffet, dentro del Welcome Center del Polynesian Cultural Center.",
          "chips": [
            "Hasta las 7:00 p. m."
          ]
        }
      ],
      "footNote": "Sin prisa: ¡disfruten primero su postre!"
    },
    "close": {
      "mention": "Si {name} hizo especial su visita, pueden mencionar a {name} al compartir su experiencia.",
      "ready": "Antes de irse ya está disponible.",
      "locked": {
        "text": "Esta sección estará disponible un poco más tarde durante su visita.\nDisfruten de su comida y vuelvan a pasar en unos 25–30 minutos.",
        "note": "Sin prisa: ¡disfruten su tiempo con nosotros!",
        "soon": "Disponible en unos {m} min"
      },
      "thanks": {
        "title": "¡Mahalo, ʻOhana!",
        "text": "Gracias por acompañarnos esta noche en Gateway Buffet. Ha sido un placer atenderlos y esperamos que hayan disfrutado de su tiempo con nosotros.\nSiéntanse con total libertad de relajarse y disfrutar del resto de su velada."
      },
      "review": {
        "title": "Compartan su experiencia",
        "text": "Si tienen un momento, nos encantaría conocer su experiencia en el Polynesian Cultural Center.\nSu mesero les mostrará el código QR. Solo escanéenlo y toquen TripAdvisor para compartir su opinión sobre la comida, su mesero, las aldeas, el buffet o el espectáculo nocturno.\nSus comentarios ayudan a nuestro equipo a seguir mejorando la experiencia de nuestros visitantes, y les agradecemos sinceramente que se tomen el tiempo de compartirlos."
      },
      "survey": {
        "title": "Una nota para después",
        "text": "Aproximadamente una semana después de su visita, la persona que compró los boletos podría recibir del Polynesian Cultural Center una breve encuesta por correo electrónico sobre la experiencia en general.\nSi la reciben, les agradeceríamos que se tomaran un momento para compartir allí también sus comentarios."
      },
      "server": "Su mesero esta noche:",
      "end": "Mahalo nui loa",
      "qrNote": "Su mesero les mostrará el código QR cuando estén listos.",
      "endNote": "Gracias por pasar parte de su día con nosotros.\n¡Mahalo nui loa y disfruten el resto de su velada!"
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
    "qr": "Escaneiem para abrir no celular",
    "tabs": {
      "guide": "Informações",
      "acts": "O que fazer",
      "close": "Antes de ir"
    },
    "guide": {
      "server": "Seu garçom hoje:",
      "items": [
        {
          "id": "self",
          "title": "Buffet self-service",
          "text": "Este é um buffet self-service. Sirvam-se à vontade; desejamos a vocês uma ótima refeição."
        },
        {
          "id": "buffet",
          "title": "Áreas do buffet e pratos",
          "text": "O buffet é organizado por categorias de comida, então vocês podem começar por onde preferirem.\nVocês encontrarão opções como cardápio infantil, contrafilé, carnes variadas, frango, sashimi de atum (ahi), poke, frutos do mar, legumes, arroz, saladas e sobremesas.\nAs estações de bebidas ficam dos dois lados do prédio. Há pratos embaixo do balcão principal do buffet e na área de saladas e sobremesas."
        },
        {
          "id": "icecream",
          "title": "Sorvete e sorvete soft de abacaxi Dole",
          "text": "Há estações de sorvete dos dois lados do prédio.\nO sorvete soft de abacaxi Dole fica do lado de Hauʻula. Se precisarem de ajuda, falem com um garçom."
        },
        {
          "id": "plates",
          "title": "Pratos e talheres",
          "text": "Há pratos disponíveis em toda a área do buffet.\nSe precisarem de talheres novos, peçam a um dos nossos garçons, que terá prazer em trazê-los."
        },
        {
          "id": "after",
          "title": "Depois da refeição",
          "text": "Quando terminarem um prato, deixem-no organizado em um canto da mesa, e nossa equipe vai recolhê-lo.\nSe quiserem voltar ao buffet, por favor, usem um prato limpo a cada vez."
        },
        {
          "id": "allergy",
          "title": "Alergias alimentares",
          "text": "Se vocês têm alergias ou restrições alimentares, por favor {link}consultem nosso guia de alergias{/link}, com a lista de ingredientes, informações sobre alérgenos e as opções disponíveis."
        },
        {
          "id": "restroom",
          "title": "Banheiros",
          "text": "Os banheiros ficam do outro lado do prédio. O feminino fica à esquerda e o masculino, à direita.\nSe precisarem sair por um momento, peçam um carimbo na mão antes, para poder entrar novamente."
        },
        {
          "id": "robot",
          "title": "Robô garçom",
          "text": "Para a sua segurança, por favor, não toquem no robô garçom nem coloquem pratos ou outros objetos sobre ele.\nNossa equipe recolherá os pratos usados da sua mesa."
        },
        {
          "id": "charging",
          "title": "Estação de carregamento",
          "text": "Há uma estação de carregamento de celulares com armários seguros perto da porta de saída.\nSigam as instruções indicadas na estação para carregar o aparelho e usar os armários."
        },
        {
          "id": "coupon",
          "title": "Cupons de desconto",
          "text": "Durante a visita, vocês podem receber cupons de desconto para lojas selecionadas do Hukilau Marketplace.\nSe ainda não receberam o seu, peçam ao seu garçom."
        }
      ],
      "foot": "Bom apetite!",
      "footNote": "Esperamos que aproveitem o seu tempo conosco no Gateway Buffet."
    },
    "acts": {
      "head": "Antes do show",
      "foot": "Aproveitem o seu tempo",
      "show": {
        "title": "Show noturno",
        "text": "Vocês vão ao show noturno hoje? O show começa às {start} da noite, e os portões abrem às {gates}.\nSe vocês já têm lugares marcados, cheguem com tempo para se acomodar com tranquilidade. Se não tiverem lugar marcado, um dos nossos funcionários do teatro terá prazer em ajudar.\nO teatro fica a aproximadamente 5–7 minutos a pé do Gateway Buffet."
      },
      "items": [
        {
          "title": "Hukilau Marketplace",
          "subtitle": "",
          "text": "Aproveitem para conhecer o Hukilau Marketplace e encontrar presentes, lanches, lembrancinhas e produtos locais antes de as lojas fecharem.",
          "chips": [
            "Até 19h30"
          ]
        },
        {
          "title": "Passeio de bondinho por Lāʻie",
          "subtitle": "",
          "text": "Façam um passeio panorâmico pela cidade de Lāʻie e pelo campus da BYU–Hawaii.\nO passeio inclui também uma parada de 15 minutos nos jardins do Templo de Lāʻie, no Havaí, da Igreja de Jesus Cristo dos Santos dos Últimos Dias.",
          "chips": [
            "A cada 20 minutos",
            "15h–18h30",
            "Passeio de aprox. 35 minutos"
          ]
        },
        {
          "title": "Hawaiian Journey Theater",
          "subtitle": "Show de faca de fogo do Jeri",
          "text": "Descubram a história e a tradição da dança da faca de fogo com Jeri, competidor de longa data que começou a se apresentar ainda bem jovem.",
          "chips": [
            "A cada 30 minutos",
            "13h30–18h30",
            "Última sessão às 18h30"
          ]
        },
        {
          "title": "Polynesian Football Hall of Fame",
          "subtitle": "",
          "text": "Conheçam uma galeria que homenageia lendas polinésias do futebol americano, com placas, fotografias, recordações, telas interativas e o Mural de Honra.\nFica bem em frente ao Gateway Buffet, dentro do Welcome Center do Polynesian Cultural Center.",
          "chips": [
            "Até 19h"
          ]
        }
      ],
      "footNote": "Sem pressa: aproveitem a sobremesa primeiro!"
    },
    "close": {
      "mention": "Se {name} tornou a visita de vocês especial, fiquem à vontade para mencionar {name} ao compartilhar sua experiência.",
      "ready": "Antes de ir já está disponível.",
      "locked": {
        "text": "Esta seção ficará disponível um pouco mais tarde durante a visita de vocês.\nAproveitem a refeição e voltem em cerca de 25–30 minutos.",
        "note": "Sem pressa — aproveitem o tempo conosco!",
        "soon": "Disponível em cerca de {m} min"
      },
      "thanks": {
        "title": "Mahalo, ʻOhana!",
        "text": "Obrigado por estarem conosco no Gateway Buffet esta noite. Foi um prazer atendê-los, e esperamos que tenham aproveitado o tempo conosco.\nFiquem à vontade para relaxar e aproveitar o restante da noite."
      },
      "review": {
        "title": "Compartilhem sua experiência",
        "text": "Se tiverem um momento, adoraríamos saber como foi a experiência de vocês no Polynesian Cultural Center.\nSeu garçom vai mostrar o QR code. É só escaneá-lo e tocar em TripAdvisor para compartilhar sua opinião sobre a refeição, o garçom, as vilas, o buffet ou o show noturno.\nSeus comentários ajudam nossa equipe a continuar melhorando a experiência dos visitantes, e agradecemos sinceramente por dedicarem um tempo a compartilhá-los."
      },
      "survey": {
        "title": "Um aviso para depois",
        "text": "Cerca de uma semana após a visita, quem comprou os ingressos poderá receber do Polynesian Cultural Center uma pesquisa curta por e-mail sobre a experiência como um todo.\nSe a receberem, ficaremos gratos se puderem dedicar um momento para compartilhar sua opinião também por lá."
      },
      "server": "Seu garçom esta noite:",
      "end": "Mahalo nui loa",
      "qrNote": "Seu garçom vai mostrar o QR code quando vocês estiverem prontos.",
      "endNote": "Obrigado por passarem parte do seu dia conosco.\nMahalo nui loa e aproveitem o restante da noite!"
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
    "qr": "Scannez pour ouvrir sur votre téléphone",
    "tabs": {
      "guide": "Infos",
      "acts": "À faire",
      "close": "Avant de partir"
    },
    "guide": {
      "server": "Votre serveur aujourd'hui :",
      "items": [
        {
          "id": "self",
          "title": "Buffet en libre-service",
          "text": "Ce buffet est en libre-service. Servez-vous autant que vous le souhaitez ; nous vous souhaitons un excellent repas."
        },
        {
          "id": "buffet",
          "title": "Espaces du buffet et plats",
          "text": "Le buffet est organisé par catégories de plats : vous pouvez commencer où vous le souhaitez.\nVous y trouverez notamment un menu enfant, du faux-filet, des viandes variées, du poulet, du sashimi de thon (ahi), du poke, des fruits de mer, des légumes, du riz, des salades et des desserts.\nDes fontaines à boissons se trouvent des deux côtés du bâtiment. Des assiettes sont disponibles sous le buffet principal et dans l'espace salades et desserts."
        },
        {
          "id": "icecream",
          "title": "Glaces et glace italienne à l'ananas Dole",
          "text": "Des stations de glaces se trouvent des deux côtés du bâtiment.\nLa glace à l'italienne à l'ananas Dole est disponible côté Hauʻula. N'hésitez pas à demander de l'aide à un serveur."
        },
        {
          "id": "plates",
          "title": "Assiettes et couverts",
          "text": "Des assiettes sont disponibles dans tout l'espace buffet.\nSi vous avez besoin de nouveaux couverts, demandez-les à l'un de nos serveurs : il se fera un plaisir de vous les apporter."
        },
        {
          "id": "after",
          "title": "Après le repas",
          "text": "Lorsque vous avez terminé une assiette, merci de la poser soigneusement sur un côté de la table ; notre personnel viendra la débarrasser.\nSi vous souhaitez retourner au buffet, merci de prendre une assiette propre à chaque fois."
        },
        {
          "id": "allergy",
          "title": "Allergies alimentaires",
          "text": "En cas d'allergies alimentaires ou de régime particulier, {link}consultez notre guide des allergènes{/link} : liste des ingrédients, informations sur les allergènes et options disponibles."
        },
        {
          "id": "restroom",
          "title": "Toilettes",
          "text": "Les toilettes se trouvent de l'autre côté du bâtiment. Les toilettes pour femmes sont à gauche et celles pour hommes à droite.\nSi vous devez sortir un instant, demandez un tampon sur la main avant de partir afin de pouvoir revenir."
        },
        {
          "id": "robot",
          "title": "Robot serveur",
          "text": "Pour votre sécurité, merci de ne pas toucher le robot serveur et de ne pas y poser d'assiettes ni d'autres objets.\nNotre personnel débarrassera les assiettes usagées à votre table."
        },
        {
          "id": "charging",
          "title": "Borne de recharge",
          "text": "Une borne de recharge pour téléphones avec casiers sécurisés se trouve près de la porte de sortie.\nVeuillez suivre les instructions affichées sur la borne pour recharger votre appareil et utiliser les casiers."
        },
        {
          "id": "coupon",
          "title": "Bons de réduction",
          "text": "Des bons de réduction pour certaines boutiques du Hukilau Marketplace peuvent vous être proposés pendant votre visite.\nSi vous n'en avez pas reçu, demandez-en un à votre serveur."
        }
      ],
      "foot": "Bon appétit !",
      "footNote": "Nous vous souhaitons un agréable moment au Gateway Buffet."
    },
    "acts": {
      "head": "Avant le spectacle",
      "foot": "Prenez votre temps",
      "show": {
        "title": "Spectacle du soir",
        "text": "Vous assistez au spectacle du soir ? Il commence à {start} du soir, et les portes ouvrent à {gates}.\nSi vous avez déjà des places attribuées, merci d'arriver suffisamment tôt pour vous installer confortablement. Si vous n'avez pas de place attribuée, l'un de nos placeurs se fera un plaisir de vous aider.\nLe théâtre se trouve à environ 5–7 minutes à pied du Gateway Buffet."
      },
      "items": [
        {
          "title": "Hukilau Marketplace",
          "subtitle": "",
          "text": "Prenez le temps de découvrir le Hukilau Marketplace : cadeaux, en-cas, souvenirs et produits locaux vous y attendent avant la fermeture des boutiques.",
          "chips": [
            "Jusqu'à 19 h 30"
          ]
        },
        {
          "title": "Visite en tram de Lāʻie",
          "subtitle": "",
          "text": "Profitez d'une balade panoramique à travers la ville de Lāʻie et le campus de BYU–Hawaii.\nLa visite comprend également un arrêt de 15 minutes dans les jardins du temple de Lāʻie (Hawaï) de l'Église de Jésus-Christ des Saints des Derniers Jours.",
          "chips": [
            "Toutes les 20 minutes",
            "15 h – 18 h 30",
            "Trajet d'environ 35 minutes"
          ]
        },
        {
          "title": "Hawaiian Journey Theater",
          "subtitle": "Le spectacle de couteau de feu de Jeri",
          "text": "Découvrez l'histoire et la tradition de la danse du couteau de feu avec Jeri, compétiteur de longue date qui a commencé à se produire dès son plus jeune âge.",
          "chips": [
            "Toutes les 30 minutes",
            "13 h 30 – 18 h 30",
            "Dernière séance à 18 h 30"
          ]
        },
        {
          "title": "Polynesian Football Hall of Fame",
          "subtitle": "",
          "text": "Découvrez une galerie qui rend hommage aux légendes polynésiennes du football américain : plaques, photographies, souvenirs, écrans interactifs et mur d'honneur.\nElle se trouve juste en face du Gateway Buffet, dans le Welcome Center du Polynesian Cultural Center.",
          "chips": [
            "Jusqu'à 19 h"
          ]
        }
      ],
      "footNote": "Rien ne presse : savourez d'abord votre dessert !"
    },
    "close": {
      "mention": "Si {name} a rendu votre visite spéciale, vous pouvez mentionner {name} en partageant votre expérience.",
      "ready": "Avant de partir est maintenant disponible.",
      "locked": {
        "text": "Cette section sera disponible un peu plus tard pendant votre visite.\nProfitez de votre repas et revenez dans environ 25 à 30 minutes.",
        "note": "Pas de précipitation — profitez de votre moment avec nous !",
        "soon": "Disponible dans environ {m} min"
      },
      "thanks": {
        "title": "Mahalo, ʻOhana !",
        "text": "Merci d'avoir été parmi nous au Gateway Buffet ce soir. Ce fut un plaisir de vous servir, et nous espérons que vous avez passé un agréable moment.\nN'hésitez pas à vous détendre et à profiter du reste de votre soirée."
      },
      "review": {
        "title": "Partagez votre expérience",
        "text": "Si vous avez un moment, nous serions ravis de connaître votre avis sur votre expérience au Polynesian Cultural Center.\nVotre serveur vous présentera le code QR. Il vous suffit de le scanner et de toucher TripAdvisor pour partager votre avis sur votre repas, votre serveur, les villages, le buffet ou le spectacle du soir.\nVos commentaires aident notre équipe à améliorer sans cesse l'expérience de nos visiteurs, et nous vous remercions sincèrement de prendre le temps de les partager."
      },
      "survey": {
        "title": "Une note pour plus tard",
        "text": "Environ une semaine après votre visite, la personne qui a acheté les billets pourra recevoir du Polynesian Cultural Center un court questionnaire par e-mail sur l'ensemble de l'expérience.\nSi vous le recevez, nous vous serions reconnaissants de prendre un moment pour y donner également votre avis."
      },
      "server": "Votre serveur ce soir :",
      "end": "Mahalo nui loa",
      "qrNote": "Votre serveur vous présentera le code QR dès que vous serez prêts.",
      "endNote": "Merci d'avoir passé une partie de votre journée avec nous.\nMahalo nui loa, et excellente fin de soirée !"
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
    "qr": "Zum Öffnen auf dem Handy scannen",
    "tabs": {
      "guide": "Hinweise",
      "acts": "Aktivitäten",
      "close": "Zum Abschied"
    },
    "guide": {
      "server": "Ihre Bedienung heute:",
      "items": [
        {
          "id": "self",
          "title": "Selbstbedienungsbuffet",
          "text": "Dies ist ein Selbstbedienungsbuffet. Bedienen Sie sich gerne nach Herzenslust – wir wünschen Ihnen ein wunderbares Essen."
        },
        {
          "id": "buffet",
          "title": "Buffetbereiche & Speisen",
          "text": "Das Buffet ist nach Speisekategorien gegliedert, Sie können also beginnen, wo Sie möchten.\nSie finden unter anderem ein Kindermenü, Sirloin-Steak, verschiedene Fleischgerichte, Hähnchen, Ahi-Sashimi (Thunfisch), Poke, Meeresfrüchte, Gemüse, Reis, Salate und Desserts.\nGetränkestationen befinden sich auf beiden Seiten des Gebäudes. Teller stehen unter der Hauptbuffettheke sowie im Salat- und Dessertbereich bereit."
        },
        {
          "id": "icecream",
          "title": "Eis & Dole-Ananas-Softeis",
          "text": "Eisstationen finden Sie auf beiden Seiten des Gebäudes.\nDas Dole-Ananas-Softeis gibt es auf der Hauʻula-Seite. Bei Fragen hilft Ihnen unser Servicepersonal gerne weiter."
        },
        {
          "id": "plates",
          "title": "Teller & Besteck",
          "text": "Teller finden Sie im gesamten Buffetbereich.\nWenn Sie neues Besteck benötigen, fragen Sie bitte unser Servicepersonal – wir bringen es Ihnen gerne."
        },
        {
          "id": "after",
          "title": "Nach dem Essen",
          "text": "Wenn Sie mit einem Teller fertig sind, stellen Sie ihn bitte ordentlich an den Rand Ihres Tisches; unser Personal räumt ihn ab.\nWenn Sie erneut zum Buffet gehen möchten, nehmen Sie bitte jedes Mal einen sauberen Teller."
        },
        {
          "id": "allergy",
          "title": "Lebensmittelallergien",
          "text": "Bei Lebensmittelallergien oder besonderen Ernährungsbedürfnissen finden Sie in unserem {link}Allergen-Leitfaden{/link} Zutatenlisten, Allergeninformationen und die verfügbaren Optionen."
        },
        {
          "id": "restroom",
          "title": "Toiletten",
          "text": "Die Toiletten befinden sich auf der gegenüberliegenden Seite des Gebäudes. Die Damentoilette ist links, die Herrentoilette rechts.\nWenn Sie kurz hinausgehen möchten, lassen Sie sich bitte vorher einen Handstempel geben, damit Sie wieder eingelassen werden können."
        },
        {
          "id": "robot",
          "title": "Servierroboter",
          "text": "Bitte berühren Sie zu Ihrer Sicherheit den Servierroboter nicht und stellen Sie weder Teller noch andere Gegenstände darauf.\nUnser Personal räumt benutzte Teller von Ihrem Tisch ab."
        },
        {
          "id": "charging",
          "title": "Ladestation",
          "text": "In der Nähe des Ausgangs befindet sich eine Handy-Ladestation mit sicheren Schließfächern.\nBitte folgen Sie den Anweisungen an der Station, um Ihr Gerät aufzuladen und die Schließfächer zu nutzen."
        },
        {
          "id": "coupon",
          "title": "Rabattgutscheine",
          "text": "Während Ihres Besuchs erhalten Sie möglicherweise Rabattgutscheine für ausgewählte Geschäfte im Hukilau Marketplace.\nFalls Sie noch keinen erhalten haben, fragen Sie bitte Ihre Bedienung."
        }
      ],
      "foot": "Guten Appetit!",
      "footNote": "Wir wünschen Ihnen eine schöne Zeit bei uns im Gateway Buffet."
    },
    "acts": {
      "head": "Vor der Show",
      "foot": "Genießen Sie Ihre Zeit",
      "show": {
        "title": "Abendshow",
        "text": "Besuchen Sie heute die Abendshow? Die Show beginnt um {start} Uhr abends, Einlass ist ab {gates} Uhr.\nWenn Sie bereits zugewiesene Plätze haben, kommen Sie bitte rechtzeitig, damit Sie in Ruhe Platz nehmen können. Wenn Sie keinen zugewiesenen Platz haben, hilft Ihnen gerne einer unserer Platzanweiser.\nDas Theater ist etwa 5–7 Gehminuten vom Gateway Buffet entfernt."
      },
      "items": [
        {
          "title": "Hukilau Marketplace",
          "subtitle": "",
          "text": "Nehmen Sie sich Zeit, den Hukilau Marketplace mit Geschenken, Snacks, Souvenirs und lokalen Fundstücken zu erkunden, bevor die Geschäfte schließen.",
          "chips": [
            "Bis 19:30 Uhr"
          ]
        },
        {
          "title": "Lāʻie Tram-Tour",
          "subtitle": "",
          "text": "Genießen Sie eine malerische Fahrt durch den Ort Lāʻie und über den Campus der BYU–Hawaii.\nDie Tour umfasst außerdem einen 15-minütigen Halt auf dem Gelände des Lāʻie-Hawaiʻi-Tempels der Kirche Jesu Christi der Heiligen der Letzten Tage.",
          "chips": [
            "Alle 20 Minuten",
            "15:00–18:30 Uhr",
            "Fahrt ca. 35 Minuten"
          ]
        },
        {
          "title": "Hawaiian Journey Theater",
          "subtitle": "Jeris Feuermesser-Show",
          "text": "Entdecken Sie die Geschichte und Tradition des Feuermessertanzes mit Jeri, einem langjährigen Feuermesser-Wettkämpfer, der schon in jungen Jahren auftrat.",
          "chips": [
            "Alle 30 Minuten",
            "13:30–18:30 Uhr",
            "Letzte Show um 18:30 Uhr"
          ]
        },
        {
          "title": "Polynesian Football Hall of Fame",
          "subtitle": "",
          "text": "Entdecken Sie eine Galerie zu Ehren polynesischer Football-Legenden mit Plaketten, Fotografien, Erinnerungsstücken, interaktiven Stationen und der Ehrenwand.\nSie befindet sich direkt gegenüber dem Gateway Buffet im Welcome Center des Polynesian Cultural Center.",
          "chips": [
            "Bis 19:00 Uhr"
          ]
        }
      ],
      "footNote": "Keine Eile – genießen Sie zuerst Ihr Dessert!"
    },
    "close": {
      "mention": "Falls {name} Ihren Besuch zu etwas Besonderem gemacht hat, dürfen Sie {name} gern erwähnen, wenn Sie Ihre Erfahrung teilen.",
      "ready": "Zum Abschied ist jetzt verfügbar.",
      "locked": {
        "text": "Dieser Bereich ist erst etwas später während Ihres Besuchs verfügbar.\nGenießen Sie Ihr Essen und schauen Sie in etwa 25–30 Minuten wieder vorbei.",
        "note": "Keine Eile — genießen Sie die Zeit bei uns!",
        "soon": "Verfügbar in etwa {m} Min."
      },
      "thanks": {
        "title": "Mahalo, ʻOhana!",
        "text": "Vielen Dank, dass Sie heute Abend im Gateway Buffet zu Gast waren. Es war uns eine Freude, Sie zu bedienen, und wir hoffen, Sie haben die Zeit bei uns genossen.\nLehnen Sie sich gerne zurück und genießen Sie den restlichen Abend."
      },
      "review": {
        "title": "Teilen Sie Ihre Erfahrung",
        "text": "Wenn Sie einen Moment Zeit haben, würden wir uns freuen, von Ihrem Erlebnis im Polynesian Cultural Center zu hören.\nIhre Bedienung zeigt Ihnen den QR-Code. Scannen Sie ihn einfach und tippen Sie auf TripAdvisor, um uns Ihre Meinung zu Ihrem Essen, Ihrer Bedienung, den Dörfern, dem Buffet oder der Abendshow mitzuteilen.\nIhr Feedback hilft unserem Team, das Erlebnis unserer Gäste weiter zu verbessern, und wir danken Ihnen herzlich, dass Sie sich die Zeit dafür nehmen."
      },
      "survey": {
        "title": "Ein Hinweis für später",
        "text": "Etwa eine Woche nach Ihrem Besuch erhält die Person, die die Tickets gekauft hat, möglicherweise eine kurze E-Mail-Umfrage des Polynesian Cultural Center zum gesamten Erlebnis.\nFalls Sie diese erhalten, wären wir Ihnen dankbar, wenn Sie sich auch dort einen Moment Zeit für Ihr Feedback nehmen würden."
      },
      "server": "Ihre Bedienung heute Abend:",
      "end": "Mahalo nui loa",
      "qrNote": "Ihre Bedienung zeigt Ihnen den QR-Code, sobald Sie bereit sind.",
      "endNote": "Vielen Dank, dass Sie einen Teil Ihres Tages mit uns verbracht haben.\nMahalo nui loa und noch einen schönen Abend!"
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
    "qr": "Scan om te openen op uw telefoon",
    "tabs": {
      "guide": "Info",
      "acts": "Te doen",
      "close": "Tot ziens"
    },
    "guide": {
      "server": "Uw ober vandaag:",
      "items": [
        {
          "id": "self",
          "title": "Zelfbedieningsbuffet",
          "text": "Dit is een zelfbedieningsbuffet. Neem gerust zoveel als u wilt; wij wensen u een heerlijke maaltijd."
        },
        {
          "id": "buffet",
          "title": "Buffet en gerechten",
          "text": "Het buffet is ingedeeld in verschillende categorieën, dus u kunt beginnen waar u maar wilt.\nU vindt onder meer een kindermenu, entrecote, diverse vleesgerechten, kip, ahi-sashimi (tonijn), poke, zeevruchten, groenten, rijst, salades en desserts.\nDrankstations vindt u aan beide kanten van het gebouw. Borden staan onder het hoofdbuffet en bij de salade- en dessertafdeling."
        },
        {
          "id": "icecream",
          "title": "IJs & Dole-ananassoftijs",
          "text": "Aan beide kanten van het gebouw vindt u ijsstations.\nHet Dole-ananassoftijs vindt u aan de Hauʻula-kant. Vraag gerust een van onze medewerkers om hulp."
        },
        {
          "id": "plates",
          "title": "Borden en bestek",
          "text": "Borden zijn overal in het buffetgedeelte beschikbaar.\nHeeft u nieuw bestek nodig? Vraag het aan een van onze medewerkers; zij brengen het u graag."
        },
        {
          "id": "after",
          "title": "Na de maaltijd",
          "text": "Als u klaar bent met een bord, wilt u het dan netjes aan één kant van de tafel zetten? Ons personeel ruimt het voor u af.\nWilt u nog eens naar het buffet, neem dan alstublieft elke keer een schoon bord."
        },
        {
          "id": "allergy",
          "title": "Voedselallergieën",
          "text": "Heeft u een voedselallergie of een speciaal dieet? Bekijk dan onze {link}allergenengids{/link} met ingrediëntenlijsten, allergeneninformatie en de beschikbare opties."
        },
        {
          "id": "restroom",
          "title": "Toiletten",
          "text": "De toiletten bevinden zich aan de andere kant van het gebouw. Het damestoilet is links, het herentoilet rechts.\nMoet u even naar buiten, laat dan voor vertrek een stempel op uw hand zetten, zodat u weer naar binnen kunt."
        },
        {
          "id": "robot",
          "title": "Bedieningsrobot",
          "text": "Raak voor uw veiligheid de bedieningsrobot niet aan en zet er geen borden of andere voorwerpen op.\nOns personeel haalt gebruikte borden van uw tafel."
        },
        {
          "id": "charging",
          "title": "Oplaadstation",
          "text": "Bij de uitgang staat een oplaadstation voor telefoons met beveiligde kluisjes.\nVolg de instructies bij het station om uw toestel op te laden en de kluisjes te gebruiken."
        },
        {
          "id": "coupon",
          "title": "Kortingsbonnen",
          "text": "Tijdens uw bezoek kunt u kortingsbonnen krijgen voor geselecteerde winkels in de Hukilau Marketplace.\nHeeft u er nog geen gekregen? Vraag er dan gerust een aan uw ober."
        }
      ],
      "foot": "Eet smakelijk!",
      "footNote": "Wij wensen u een fijne tijd bij Gateway Buffet."
    },
    "acts": {
      "head": "Voor de show",
      "foot": "Geniet van uw tijd",
      "show": {
        "title": "Avondshow",
        "text": "Gaat u vanavond naar de avondshow? De show begint om {start} uur 's avonds en de deuren gaan open om {gates} uur.\nHeeft u al toegewezen plaatsen, kom dan op tijd zodat u rustig kunt gaan zitten. Heeft u geen toegewezen plaats, dan helpt een van onze plaatsaanwijzers u graag.\nHet theater ligt op ongeveer 5–7 minuten lopen van Gateway Buffet."
      },
      "items": [
        {
          "title": "Hukilau Marketplace",
          "subtitle": "",
          "text": "Neem de tijd om de Hukilau Marketplace te verkennen voor cadeaus, snacks, souvenirs en lokale vondsten voordat de winkels sluiten.",
          "chips": [
            "Tot 19.30 uur"
          ]
        },
        {
          "title": "Tramtour door Lāʻie",
          "subtitle": "",
          "text": "Geniet van een schilderachtige rit door het stadje Lāʻie en over de campus van BYU–Hawaii.\nDe tour omvat ook een stop van 15 minuten bij het terrein van de Lāʻie Hawaiʻi-tempel van De Kerk van Jezus Christus van de Heiligen der Laatste Dagen.",
          "chips": [
            "Elke 20 minuten",
            "15.00–18.30 uur",
            "Rit van ca. 35 minuten"
          ]
        },
        {
          "title": "Hawaiian Journey Theater",
          "subtitle": "Jeri's vuurmesshow",
          "text": "Ontdek het verhaal en de traditie van de vuurmesdans via Jeri, een ervaren vuurmesdanser die al op jonge leeftijd begon met optreden.",
          "chips": [
            "Elke 30 minuten",
            "13.30–18.30 uur",
            "Laatste show om 18.30 uur"
          ]
        },
        {
          "title": "Polynesian Football Hall of Fame",
          "subtitle": "",
          "text": "Bekijk een galerie ter ere van Polynesische footballlegendes, met plaquettes, foto's, aandenkens, interactieve schermen en de erewand.\nDe galerie ligt recht tegenover Gateway Buffet, in het Welcome Center van het Polynesian Cultural Center.",
          "chips": [
            "Tot 19.00 uur"
          ]
        }
      ],
      "footNote": "Geen haast – geniet eerst van uw dessert!"
    },
    "close": {
      "mention": "Als {name} uw bezoek bijzonder heeft gemaakt, mag u {name} gerust noemen wanneer u uw ervaring deelt.",
      "ready": "Tot ziens is nu beschikbaar.",
      "locked": {
        "text": "Dit onderdeel wordt iets later tijdens uw bezoek beschikbaar.\nGeniet van uw maaltijd en kijk over ongeveer 25–30 minuten nog eens terug.",
        "note": "Geen haast — geniet van uw tijd bij ons!",
        "soon": "Beschikbaar over ongeveer {m} min"
      },
      "thanks": {
        "title": "Mahalo, ʻOhana!",
        "text": "Hartelijk dank dat u vanavond bij Gateway Buffet te gast was. Het was ons een genoegen u te bedienen, en we hopen dat u van uw tijd bij ons heeft genoten.\nNeemt u gerust de tijd om te ontspannen en te genieten van de rest van uw avond."
      },
      "review": {
        "title": "Deel uw ervaring",
        "text": "Heeft u even tijd? Dan horen wij graag hoe u uw bezoek aan het Polynesian Cultural Center heeft ervaren.\nUw ober laat u de QR-code zien. Scan deze en tik op TripAdvisor om uw mening te delen over uw maaltijd, uw ober, de dorpen, het buffet of de avondshow.\nUw feedback helpt ons team de ervaring van onze gasten steeds te verbeteren, en wij waarderen het zeer dat u de tijd neemt om die te delen."
      },
      "survey": {
        "title": "Een bericht voor later",
        "text": "Ongeveer een week na uw bezoek kan degene die de tickets heeft gekocht een korte e-mailenquête van het Polynesian Cultural Center ontvangen over de hele ervaring.\nOntvangt u deze, dan stellen wij het zeer op prijs als u ook daar even uw feedback wilt geven."
      },
      "server": "Uw ober vanavond:",
      "end": "Mahalo nui loa",
      "qrNote": "Uw ober laat u de QR-code zien wanneer u er klaar voor bent.",
      "endNote": "Hartelijk dank dat u een deel van uw dag met ons heeft doorgebracht.\nMahalo nui loa, en nog een fijne avond!"
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
    "qr": "Quét để mở trên điện thoại",
    "tabs": {
      "guide": "Hướng dẫn",
      "acts": "Hoạt động",
      "close": "Trước khi về"
    },
    "guide": {
      "server": "Người phục vụ hôm nay:",
      "items": [
        {
          "id": "self",
          "title": "Buffet tự phục vụ",
          "text": "Đây là buffet tự phục vụ. Quý khách cứ tự nhiên dùng bao nhiêu tùy thích, chúc quý khách có một bữa ăn thật ngon miệng."
        },
        {
          "id": "buffet",
          "title": "Khu buffet và món ăn",
          "text": "Buffet được sắp xếp theo từng nhóm món, quý khách có thể bắt đầu ở bất kỳ khu nào.\nQuý khách sẽ tìm thấy các món như thực đơn trẻ em, bít tết thăn bò, các món thịt, gà, sashimi cá ngừ, poke, hải sản, rau, cơm, salad và món tráng miệng.\nQuầy đồ uống nằm ở hai bên tòa nhà. Đĩa được đặt bên dưới quầy buffet chính và tại khu salad & tráng miệng."
        },
        {
          "id": "icecream",
          "title": "Kem & kem tươi dứa Dole",
          "text": "Quầy kem có ở cả hai bên tòa nhà.\nKem tươi vị dứa Dole có ở phía Hauʻula. Quý khách vui lòng nhờ nhân viên phục vụ hỗ trợ."
        },
        {
          "id": "plates",
          "title": "Đĩa và dụng cụ ăn",
          "text": "Đĩa có sẵn ở khắp khu buffet.\nNếu cần bộ dụng cụ ăn mới, quý khách vui lòng hỏi nhân viên phục vụ, chúng tôi rất sẵn lòng mang đến."
        },
        {
          "id": "after",
          "title": "Sau khi ăn",
          "text": "Khi dùng xong một đĩa, quý khách vui lòng đặt gọn sang một bên bàn, nhân viên sẽ đến dọn.\nNếu muốn quay lại quầy buffet, xin vui lòng dùng đĩa sạch mỗi lần."
        },
        {
          "id": "allergy",
          "title": "Dị ứng thực phẩm",
          "text": "Nếu quý khách bị dị ứng thực phẩm hoặc có yêu cầu đặc biệt về ăn uống, vui lòng {link}xem hướng dẫn về dị ứng{/link} để biết thành phần, thông tin về chất gây dị ứng và các lựa chọn hiện có."
        },
        {
          "id": "restroom",
          "title": "Nhà vệ sinh",
          "text": "Nhà vệ sinh nằm ở phía bên kia tòa nhà. Nhà vệ sinh nữ ở bên trái, nhà vệ sinh nam ở bên phải.\nNếu quý khách cần ra ngoài một lát, vui lòng đóng dấu tay trước khi ra để có thể vào lại."
        },
        {
          "id": "robot",
          "title": "Robot phục vụ",
          "text": "Vì sự an toàn của quý khách, vui lòng không chạm vào robot phục vụ hoặc đặt đĩa hay đồ vật khác lên robot.\nNhân viên của chúng tôi sẽ dọn đĩa đã dùng tại bàn."
        },
        {
          "id": "charging",
          "title": "Trạm sạc điện thoại",
          "text": "Trạm sạc điện thoại có tủ khóa an toàn nằm gần cửa ra.\nQuý khách vui lòng làm theo hướng dẫn tại trạm để sạc thiết bị và sử dụng tủ khóa."
        },
        {
          "id": "coupon",
          "title": "Phiếu giảm giá",
          "text": "Trong thời gian tham quan, quý khách có thể nhận được phiếu giảm giá cho một số cửa hàng tại Hukilau Marketplace.\nNếu chưa nhận được, quý khách vui lòng hỏi người phục vụ."
        }
      ],
      "foot": "Chúc quý khách ngon miệng!",
      "footNote": "Chúc quý khách có khoảng thời gian thật vui vẻ tại Gateway Buffet."
    },
    "acts": {
      "head": "Trước giờ biểu diễn",
      "foot": "Tận hưởng thời gian",
      "show": {
        "title": "Chương trình biểu diễn tối",
        "text": "Quý khách sẽ xem chương trình biểu diễn tối nay chứ? Chương trình bắt đầu lúc {start} tối, cổng mở lúc {gates} tối.\nNếu quý khách đã có chỗ ngồi được chỉ định, vui lòng đến sớm để có thời gian ổn định chỗ ngồi. Nếu chưa có chỗ ngồi được chỉ định, nhân viên hướng dẫn của chúng tôi sẽ sẵn lòng hỗ trợ.\nNhà hát cách Gateway Buffet khoảng 5–7 phút đi bộ."
      },
      "items": [
        {
          "title": "Hukilau Marketplace",
          "subtitle": "",
          "text": "Quý khách hãy dành chút thời gian khám phá Hukilau Marketplace với quà tặng, đồ ăn vặt, quà lưu niệm và sản phẩm địa phương trước khi các cửa hàng đóng cửa.",
          "chips": [
            "Đến 7:30 tối"
          ]
        },
        {
          "title": "Tour xe điện Lāʻie",
          "subtitle": "",
          "text": "Tận hưởng chuyến đi ngắm cảnh qua thị trấn Lāʻie và khuôn viên trường BYU–Hawaii.\nChuyến tham quan còn có điểm dừng 15 phút tại khuôn viên Đền Thờ Lāʻie Hawaiʻi của Giáo Hội Các Thánh Hữu Ngày Sau của Chúa Giê Su Ky Tô.",
          "chips": [
            "Mỗi 20 phút",
            "3:00–6:30 chiều",
            "Khoảng 35 phút"
          ]
        },
        {
          "title": "Hawaiian Journey Theater",
          "subtitle": "Màn trình diễn dao lửa của Jeri",
          "text": "Khám phá câu chuyện và truyền thống múa dao lửa qua Jeri, một vận động viên dao lửa kỳ cựu đã bắt đầu biểu diễn từ khi còn nhỏ.",
          "chips": [
            "Mỗi 30 phút",
            "1:30–6:30 chiều",
            "Suất cuối lúc 6:30 tối"
          ]
        },
        {
          "title": "Đại sảnh Danh vọng Bóng bầu dục Polynesia",
          "subtitle": "",
          "text": "Tham quan phòng trưng bày tôn vinh các huyền thoại bóng bầu dục Polynesia với bảng vinh danh, ảnh, kỷ vật, màn hình tương tác và Bức tường Danh dự.\nPhòng trưng bày nằm ngay đối diện Gateway Buffet, bên trong Welcome Center của Polynesian Cultural Center.",
          "chips": [
            "Đến 7:00 tối"
          ]
        }
      ],
      "footNote": "Không cần vội – quý khách cứ thưởng thức món tráng miệng trước nhé!"
    },
    "close": {
      "mention": "Nếu {name} đã giúp chuyến thăm của quý khách thêm đặc biệt, quý khách có thể nhắc đến {name} khi chia sẻ trải nghiệm.",
      "ready": "Mục Trước khi về đã mở.",
      "locked": {
        "text": "Phần này sẽ mở sau một lúc nữa trong buổi tham quan của quý khách.\nXin cứ thong thả dùng bữa và quay lại sau khoảng 25–30 phút.",
        "note": "Không cần vội — chúc quý khách có khoảng thời gian thật vui bên chúng tôi!",
        "soon": "Mở sau khoảng {m} phút"
      },
      "thanks": {
        "title": "Mahalo, ʻOhana!",
        "text": "Cảm ơn quý khách đã dùng bữa cùng chúng tôi tại Gateway Buffet tối nay. Thật vinh hạnh khi được phục vụ quý khách, mong rằng quý khách đã có khoảng thời gian vui vẻ cùng chúng tôi.\nXin quý khách cứ thư giãn và tận hưởng phần còn lại của buổi tối."
      },
      "review": {
        "title": "Chia sẻ trải nghiệm",
        "text": "Nếu có thời gian, chúng tôi rất mong được nghe về trải nghiệm của quý khách tại Polynesian Cultural Center.\nNgười phục vụ sẽ đưa mã QR cho quý khách. Quý khách chỉ cần quét mã và chọn TripAdvisor để chia sẻ cảm nhận về bữa ăn, người phục vụ, các ngôi làng, bữa buffet hoặc chương trình biểu diễn tối.\nÝ kiến của quý khách giúp đội ngũ chúng tôi không ngừng nâng cao trải nghiệm của khách tham quan. Chúng tôi chân thành cảm ơn quý khách đã dành thời gian chia sẻ."
      },
      "survey": {
        "title": "Lưu ý sau chuyến đi",
        "text": "Khoảng một tuần sau chuyến tham quan, người đã mua vé có thể nhận được một email khảo sát ngắn từ Polynesian Cultural Center về trải nghiệm chung.\nNếu nhận được, chúng tôi rất biết ơn nếu quý khách dành chút thời gian chia sẻ ý kiến tại đó."
      },
      "server": "Người phục vụ tối nay:",
      "end": "Mahalo nui loa",
      "qrNote": "Người phục vụ sẽ đưa mã QR khi quý khách sẵn sàng.",
      "endNote": "Cảm ơn quý khách đã dành một phần thời gian trong ngày cùng chúng tôi.\nMahalo nui loa! Chúc quý khách buổi tối thật vui vẻ!"
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
    "qr": "扫码在手机上打开",
    "tabs": {
      "guide": "用餐须知",
      "acts": "表演前活动",
      "close": "离开之前"
    },
    "guide": {
      "server": "今天为您服务的是：",
      "items": [
        {
          "id": "self",
          "title": "自助餐",
          "text": "这里是自助餐厅。请随意取用您喜欢的食物，祝您用餐愉快。"
        },
        {
          "id": "buffet",
          "title": "自助区与菜品",
          "text": "自助餐按不同菜品类别分区摆放，您可以从任意区域开始取餐。\n菜品包括儿童餐、西冷牛排、各式肉类、鸡肉、金枪鱼生鱼片、夏威夷拌生鱼（poke）、海鲜、蔬菜、米饭、沙拉和甜点等。\n饮料区位于建筑两侧。餐盘放在主自助餐台下方以及沙拉和甜点区。"
        },
        {
          "id": "icecream",
          "title": "冰淇淋与 Dole 菠萝软冰淇淋",
          "text": "建筑两侧均设有冰淇淋区。\nDole 菠萝软冰淇淋位于 Hauʻula 一侧。如需帮助，请询问服务员。"
        },
        {
          "id": "plates",
          "title": "餐盘与餐具",
          "text": "整个自助餐区均有餐盘可供取用。\n如需更换新的餐具，请告诉我们的服务员，他们很乐意为您提供。"
        },
        {
          "id": "after",
          "title": "用餐后",
          "text": "用完的餐盘请整齐放在桌子一侧，工作人员会来为您收走。\n如需再次取餐，请每次使用干净的餐盘。"
        },
        {
          "id": "allergy",
          "title": "食物过敏",
          "text": "如果您有食物过敏或饮食方面的顾虑，请{link}查看过敏信息指南{/link}，了解配料表、过敏原信息以及可选的菜品。"
        },
        {
          "id": "restroom",
          "title": "洗手间",
          "text": "洗手间位于建筑的另一侧，女洗手间在左边，男洗手间在右边。\n如需暂时外出，请在离开前于手上盖章，以便重新入场。"
        },
        {
          "id": "robot",
          "title": "送餐机器人",
          "text": "为了您的安全，请勿触碰送餐机器人，也请勿在上面放置餐盘或其他物品。\n工作人员会到您的餐桌收取用过的餐盘。"
        },
        {
          "id": "charging",
          "title": "充电站",
          "text": "出口门附近设有配备安全储物柜的手机充电站。\n请按照充电站张贴的说明为设备充电并使用储物柜。"
        },
        {
          "id": "coupon",
          "title": "优惠券",
          "text": "您在参观期间可能会获得 Hukilau Marketplace 部分商店的优惠券。\n如果您还没有收到，请向您的服务员索取。"
        }
      ],
      "foot": "祝您用餐愉快！",
      "footNote": "希望您在 Gateway Buffet 度过美好的时光。"
    },
    "acts": {
      "head": "表演开始前可以做的事",
      "foot": "尽情享受时光",
      "show": {
        "title": "夜间表演",
        "text": "今晚要去观看夜间表演吗？表演于晚上{start}开始，晚上{gates}开放入场。\n如果您已有指定座位，请提前到场，以便从容入座。如果您没有指定座位，我们的引座员很乐意为您提供帮助。\n剧场距离 Gateway Buffet 步行约5–7分钟。"
      },
      "items": [
        {
          "title": "Hukilau 市集",
          "subtitle": "",
          "text": "在商店关门前，不妨花些时间逛逛 Hukilau 市集，选购礼品、零食、纪念品和当地特色商品。",
          "chips": [
            "营业至晚上7:30"
          ]
        },
        {
          "title": "Lāʻie 游览电车",
          "subtitle": "",
          "text": "乘车欣赏 Lāʻie 小镇和杨百翰大学夏威夷分校校园的风光。\n途中还将在耶稣基督后期圣徒教会 Lāʻie 夏威夷圣殿园区停留15分钟。",
          "chips": [
            "每20分钟一班",
            "下午3:00–6:30",
            "全程约35分钟"
          ]
        },
        {
          "title": "Hawaiian Journey 剧院",
          "subtitle": "Jeri 的火刀表演",
          "text": "跟随资深火刀舞参赛者 Jeri，了解火刀舞的故事与传统。他从小就开始登台表演。",
          "chips": [
            "每30分钟一场",
            "下午1:30–6:30",
            "末场：晚上6:30"
          ]
        },
        {
          "title": "波利尼西亚美式橄榄球名人堂",
          "subtitle": "",
          "text": "参观致敬波利尼西亚美式橄榄球传奇人物的展馆，馆内有纪念牌匾、照片、纪念品、互动展示和荣誉墙。\n展馆就在 Gateway Buffet 对面的 Polynesian Cultural Center 游客中心内。",
          "chips": [
            "开放至晚上7:00"
          ]
        }
      ],
      "footNote": "不用着急，先享用甜点吧！"
    },
    "close": {
      "mention": "如果 {name} 让您的这次到访更加难忘，欢迎您在分享体验时提到 {name}。",
      "ready": "“离开之前”现已开放。",
      "locked": {
        "text": "此部分将在您用餐稍晚些时候开放。\n请先享用美食，约 25–30 分钟后再回来看看。",
        "note": "不着急，请尽情享受与我们共度的时光！",
        "soon": "约 {m} 分钟后开放"
      },
      "thanks": {
        "title": "Mahalo，ʻOhana！",
        "text": "感谢您今晚光临 Gateway Buffet。很荣幸为您服务，希望您在这里度过了愉快的时光。\n请放松心情，尽情享受今晚余下的时光。"
      },
      "review": {
        "title": "分享您的体验",
        "text": "如果您方便，我们很想听听您在 Polynesian Cultural Center 的体验。\n您的服务员会为您出示二维码。只需扫描并点击 TripAdvisor，即可分享您对餐点、服务员、各个村落、自助餐或夜间表演的感受。\n您的反馈能帮助我们的团队不断提升游客体验，衷心感谢您抽空分享。"
      },
      "survey": {
        "title": "温馨提示",
        "text": "参观结束约一周后，购票人可能会收到 Polynesian Cultural Center 发送的一份简短电子邮件问卷，询问此次的整体体验。\n如果您收到问卷，诚挚邀请您抽出片刻时间，在问卷中分享您的意见。"
      },
      "server": "今晚为您服务的是：",
      "end": "Mahalo nui loa",
      "qrNote": "当您准备好时，服务员会为您出示二维码。",
      "endNote": "感谢您今天与我们共度这段时光。\nMahalo nui loa！祝您晚上愉快！"
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
    "qr": "掃描在手機上開啟",
    "tabs": {
      "guide": "用餐須知",
      "acts": "表演前活動",
      "close": "離開之前"
    },
    "guide": {
      "server": "今天為您服務的是：",
      "items": [
        {
          "id": "self",
          "title": "自助餐",
          "text": "這裡是自助餐廳。請隨意取用您喜歡的餐點，祝您用餐愉快。"
        },
        {
          "id": "buffet",
          "title": "自助區與菜色",
          "text": "自助餐依不同菜色類別分區擺放，您可以從任何區域開始取餐。\n菜色包括兒童餐、沙朗牛排、各式肉類、雞肉、鮪魚生魚片、夏威夷拌生魚（poke）、海鮮、蔬菜、白飯、沙拉和甜點等。\n飲料區位於建築兩側。餐盤放在主自助餐檯下方以及沙拉和甜點區。"
        },
        {
          "id": "icecream",
          "title": "冰淇淋與 Dole 鳳梨霜淇淋",
          "text": "建築兩側都設有冰淇淋區。\nDole 鳳梨霜淇淋位於 Hauʻula 那一側。如需協助，請詢問服務人員。"
        },
        {
          "id": "plates",
          "title": "餐盤與餐具",
          "text": "整個自助餐區都有餐盤可供取用。\n如需更換新的餐具，請告訴我們的服務人員，他們很樂意為您提供。"
        },
        {
          "id": "after",
          "title": "用餐後",
          "text": "用完的餐盤請整齊放在桌子一側，工作人員會來為您收走。\n如需再次取餐，請每次使用乾淨的餐盤。"
        },
        {
          "id": "allergy",
          "title": "食物過敏",
          "text": "如果您有食物過敏或飲食上的顧慮，請{link}查看過敏資訊指南{/link}，了解成分表、過敏原資訊以及可選擇的餐點。"
        },
        {
          "id": "restroom",
          "title": "洗手間",
          "text": "洗手間位於建築的另一側，女洗手間在左邊，男洗手間在右邊。\n如需暫時外出，請在離開前於手上蓋章，以便重新入場。"
        },
        {
          "id": "robot",
          "title": "送餐機器人",
          "text": "為了您的安全，請勿觸碰送餐機器人，也請勿在上面放置餐盤或其他物品。\n工作人員會到您的餐桌收取用過的餐盤。"
        },
        {
          "id": "charging",
          "title": "充電站",
          "text": "出口門附近設有附安全置物櫃的手機充電站。\n請依照充電站張貼的說明為裝置充電並使用置物櫃。"
        },
        {
          "id": "coupon",
          "title": "優惠券",
          "text": "您在參觀期間可能會獲得 Hukilau Marketplace 部分商店的優惠券。\n如果您還沒有收到，請向您的服務人員索取。"
        }
      ],
      "foot": "祝您用餐愉快！",
      "footNote": "希望您在 Gateway Buffet 度過美好的時光。"
    },
    "acts": {
      "head": "表演開始前可以做的事",
      "foot": "盡情享受時光",
      "show": {
        "title": "夜間表演",
        "text": "今晚要去觀賞夜間表演嗎？表演於晚上{start}開始，晚上{gates}開放入場。\n如果您已有指定座位，請提早到場，以便從容入座。如果您沒有指定座位，我們的帶位人員很樂意為您提供協助。\n劇場距離 Gateway Buffet 步行約5–7分鐘。"
      },
      "items": [
        {
          "title": "Hukilau 市集",
          "subtitle": "",
          "text": "在商店打烊前，不妨花點時間逛逛 Hukilau 市集，選購禮品、零食、紀念品和在地特色商品。",
          "chips": [
            "營業至晚上7:30"
          ]
        },
        {
          "title": "Lāʻie 遊覽電車",
          "subtitle": "",
          "text": "搭車欣賞 Lāʻie 小鎮和楊百翰大學夏威夷分校校園的風光。\n途中還會在耶穌基督後期聖徒教會 Lāʻie 夏威夷聖殿園區停留15分鐘。",
          "chips": [
            "每20分鐘一班",
            "下午3:00–6:30",
            "全程約35分鐘"
          ]
        },
        {
          "title": "Hawaiian Journey 劇院",
          "subtitle": "Jeri 的火刀表演",
          "text": "跟隨資深火刀舞參賽者 Jeri，認識火刀舞的故事與傳統。他從小就開始登台表演。",
          "chips": [
            "每30分鐘一場",
            "下午1:30–6:30",
            "末場：晚上6:30"
          ]
        },
        {
          "title": "玻里尼西亞美式足球名人堂",
          "subtitle": "",
          "text": "參觀向玻里尼西亞美式足球傳奇人物致敬的展館，館內有紀念牌匾、照片、紀念品、互動展示和榮譽牆。\n展館就在 Gateway Buffet 對面的 Polynesian Cultural Center 遊客中心內。",
          "chips": [
            "開放至晚上7:00"
          ]
        }
      ],
      "footNote": "不用急，先享用甜點吧！"
    },
    "close": {
      "mention": "如果 {name} 讓您這次的到訪更加難忘，歡迎您在分享體驗時提到 {name}。",
      "ready": "「離開之前」現已開放。",
      "locked": {
        "text": "此部分將在您用餐稍晚些時候開放。\n請先享用美食，約 25–30 分鐘後再回來看看。",
        "note": "不著急，請盡情享受與我們共度的時光！",
        "soon": "約 {m} 分鐘後開放"
      },
      "thanks": {
        "title": "Mahalo，ʻOhana！",
        "text": "感謝您今晚光臨 Gateway Buffet。很榮幸為您服務，希望您在這裡度過了愉快的時光。\n請放鬆心情，盡情享受今晚接下來的時光。"
      },
      "review": {
        "title": "分享您的體驗",
        "text": "如果您方便，我們很想聽聽您在 Polynesian Cultural Center 的體驗。\n您的服務人員會為您出示QR碼。只要掃描並點擊 TripAdvisor，即可分享您對餐點、服務人員、各個村落、自助餐或夜間表演的感受。\n您的回饋能幫助我們的團隊持續提升遊客體驗，衷心感謝您撥空分享。"
      },
      "survey": {
        "title": "貼心提醒",
        "text": "參觀結束約一週後，購票人可能會收到 Polynesian Cultural Center 寄出的一份簡短電子郵件問卷，詢問此次的整體體驗。\n如果您收到問卷，誠摯邀請您撥出片刻時間，在問卷中分享您的意見。"
      },
      "server": "今晚為您服務的是：",
      "end": "Mahalo nui loa",
      "qrNote": "當您準備好時，服務人員會為您出示QR碼。",
      "endNote": "感謝您今天與我們共度這段時光。\nMahalo nui loa！祝您有個愉快的夜晚！"
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
    "qr": "스캔하여 휴대폰에서 열기",
    "tabs": {
      "guide": "이용 안내",
      "acts": "즐길 거리",
      "close": "떠나시기 전에"
    },
    "guide": {
      "server": "오늘 담당 서버:",
      "items": [
        {
          "id": "self",
          "title": "셀프 서비스 뷔페",
          "text": "이곳은 셀프 서비스 뷔페입니다. 원하시는 만큼 마음껏 드시고, 즐거운 식사 되세요."
        },
        {
          "id": "buffet",
          "title": "뷔페 구역 및 음식 종류",
          "text": "뷔페는 음식 종류별로 구역이 나뉘어 있으니, 원하시는 곳부터 자유롭게 이용하세요.\n어린이 메뉴, 등심 스테이크, 다양한 고기 요리, 닭고기, 참치 사시미, 포케, 해산물, 채소, 밥, 샐러드, 디저트 등이 준비되어 있습니다.\n음료 코너는 건물 양쪽에 있습니다. 접시는 메인 뷔페 라인 아래쪽과 샐러드 및 디저트 구역에 있습니다."
        },
        {
          "id": "icecream",
          "title": "아이스크림 & Dole 파인애플 소프트아이스크림",
          "text": "아이스크림 코너는 건물 양쪽에 있습니다.\nDole 파인애플 소프트아이스크림은 하우울라(Hauʻula) 쪽에 있습니다. 도움이 필요하시면 서버에게 말씀해 주세요."
        },
        {
          "id": "plates",
          "title": "접시와 식기류",
          "text": "접시는 뷔페 구역 곳곳에 준비되어 있습니다.\n새 식기가 필요하시면 서버에게 말씀해 주세요. 기꺼이 가져다 드리겠습니다."
        },
        {
          "id": "after",
          "title": "식사 후",
          "text": "다 드신 접시는 테이블 한쪽에 가지런히 놓아 주시면 직원이 수거해 드립니다.\n뷔페를 다시 이용하실 때는 매번 깨끗한 접시를 사용해 주세요."
        },
        {
          "id": "allergy",
          "title": "식품 알레르기",
          "text": "식품 알레르기나 식이 관련 문의 사항이 있으시면 {link}알레르기 안내 페이지{/link}에서 재료 목록, 알레르기 정보, 이용 가능한 메뉴를 확인해 주세요."
        },
        {
          "id": "restroom",
          "title": "화장실",
          "text": "화장실은 건물 반대편에 있습니다. 여성 화장실은 왼쪽, 남성 화장실은 오른쪽에 있습니다.\n잠시 밖으로 나가실 경우, 다시 입장하실 수 있도록 나가시기 전에 손등에 스탬프를 받아 주세요."
        },
        {
          "id": "robot",
          "title": "서빙 로봇",
          "text": "안전을 위해 서빙 로봇을 만지거나 로봇 위에 접시나 기타 물건을 올리지 말아 주세요.\n사용하신 접시는 직원이 테이블에서 수거해 드립니다."
        },
        {
          "id": "charging",
          "title": "충전 스테이션",
          "text": "출구 근처에 보안 사물함을 갖춘 휴대폰 충전 스테이션이 마련되어 있습니다.\n스테이션에 안내된 방법에 따라 기기를 충전하고 사물함을 이용해 주세요."
        },
        {
          "id": "coupon",
          "title": "할인 쿠폰",
          "text": "방문 중 후클라우 마켓플레이스 내 일부 매장에서 사용할 수 있는 할인 쿠폰을 받으실 수 있습니다.\n아직 받지 못하셨다면 담당 서버에게 요청해 주세요."
        }
      ],
      "foot": "맛있는 식사 되세요!",
      "footNote": "Gateway Buffet에서 즐거운 시간 보내시길 바랍니다."
    },
    "acts": {
      "head": "쇼 시작 전 즐길 거리",
      "foot": "즐거운 시간 보내세요",
      "show": {
        "title": "나이트 쇼",
        "text": "오늘 나이트 쇼를 관람하시나요? 쇼는 저녁 {start}에 시작하며, 입장은 저녁 {gates}부터 가능합니다.\n이미 지정 좌석이 있으시다면 여유 있게 자리에 앉으실 수 있도록 미리 도착해 주세요. 지정 좌석이 없으시다면 안내원이 기꺼이 도와드리겠습니다.\n극장은 Gateway Buffet에서 도보로 약 5~7분 거리에 있습니다."
      },
      "items": [
        {
          "title": "후클라우 마켓플레이스",
          "subtitle": "",
          "text": "상점이 문을 닫기 전에 후클라우 마켓플레이스를 둘러보며 선물, 간식, 기념품과 현지 특산품을 만나 보세요.",
          "chips": [
            "저녁 7시 30분까지"
          ]
        },
        {
          "title": "라이에 트램 투어",
          "subtitle": "",
          "text": "라이에 마을과 BYU–하와이 캠퍼스를 둘러보는 경치 좋은 트램 투어를 즐겨 보세요.\n투어 중에는 예수 그리스도 후기 성도 교회 라이에 하와이 성전 부지에서 15분간 머무릅니다.",
          "chips": [
            "20분 간격",
            "오후 3:00–6:30",
            "약 35분 소요"
          ]
        },
        {
          "title": "하와이안 저니 극장",
          "subtitle": "제리의 파이어 나이프 쇼",
          "text": "어린 시절부터 무대에 서 온 베테랑 파이어 나이프 선수 제리와 함께 파이어 나이프 댄스의 이야기와 전통을 만나 보세요.",
          "chips": [
            "30분 간격",
            "오후 1:30–6:30",
            "마지막 공연 오후 6:30"
          ]
        },
        {
          "title": "폴리네시안 풋볼 명예의 전당",
          "subtitle": "",
          "text": "명판, 사진, 기념품, 인터랙티브 전시, 명예의 벽으로 폴리네시아 풋볼 전설들을 기리는 갤러리를 둘러보세요.\nGateway Buffet 바로 맞은편 Polynesian Cultural Center 웰컴 센터 안에 있습니다.",
          "chips": [
            "저녁 7시까지"
          ]
        }
      ],
      "footNote": "서두르지 마시고 디저트 먼저 즐기세요!"
    },
    "close": {
      "mention": "{name}님이 방문을 특별하게 만들어 드렸다면, 후기를 남기실 때 {name}님을 언급해 주셔도 좋습니다.",
      "ready": "“떠나시기 전에”가 열렸습니다.",
      "locked": {
        "text": "이 섹션은 방문 중 조금 뒤에 열립니다.\n식사를 즐기시고 25~30분쯤 지나 다시 확인해 주세요.",
        "note": "서두르지 마시고, 저희와 함께하는 시간을 즐겨 주세요!",
        "soon": "약 {m}분 후에 열립니다"
      },
      "thanks": {
        "title": "Mahalo, ʻOhana!",
        "text": "오늘 저녁 Gateway Buffet를 찾아주셔서 진심으로 감사드립니다. 여러분을 모실 수 있어 기뻤으며, 즐거운 시간 되셨기를 바랍니다.\n편안히 쉬시면서 남은 저녁 시간도 즐겁게 보내세요."
      },
      "review": {
        "title": "경험을 들려주세요",
        "text": "잠시 시간이 되신다면 Polynesian Cultural Center에서의 경험을 들려주세요.\n담당 서버가 QR 코드를 보여 드립니다. QR 코드를 스캔하고 TripAdvisor를 눌러 식사, 담당 서버, 빌리지, 뷔페, 나이트 쇼에 대한 의견을 남겨 주세요.\n여러분의 소중한 의견은 저희 팀이 방문객 경험을 계속 개선하는 데 큰 도움이 됩니다. 시간을 내어 주셔서 진심으로 감사드립니다."
      },
      "survey": {
        "title": "나중에 받으실 안내",
        "text": "방문 후 약 일주일 뒤, 티켓을 구매하신 분께 Polynesian Cultural Center에서 전반적인 경험에 대한 짧은 이메일 설문을 보내드릴 수 있습니다.\n설문을 받으시면 잠시 시간을 내어 그곳에도 의견을 남겨 주시면 감사하겠습니다."
      },
      "server": "오늘 담당 서버:",
      "end": "Mahalo nui loa",
      "qrNote": "준비되시면 담당 서버가 QR 코드를 보여 드립니다.",
      "endNote": "오늘 하루의 소중한 시간을 저희와 함께해 주셔서 감사합니다.\nMahalo nui loa! 즐거운 저녁 보내세요!"
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
    "qr": "スマホで開くにはスキャン",
    "tabs": {
      "guide": "ご利用案内",
      "acts": "おすすめ",
      "close": "お帰りの前に"
    },
    "guide": {
      "server": "本日の担当：",
      "items": [
        {
          "id": "self",
          "title": "セルフサービスのビュッフェ",
          "text": "当店はセルフサービスのビュッフェです。お好きなだけお料理をお楽しみいただき、素敵なお食事のひとときをお過ごしください。"
        },
        {
          "id": "buffet",
          "title": "ビュッフェエリアとお料理",
          "text": "ビュッフェは料理の種類ごとにエリアが分かれておりますので、お好きなところからお取りください。\nキッズメニュー、サーロインステーキ、各種肉料理、チキン、アヒ（マグロ）の刺身、ポキ、シーフード、野菜、ご飯、サラダ、デザートなどをご用意しています。\nドリンクコーナーは建物の両側にございます。お皿はメインのビュッフェラインの下段と、サラダ・デザートエリアにございます。"
        },
        {
          "id": "icecream",
          "title": "アイスクリーム＆Doleパイナップルソフトクリーム",
          "text": "アイスクリームコーナーは建物の両側にございます。\nDoleパイナップルソフトクリームはハウウラ（Hauʻula）側にございます。スタッフにお声がけください。"
        },
        {
          "id": "plates",
          "title": "お皿とカトラリー",
          "text": "お皿はビュッフェエリア内の各所にご用意しております。\n新しいカトラリーが必要な場合は、スタッフにお申し付けください。喜んでお持ちいたします。"
        },
        {
          "id": "after",
          "title": "お食事の後",
          "text": "お済みのお皿は、テーブルの端にまとめて置いていただければ、スタッフが回収いたします。\nおかわりの際は、毎回新しいお皿をお使いください。"
        },
        {
          "id": "allergy",
          "title": "食物アレルギー",
          "text": "食物アレルギーや食事制限のある方は、{link}アレルギー情報ページ{/link}で原材料・アレルギー情報・ご利用いただけるメニューをご確認ください。"
        },
        {
          "id": "restroom",
          "title": "お手洗い",
          "text": "お手洗いは建物の反対側にございます。女性用は左側、男性用は右側です。\n一時的に外に出られる場合は、再入場のため、お出かけ前に手にスタンプを押してもらってください。"
        },
        {
          "id": "robot",
          "title": "配膳ロボット",
          "text": "安全のため、配膳ロボットに触れたり、お皿やその他の物を載せたりしないでください。\n使用済みのお皿はスタッフがテーブルから回収いたします。"
        },
        {
          "id": "charging",
          "title": "充電ステーション",
          "text": "出口付近に、安全なロッカー付きのスマートフォン充電ステーションがございます。\nステーションに掲示されている案内に従って、充電とロッカーをご利用ください。"
        },
        {
          "id": "coupon",
          "title": "割引クーポン",
          "text": "ご滞在中に、フキラウ・マーケットプレイス内の一部店舗で使える割引クーポンをお渡しする場合がございます。\nまだお受け取りでない場合は、担当スタッフにお申し付けください。"
        }
      ],
      "foot": "どうぞお召し上がりください！",
      "footNote": "Gateway Buffetで素敵なひとときをお過ごしください。"
    },
    "acts": {
      "head": "ショー前のおすすめ",
      "foot": "ごゆっくりお楽しみください",
      "show": {
        "title": "ナイトショー",
        "text": "今夜のナイトショーにご参加ですか？ショーは午後{start}開始、開場は午後{gates}です。\n指定席をお持ちの方は、ゆったりとお席に着けるよう、余裕をもってお越しください。指定席をお持ちでない方は、案内係が喜んでお手伝いいたします。\n劇場まではGateway Buffetから徒歩約5〜7分です。"
      },
      "items": [
        {
          "title": "フキラウ・マーケットプレイス",
          "subtitle": "",
          "text": "お店が閉まる前に、フキラウ・マーケットプレイスでお土産やお菓子、記念品、地元ならではの品々をお楽しみください。",
          "chips": [
            "午後7時30分まで"
          ]
        },
        {
          "title": "ライエ・トラムツアー",
          "subtitle": "",
          "text": "ライエの町とBYUハワイ校のキャンパスを巡る、景色の美しいトラムツアーをお楽しみください。\nツアーでは、末日聖徒イエス・キリスト教会のライエ・ハワイ神殿の敷地に15分間立ち寄ります。",
          "chips": [
            "20分ごと",
            "午後3:00〜6:30",
            "所要時間約35分"
          ]
        },
        {
          "title": "ハワイアン・ジャーニー・シアター",
          "subtitle": "ジェリのファイヤーナイフショー",
          "text": "幼い頃から舞台に立ってきたベテランのファイヤーナイフ競技者ジェリが、ファイヤーナイフダンスの物語と伝統をご紹介します。",
          "chips": [
            "30分ごと",
            "午後1:30〜6:30",
            "最終回は午後6:30"
          ]
        },
        {
          "title": "ポリネシアン・フットボール殿堂",
          "subtitle": "",
          "text": "記念プレート、写真、記念品、インタラクティブ展示、名誉の壁で、ポリネシアのフットボール界の伝説たちを称えるギャラリーです。\nGateway Buffetのすぐ向かい、Polynesian Cultural Centerのウェルカムセンター内にございます。",
          "chips": [
            "午後7時まで"
          ]
        }
      ],
      "footNote": "お急ぎにならず、まずはデザートをお楽しみください！"
    },
    "close": {
      "mention": "{name}がご来店を特別なものにできましたら、体験を共有される際に{name}の名前を添えていただいても構いません。",
      "ready": "「お帰りの前に」をご覧いただけます。",
      "locked": {
        "text": "このセクションは、ご滞在の少し後からご覧いただけます。\nどうぞお食事をお楽しみいただき、25〜30分ほど経ってからもう一度お立ち寄りください。",
        "note": "お急ぎになりませんように。ごゆっくりお過ごしください！",
        "soon": "あと約{m}分で開きます"
      },
      "thanks": {
        "title": "Mahalo、ʻOhana！",
        "text": "今夜はGateway Buffetにお越しいただき、誠にありがとうございます。皆さまをおもてなしできて光栄でした。楽しいひとときをお過ごしいただけていれば幸いです。\nどうぞごゆっくりおくつろぎいただき、この後の夜もお楽しみください。"
      },
      "review": {
        "title": "ご感想をお聞かせください",
        "text": "お時間がございましたら、Polynesian Cultural Centerでのご体験についてぜひお聞かせください。\n担当スタッフがQRコードをご提示いたします。読み取ってTripAdvisorをタップすると、お料理、担当スタッフ、ビレッジ、ビュッフェ、ナイトショーについてのご感想をお寄せいただけます。\n皆さまのご意見は、お客様の体験をより良いものにするための貴重な参考とさせていただきます。お時間をいただき、心より感謝申し上げます。"
      },
      "survey": {
        "title": "後日のご案内",
        "text": "ご来園から約1週間後、チケットをご購入された方にPolynesian Cultural Centerから全体のご体験に関する簡単なアンケートメールが届く場合がございます。\nお受け取りの際は、そちらにもご意見をお寄せいただけましたら幸いです。"
      },
      "server": "本日の担当：",
      "end": "Mahalo nui loa",
      "qrNote": "ご準備ができましたら、担当スタッフがQRコードをご提示いたします。",
      "endNote": "一日の大切なひとときを私どもとお過ごしいただき、ありがとうございました。\nMahalo nui loa！素敵な夜をお過ごしください！"
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
    "qr": "Scan for at åbne guiden på jeres telefon",
    "tabs": {
      "guide": "Info",
      "acts": "Oplevelser",
      "close": "Inden I går"
    },
    "guide": {
      "server": "Jeres tjener i dag:",
      "items": [
        {
          "id": "self",
          "title": "Selvbetjeningsbuffet",
          "text": "Dette er en selvbetjeningsbuffet. Tag endelig så meget mad, I har lyst til – vi håber, I får et dejligt måltid."
        },
        {
          "id": "buffet",
          "title": "Buffet og retter",
          "text": "Buffeten er inddelt efter madkategorier, så I kan starte, hvor I vil.\nI finder blandt andet børnemenu, sirloin steak, forskellige kødretter, kylling, ahi-sashimi (tun), poke, skaldyr, grøntsager, ris, salater og desserter.\nDrikkestationerne findes i begge sider af bygningen. Tallerkener står under hovedbuffeten samt i salat- og dessertområdet."
        },
        {
          "id": "icecream",
          "title": "Is & Dole-ananas-softice",
          "text": "Der er isstationer i begge sider af bygningen.\nDole-ananas-softice findes på Hauʻula-siden. Spørg gerne en tjener om hjælp."
        },
        {
          "id": "plates",
          "title": "Tallerkener og bestik",
          "text": "Der er tallerkener i hele buffetområdet.\nHvis I har brug for nyt bestik, så spørg venligst en af vores tjenere – de hjælper jer gerne."
        },
        {
          "id": "after",
          "title": "Efter måltidet",
          "text": "Når I er færdige med en tallerken, så stil den venligst pænt i den ene side af bordet, så tager vores personale den.\nHvis I vil tilbage til buffeten, så brug venligst en ren tallerken hver gang."
        },
        {
          "id": "allergy",
          "title": "Fødevareallergi",
          "text": "Har I fødevareallergi eller særlige kosthensyn, så {link}se vores allergiguide{/link} med ingredienslister, allergenoplysninger og de muligheder, der findes."
        },
        {
          "id": "restroom",
          "title": "Toiletter",
          "text": "Toiletterne ligger i den modsatte side af bygningen. Dametoilettet er til venstre, og herretoilettet er til højre.\nHvis I skal udenfor et øjeblik, så få venligst et stempel på hånden, inden I går, så I kan komme ind igen."
        },
        {
          "id": "robot",
          "title": "Serveringsrobot",
          "text": "Af hensyn til jeres sikkerhed beder vi jer om ikke at røre ved serveringsrobotten eller stille tallerkener eller andre ting på den.\nVores personale henter brugte tallerkener ved jeres bord."
        },
        {
          "id": "charging",
          "title": "Opladningsstation",
          "text": "Ved udgangsdøren findes en opladningsstation til telefoner med sikre skabe.\nFølg venligst vejledningen ved stationen for at oplade jeres enhed og bruge skabene."
        },
        {
          "id": "coupon",
          "title": "Rabatkuponer",
          "text": "Under jeres besøg kan I få rabatkuponer til udvalgte butikker i Hukilau Marketplace.\nHvis I ikke har fået en, så spørg venligst jeres tjener."
        }
      ],
      "foot": "God appetit!",
      "footNote": "Vi håber, I får en dejlig tid hos os på Gateway Buffet."
    },
    "acts": {
      "head": "Før showet",
      "foot": "Nyd jeres tid",
      "show": {
        "title": "Aftenshow",
        "text": "Skal I se aftenshowet i aften? Showet begynder kl. {start} om aftenen, og dørene åbner kl. {gates}.\nHvis I allerede har tildelte pladser, så kom venligst i god tid, så I kan finde jer godt til rette. Hvis I ikke har en tildelt plads, hjælper en af vores pladsanvisere jer gerne.\nTeatret ligger cirka 5–7 minutters gang fra Gateway Buffet."
      },
      "items": [
        {
          "title": "Hukilau Marketplace",
          "subtitle": "",
          "text": "Tag jer tid til at udforske Hukilau Marketplace med gaver, snacks, souvenirs og lokale fund, inden butikkerne lukker.",
          "chips": [
            "Til kl. 19.30"
          ]
        },
        {
          "title": "Tramtur i Lāʻie",
          "subtitle": "",
          "text": "Nyd en naturskøn tur gennem byen Lāʻie og BYU–Hawaii-campusset.\nTuren omfatter også et stop på 15 minutter ved området omkring Lāʻie Hawaiʻi-templet, som tilhører Jesu Kristi Kirke af Sidste Dages Hellige.",
          "chips": [
            "Hvert 20. minut",
            "15.00–18.30",
            "Turen varer ca. 35 minutter"
          ]
        },
        {
          "title": "Hawaiian Journey Theater",
          "subtitle": "Jeris ildknivshow",
          "text": "Oplev historien og traditionen bag ildknivsdans gennem Jeri, en erfaren ildknivskonkurrent, der begyndte at optræde som ung.",
          "chips": [
            "Hvert 30. minut",
            "13.30–18.30",
            "Sidste show kl. 18.30"
          ]
        },
        {
          "title": "Polynesian Football Hall of Fame",
          "subtitle": "",
          "text": "Besøg et galleri til ære for polynesiske legender inden for amerikansk fodbold med mindeplader, fotografier, erindringsgenstande, interaktive skærme og Æresvæggen.\nDet ligger lige over for Gateway Buffet i Polynesian Cultural Centers Welcome Center.",
          "chips": [
            "Til kl. 19.00"
          ]
        }
      ],
      "footNote": "Ingen hast – nyd først jeres dessert!"
    },
    "close": {
      "mention": "Hvis {name} gjorde jeres besøg ekstra specielt, er I velkomne til at nævne {name}, når I deler jeres oplevelse.",
      "ready": "Inden I går er nu tilgængeligt.",
      "locked": {
        "text": "Dette afsnit bliver tilgængeligt lidt senere under jeres besøg.\nNyd jeres måltid, og kig forbi igen om cirka 25–30 minutter.",
        "note": "Ingen hast — nyd tiden hos os!",
        "soon": "Tilgængeligt om cirka {m} min."
      },
      "thanks": {
        "title": "Mahalo, ʻOhana!",
        "text": "Tak, fordi I var gæster hos os på Gateway Buffet i aften. Det har været en fornøjelse at betjene jer, og vi håber, I har nydt tiden hos os.\nSlap endelig af, og nyd resten af aftenen."
      },
      "review": {
        "title": "Del jeres oplevelse",
        "text": "Hvis I har et øjeblik, vil vi meget gerne høre om jeres oplevelse på Polynesian Cultural Center.\nJeres tjener viser jer QR-koden. Scan den, og tryk på TripAdvisor for at dele jeres feedback om måltidet, jeres tjener, landsbyerne, buffeten eller aftenshowet.\nJeres feedback hjælper vores team med at gøre gæsteoplevelsen endnu bedre, og vi sætter stor pris på, at I tager jer tid til at dele den."
      },
      "survey": {
        "title": "En besked til senere",
        "text": "Cirka en uge efter jeres besøg kan den person, der købte billetterne, modtage en kort spørgeundersøgelse på e-mail fra Polynesian Cultural Center om den samlede oplevelse.\nHvis I modtager den, vil vi være taknemmelige, hvis I også tager et øjeblik til at dele jeres feedback dér."
      },
      "server": "Jeres tjener i aften:",
      "end": "Mahalo nui loa",
      "qrNote": "Jeres tjener viser jer QR-koden, når I er klar.",
      "endNote": "Tak, fordi I tilbragte en del af jeres dag med os.\nMahalo nui loa, og hav en dejlig aften!"
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
    "qr": "Скенирајте да бисте отворили водич на телефону",
    "tabs": {
      "guide": "Упутство",
      "acts": "Активности",
      "close": "Пре одласка"
    },
    "guide": {
      "server": "Ваш конобар данас:",
      "items": [
        {
          "id": "self",
          "title": "Шведски сто са самопослуживањем",
          "text": "Ово је шведски сто са самопослуживањем. Послужите се слободно колико год желите – желимо вам пријатан оброк."
        },
        {
          "id": "buffet",
          "title": "Делови шведског стола и јела",
          "text": "Шведски сто је подељен по врстама јела, па можете почети где год желите.\nНаћи ћете, између осталог, дечји мени, сирлоин стек, разне врсте меса, пилетину, ахи сашими (туна), поке, морске плодове, поврће, пиринач, салате и десерте.\nСтанице за пиће налазе се са обе стране зграде. Тањири су доступни испод главног шведског стола и у делу са салатама и десертима."
        },
        {
          "id": "icecream",
          "title": "Сладолед и Dole меки сладолед од ананаса",
          "text": "Станице са сладоледом налазе се са обе стране зграде.\nDole меки сладолед од ананаса доступан је на страни према Hauʻula. За помоћ се обратите конобару."
        },
        {
          "id": "plates",
          "title": "Тањири и прибор за јело",
          "text": "Тањири су доступни у целом делу са шведским столом.\nАко вам је потребан нови прибор за јело, замолите неког од наших конобара – радо ће вам га донети."
        },
        {
          "id": "after",
          "title": "После оброка",
          "text": "Када завршите са тањиром, молимо вас да га уредно оставите на једну страну стола, а наше особље ће га покупити.\nАко желите да се поново послужите, молимо вас да сваки пут узмете чист тањир."
        },
        {
          "id": "allergy",
          "title": "Алергије на храну",
          "text": "Ако имате алергију на храну или посебне захтеве у исхрани, {link}погледајте наш водич о алергенима{/link} са списком састојака, информацијама о алергенима и доступним опцијама."
        },
        {
          "id": "restroom",
          "title": "Тоалети",
          "text": "Тоалети се налазе на супротној страни зграде. Женски тоалет је лево, а мушки десно.\nАко треба накратко да изађете, молимо вас да пре изласка добијете печат на руци како бисте могли поново да уђете."
        },
        {
          "id": "robot",
          "title": "Робот за послуживање",
          "text": "Ради ваше безбедности, молимо вас да не дирате робота за послуживање и да на њега не стављате тањире нити друге предмете.\nНаше особље ће покупити искоришћене тањире са вашег стола."
        },
        {
          "id": "charging",
          "title": "Станица за пуњење",
          "text": "Близу излазних врата налази се станица за пуњење телефона са сигурносним ормарићима.\nМолимо вас да пратите упутства истакнута на станици како бисте напунили уређај и користили ормарић."
        },
        {
          "id": "coupon",
          "title": "Купони за попуст",
          "text": "Током посете можете добити купоне за попуст у одабраним продавницама у Hukilau Marketplace.\nАко нисте добили купон, замолите свог конобара."
        }
      ],
      "foot": "Пријатно!",
      "footNote": "Надамо се да ћете уживати у времену проведеном са нама у Gateway Buffet."
    },
    "acts": {
      "head": "Пре представе",
      "foot": "Уживајте у времену",
      "show": {
        "title": "Вечерња представа",
        "text": "Идете ли вечерас на вечерњу представу? Представа почиње у {start} увече, а улаз се отвара у {gates}.\nАко већ имате додељена места, молимо вас да стигнете на време како бисте се удобно сместили. Ако немате додељено место, неко од наших разводника ће вам радо помоћи.\nПозориште је удаљено отприлике 5–7 минута хода од Gateway Buffet."
      },
      "items": [
        {
          "title": "Hukilau Marketplace",
          "subtitle": "",
          "text": "Одвојите мало времена да истражите Hukilau Marketplace и пронађете поклоне, грицкалице, сувенире и локалне производе пре него што се продавнице затворе.",
          "chips": [
            "До 19:30"
          ]
        },
        {
          "title": "Обилазак места Lāʻie трамвајем",
          "subtitle": "",
          "text": "Уживајте у живописној вожњи кроз градић Lāʻie и кампус BYU–Hawaii.\nОбилазак укључује и паузу од 15 минута у дворишту храма Lāʻie Hawaiʻi Цркве Исуса Христа светаца последњих дана.",
          "chips": [
            "Сваких 20 минута",
            "15:00–18:30",
            "Вожња траје око 35 минута"
          ]
        },
        {
          "title": "Hawaiian Journey Theater",
          "subtitle": "Џеријева представа са ватреним ножем",
          "text": "Откријте причу и традицију плеса са ватреним ножем кроз Џерија, дугогодишњег такмичара који је почео да наступа још као дечак.",
          "chips": [
            "Сваких 30 минута",
            "13:30–18:30",
            "Последња представа у 18:30"
          ]
        },
        {
          "title": "Polynesian Football Hall of Fame",
          "subtitle": "",
          "text": "Обиђите галерију у част полинежанских легенди америчког фудбала, са плакетама, фотографијама, успоменама, интерактивним екранима и Зидом части.\nНалази се тачно преко пута Gateway Buffet, у Welcome Center-у Polynesian Cultural Center-а.",
          "chips": [
            "До 19:00"
          ]
        }
      ],
      "footNote": "Без журбе – прво уживајте у десерту!"
    },
    "close": {
      "mention": "Ако вам је {name} учинио/ла посету посебном, слободно поменуте {name} када будете делили своје искуство.",
      "ready": "„Пре одласка“ је сада доступно.",
      "locked": {
        "text": "Овај одељак ће бити доступан нешто касније током ваше посете.\nУживајте у оброку и навратите се за отприлике 25–30 минута.",
        "note": "Без журбе — уживајте у времену са нама!",
        "soon": "Доступно за отприлике {m} мин"
      },
      "thanks": {
        "title": "Mahalo, ʻOhana!",
        "text": "Хвала вам што сте вечерас били наши гости у Gateway Buffet. Било нам је задовољство да вас услужимо и надамо се да сте уживали у времену проведеном са нама.\nСлободно се опустите и уживајте у остатку вечери."
      },
      "review": {
        "title": "Поделите своје утиске",
        "text": "Ако имате тренутак, радо бисмо чули какво је било ваше искуство у Polynesian Cultural Center-у.\nВаш конобар ће вам показати QR код. Само га скенирајте и додирните TripAdvisor да бисте поделили утиске о оброку, конобару, селима, шведском столу или вечерњој представи.\nВаши утисци помажу нашем тиму да стално унапређује искуство гостију, и искрено вам захваљујемо што сте одвојили време да их поделите."
      },
      "survey": {
        "title": "Напомена за касније",
        "text": "Отприлике недељу дана након ваше посете, особа која је купила улазнице може добити од Polynesian Cultural Center-а кратку анкету путем е-поште о целокупном искуству.\nАко је добијете, били бисмо вам захвални ако бисте одвојили тренутак да и тамо поделите своје утиске."
      },
      "server": "Ваш конобар вечерас:",
      "end": "Mahalo nui loa",
      "qrNote": "Ваш конобар ће вам показати QR код када будете спремни.",
      "endNote": "Хвала вам што сте део свог дана провели са нама.\nMahalo nui loa и пријатно вече!"
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
    "qr": "امسحوا الرمز لفتح الدليل على هواتفكم",
    "tabs": {
      "guide": "دليل الضيوف",
      "acts": "أنشطة",
      "close": "قبل المغادرة"
    },
    "guide": {
      "server": "النادل الذي يخدمكم اليوم:",
      "items": [
        {
          "id": "self",
          "title": "بوفيه بخدمة ذاتية",
          "text": "هذا بوفيه بخدمة ذاتية. تفضّلوا بتناول ما تشاؤون من الطعام، ونتمنى لكم وجبة رائعة."
        },
        {
          "id": "buffet",
          "title": "أقسام البوفيه والأطباق",
          "text": "البوفيه مقسّم حسب فئات الطعام، لذا يمكنكم البدء من أي قسم تفضّلونه.\nستجدون خيارات مثل قائمة الأطفال، وستيك السيرلوين، ولحوماً متنوعة، ودجاجاً، وساشيمي التونة (أهي)، والبوكي، والمأكولات البحرية، والخضروات، والأرز، والسلطات، والحلويات.\nتقع محطات المشروبات على جانبي المبنى، وتتوفر الأطباق أسفل خط البوفيه الرئيسي وفي ركن السلطات والحلويات."
        },
        {
          "id": "icecream",
          "title": "الآيس كريم وآيس كريم الأناناس الطري من Dole",
          "text": "تتوفر محطات الآيس كريم على جانبي المبنى.\nيتوفر آيس كريم الأناناس الطري من Dole في الجهة المطلة على Hauʻula. يُرجى طلب المساعدة من أحد موظفي الخدمة."
        },
        {
          "id": "plates",
          "title": "الأطباق وأدوات المائدة",
          "text": "تتوفر الأطباق في جميع أرجاء منطقة البوفيه.\nإذا احتجتم إلى أدوات مائدة جديدة، يُرجى طلبها من أحد موظفي الخدمة، وسيسعده إحضارها لكم."
        },
        {
          "id": "after",
          "title": "بعد الوجبة",
          "text": "عند الانتهاء من أحد الأطباق، يُرجى وضعه بترتيب على أحد جانبي الطاولة، وسيقوم فريقنا بجمعه.\nإذا رغبتم في العودة إلى البوفيه، يُرجى استخدام طبق نظيف في كل مرة."
        },
        {
          "id": "allergy",
          "title": "الحساسية الغذائية",
          "text": "إذا كانت لديكم حساسية غذائية أو احتياجات غذائية خاصة، يُرجى {link}الاطلاع على دليل الحساسية{/link} لمعرفة المكونات ومعلومات مسببات الحساسية والخيارات المتاحة."
        },
        {
          "id": "restroom",
          "title": "دورات المياه",
          "text": "تقع دورات المياه في الجهة المقابلة من المبنى. دورة مياه السيدات على اليسار، ودورة مياه الرجال على اليمين.\nإذا احتجتم إلى الخروج مؤقتاً، يُرجى الحصول على ختم على اليد قبل المغادرة حتى تتمكنوا من الدخول مجدداً."
        },
        {
          "id": "robot",
          "title": "روبوت الخدمة",
          "text": "حرصاً على سلامتكم، يُرجى عدم لمس روبوت الخدمة أو وضع الأطباق أو أي أغراض أخرى عليه.\nسيجمع فريقنا الأطباق المستعملة من طاولتكم."
        },
        {
          "id": "charging",
          "title": "محطة الشحن",
          "text": "توجد محطة لشحن الهواتف مزوّدة بخزائن آمنة بالقرب من باب الخروج.\nيُرجى اتباع التعليمات المعروضة في المحطة لشحن أجهزتكم واستخدام الخزائن."
        },
        {
          "id": "coupon",
          "title": "قسائم الخصم",
          "text": "قد تحصلون خلال زيارتكم على قسائم خصم لمتاجر مختارة في Hukilau Marketplace.\nإذا لم تحصلوا على قسيمة، يُرجى طلبها من النادل."
        }
      ],
      "foot": "بالهناء والشفاء!",
      "footNote": "نتمنى لكم وقتاً ممتعاً معنا في Gateway Buffet."
    },
    "acts": {
      "head": "قبل العرض",
      "foot": "استمتعوا بوقتكم",
      "show": {
        "title": "العرض المسائي",
        "text": "هل ستحضرون العرض المسائي الليلة؟ يبدأ العرض الساعة {start} مساءً، وتُفتح البوابات الساعة {gates} مساءً.\nإذا كانت لديكم مقاعد مخصّصة، يُرجى الحضور مبكراً لتتمكنوا من الجلوس براحة. وإذا لم يكن لديكم مقعد مخصّص، فسيسعد أحد المرشدين بمساعدتكم.\nيبعد المسرح نحو 5–7 دقائق سيراً على الأقدام من Gateway Buffet."
      },
      "items": [
        {
          "title": "Hukilau Marketplace",
          "subtitle": "",
          "text": "خصّصوا بعض الوقت لاستكشاف Hukilau Marketplace واقتناء الهدايا والوجبات الخفيفة والتذكارات والمنتجات المحلية قبل إغلاق المتاجر.",
          "chips": [
            "حتى الساعة 7:30 مساءً"
          ]
        },
        {
          "title": "جولة الترام في Lāʻie",
          "subtitle": "",
          "text": "استمتعوا بجولة ذات مناظر خلابة عبر بلدة Lāʻie وحرم جامعة BYU–Hawaii.\nوتتضمن الجولة أيضاً توقفاً لمدة 15 دقيقة في حدائق معبد Lāʻie في هاواي التابع لكنيسة يسوع المسيح لقديسي الأيام الأخيرة.",
          "chips": [
            "كل 20 دقيقة",
            "3:00–6:30 مساءً",
            "مدة الجولة نحو 35 دقيقة"
          ]
        },
        {
          "title": "Hawaiian Journey Theater",
          "subtitle": "عرض السكين النارية مع جيري",
          "text": "اكتشفوا قصة رقصة السكين النارية وتقاليدها مع جيري، المتسابق المخضرم في السكين النارية الذي بدأ تقديم العروض منذ صغره.",
          "chips": [
            "كل 30 دقيقة",
            "1:30–6:30 مساءً",
            "آخر عرض الساعة 6:30 مساءً"
          ]
        },
        {
          "title": "Polynesian Football Hall of Fame",
          "subtitle": "",
          "text": "تجوّلوا في معرض يكرّم أساطير كرة القدم الأمريكية من بولينيزيا، ويضم لوحات تذكارية وصوراً ومقتنيات وشاشات تفاعلية وجدار الشرف.\nيقع مباشرةً مقابل Gateway Buffet داخل مركز الترحيب في Polynesian Cultural Center.",
          "chips": [
            "حتى الساعة 7:00 مساءً"
          ]
        }
      ],
      "footNote": "لا داعي للعجلة، استمتعوا بالحلوى أولاً!"
    },
    "close": {
      "mention": "إذا ساهم {name} في جعل زيارتكم مميزة، يمكنكم ذكر {name} عند مشاركة تجربتكم.",
      "ready": "قسم «قبل المغادرة» متاح الآن.",
      "locked": {
        "text": "سيتوفر هذا القسم بعد قليل خلال زيارتكم.\nاستمتعوا بوجبتكم وعاودوا الاطلاع بعد نحو 25–30 دقيقة.",
        "note": "لا داعي للعجلة — استمتعوا بوقتكم معنا!",
        "soon": "يتوفر بعد نحو {m} دقيقة"
      },
      "thanks": {
        "title": "Mahalo, ʻOhana!",
        "text": "شكراً لانضمامكم إلينا في Gateway Buffet هذا المساء. لقد كان من دواعي سرورنا خدمتكم، ونأمل أن تكونوا قد استمتعتم بوقتكم معنا.\nتفضّلوا بالاسترخاء والاستمتاع ببقية أمسيتكم."
      },
      "review": {
        "title": "شاركونا تجربتكم",
        "text": "إذا كان لديكم بعض الوقت، يسعدنا أن نسمع عن تجربتكم في Polynesian Cultural Center.\nسيعرض عليكم النادل رمز QR. ما عليكم سوى مسحه والنقر على TripAdvisor لمشاركة رأيكم في وجبتكم أو النادل أو القرى أو البوفيه أو العرض المسائي.\nتساعد آراؤكم فريقنا على مواصلة تحسين تجربة الضيوف، ونقدّر حقاً تخصيصكم الوقت لمشاركتها."
      },
      "survey": {
        "title": "ملاحظة لاحقة",
        "text": "بعد أسبوع تقريباً من زيارتكم، قد يتلقى الشخص الذي اشترى التذاكر استبياناً قصيراً عبر البريد الإلكتروني من Polynesian Cultural Center حول التجربة بشكل عام.\nإذا وصلكم الاستبيان، فسنكون ممتنين لو خصّصتم لحظة لمشاركة رأيكم فيه أيضاً."
      },
      "server": "النادل الذي يخدمكم الليلة:",
      "end": "Mahalo nui loa",
      "qrNote": "سيعرض عليكم النادل رمز QR متى كنتم مستعدين.",
      "endNote": "شكراً لقضائكم جزءاً من يومكم معنا.\nMahalo nui loa، ونتمنى لكم أمسية سعيدة!"
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
    "qr": "Scansionate per aprire la guida sul telefono",
    "tabs": {
      "guide": "Info",
      "acts": "Da fare",
      "close": "Prima di andare"
    },
    "guide": {
      "server": "Il vostro cameriere oggi:",
      "items": [
        {
          "id": "self",
          "title": "Buffet self-service",
          "text": "Questo è un buffet self-service. Servitevi pure quanto desiderate: vi auguriamo un pasto meraviglioso."
        },
        {
          "id": "buffet",
          "title": "Aree del buffet e piatti",
          "text": "Il buffet è organizzato per categorie di piatti, quindi potete iniziare da dove preferite.\nTroverete, tra l'altro, un menù per bambini, controfiletto (sirloin), carni assortite, pollo, sashimi di tonno (ahi), poke, frutti di mare, verdure, riso, insalate e dessert.\nLe postazioni bevande si trovano su entrambi i lati dell'edificio. I piatti sono disponibili sotto il bancone principale del buffet e nell'area insalate e dessert."
        },
        {
          "id": "icecream",
          "title": "Gelati e gelato soft all'ananas Dole",
          "text": "Le postazioni dei gelati si trovano su entrambi i lati dell'edificio.\nIl gelato soft all'ananas Dole è disponibile sul lato Hauʻula. Per assistenza, chiedete pure a un cameriere."
        },
        {
          "id": "plates",
          "title": "Piatti e posate",
          "text": "I piatti sono disponibili in tutta l'area del buffet.\nSe avete bisogno di posate nuove, chiedetele a uno dei nostri camerieri: saranno lieti di portarvele."
        },
        {
          "id": "after",
          "title": "Dopo il pasto",
          "text": "Quando avete finito con un piatto, vi preghiamo di appoggiarlo ordinatamente su un lato del tavolo: il nostro personale passerà a ritirarlo.\nSe desiderate tornare al buffet, vi preghiamo di usare ogni volta un piatto pulito."
        },
        {
          "id": "allergy",
          "title": "Allergie alimentari",
          "text": "In caso di allergie o esigenze alimentari particolari, {link}consultate la nostra guida agli allergeni{/link}: troverete l'elenco degli ingredienti, le informazioni sugli allergeni e le opzioni disponibili."
        },
        {
          "id": "restroom",
          "title": "Servizi igienici",
          "text": "I servizi igienici si trovano sul lato opposto dell'edificio. Il bagno delle donne è a sinistra, quello degli uomini a destra.\nSe dovete uscire temporaneamente, vi preghiamo di farvi apporre un timbro sulla mano prima di uscire, così potrete rientrare."
        },
        {
          "id": "robot",
          "title": "Robot di servizio",
          "text": "Per la vostra sicurezza, vi preghiamo di non toccare il robot di servizio e di non appoggiarvi sopra piatti o altri oggetti.\nIl nostro personale ritirerà i piatti usati dal vostro tavolo."
        },
        {
          "id": "charging",
          "title": "Stazione di ricarica",
          "text": "Vicino alla porta d'uscita si trova una stazione di ricarica per telefoni con armadietti sicuri.\nSeguite le istruzioni esposte presso la stazione per ricaricare il dispositivo e utilizzare gli armadietti."
        },
        {
          "id": "coupon",
          "title": "Buoni sconto",
          "text": "Durante la visita potreste ricevere buoni sconto per alcuni negozi selezionati dell'Hukilau Marketplace.\nSe non ne avete ricevuto uno, chiedetelo al vostro cameriere."
        }
      ],
      "foot": "Buon appetito!",
      "footNote": "Vi auguriamo di trascorrere un piacevole momento con noi al Gateway Buffet."
    },
    "acts": {
      "head": "Prima dello spettacolo",
      "foot": "Godetevi il vostro tempo",
      "show": {
        "title": "Spettacolo serale",
        "text": "Andate allo spettacolo serale stasera? Lo spettacolo inizia alle {start} di sera e i cancelli aprono alle {gates}.\nSe avete già posti assegnati, vi preghiamo di arrivare per tempo, così da potervi sistemare con comodità. Se non avete un posto assegnato, una delle nostre maschere sarà lieta di aiutarvi.\nIl teatro si trova a circa 5–7 minuti a piedi dal Gateway Buffet."
      },
      "items": [
        {
          "title": "Hukilau Marketplace",
          "subtitle": "",
          "text": "Prendetevi un po' di tempo per esplorare l'Hukilau Marketplace alla ricerca di regali, snack, souvenir e prodotti locali prima della chiusura dei negozi.",
          "chips": [
            "Fino alle 19:30"
          ]
        },
        {
          "title": "Giro in tram di Lāʻie",
          "subtitle": "",
          "text": "Godetevi un giro panoramico attraverso la cittadina di Lāʻie e il campus della BYU–Hawaii.\nIl tour include anche una sosta di 15 minuti nei giardini del Tempio di Lāʻie, Hawaiʻi, della Chiesa di Gesù Cristo dei Santi degli Ultimi Giorni.",
          "chips": [
            "Ogni 20 minuti",
            "15:00–18:30",
            "Durata circa 35 minuti"
          ]
        },
        {
          "title": "Hawaiian Journey Theater",
          "subtitle": "Lo spettacolo del coltello di fuoco di Jeri",
          "text": "Scoprite la storia e la tradizione della danza del coltello di fuoco attraverso Jeri, concorrente di lunga esperienza che ha iniziato a esibirsi fin da giovanissimo.",
          "chips": [
            "Ogni 30 minuti",
            "13:30–18:30",
            "Ultimo spettacolo alle 18:30"
          ]
        },
        {
          "title": "Polynesian Football Hall of Fame",
          "subtitle": "",
          "text": "Visitate una galleria dedicata alle leggende polinesiane del football americano, con targhe, fotografie, cimeli, schermi interattivi e il Muro d'Onore.\nSi trova proprio di fronte al Gateway Buffet, all'interno del Welcome Center del Polynesian Cultural Center.",
          "chips": [
            "Fino alle 19:00"
          ]
        }
      ],
      "footNote": "Nessuna fretta: gustatevi prima il dessert!"
    },
    "close": {
      "mention": "Se {name} ha reso speciale la vostra visita, potete menzionare {name} quando condividete la vostra esperienza.",
      "ready": "Prima di andare è ora disponibile.",
      "locked": {
        "text": "Questa sezione sarà disponibile un po' più tardi durante la vostra visita.\nGoditevi il pasto e ripassate tra circa 25–30 minuti.",
        "note": "Nessuna fretta — godetevi il tempo con noi!",
        "soon": "Disponibile tra circa {m} min"
      },
      "thanks": {
        "title": "Mahalo, ʻOhana!",
        "text": "Grazie per essere stati con noi al Gateway Buffet questa sera. È stato un piacere servirvi e speriamo che abbiate trascorso un piacevole momento.\nRilassatevi pure e godetevi il resto della serata."
      },
      "review": {
        "title": "Condividete la vostra esperienza",
        "text": "Se avete un momento, ci farebbe piacere conoscere la vostra esperienza al Polynesian Cultural Center.\nIl vostro cameriere vi mostrerà il codice QR. Vi basterà scansionarlo e toccare TripAdvisor per condividere la vostra opinione sul pasto, sul cameriere, sui villaggi, sul buffet o sullo spettacolo serale.\nIl vostro feedback aiuta il nostro team a migliorare continuamente l'esperienza degli ospiti, e vi ringraziamo sinceramente per il tempo che ci dedicherete."
      },
      "survey": {
        "title": "Una nota per dopo",
        "text": "Circa una settimana dopo la visita, la persona che ha acquistato i biglietti potrebbe ricevere dal Polynesian Cultural Center un breve sondaggio via e-mail sull'esperienza complessiva.\nSe lo riceverete, vi saremmo grati se poteste dedicare un momento a condividere anche lì il vostro feedback."
      },
      "server": "Il vostro cameriere stasera:",
      "end": "Mahalo nui loa",
      "qrNote": "Il vostro cameriere vi mostrerà il codice QR quando sarete pronti.",
      "endNote": "Grazie per aver trascorso parte della vostra giornata con noi.\nMahalo nui loa e buona serata!"
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
    "qr": "สแกนเพื่อเปิดคู่มือบนโทรศัพท์ของท่าน",
    "tabs": {
      "guide": "คำแนะนำ",
      "acts": "กิจกรรม",
      "close": "ก่อนกลับ"
    },
    "guide": {
      "server": "พนักงานเสิร์ฟของท่านวันนี้:",
      "items": [
        {
          "id": "self",
          "title": "บุฟเฟต์แบบบริการตนเอง",
          "text": "ที่นี่เป็นบุฟเฟต์แบบบริการตนเอง เชิญรับประทานอาหารได้ตามต้องการ และขอให้ท่านเพลิดเพลินกับมื้ออาหาร"
        },
        {
          "id": "buffet",
          "title": "โซนบุฟเฟต์และรายการอาหาร",
          "text": "บุฟเฟต์จัดแบ่งเป็นโซนตามประเภทอาหาร ท่านสามารถเริ่มจากโซนใดก็ได้ตามต้องการ\nมีอาหารให้เลือก เช่น เมนูสำหรับเด็ก สเต๊กเซอร์ลอยน์ เนื้อสัตว์หลากหลายชนิด ไก่ ซาชิมิปลาทูน่า (อาฮิ) โปเกะ อาหารทะเล ผัก ข้าว สลัด และของหวาน\nจุดบริการเครื่องดื่มอยู่ทั้งสองฝั่งของอาคาร ส่วนจานวางอยู่ใต้ไลน์บุฟเฟต์หลักและบริเวณสลัดและของหวาน"
        },
        {
          "id": "icecream",
          "title": "ไอศกรีมและซอฟต์เสิร์ฟสับปะรด Dole",
          "text": "จุดบริการไอศกรีมอยู่ทั้งสองฝั่งของอาคาร\nซอฟต์เสิร์ฟรสสับปะรด Dole อยู่ฝั่งเฮาอูลา (Hauʻula) หากต้องการความช่วยเหลือ กรุณาสอบถามพนักงานเสิร์ฟ"
        },
        {
          "id": "plates",
          "title": "จานและช้อนส้อม",
          "text": "มีจานให้บริการทั่วบริเวณบุฟเฟต์\nหากต้องการช้อนส้อมชุดใหม่ กรุณาแจ้งพนักงานเสิร์ฟ เรายินดีนำมาให้ท่าน"
        },
        {
          "id": "after",
          "title": "หลังรับประทานอาหาร",
          "text": "เมื่อรับประทานเสร็จแต่ละจาน กรุณาวางจานไว้ที่ด้านใดด้านหนึ่งของโต๊ะให้เรียบร้อย พนักงานของเราจะมาเก็บให้\nหากต้องการกลับไปตักอาหารเพิ่ม กรุณาใช้จานใหม่ทุกครั้ง"
        },
        {
          "id": "allergy",
          "title": "การแพ้อาหาร",
          "text": "หากท่านมีอาการแพ้อาหารหรือมีข้อจำกัดด้านอาหาร กรุณา{link}ดูคู่มือข้อมูลสารก่อภูมิแพ้{/link} เพื่อดูรายการส่วนผสม ข้อมูลสารก่อภูมิแพ้ และตัวเลือกที่มีให้บริการ"
        },
        {
          "id": "restroom",
          "title": "ห้องน้ำ",
          "text": "ห้องน้ำอยู่อีกฝั่งหนึ่งของอาคาร ห้องน้ำหญิงอยู่ทางซ้าย และห้องน้ำชายอยู่ทางขวา\nหากท่านต้องการออกไปด้านนอกชั่วคราว กรุณาประทับตราที่มือก่อนออก เพื่อให้สามารถกลับเข้ามาได้"
        },
        {
          "id": "robot",
          "title": "หุ่นยนต์เสิร์ฟอาหาร",
          "text": "เพื่อความปลอดภัยของท่าน กรุณาอย่าสัมผัสหุ่นยนต์เสิร์ฟอาหาร หรือวางจานหรือสิ่งของอื่นไว้บนหุ่นยนต์\nพนักงานของเราจะเก็บจานที่ใช้แล้วจากโต๊ะของท่าน"
        },
        {
          "id": "charging",
          "title": "จุดชาร์จโทรศัพท์",
          "text": "จุดชาร์จโทรศัพท์พร้อมล็อกเกอร์นิรภัยตั้งอยู่ใกล้ประตูทางออก\nกรุณาทำตามคำแนะนำที่ติดไว้ที่จุดชาร์จ เพื่อชาร์จอุปกรณ์และใช้ล็อกเกอร์"
        },
        {
          "id": "coupon",
          "title": "คูปองส่วนลด",
          "text": "ระหว่างการเยี่ยมชม ท่านอาจได้รับคูปองส่วนลดสำหรับร้านค้าที่ร่วมรายการใน Hukilau Marketplace\nหากท่านยังไม่ได้รับ กรุณาสอบถามพนักงานเสิร์ฟของท่าน"
        }
      ],
      "foot": "ขอให้อร่อยกับมื้ออาหาร!",
      "footNote": "หวังว่าท่านจะมีช่วงเวลาที่ดีกับเราที่ Gateway Buffet"
    },
    "acts": {
      "head": "ก่อนเริ่มการแสดง",
      "foot": "ขอให้เพลิดเพลินกับช่วงเวลานี้",
      "show": {
        "title": "การแสดงภาคค่ำ",
        "text": "ท่านจะไปชมการแสดงภาคค่ำคืนนี้หรือไม่? การแสดงเริ่มเวลา {start} น. ช่วงค่ำ และประตูเปิดเวลา {gates} น.\nหากท่านมีที่นั่งที่กำหนดไว้แล้ว กรุณามาถึงก่อนเวลาเพื่อให้มีเวลานั่งได้อย่างสบาย หากท่านยังไม่มีที่นั่งที่กำหนด เจ้าหน้าที่นำที่นั่งของเรายินดีให้ความช่วยเหลือ\nโรงละครอยู่ห่างจาก Gateway Buffet โดยเดินประมาณ 5–7 นาที"
      },
      "items": [
        {
          "title": "Hukilau Marketplace",
          "subtitle": "",
          "text": "ใช้เวลาเดินชม Hukilau Marketplace เพื่อเลือกซื้อของขวัญ ขนม ของที่ระลึก และสินค้าท้องถิ่นก่อนร้านค้าปิด",
          "chips": [
            "ถึง 19:30 น."
          ]
        },
        {
          "title": "ทัวร์รถรางเมืองลาอิเอ (Lāʻie)",
          "subtitle": "",
          "text": "เพลิดเพลินกับการนั่งรถรางชมทิวทัศน์ผ่านเมืองลาอิเอ (Lāʻie) และวิทยาเขต BYU–Hawaii\nทัวร์นี้ยังแวะชมบริเวณพระวิหารลาอิเอ ฮาวาย ของศาสนจักรของพระเยซูคริสต์แห่งวิสุทธิชนยุคสุดท้ายเป็นเวลา 15 นาที",
          "chips": [
            "ทุก 20 นาที",
            "15:00–18:30 น.",
            "ใช้เวลาประมาณ 35 นาที"
          ]
        },
        {
          "title": "Hawaiian Journey Theater",
          "subtitle": "การแสดงมีดไฟของเจอร์รี",
          "text": "สัมผัสเรื่องราวและประเพณีของการเต้นมีดไฟผ่านเจอร์รี นักแข่งขันมีดไฟผู้มากประสบการณ์ที่เริ่มแสดงตั้งแต่ยังเด็ก",
          "chips": [
            "ทุก 30 นาที",
            "13:30–18:30 น.",
            "รอบสุดท้ายเวลา 18:30 น."
          ]
        },
        {
          "title": "Polynesian Football Hall of Fame",
          "subtitle": "",
          "text": "ชมแกลเลอรีที่เชิดชูตำนานอเมริกันฟุตบอลชาวโพลินีเซีย พร้อมแผ่นจารึก ภาพถ่าย ของที่ระลึก จอแสดงผลแบบอินเทอร์แอคทีฟ และกำแพงเกียรติยศ\nตั้งอยู่ตรงข้าม Gateway Buffet ภายใน Welcome Center ของ Polynesian Cultural Center",
          "chips": [
            "ถึง 19:00 น."
          ]
        }
      ],
      "footNote": "ไม่ต้องรีบ เชิญเพลิดเพลินกับของหวานก่อน!"
    },
    "close": {
      "mention": "หากคุณ {name} ช่วยให้การมาเยือนของท่านพิเศษขึ้น ท่านสามารถกล่าวถึงคุณ {name} ได้ตามสะดวกเมื่อแบ่งปันประสบการณ์",
      "ready": "ส่วน “ก่อนกลับ” เปิดให้ดูแล้ว",
      "locked": {
        "text": "ส่วนนี้จะเปิดให้ดูในอีกสักครู่ระหว่างที่คุณอยู่กับเรา\nเชิญเพลิดเพลินกับมื้ออาหาร แล้วกลับมาดูอีกครั้งในอีกประมาณ 25–30 นาที",
        "note": "ไม่ต้องรีบ — ขอให้มีความสุขกับเวลาของคุณที่นี่!",
        "soon": "เปิดในอีกประมาณ {m} นาที"
      },
      "thanks": {
        "title": "Mahalo, ʻOhana!",
        "text": "ขอขอบคุณที่มาร่วมรับประทานอาหารกับเราที่ Gateway Buffet ในค่ำคืนนี้ เป็นเกียรติอย่างยิ่งที่ได้ให้บริการท่าน และหวังว่าท่านจะมีช่วงเวลาที่ดีกับเรา\nเชิญผ่อนคลายและเพลิดเพลินกับช่วงเวลาที่เหลือของค่ำคืนนี้"
      },
      "review": {
        "title": "แบ่งปันประสบการณ์ของท่าน",
        "text": "หากท่านมีเวลา เรายินดีอย่างยิ่งที่จะได้รับฟังประสบการณ์ของท่านที่ Polynesian Cultural Center\nพนักงานเสิร์ฟจะนำคิวอาร์โค้ดมาให้ท่าน เพียงสแกนแล้วแตะ TripAdvisor เพื่อแบ่งปันความคิดเห็นเกี่ยวกับมื้ออาหาร พนักงานเสิร์ฟ หมู่บ้านต่าง ๆ บุฟเฟต์ หรือการแสดงภาคค่ำ\nความคิดเห็นของท่านช่วยให้ทีมงานของเราพัฒนาประสบการณ์ของแขกได้อย่างต่อเนื่อง และเราขอขอบคุณอย่างจริงใจที่ท่านสละเวลาแบ่งปัน"
      },
      "survey": {
        "title": "ข้อมูลสำหรับภายหลัง",
        "text": "ประมาณหนึ่งสัปดาห์หลังการเยี่ยมชม ผู้ที่ซื้อบัตรอาจได้รับแบบสอบถามสั้น ๆ ทางอีเมลจาก Polynesian Cultural Center เกี่ยวกับประสบการณ์โดยรวม\nหากท่านได้รับ เราจะขอบคุณเป็นอย่างยิ่งหากท่านสละเวลาสักครู่เพื่อแบ่งปันความคิดเห็นในแบบสอบถามนั้นด้วย"
      },
      "server": "พนักงานเสิร์ฟของท่านในค่ำคืนนี้:",
      "end": "Mahalo nui loa",
      "qrNote": "พนักงานเสิร์ฟจะนำคิวอาร์โค้ดมาให้เมื่อท่านพร้อม",
      "endNote": "ขอบคุณที่ใช้เวลาส่วนหนึ่งของวันกับเรา\nMahalo nui loa ขอให้ท่านมีค่ำคืนที่แสนสุข!"
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
  },
  "ru": {
    "name": "Русский",
    "htmlLang": "ru",
    "greet": "Алоха! Добро пожаловать",
    "qr": "Отсканируйте, чтобы открыть на телефоне",
    "tabs": {
      "guide": "Добро пожаловать",
      "acts": "Чем заняться",
      "close": "Перед уходом"
    },
    "guide": {
      "server": "Ваш официант сегодня:",
      "items": [
        {
          "id": "self",
          "title": "Шведский стол самообслуживания",
          "text": "Это шведский стол с самообслуживанием. Берите любое количество блюд — приятного аппетита!"
        },
        {
          "id": "buffet",
          "title": "Зоны шведского стола и блюда",
          "text": "Шведский стол разделён по категориям блюд, поэтому можно начинать с любого места.\nВ меню: детское меню, стейк из говяжьей вырезки, ассорти из мяса, курица, сашими из тунца ahi, поке, морепродукты, овощи, рис, салаты и десерты.\nЗоны с напитками расположены с обеих сторон здания. Тарелки лежат под основной линией раздачи, а также в зоне салатов и десертов."
        },
        {
          "id": "icecream",
          "title": "Мороженое и мягкое ананасовое мороженое Dole",
          "text": "Аппараты с мороженым есть с обеих сторон здания.\nМягкое ананасовое мороженое Dole подаётся со стороны Hauʻula. Пожалуйста, обратитесь к официанту."
        },
        {
          "id": "plates",
          "title": "Тарелки и столовые приборы",
          "text": "Тарелки есть по всей зоне шведского стола.\nЕсли вам нужен чистый набор приборов, попросите любого из наших официантов — мы с радостью его принесём."
        },
        {
          "id": "after",
          "title": "После еды",
          "text": "Закончив с тарелкой, аккуратно поставьте её сбоку на стол — наши сотрудники её заберут.\nЕсли хотите вернуться к шведскому столу, берите каждый раз чистую тарелку."
        },
        {
          "id": "allergy",
          "title": "Пищевая аллергия",
          "text": "При пищевой аллергии или особых диетических потребностях, пожалуйста, {link}посмотрите наше руководство по аллергенам{/link}: там указаны составы блюд, аллергены и подходящие варианты."
        },
        {
          "id": "restroom",
          "title": "Туалеты",
          "text": "Туалеты находятся на противоположной стороне здания. Женский — слева, мужской — справа.\nЕсли вам нужно ненадолго выйти на улицу, перед выходом получите штамп на руку, чтобы вернуться."
        },
        {
          "id": "robot",
          "title": "Робот-официант",
          "text": "В целях безопасности, пожалуйста, не прикасайтесь к роботу-официанту и не ставьте на него тарелки и другие предметы.\nНаши сотрудники сами заберут использованную посуду с вашего стола."
        },
        {
          "id": "charging",
          "title": "Станция зарядки",
          "text": "Станция зарядки телефонов с защищёнными ячейками находится у выхода.\nСледуйте инструкции на станции, чтобы зарядить устройство и воспользоваться ячейками."
        },
        {
          "id": "coupon",
          "title": "Скидочные купоны",
          "text": "Во время вашего визита могут быть доступны скидочные купоны в избранные магазины Hukilau Marketplace.\nЕсли вы его не получили, обратитесь к своему официанту."
        }
      ],
      "foot": "Приятного аппетита!",
      "footNote": "Надеемся, вам понравится время, проведённое в Gateway Buffet."
    },
    "acts": {
      "head": "Перед шоу",
      "foot": "Приятного отдыха",
      "show": {
        "title": "Ночное шоу",
        "text": "Идёте сегодня на ночное шоу? Начало в {start} вечера, вход открывается в {gates} вечера.\nЕсли у вас уже есть места, приходите заранее, чтобы спокойно устроиться. Если места нет, наш контролёр с радостью поможет.\nДо театра примерно 5–7 минут пешком от Gateway Buffet."
      },
      "items": [
        {
          "title": "Hukilau Marketplace",
          "subtitle": "",
          "text": "Загляните в Hukilau Marketplace за подарками, закусками, сувенирами и местными находками, пока магазины не закрылись.",
          "chips": [
            "До 19:30"
          ]
        },
        {
          "title": "Экскурсия на трамвае по Lāʻie",
          "subtitle": "",
          "text": "Насладитесь живописной поездкой по городку Lāʻie и кампусу BYU–Hawaii.\nВ программу входит 15-минутная остановка на территории храма Lāʻie Hawaiʻi Церкви Иисуса Христа Святых последних дней.",
          "chips": [
            "Каждые 20 минут",
            "15:00–18:30",
            "Поездка около 35 минут"
          ]
        },
        {
          "title": "Hawaiian Journey Theater",
          "subtitle": "Шоу огненного ножа с Джери",
          "text": "Узнайте историю и традиции танца с огненным ножом вместе с Джери — многолетним участником соревнований, начавшим выступать с юных лет.",
          "chips": [
            "Каждые 30 минут",
            "13:30–18:30",
            "Последнее шоу в 18:30"
          ]
        },
        {
          "title": "Polynesian Football Hall of Fame",
          "subtitle": "",
          "text": "Осмотрите галерею, посвящённую легендам полинезийского футбола: мемориальные доски, фотографии, памятные вещи, интерактивные экспозиции и Стену почёта.\nОна находится прямо напротив Gateway Buffet, в Welcome Center Polynesian Cultural Center.",
          "chips": [
            "До 19:00"
          ]
        }
      ],
      "footNote": "Не спешите — сначала насладитесь десертом!"
    },
    "close": {
      "mention": "Если {name} сделал(а) ваш визит особенным, будем рады, если вы упомяните {name}, делясь впечатлениями.",
      "ready": "Раздел «Перед уходом» теперь открыт.",
      "locked": {
        "text": "Этот раздел откроется чуть позже во время вашего визита.\nПриятного аппетита! Загляните сюда примерно через 25–30 минут.",
        "note": "Не спешите — наслаждайтесь временем у нас!",
        "soon": "Откроется примерно через {m} мин"
      },
      "thanks": {
        "title": "Махало, ʻOhana!",
        "text": "Благодарим, что выбрали Gateway Buffet сегодня вечером. Нам было приятно вас обслуживать, и мы надеемся, что вам понравилось.\nОтдыхайте и наслаждайтесь остатком вечера."
      },
      "review": {
        "title": "Поделитесь впечатлениями",
        "text": "Если у вас найдётся минутка, мы будем рады узнать о ваших впечатлениях о Polynesian Cultural Center.\nВаш официант покажет QR-код. Просто отсканируйте его и нажмите TripAdvisor, чтобы оставить отзыв о еде, официанте, деревнях, шведском столе или ночном шоу.\nВаши отзывы помогают нашей команде становиться лучше, и мы искренне благодарны за уделённое время."
      },
      "survey": {
        "title": "Напоминание на потом",
        "text": "Примерно через неделю после визита человек, купивший билеты, может получить на почту короткий опрос от Polynesian Cultural Center об общих впечатлениях.\nЕсли вы его получите, будем признательны, если вы уделите минуту и поделитесь мнением и там."
      },
      "server": "Ваш официант сегодня вечером:",
      "end": "Махало нуи лоа",
      "qrNote": "Ваш официант покажет QR-код, когда вы будете готовы.",
      "endNote": "Спасибо, что провели с нами часть своего дня.\nМахало нуи лоа, и приятного вечера!"
    },
    "status": {
      "open": "Открыто",
      "soon": "Скоро закроется",
      "ended": "На сегодня закрыто",
      "next": "Далее:",
      "gatesIn": "Вход откроется через {m} мин",
      "gatesOpen": "Вход открыт · шоу через {m} мин",
      "gates": "Вход открыт",
      "starts": "Начало шоу",
      "scanHint": "Отсканируйте QR-код и нажмите TripAdvisor"
    }
  },
  "hi": {
    "name": "हिन्दी",
    "htmlLang": "hi",
    "greet": "अलोहा! स्वागत है",
    "qr": "अपने फ़ोन पर खोलने के लिए स्कैन करें",
    "tabs": {
      "guide": "स्वागत गाइड",
      "acts": "करने के लिए",
      "close": "जाने से पहले"
    },
    "guide": {
      "server": "आज आपके सर्वर:",
      "items": [
        {
          "id": "self",
          "title": "सेल्फ़-सर्विस बफ़े",
          "text": "यह एक सेल्फ़-सर्विस बफ़े है। आप जितना चाहें उतना खाना ले सकते हैं। हमें आशा है कि आपका भोजन शानदार रहेगा।"
        },
        {
          "id": "buffet",
          "title": "बफ़े क्षेत्र और भोजन",
          "text": "बफ़े अलग-अलग श्रेणियों में बँटा है, इसलिए आप जहाँ से चाहें शुरू कर सकते हैं।\nयहाँ बच्चों का मेन्यू, सर्लॉइन स्टेक, तरह-तरह के मांस, चिकन, अही साशिमी, पोके, सी-फ़ूड, सब्ज़ियाँ, चावल, सलाद और मिठाइयाँ मिलेंगी।\nपेय स्टेशन इमारत के दोनों ओर हैं। प्लेटें मुख्य बफ़े लाइन के नीचे तथा सलाद और मिठाई वाले हिस्से में उपलब्ध हैं।"
        },
        {
          "id": "icecream",
          "title": "आइसक्रीम और डोल पाइनएपल सॉफ़्ट सर्व",
          "text": "आइसक्रीम स्टेशन इमारत के दोनों ओर उपलब्ध हैं।\nडोल पाइनएपल सॉफ़्ट सर्व Hauʻula वाली ओर मिलता है। कृपया सर्वर से मदद लें।"
        },
        {
          "id": "plates",
          "title": "प्लेटें और कटलरी",
          "text": "प्लेटें पूरे बफ़े क्षेत्र में उपलब्ध हैं।\nयदि आपको कटलरी का नया सेट चाहिए, तो कृपया हमारे किसी सर्वर से कहें, वे ख़ुशी से ला देंगे।"
        },
        {
          "id": "after",
          "title": "भोजन के बाद",
          "text": "प्लेट का काम पूरा हो जाने पर कृपया उसे अपनी मेज़ के एक किनारे सलीक़े से रख दें, हमारा स्टाफ़ उसे उठा लेगा।\nयदि आप दोबारा बफ़े पर जाना चाहें, तो हर बार साफ़ प्लेट का उपयोग करें।"
        },
        {
          "id": "allergy",
          "title": "खाद्य एलर्जी",
          "text": "यदि आपको खाने से एलर्जी है या कोई आहार संबंधी ज़रूरत है, तो सामग्री सूची, एलर्जी की जानकारी और उपलब्ध विकल्पों के लिए कृपया {link}हमारी एलर्जी गाइड देखें{/link}।"
        },
        {
          "id": "restroom",
          "title": "शौचालय",
          "text": "शौचालय इमारत के दूसरी ओर हैं। महिलाओं का शौचालय बाईं ओर और पुरुषों का दाईं ओर है।\nयदि आपको कुछ देर के लिए बाहर जाना हो, तो जाने से पहले हाथ पर स्टैम्प अवश्य लगवा लें ताकि आप वापस आ सकें।"
        },
        {
          "id": "robot",
          "title": "सर्विंग रोबोट",
          "text": "आपकी सुरक्षा के लिए कृपया सर्विंग रोबोट को न छुएँ और न ही उस पर प्लेटें या अन्य वस्तुएँ रखें।\nहमारा स्टाफ़ आपकी मेज़ से इस्तेमाल की हुई प्लेटें ख़ुद उठा लेगा।"
        },
        {
          "id": "charging",
          "title": "चार्जिंग स्टेशन",
          "text": "सुरक्षित लॉकर वाला फ़ोन चार्जिंग स्टेशन निकास द्वार के पास है।\nअपना डिवाइस चार्ज करने और लॉकर इस्तेमाल करने के लिए कृपया स्टेशन पर लगे निर्देशों का पालन करें।"
        },
        {
          "id": "coupon",
          "title": "डिस्काउंट कूपन",
          "text": "आपकी यात्रा के दौरान Hukilau Marketplace की चुनिंदा दुकानों के डिस्काउंट कूपन उपलब्ध हो सकते हैं।\nयदि आपको कूपन नहीं मिला है, तो कृपया अपने सर्वर से पूछें।"
        }
      ],
      "foot": "भोजन का आनंद लें!",
      "footNote": "हमें आशा है कि Gateway Buffet में आपका समय अच्छा बीतेगा।"
    },
    "acts": {
      "head": "शो से पहले",
      "foot": "अपने समय का आनंद लें",
      "show": {
        "title": "नाइट शो",
        "text": "क्या आप आज शाम नाइट शो देखने जा रहे हैं? शो शाम {start} बजे शुरू होगा, और द्वार शाम {gates} बजे खुलेंगे।\nयदि आपकी सीटें पहले से तय हैं, तो कृपया समय पर पहुँचें ताकि आराम से बैठ सकें। यदि आपकी सीट तय नहीं है, तो हमारे अशर ख़ुशी से आपकी मदद करेंगे।\nथिएटर Gateway Buffet से पैदल लगभग 5–7 मिनट की दूरी पर है।"
      },
      "items": [
        {
          "title": "Hukilau Marketplace",
          "subtitle": "",
          "text": "दुकानें बंद होने से पहले Hukilau Marketplace घूमें और उपहार, स्नैक्स, यादगार सामान और स्थानीय चीज़ें देखें।",
          "chips": [
            "शाम 7:30 बजे तक"
          ]
        },
        {
          "title": "Lāʻie ट्राम टूर",
          "subtitle": "",
          "text": "Lāʻie शहर और BYU–Hawaii परिसर की सुंदर सैर का आनंद लें।\nइस टूर में The Church of Jesus Christ of Latter-day Saints के Lāʻie Hawaiʻi Temple परिसर में 15 मिनट का ठहराव भी शामिल है।",
          "chips": [
            "हर 20 मिनट पर",
            "दोपहर 3:00 – शाम 6:30",
            "लगभग 35 मिनट की सवारी"
          ]
        },
        {
          "title": "Hawaiian Journey Theater",
          "subtitle": "जेरी का फ़ायर नाइफ़ शो",
          "text": "जेरी के साथ फ़ायर नाइफ़ नृत्य की कहानी और परंपरा जानें। वे लंबे समय से फ़ायर नाइफ़ प्रतियोगी रहे हैं और कम उम्र से प्रदर्शन करते आ रहे हैं।",
          "chips": [
            "हर 30 मिनट पर",
            "दोपहर 1:30 – शाम 6:30",
            "आख़िरी शो शाम 6:30 बजे"
          ]
        },
        {
          "title": "Polynesian Football Hall of Fame",
          "subtitle": "",
          "text": "पॉलिनेशियाई फ़ुटबॉल दिग्गजों को समर्पित गैलरी देखें, जिसमें पट्टिकाएँ, तस्वीरें, यादगार वस्तुएँ, इंटरैक्टिव डिस्प्ले और Wall of Honor शामिल हैं।\nयह Gateway Buffet के ठीक सामने, Polynesian Cultural Center के Welcome Center के अंदर है।",
          "chips": [
            "शाम 7:00 बजे तक"
          ]
        }
      ],
      "footNote": "कोई जल्दी नहीं — पहले अपनी मिठाई का आनंद लें!"
    },
    "close": {
      "mention": "यदि {name} ने आपकी यात्रा को ख़ास बनाया हो, तो अपना अनुभव साझा करते समय आप {name} का नाम ले सकते हैं।",
      "ready": "“जाने से पहले” अब खुल गया है।",
      "locked": {
        "text": "यह भाग आपकी यात्रा के थोड़ी देर बाद उपलब्ध होगा।\nकृपया अपने भोजन का आनंद लें और लगभग 25–30 मिनट बाद दोबारा देखें।",
        "note": "कोई जल्दी नहीं — हमारे साथ अपना समय बिताइए!",
        "soon": "लगभग {m} मिनट में उपलब्ध"
      },
      "thanks": {
        "title": "महालो, ʻOhana!",
        "text": "आज रात Gateway Buffet में हमारे साथ आने के लिए धन्यवाद। आपकी सेवा करना हमारे लिए सौभाग्य की बात रही, और हमें आशा है कि आपको अच्छा लगा।\nकृपया आराम करें और शाम के बाक़ी समय का आनंद लें।"
      },
      "review": {
        "title": "अपना अनुभव साझा करें",
        "text": "यदि आपके पास थोड़ा समय हो, तो हम Polynesian Cultural Center में आपके अनुभव के बारे में सुनना चाहेंगे।\nआपका सर्वर आपको QR कोड दिखाएगा। बस उसे स्कैन करें और TripAdvisor पर टैप करके अपने भोजन, सर्वर, गाँवों, बफ़े या नाइट शो के बारे में प्रतिक्रिया दें।\nआपकी प्रतिक्रिया से हमारी टीम को बेहतर होने में मदद मिलती है, और समय निकालने के लिए हम आपके आभारी हैं।"
      },
      "survey": {
        "title": "बाद के लिए एक सूचना",
        "text": "आपकी यात्रा के लगभग एक सप्ताह बाद, टिकट ख़रीदने वाले व्यक्ति को Polynesian Cultural Center की ओर से समग्र अनुभव के बारे में एक छोटा ईमेल सर्वे मिल सकता है।\nयदि आपको वह मिले, तो कृपया कुछ क्षण निकालकर वहाँ भी अपनी राय साझा करें, हम आभारी होंगे।"
      },
      "server": "आज रात आपके सर्वर:",
      "end": "महालो नुई लोआ",
      "qrNote": "जब आप तैयार होंगे, तब आपका सर्वर आपको QR कोड दिखाएगा।",
      "endNote": "अपने दिन का कुछ समय हमारे साथ बिताने के लिए धन्यवाद।\nमहालो नुई लोआ, और अपनी शाम का आनंद लें!"
    },
    "status": {
      "open": "अभी खुला है",
      "soon": "जल्द बंद होगा",
      "ended": "आज के लिए बंद",
      "next": "अगला:",
      "gatesIn": "द्वार {m} मिनट में खुलेंगे",
      "gatesOpen": "द्वार खुले हैं · शो {m} मिनट में",
      "gates": "द्वार खुलेंगे",
      "starts": "शो शुरू होगा",
      "scanHint": "QR कोड स्कैन करें, फिर TripAdvisor पर टैप करें"
    }
  },
  "mn": {
    "name": "Монгол",
    "htmlLang": "mn",
    "greet": "Алоха! Тавтай морил",
    "qr": "Утсан дээрээ нээхийн тулд уншуулна уу",
    "tabs": {
      "guide": "Угтах гарын авлага",
      "acts": "Хийх зүйлс",
      "close": "Явахаасаа өмнө"
    },
    "guide": {
      "server": "Өнөөдрийн таны үйлчлэгч:",
      "items": [
        {
          "id": "self",
          "title": "Өөртөө үйлчлэх буфет",
          "text": "Энэ бол өөртөө үйлчлэх буфет юм. Хүссэн хэмжээгээрээ хоолоо авч болно. Таны хоол амттай байхыг хүсье."
        },
        {
          "id": "buffet",
          "title": "Буфетийн хэсгүүд ба хоол",
          "text": "Буфет нь хоолны төрлөөр хуваагдсан тул хүссэн газраасаа эхэлж болно.\nТа хүүхдийн цэс, үхрийн сирлойн стейк, янз бүрийн мах, тахиа, ahi сашими, поке, далайн хоол, ногоо, будаа, салат, амттан зэрэг хоолыг олох болно.\nУсны цэгүүд барилгын хоёр талд байрлана. Таваг нь үндсэн буфетийн шугамын доор, мөн салат, амттаны хэсэгт бэлэн байгаа."
        },
        {
          "id": "icecream",
          "title": "Зайрмаг ба Dole хан боргоцойн зөөлөн зайрмаг",
          "text": "Зайрмагийн цэгүүд барилгын хоёр талд бий.\nDole хан боргоцойн зөөлөн зайрмаг Hauʻula талд байдаг. Үйлчлэгчээс тусламж асууна уу."
        },
        {
          "id": "plates",
          "title": "Таваг ба хоолны хэрэгсэл",
          "text": "Таваг буфетийн хэсэг бүрт бэлэн байна.\nХэрэв танд шинэ хоолны хэрэгсэл хэрэгтэй бол манай үйлчлэгчдээс гуйгаарай, тэд баяртайгаар авчирч өгнө."
        },
        {
          "id": "after",
          "title": "Хоолны дараа",
          "text": "Тавгаа дуусгаад ширээнийхээ нэг талд цэвэрхэн тавьж орхино уу, манай ажилтнууд цуглуулна.\nБуфет рүү дахин очих бол тавин бүрт цэвэр таваг ашиглана уу."
        },
        {
          "id": "allergy",
          "title": "Хоолны харшил",
          "text": "Хэрэв танд хоолны харшил эсвэл хоолны онцгой хэрэгцээ байвал найрлагын жагсаалт, харшлын мэдээлэл, боломжит сонголтуудыг {link}манай харшлын гарын авлагаас харна уу{/link}."
        },
        {
          "id": "restroom",
          "title": "Бие засах газар",
          "text": "Бие засах газар барилгын эсрэг талд байрлана. Эмэгтэйчүүдийнх зүүн талд, эрэгтэйчүүдийнх баруун талд байна.\nХэрэв түр гадуур гарах бол буцаж орохын тулд гарахаасаа өмнө гартаа тамга дарууллаарай."
        },
        {
          "id": "robot",
          "title": "Үйлчлэгч робот",
          "text": "Аюулгүй байдлын үүднээс үйлчлэгч роботод хүрэхгүй байх, түүн дээр таваг болон бусад зүйл тавихгүй байхыг хүсье.\nМанай ажилтнууд ашигласан тавгийг ширээнээс тань авна."
        },
        {
          "id": "charging",
          "title": "Цэнэглэх цэг",
          "text": "Түгжээтэй шүүгээтэй утас цэнэглэх цэг гарах хаалганы ойролцоо байна.\nТөхөөрөмжөө цэнэглэх, шүүгээг ашиглахдаа тэнд байгаа зааврыг дагана уу."
        },
        {
          "id": "coupon",
          "title": "Хөнгөлөлтийн купон",
          "text": "Таны айлчлалын үеэр Hukilau Marketplace-ийн зарим дэлгүүрийн хөнгөлөлтийн купон байж болно.\nХэрэв танд олгоогүй бол үйлчлэгчээсээ асууна уу."
        }
      ],
      "foot": "Хоолоо сайхан идээрэй!",
      "footNote": "Gateway Buffet-д өнгөрүүлэх цаг тань сайхан байх болтугай."
    },
    "acts": {
      "head": "Шоуны өмнө",
      "foot": "Цагаа сайхан өнгөрүүлээрэй",
      "show": {
        "title": "Шөнийн шоу",
        "text": "Өнөө орой шөнийн шоу үзэх үү? Шоу орой {start} цагт эхэлж, хаалга орой {gates} цагт нээгдэнэ.\nХэрэв танд суудал оноогдсон бол тайван суухын тулд эрт ирээрэй. Суудалгүй бол манай хаалгач баяртайгаар тусална.\nТеатр Gateway Buffet-ээс алхаж ойролцоогоор 5–7 минут."
      },
      "items": [
        {
          "title": "Hukilau Marketplace",
          "subtitle": "",
          "text": "Дэлгүүрүүд хаагдахаас өмнө Hukilau Marketplace-ээр зочилж, бэлэг, зууш, дурсгалын зүйл, орон нутгийн бүтээгдэхүүн үзээрэй.",
          "chips": [
            "19:30 хүртэл"
          ]
        },
        {
          "title": "Lāʻie трамвайн аялал",
          "subtitle": "",
          "text": "Lāʻie хот болон BYU–Hawaii кампусаар үзэсгэлэнт аялалд гараарай.\nАялалд Хожмын Үеийн Гэгээнтнүүдийн Есүс Христийн Сүмийн Lāʻie Hawaiʻi сүмийн хашаанд 15 минутын зогсоол багтана.",
          "chips": [
            "20 минут тутамд",
            "15:00–18:30",
            "Ойролцоогоор 35 минутын аялал"
          ]
        },
        {
          "title": "Hawaiian Journey Theater",
          "subtitle": "Жэригийн галт хутгын шоу",
          "text": "Жэригийн хамт галт хутгын бүжгийн түүх, уламжлалыг мэдээрэй. Тэрээр багаасаа тоглож эхэлсэн, олон жил галт хутгын тэмцээнд оролцсон тамирчин юм.",
          "chips": [
            "30 минут тутамд",
            "13:30–18:30",
            "Сүүлийн шоу 18:30 цагт"
          ]
        },
        {
          "title": "Polynesian Football Hall of Fame",
          "subtitle": "",
          "text": "Полинезийн хөлбөмбөгийн домогуудыг хүндэтгэсэн галерейг үзээрэй. Дурсгалын самбар, зураг, дурсгал, интерактив үзмэр, Хүндэтгэлийн хана байна.\nЭнэ нь Gateway Buffet-ийн яг эсрэг талд, Polynesian Cultural Center-ийн Welcome Center дотор байрлана.",
          "chips": [
            "19:00 хүртэл"
          ]
        }
      ],
      "footNote": "Яарах хэрэггүй — эхлээд амттанаа сайхан иднэ үү!"
    },
    "close": {
      "mention": "Хэрэв {name} таны айлчлалыг онцгой болгосон бол сэтгэгдлээ хуваалцахдаа {name}-ийг дурдаарай.",
      "ready": "«Явахаасаа өмнө» хэсэг одоо нээгдлээ.",
      "locked": {
        "text": "Энэ хэсэг таны айлчлалын дараа арай хожим нээгдэнэ.\nХоолоо сайхан идээд ойролцоогоор 25–30 минутын дараа дахин орж үзээрэй.",
        "note": "Яарах хэрэггүй — бидэнтэй цагаа сайхан өнгөрүүлээрэй!",
        "soon": "Ойролцоогоор {m} минутын дараа нээгдэнэ"
      },
      "thanks": {
        "title": "Махало, ʻOhana!",
        "text": "Өнөө орой Gateway Buffet-д бидэнтэй хамт байсанд баярлалаа. Танд үйлчлэх таатай байлаа, цагаа сайхан өнгөрүүлсэн гэж найдаж байна.\nЗүгээр амарч, оройн үлдсэн цагийг сайхан өнгөрүүлээрэй."
      },
      "review": {
        "title": "Сэтгэгдлээ хуваалцаарай",
        "text": "Хэрэв чөлөөт мөч байвал Polynesian Cultural Center-ийн талаарх таны сэтгэгдлийг сонсоход бид таатай байх болно.\nТаны үйлчлэгч QR кодыг үзүүлнэ. Зүгээр л уншуулаад TripAdvisor дээр дарж хоол, үйлчлэгч, тосгонууд, буфет эсвэл шөнийн шоуны талаар санал бичээрэй.\nТаны санал манай багт үйлчилгээгээ сайжруулахад тусалдаг бөгөөд цаг гарган бичсэнд чин сэтгэлээсээ талархаж байна."
      },
      "survey": {
        "title": "Дараа харах мэдэгдэл",
        "text": "Айлчилснаас хойш ойролцоогоор нэг долоо хоногийн дараа тасалбар худалдан авсан хүн Polynesian Cultural Center-ээс нийт туршлагын талаарх богино и-мэйл санал асуулга авч магадгүй.\nХэрэв хүлээн авбал тэнд ч санал бодлоо хуваалцвал бид талархах болно."
      },
      "server": "Өнөө оройн таны үйлчлэгч:",
      "end": "Махало нуи лоа",
      "qrNote": "Та бэлэн болсон үед үйлчлэгч тань QR кодыг үзүүлнэ.",
      "endNote": "Өдрийнхөө нэг хэсгийг бидэнтэй өнгөрүүлсэнд баярлалаа.\nМахало нуи лоа, оройн үлдсэн цагийг сайхан өнгөрүүлээрэй!"
    },
    "status": {
      "open": "Одоо нээлттэй",
      "soon": "Удахгүй хаагдана",
      "ended": "Өнөөдөр хаалттай",
      "next": "Дараагийнх:",
      "gatesIn": "Хаалга {m} минутын дараа нээгдэнэ",
      "gatesOpen": "Хаалга нээлттэй · шоу {m} минутын дараа",
      "gates": "Хаалга нээгдэнэ",
      "starts": "Шоу эхэлнэ",
      "scanHint": "QR кодыг уншуулаад TripAdvisor дээр дарна уу"
    }
  }
};
