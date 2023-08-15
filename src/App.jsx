import { useContext, useEffect } from "react";
import AuthContext from "./store/auth-context";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import LOgin from "./auth/LOgin";
import Home from "./components/Home";
import Discover from "./components/Discover";
import axios from "axios";

function App() {
  const ctx = useContext(AuthContext);
  // const token = ctx.token;
  const token = localStorage.getItem("token");
  console.log(token);
  useEffect(() => {
    const getPlaylists = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/playlists",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const { items } = response.data;
      console.log(response.data.items);
    };
    getPlaylists()
  }, [token]);

  return (
    <Routes>
      <Route path="/" element={<LOgin />} />
      <Route path="/home" element={<Home />}>
        {/* <Route path='/' element={<Discover/>} /> */}
      </Route>
    </Routes>
  );
}

export default App;
