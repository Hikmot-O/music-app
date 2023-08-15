import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";
// import AuthContext from "../store/auth-context";
import axios from "axios";

const LOgin = () => {
  const [token, SetToken] = useState("");
  const navigate = useNavigate();
  const ctx = useContext(AuthContext);

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const access_token = hash.split("&")[0].split("=")[1];
      localStorage.setItem('token', access_token)
      SetToken(access_token);
      ctx.getToken(access_token)
    }
    token ? navigate("/home") : navigate("/");
    // const access_token = window.location?.hash?.split("&")[0].split("=")[1];
    console.log(window.location?.hash?.split("&")[0].split("=")[1]);
  }, [token]);

  const loginHandler = () => {
    const clientID = "6f0810035da8435a9739ddf58c98605f";
    const clientSecret = "fac0c140e748451a9e3f6211d3615701";
    const redirect_uri = "http://127.0.0.1:5173/";
    const api_uri = "https://accounts.spotify.com/authorize";
    const response_type = "code";

    window.location.href = `${api_uri}?client_id=${clientID}&redirect_uri=${redirect_uri}&show_dialog=true&response_type=token`;
    console.log(window.location.hash);
  };
  return (
    <section className="bg-green-400 w-full h-screen flex items-center justify-center">
      <button onClick={loginHandler} className="text-white text-xl">
        Login
      </button>
    </section>
  );
};

export default LOgin;
