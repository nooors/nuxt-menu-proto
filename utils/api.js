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
