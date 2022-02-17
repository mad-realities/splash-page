import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";

import Loading from "../components/Loading";
import Hero from "../components/Hero";
import About from "../components/About";
import Roadmap from "../components/Roadmap";
import Footer from "../components/Footer";

import { DISCORD_INVITE_URL, CROWDFUND_URL } from "../constants/urls.js";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>mad realities</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/cover-photo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.madrealities.xyz/cover-photo.png?utm_source=twitter" />
        <meta name="twitter:title" content="mad realities" />
        <meta name="twitter:description" content="a new interactive dating show that anyone can participate in, powered by crypto" />
        <meta name="twitter:url" content="https://www.madrealities.xyz" />
        <link rel="shortcut icon" href="/mad-icon.png" />
        <link rel="apple-touch-icon image_src" href="mad-icon-touch.png" />
      </Head>
      <Loading />
      <Hero />
      <About />
      <Roadmap />
      <Footer />
    </div>
  );
};

export default Home;
