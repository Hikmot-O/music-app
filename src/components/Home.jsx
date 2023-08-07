import React from "react";
import Sidebar from "./Sidebar";
import Discover from "./Discover";
import Playing from "./Playing";
import TrackList from "./TrackList";

const Home = () => {
  return (
    <section className="w-[100%] h-screen flex flex-row">
      <Sidebar />
      <Discover />
      <Playing />
      <TrackList />
    </section>
  );
};

export default Home;
