export const fakeAuth = async () => {
  const url = "https://reqres.in/api/login";

  const user = {
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  // const data = await res.json(); --> {token: "QpwL5tke4Pnpja7X4"}
  // setApiToken(data.token);
  const { token } = await res.json(); // QpwL5tke4Pnpja7X4

  return token;
};
