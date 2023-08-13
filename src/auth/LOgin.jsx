import React from "react";
import { useNavigate } from "react-router-dom";

const LOgin = () => {
  const navigate = useNavigate();

  const loginHandler = () => {
    // http://127.0.0.1:5173/
    const clientID = '6f0810035da8435a9739ddf58c98605f';
    const clientSecret = "fac0c140e748451a9e3f6211d3615701";
    const redirect_uri = "http://localhost:8888/callback";
    const api_uri = "https://accounts.spotify.com/authorize?";
    const response_type ='code'
    // `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
    //     " "
    //   )}&response_type=token&show_dialog=true`
    window.location.href = `${api_uri}?client_id=${clientID}&redirect_uri=${redirect_uri}&show_dialog=true&response_type=token`;
    // navigate("/home");

    // response_type: 'code',
    //   client_id: client_id,
    //   scope: scope,
    //   redirect_uri: redirect_uri,
    //   state: state
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
