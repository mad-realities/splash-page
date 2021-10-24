import type { NextPage } from "next";
import styled from "@emotion/styled";
import Image from "next/image";
import Head from "next/head";

import InviteCard from "../components/InviteCard";
import Banner from "../components/Banner";
import TopNav from "../components/TopNav";

import { DISCORD_INVITE_URL, CROWDFUND_URL } from "../constants/urls.js";
import TV from "../components/TV";
import Pipes from "../components/Pipes";
import ClientOnly from "../components/ClientOnly";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>mad realities</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlitterBackground>
        <Background />
        <Banner />
        <TopNav />
        <Section>
          <ClientOnly>
            <InviteCard />
          </ClientOnly>
          <Intro>
            <div style={{ width: "500px" }}>
              <h1
                style={{
                  fontFamily: "Pricedown",
                  color: "white",
                  fontSize: "5rem",
                  fontWeight: 400,
                  margin: 0,
                  padding: 0,
                  textTransform: "uppercase",
                }}
              >
                mad realities
              </h1>
              <p
                style={{
                  color: "white",
                  fontSize: "1.5rem",
                  margin: "1rem 0",
                  padding: 0,
                }}
              >
                welcome to our genesis show
              </p>
              <p
                style={{
                  color: "white",
                  fontSize: "1rem",
                  margin: "1rem 0",
                  padding: 0,
                }}
              >
                a new interactive dating show that anyone can
                <br />
                participate in, powered by crypto.
              </p>
              <p
                style={{
                  color: "white",
                  fontSize: "1rem",
                  margin: 0,
                  padding: 0,
                }}
              >
                holders of an NFT rose ticket can vote in the cast,
                <br />
                decide outfits and scenes, and win exclusive prizes
                <br />
                for interacting.
              </p>
              <a href={CROWDFUND_URL} target="_blank">
                <Button style={{ marginTop: "2rem" }}>get your ticket</Button>
              </a>
            </div>
          </Intro>
        </Section>
      </GlitterBackground>

      <Section
        style={{
          alignItems: "stretch",
          position: "relative",
          height: `calc(0.75 * 100vw)`,
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          <ClientOnly>
            <TV />
          </ClientOnly>
        </div>
        <Intro style={{ position: "relative", alignItems: "flex-end" }}>
          <div
            style={{
              width: "500px",
              background: "white",
              padding: "3rem",
              boxShadow: "1rem 1rem 0 black",
            }}
          >
            <p
              style={{
                fontSize: "1.5rem",
                lineHeight: 1.5,
                margin: "0 0 1rem 0",
                padding: 0,
                fontWeight: 600,
              }}
            >
              dropping soon:
              <br />
              co-create season 0
            </p>
            <p
              style={{
                fontSize: "1rem",
                margin: "1rem 0 0 0",
                padding: 0,
                fontWeight: 600,
              }}
            >
              vote in the bachelor(ettes).
              <br />
              then, help them find love every week
              <br />
              by voting in their match.
            </p>
            <a href={DISCORD_INVITE_URL} target="_blank">
              <Button style={{ marginTop: "2rem" }}>join our discord</Button>
            </a>
          </div>
        </Intro>
        <Intro />
      </Section>

      <Section style={{ position: "relative", background: "black" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <ClientOnly>
            <Pipes />
          </ClientOnly>
        </div>
        <Intro />
        <Intro style={{ position: "relative" }}>
          <div
            style={{
              width: "500px",
              background: "black",
              color: "white",
              padding: "3rem",
              boxShadow: "1rem 1rem 0 white",
            }}
          >
            <p
              style={{
                fontSize: "1.5rem",
                lineHeight: 1.5,
                margin: "0 0 1rem 0",
                padding: 0,
              }}
            >
              roadmap
            </p>
            <ul
              style={{
                fontSize: "1rem",
                margin: "1rem 0 0 0",
                padding: 0,
              }}
            >
              <li>
                Crowdfund
                <ul>
                  <li>Pilot (Episode 0)</li>
                  <li>Community-Driven Casting</li>
                </ul>
              </li>

              <li>
                Season 0
                <ul>
                  <li>
                    Episodes 1-6: Every week, find love for the bachelor(ette)
                    of the episode
                  </li>
                  <li>Episode 7: Fan-Favorite couple goes on a second date</li>
                </ul>
              </li>
            </ul>
          </div>
        </Intro>
      </Section>

      <Section style={{ color: "white", background: "black" }}>
        <Intro style={{ alignItems: "center", textAlign: "center" }}>
          <p>
            be a founding member of the first decentralized media network
            <br />
            audience owned and audience governed.
          </p>
          <p>
            creating content that drives chaotic and entertaining social
            experiences.
          </p>
          <p>
            mad realities is the MTV of a new kind of tv, with infinite
            possibliites.
          </p>
          <p style={{ margin: "5rem 0" }}>create with us</p>
          <a href={DISCORD_INVITE_URL} target="_blank">
            <Button>join our discord</Button>
          </a>
        </Intro>
      </Section>

      <Section>
        <Intro style={{ fontFamily: "serif", alignItems: "center" }}>
          <Image src="/simp-card.png" width="294" height="172" />
          <p>u dropped this</p>
          <img
            src="https://hitwebcounter.com/counter/counter.php?page=7886950&style=0025&nbdigits=9&type=ip&initCount=0"
            alt="web counter"
          />
          simps and counting
        </Intro>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: column;
  overflow-x: hidden;
  r
`;

const GlitterBackground = styled.div`
  display: flex;
  flex-flow: column;
  background-color: black;
  overflow: hidden;

  position: relative;
`;

const Background = styled.div`
  background: url(glitter.gif);
  background-size: cover;
  mix-blend-mode: screen;
  filter: blur(10px);

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
`;

const Section = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const WhiteSection = styled(Section)`
  margin-top: -40px;
  background-color: #d39bff;
  z-index: 2;
  min-height: unset;

  > div {
    color: #490081 !important;
  }
`;

const Intro = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1;

  justify-content: center;
  align-items: flex-start;
`;

const Button = styled.button`
  background-color: yellow;
  border: 8px outset yellow;
  padding: 12px 50px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  &:active {
    background-color: goldenrod;
    border: 8px inset goldenrod;
  }
`;

const DiscordButton = styled.button`
  background-color: C4C4C4;
  border-radius: 4px;
  border: none;
  padding: 12px 50px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;

  @media (max-width: 768px) {
    padding: 12px 40px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  flex: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default Home;
