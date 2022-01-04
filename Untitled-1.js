fetch("https://menuproto.ddns.net/api/Families", {
  method: "GET",
  headers: {
    accept: "*/*",
    "Content-Type": "application/json",
    Authoritation:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vb29yc0BnbWFpbC5jb20iLCJQcnVlYmEiOiJlc1BydWViYSIsImV4cCI6MTY0MTM3MjM5Mn0.-D6FIE5KvrJWJAgmh0Zp2xVmbU2U7p9tcuG9qpc-3_I",
  },
})
  .then((res) => res.json())
  .then((e) => console.log(e));

fetch("https://menuproto.ddns.net/api/Families", {
  method: "GET",
  headers: {
    accept: "*/*",
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5vb29yc0BnbWFpbC5jb20iLCJQcnVlYmEiOiJlc1BydWViYSIsImV4cCI6MTY0MTM3MjM5Mn0.-D6FIE5KvrJWJAgmh0Zp2xVmbU2U7p9tcuG9qpc-3_I",
  },
})
  .then((res) => res.json())
  .then((e) => console.log(e));
