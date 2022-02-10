// fetch("https://menuproto.ddns.net/api/Accounts/login", {
//   method: "POST",
//   headers: { accept: "*/*", "Content-Type": "application/json" },
//   body: JSON.stringify({ eMail: "nooors@gmail.com", password: "N000rs123!!" }),
// })
//   .then((res) => res.json())
//   .then((e) => console.log(e));

export const apiBase = "https://menuproto.ddns.net/api/";

// export const header = { Authorization: `Bearer ${tokenApi}` };

export const parseJwt = function (token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
};

export const menu = {
  InitDate: "30-10-2021",
  EndDate: "30-10-2021",
  Starters: [
    {
      _id: {
        $oid: "617d035197a5161af0cba526",
      },
      ShortName: [
        "Ensalada de rúcula y pera",
        "Amanida de ruca i pera",
        "Rocket salad with pear",
      ],
      Description: [
        "Ensalada de rúcula y pera",
        "Amanida de ruca i pera ",
        "Rocket salad with pear",
      ],
      Price: [],
      Type: "Ensaladas",
      Family: "Entrantes",
      Pictures: [],
      Department: ["Menu semanal"],
      Order: 1,
      Supplement: [],
      CreateDate: {
        $date: "2020-10-05T10:34:41.866Z",
      },
    },
    {
      _id: {
        $oid: "5fcdb3dcfc4ad047453037ef",
      },
      ShortName: [
        "Tempura de calçots",
        "Tempura de calçots",
        "Tempura de calçots",
      ],
      Description: [
        "Tempura de calçots amb romesco ",
        "Tempura de calçots con romesco",
        "Tempura de calçots (typical Catalan spring onions) with romesco sauce",
      ],
      Price: [],
      Type: "Verduras",
      Family: "Entrantes",
      Pictures: [],
      Department: ["Menu semanal"],
      Order: 2,
      Supplement: [],
      CreateDate: {
        $date: "2020-12-08T20:31:02.183Z",
      },
    },
    {
      _id: {
        $oid: "5fe06868fc4ad04745320d96",
      },
      ShortName: [
        "Habas a la catalana",
        "Faves a la catalana",
        "Catalan-style beans",
      ],
      Description: [
        "Habas a la catalana",
        "Faves a la catalana",
        "Catalan-style beans",
      ],
      Price: [],
      Type: "Cocidos",
      Family: "Entrantes",
      Pictures: [],
      Department: ["Menu semanal"],
      Order: 3,
      Supplement: [],
      CreateDate: {
        $date: "2020-12-21T20:31:02.183Z",
      },
    },
    {
      _id: {
        $oid: "5fbad67dfc4ad047452a756a",
      },
      ShortName: [
        "Níscalos salteados",
        "Rovellons saltats",
        "Sautéed milk caps(mushrooms)",
      ],
      Description: [
        "Níscalos salteados con ajo y perejil",
        "Rovellons saltats amb all i julivert",
        "Sautéed milk caps with garlic and parsley",
      ],
      Price: [],
      Type: "Setas",
      Family: "Entrantes",
      Pictures: [],
      Department: ["Menu semanal"],
      Order: 6,
      Supplement: [3.9],
      CreateDate: {
        $date: "2020-11-10T20:31:02.183Z",
      },
    },
  ],
  Main: [
    {
      _id: {
        $oid: "617d056497a5161af0cba527",
      },
      ShortName: [
        "Carpaccio de ternera",
        "Carpaccio de vedella",
        "Beef carpaccio",
      ],
      Description: [
        "Carpaccio de ternera con parmesano rúcula y vinagreta de mostaza",
        "Carpaccio de vedella amb parmesà ruca i vinagreta de mostassa",
        "Beef carpaccio with rocket parmesan and mustard vinaigrette",
      ],
      Price: [],
      Type: "Carnes",
      Family: "Principales",
      Pictures: [],
      Department: ["Menu semanal"],
      Order: 1,
      Supplement: [],
      CreateDate: {
        $date: "2020-10-12T08:49:42.114Z",
      },
    },
    {
      _id: {
        $oid: "617623fbf6b7224934af28fd",
      },
      ShortName: [
        "Rape con salsa suquet",
        "Rap amb salsa suquet",
        "Monkfish with suquet sauce",
      ],
      Description: [
        "Rape con salsa suquet",
        "Rap amb salsa suquet",
        "Monkfish with suquet sauce",
      ],
      Price: [],
      Type: "Pescados",
      Family: "Principales",
      Pictures: [],
      Department: ["Menu semanal"],
      Order: 2,
      Supplement: [],
      CreateDate: {
        $date: "2021-10-09T20:31:02.183Z",
      },
    },
    {
      _id: {
        $oid: "6098a9e88428f143ac32a2dc",
      },
      ShortName: ["Confit de pato", "Confit d'ànec", "Duck confit"],
      Description: [
        "Confit de pato con vinagreta de fresas",
        "Confit d'ànec amb vinagreta de maduixes",
        "Duck confit with strawberry vinaigrette",
      ],
      Price: [],
      Type: "Carnes",
      Family: "Principales",
      Pictures: [],
      Department: ["Menu semanal"],
      Order: 3,
      Supplement: [],
      CreateDate: {
        $date: "2021-05-10T20:31:02.183Z",
      },
    },
    {
      _id: {
        $oid: "6004ab92ad11e646545b1c7c",
      },
      ShortName: [
        "Solomillo de ternera",
        "Filet de vedella",
        "Beef tenderloin",
      ],
      Description: [
        "Solomillo de ternera con patatas fritas",
        "Filet de vedella amb patates fregides",
        "Beef tenderloin with french fries",
      ],
      Price: [19.8],
      Type: "Carnes",
      Family: "Principales",
      Pictures: [],
      Department: ["Menu semanal"],
      Order: 8,
      Supplement: [5.9],
      CreateDate: {
        $date: "2021-01-17T20:31:02.183Z",
      },
    },
  ],
  Price: [18, 19],
  Text: [
    "Una copa de vino de la casa o cerveza de tirador 250ml o agua 1/2 l. Postre o café. ( Refrescos y vichy no incluidos )",
    "Una copa de vi de la casa o cervesa de tirador 250ml o aigua 1/2 l. Postres o cafè. (Refrescs i vichy no inclosos)",
    "A glass of house wine or beer 250ml or water 1/2 l. Dessert or coffee. ( Soft drinks and sparkling water not included )",
  ],
};
