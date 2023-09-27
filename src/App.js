import "./App.css";
import { Routes, Route } from "react-router-dom"; // npm i react-router-dom
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./components/Home";
import { Dashboard } from "./components/Dashboard";
import { ErrorPage } from "./components/ErrorPage";
import { Navigation } from "./components/Navigation";
import { useAuth } from "./custom-hooks/useAuth";

export default function App() {
  // the whole part moved to custom-hook useAuth
  // const [apiToken, setApiToken] = useState(null);
  // const navigate = useNavigate(); // must invoke first here

  // const handleUserLogin = async () => {
  //   // this part moved to custom-function fakeAuth()
  // 	// const url = "https://reqres.in/api/login";

  // 	// const user = {
  // 	// 	email: "eve.holt@reqres.in",
  // 	// 	password: "cityslicka"
  // 	// };

  // 	// const res = await fetch(url, {
  // 	// 	method: "POST",
  // 	// 	headers: { "Content-Type": "application/json" },
  // 	// 	body: JSON.stringify(user)
  // 	// });
  // 	// // const data = await res.json(); --> {token: "QpwL5tke4Pnpja7X4"}
  // 	// // setApiToken(data.token);
  // 	// const { token } = await res.json(); // QpwL5tke4Pnpja7X4

  // 	const token = fakeAuth();
  // 	if (token) {
  // 		setApiToken(token); //     update state
  // 		navigate("/dashboard"); // navigate to Dashboard page
  // 	} else {
  // 		navigate("/");
  // 	}
  // };

  // const handleUserLogout = () => {
  // 	setApiToken(null);
  // 	navigate("/");
  // };

  const authValues = useAuth();
  // get all values/functionality/logic returned in useAuth by invoking it here, and pass down to child components

  return (
    <div className="App">
      <Navigation {...authValues} />
      <div className="container">
        {/* <Navigation apiToken={apiToken} handleUserLogout={handleUserLogout} /> */}
        <Routes>
          <Route path="/" element={<Home {...authValues} />} />
          <Route path="/dashboard" element={<Dashboard {...authValues} />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}
