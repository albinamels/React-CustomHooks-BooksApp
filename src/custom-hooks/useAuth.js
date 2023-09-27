import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fakeAuth } from "./fakeAuth";

export const useAuth = () => {
  const [apiToken, setApiToken] = useState(null);
  const navigate = useNavigate(); // must invoke first here

  const handleUserLogin = async () => {
    // this part moved to custom-function fakeAuth()
    // const url = "https://reqres.in/api/login";

    // const user = {
    // 	email: "eve.holt@reqres.in",
    // 	password: "cityslicka"
    // };

    // const res = await fetch(url, {
    // 	method: "POST",
    // 	headers: { "Content-Type": "application/json" },
    // 	body: JSON.stringify(user)
    // });
    // // const data = await res.json(); --> {token: "QpwL5tke4Pnpja7X4"}
    // // setApiToken(data.token);
    // const { token } = await res.json(); // QpwL5tke4Pnpja7X4

    const token = fakeAuth();
    if (token) {
      setApiToken(token); //     update state
      navigate("/dashboard"); // navigate to Dashboard page
    } else {
      navigate("/");
    }
  };

  const handleUserLogout = () => {
    setApiToken(null);
    navigate("/");
  };

  // return { apiToken, handleUserLogin, handleUserLogout };

  const authValues = {
    apiToken,
    handleUserLogin,
    handleUserLogout,
  };
  return authValues;
};
