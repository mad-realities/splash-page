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
import unit from "../utils/unit";

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
        <div
          style={{
            position: "fixed",
            width: "100%",
            maxWidth: "1600px",
          }}
        >
          <div
            style={{
              position: "fixed",
              top: "calc(2vw + 50px)",
              left: "2vw",
              width: "30vw",
              height: "30vw",
              overflow: "hidden",
              opacity: 0.25,
              boxShadow: "inset 2px 2px 0 white",
            }}
          >
            <div
              style={{
                width: "100vw",
                height: "100vw",
                boxShadow: "inset 0 0 0 2px white",
                borderRadius: "50%",
                margin: "-3vw",
              }}
            />
          </div>
          <div
            style={{
              position: "fixed",
              top: "calc(2vw + 50px)",
              right: "2vw",
              width: "30vw",
              height: "30vw",
              overflow: "hidden",
              opacity: 0.25,
              boxShadow: "inset -2px 2px 0 white",
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                width: "100vw",
                height: "100vw",
                boxShadow: "inset 0 0 0 2px white",
                borderRadius: "50%",
                margin: "-3vw",
                position: "absolute",
                right: 0,
                pointerEvents: "none",
              }}
            />
          </div>
        </div>
        <Section
          borderless
          style={{
            //@ts-ignore
            flexDirection: "var(--direction)",
            height: "var(--top-section-height)",
          }}
        >
          <div
            style={{
              flexGrow: 1,
              flexShrink: 0,
              position: "relative",
              minWidth: unit(50),
              minHeight: unit(85),
              transform: `translateX(var(--card-translate-x))`,
            }}
          >
            <ClientOnly>
              <InviteCard />
            </ClientOnly>
          </div>
          <div style={{ flex: 1, position: "relative", padding: "5vw" }}>
            <h1
              style={{
                fontFamily: "Pricedown",
                color: "white",
                fontSize: "4rem",
                fontWeight: 400,
                margin: 0,
                padding: 0,
                textTransform: "uppercase",
              }}
            >
              mad&nbsp;realities
            </h1>
            <p
              style={{
                color: "white",
                fontSize: "1.5rem",
                margin: "1rem 0",
                padding: 0,
              }}
            >
              welcome to our genesis&nbsp;show
            </p>
            <p
              style={{
                color: "white",
                fontSize: "1rem",
                margin: "1rem 0",
                padding: 0,
              }}
            >
              a new interactive dating show that anyone can participate in,
              powered by&nbsp;crypto.
            </p>
            <p
              style={{
                color: "white",
                fontSize: "1rem",
                margin: 0,
                padding: 0,
              }}
            >
              holders of an NFT rose ticket can vote in the cast, decide outfits
              and scenes, and win exclusive prizes for&nbsp;interacting.
            </p>
            <a href={CROWDFUND_URL} target="_blank">
              <Button style={{ marginTop: "2rem" }}>get your ticket</Button>
            </a>
          </div>
        </Section>
        <Section
          style={{
            alignItems: "stretch",
            position: "relative",
          }}
        >
          <div style={{ position: "absolute", inset: 0 }}>
            <ClientOnly>
              <TV />
            </ClientOnly>
          </div>
          <Intro
            className="landscape"
            style={{ position: "relative", alignItems: "center" }}
          >
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
        </Section>

        <Intro
          className="portrait"
          style={{ position: "relative", alignItems: "stretch" }}
        >
          <div
            style={{
              background: "white",
              padding: "3rem",
              margin: "5vw",
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
              vote in the bachelor(ettes). then, help them find love every week
              by voting in their&nbsp;match.
            </p>
            <a href={DISCORD_INVITE_URL} target="_blank">
              <Button style={{ marginTop: "2rem" }}>join our discord</Button>
            </a>
          </div>
        </Intro>

        <Section style={{ position: "relative", background: "black" }}>
          <div style={{ position: "absolute", inset: 0 }}>
            <ClientOnly>
              <Pipes />
            </ClientOnly>
          </div>
          <Intro
            className="landscape"
            style={{ position: "relative", alignItems: "center" }}
          >
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
                    <li>
                      Episode 7: Fan-Favorite couple goes on a second date
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </Intro>
        </Section>

        <Intro
          className="portrait"
          style={{ position: "relative", alignItems: "center" }}
        >
          <div
            style={{
              background: "black",
              color: "white",
              padding: "3rem",
              margin: "5vh",
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
                    of the&nbsp;episode
                  </li>
                  <li>
                    Episode 7: Fan-Favorite couple goes on a second&nbsp;date
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </Intro>

        <div
          style={{ color: "white", position: "relative" }}
          className="portrait"
        >
          <Intro
            style={{
              alignItems: "center",
              textAlign: "center",
              padding: "5vw",
            }}
          >
            <p style={{ marginTop: "10%" }}>
              be a founding member of the first decentralized media network
              audience owned and audience&nbsp;governed.
            </p>
            <p>
              creating content that drives chaotic and entertaining
              social&nbsp;experiences.
            </p>
            <p>
              mad realities is the MTV of a new kind of tv, with
              infinite&nbsp;possibliites.
            </p>
            <p style={{ margin: "5rem 0" }}>create with us</p>
            <a href={DISCORD_INVITE_URL} target="_blank">
              <Button>join our discord</Button>
            </a>
          </Intro>
        </div>

        <Section style={{ color: "white" }} className="landscape">
          <Intro style={{ alignItems: "center", textAlign: "center" }}>
            <p style={{ marginTop: "10%" }}>
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
      </GlitterBackground>

      <div
        style={{
          zIndex: 999999,
          position: "relative",
          background: "white",
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Intro style={{ fontFamily: "serif", alignItems: "center" }}>
          <Image src="/simp-card.png" width="294" height="172" />
          <p>u dropped this</p>
          <img
            src="https://hitwebcounter.com/counter/counter.php?page=7886950&style=0025&nbdigits=9&type=ip&initCount=0"
            alt="web counter"
          />
          simps and counting
        </Intro>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: column;
  overflow-x: hidden;
  width: 100vw;
  align-items: center;
  padding-top: 50px;
  --card-translate-x: 5vh;
  --unit: 1vh;
  --direction: row;
  --top-section-height: calc(100vh - 2vw - 50px);
  --section-height: calc(100vh - 2vw - 50px);
  --section-width: 98vw;
  --section-margin: 1vw;
  .landscape {
    visibility: visible;
    display: flex;
  }
  .portrait {
    visibility: hidden;
    display: none;
  }
  @media (max-width: 1000px) {
    --card-translate-x: 0vh;
    --unit: 1.5vw;
    --direction: column;
    --top-section-height: auto;
    --section-height: 75vw;
    --section-width: 90vw;
    --section-margin: 5vw;
    .landscape {
      visibility: hidden;
      display: none;
    }
    .portrait {
      visibility: visible;
      display: flex;
    }
  }
`;

const GlitterBackground = styled.div`
  display: flex;
  flex-flow: column;
  background-color: black;
  width: 100vw;
  align-items: center;
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

const Section = styled.div<{ borderless?: boolean }>`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  width: var(--section-width);
  height: var(--section-height);
  max-width: 1200px;
  margin: var(--section-margin);
  border-radius: 49vw 49vw 2vw 2vw;
  padding: 1vw;
  overflow: ${({ borderless }) => (borderless ? "visible" : "hidden")};
  position: relative;
  &:after {
    display: ${({ borderless }) => (borderless ? "none" : "block")};
    content: "";
    position: absolute;
    inset: 1vw;
    box-shadow: inset 0 0 0 2px white;
    border-radius: 49vw 49vw 1vw 1vw;
  }
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
