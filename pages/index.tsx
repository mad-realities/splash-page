import type { NextPage } from "next";
import styled from "@emotion/styled";
import Image from "next/image";
import Head from "next/head";

import InviteCard from "../components/InviteCard";
import Banner from "../components/Banner";
import TopNav from "../components/TopNav";

import { DISCORD_INVITE_URL, CROWDFUND_URL } from "../constants/urls.js";
import TV from "../components/TV";
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
              <p
                style={{
                  color: "white",
                  fontSize: "1.5rem",
                  margin: "0 0 1rem 0",
                  padding: 0,
                }}
              >
                welcome to our genesis show
              </p>
              <h1
                style={{
                  fontFamily: "Outward",
                  color: "white",
                  fontSize: "12rem",
                  fontWeight: 400,
                  margin: "0 0 -1.5rem 0",
                  padding: 0,
                  textTransform: "uppercase",
                }}
              >
                the colosseum
              </h1>
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

      <Section style={{ alignItems: "stretch", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <ClientOnly>
            <TV />
          </ClientOnly>
        </div>
        <Intro style={{ position: "relative" }}>
          <div className="body-title">dropping soon: co-create season 0</div>
          <div className="body-text">
            vote in the bachelor(ettes).
            <br />
            then, help them find love every week by voting in their match.
          </div>
          <a href={DISCORD_INVITE_URL} target="_blank">
            <Button>join our discord</Button>
          </a>
        </Intro>
        <ImageContainer>
          <Image
            src="/candidate-cards.png"
            alt="candidate cards"
            layout="fill"
            objectFit="contain"
          />
        </ImageContainer>
      </Section>

      <Section>
        <Intro>
          <div className="body-title">roadmap</div>
          <div className="body-text">
            Crowdfund
            <br />
            Pilot (Episode 0)
            <br />
            Community-Driven Casting
            <br />
            <br />
            Season 0<br />
            Episode 1-6: Every week, find love for the bachelor(ette) of the
            episode
            <br />
            Episode 7: Fan-Favorite couple goes on a second date
            <br />
          </div>
        </Intro>
      </Section>

      <Section style={{ paddingBottom: "200px" }}>
        <Intro>
          <div className="body-title">
            be a founding member of the first decentralized media network
            <br />
            audience owned and audience governed.
          </div>
          <div className="body-text">
            audience owned and audience governed. creating content that drives
            chaotic and entertaining social experiences.
            <br />
            <br />
            mad realities is the MTV of a new kind of tv, with infinite
            possibliites.
          </div>
        </Intro>
      </Section>

      <WhiteSection>
        <div style={{ padding: "100px 0", textAlign: "center" }}>
          <div className="body-title secondary">create with us</div>
          <a href={DISCORD_INVITE_URL} target="_blank">
            <DiscordButton>join our discord</DiscordButton>
          </a>
        </div>
      </WhiteSection>

      <ImageRepeat />
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

const ImageRepeat = styled.div`
  background-image: url("simp-card.png");
  background-repeat: repeat;

  height: 344px; // enough for two rows
`;
export default Home;
