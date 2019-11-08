import React from "react";
import Head from "next/head";
import Nav from "../components/nav";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <h1>Hello there</h1>
    </div>
  );
};
export default Home;
