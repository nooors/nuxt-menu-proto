fetch("https://menuproto.ddns.net/api/Families", {
  method: "GET",
  headers: {
    accept: "*/*",
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vb29yc0BnbWFpbC5jb20iLCJBZG1pbiI6IkFkbWluIiwiVXNlciI6IlVzZXIiLCJleHAiOjE2NDIxNTI4MDh9.5snGEX2r2-Dm4H8AUgI9RwE0FLA4J4bnP5sm6PCkFUY",
  },
})
  .then((res) => res.json())
  .then((e) => console.log(e));

fetch("https://menuproto.ddns.net/api/Departments", {
  method: "GET",
  headers: {
    accept: "*/*",
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vb29yc0BnbWFpbC5jb20iLCJBZG1pbiI6IkFkbWluIiwiVXNlciI6IlVzZXIiLCJleHAiOjE2NDIxNTI4MDh9.5snGEX2r2-Dm4H8AUgI9RwE0FLA4J4bnP5sm6PCkFUY",
  },
})
  .then((res) => res.json())
  .then((e) => console.log(e));

fetch("https://menuproto.ddns.net/api/Families", {
  data: { name: "Sugerencias" },
  method: "POST",
  headers: {
    accept: "*/*",
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vb29yc0BnbWFpbC5jb20iLCJBZG1pbiI6IkFkbWluIiwiVXNlciI6IlVzZXIiLCJleHAiOjE2NDIxNTI4MDh9.5snGEX2r2-Dm4H8AUgI9RwE0FLA4J4bnP5sm6PCkFUY",
  },
})
  .then((res) => res.json())
  .then((e) => console.log(e));

fetch("https://menuproto.ddns.net/api/Families", {
  method: "DELETE",
  headers: {
    accept: "*/*",
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vb29yc0BnbWFpbC5jb20iLCJBZG1pbiI6IkFkbWluIiwiVXNlciI6IlVzZXIiLCJleHAiOjE2NDE5MDM4OTN9.UBmuYIIhCe0xXRXSshSR6z5oZH_boDcFSheEBje_540",
  },
  body: JSON.stringify({
    name: "Postres",
  }),
})
  .then((res) => res.json())
  .then((e) => console.log(e));

const departments = [
  {
    id: 1,
    family: {
      id: 1,
      name: "Pastas",
    },
    ptypes: {
      id: 1,
      name: "Entrantes",
    },
    departaments: [
      {
        id: 1,
        name: "Menú semanal",
      },
      {
        id: 2,
        name: "Carta noche",
      },
      {
        id: 3,
        name: "Deptartamento 3",
      },
    ],
    shortNames: [
      {
        id: 1,
        name: "Espaguetis al pesto 2",
        lang: "es",
      },
      {
        id: 2,
        name: "Espaguetis al pesto 2",
        lang: "ca",
      },
      {
        id: 3,
        name: "Spaghetti with pesto 2",
        lang: "en",
      },
    ],
    descriptions: [
      {
        id: 1,
        text: "Espaguetis con salsa de pesto genovés 2",
        lang: "es",
      },
      {
        id: 2,
        text: "Espaguetis amb salsa de pesto genovès 2",
        lang: "ca",
      },
      {
        id: 3,
        text: "Spaghetti with Genovese Pesto Sauce 2",
        lang: "en",
      },
    ],
    prices: [
      {
        id: 1,
        amount: 12.95,
      },
    ],
    fileApps: [],
  },
  {
    id: 2,
    family: {
      id: 1,
      name: "Pastas",
    },
    ptypes: {
      id: 1,
      name: "Entrantes",
    },
    departaments: [
      {
        id: 1,
        name: "Menú semanal",
      },
      {
        id: 2,
        name: "Carta noche",
      },
      {
        id: 3,
        name: "Deptartamento 3",
      },
    ],
    shortNames: [
      {
        id: 4,
        name: "Espaguetis al pesto 1",
        lang: "es",
      },
      {
        id: 5,
        name: "Espaguetis al pesto 1",
        lang: "ca",
      },
      {
        id: 6,
        name: "Spaghetti with pesto 1",
        lang: "en",
      },
    ],
    descriptions: [
      {
        id: 4,
        text: "Espaguetis con salsa de pesto genovés 1",
        lang: "es",
      },
      {
        id: 5,
        text: "Espaguetis amb salsa de pesto genovès 1",
        lang: "ca",
      },
      {
        id: 6,
        text: "Spaghetti with Genovese Pesto Sauce 1",
        lang: "en",
      },
    ],
    prices: [
      {
        id: 4,
        amount: 12.95,
      },
    ],
    fileApps: [],
  },
  {
    id: 3,
    family: {
      id: 1,
      name: "Pastas",
    },
    ptypes: {
      id: 1,
      name: "Entrantes",
    },
    departaments: [
      {
        id: 1,
        name: "Menú semanal",
      },
      {
        id: 2,
        name: "Carta noche",
      },
      {
        id: 3,
        name: "Deptartamento 3",
      },
    ],
    shortNames: [
      {
        id: 7,
        name: "Anchoas con tomate",
        lang: "es",
      },
      {
        id: 8,
        name: "Anchoas amb tomàquet",
        lang: "ca",
      },
      {
        id: 9,
        name: "Anchovies with tomato",
        lang: "en",
      },
    ],
    descriptions: [
      {
        id: 7,
        text: "Tostada de anchoas con tomate",
        lang: "es",
      },
      {
        id: 8,
        text: "Torrada d'anxoves amb tomàquet",
        lang: "ca",
      },
      {
        id: 9,
        text: "Anchovy toast with tomato",
        lang: "en",
      },
    ],
    prices: [
      {
        id: 9,
        amount: 12.95,
      },
    ],
    fileApps: [],
  },
  {
    id: 4,
    family: {
      id: 1,
      name: "Pastas",
    },
    ptypes: {
      id: 4,
      name: "Entrantes",
    },
    departaments: [
      {
        id: 6,
        name: "Menú semanal",
      },
    ],
    shortNames: [
      {
        id: 10,
        name: "Penne rigatte a la bolognesa",
        lang: "es",
      },
      {
        id: 11,
        name: "Penne rigatte a la bolognesa",
        lang: "ca",
      },
      {
        id: 12,
        name: "Penne rigatte a la bolognesa",
        lang: "en",
      },
    ],
    descriptions: [
      {
        id: 10,
        text: "Penne rigatte con ragú de carne y salsa de tomate",
        lang: "es",
      },
      {
        id: 11,
        text: "Penne rigatte amb ragú de carn i salsa de tomàquet",
        lang: "ca",
      },
      {
        id: 12,
        text: "Penne rigatte with meat ragout and tomato sauce",
        lang: "en",
      },
    ],
    prices: [
      {
        id: 10,
        amount: 12.95,
      },
    ],
    fileApps: [],
  },
  {
    id: 5,
    family: {
      id: 2,
      name: "Arroces",
    },
    ptypes: {
      id: 1,
      name: "Entrantes",
    },
    departaments: [
      {
        id: 1,
        name: "Menú semanal",
      },
      {
        id: 5,
        name: "Departamento 5",
      },
    ],
    shortNames: [
      {
        id: 13,
        name: "Penne rigatte a la bolognesa",
        lang: "es",
      },
      {
        id: 14,
        name: "Penne rigatte a la bolognesa",
        lang: "ca",
      },
      {
        id: 15,
        name: "Penne rigatte a la bolognesa",
        lang: "en",
      },
    ],
    descriptions: [
      {
        id: 13,
        text: "Penne rigatte con ragú de carne y salsa de tomate",
        lang: "es",
      },
      {
        id: 14,
        text: "Penne rigatte amb ragú de carn i salsa de tomàquet",
        lang: "ca",
      },
      {
        id: 15,
        text: "Penne rigatte with meat ragout and tomato sauce",
        lang: "en",
      },
    ],
    prices: [
      {
        id: 11,
        amount: 12.95,
      },
    ],
    fileApps: [],
  },
];
