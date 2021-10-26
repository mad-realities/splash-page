import type { NextPage } from "next";
import styled from "@emotion/styled";
import Image from "next/image";
import Head from "next/head";

import InviteCard from "../components/InviteCard";
import Banner from "../components/Banner";
import TopNav from "../components/TopNav";
import Button from "../components/Button";

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
        <NavyBackground />
        <Banner />
        <TopNav />
        <Section>
          <ClientOnly>
            <InviteCard />
          </ClientOnly>
          <Intro>
            {/* <div style={{ maxWidth: "500px" }}> */}
              <h1 className="splash-page-h1">
                a new interactive dating show that anyone can participate in, powered by crypto
              </h1>
              <p className="splash-page-p">
                Our shows will be powered by our community - holders of an NFT rose ticket can vote in the cast, decide outfits and scenes, and win exclusive prizes for interacting.
              </p>
              <a href={CROWDFUND_URL} target="_blank">
                <Button style={{ marginTop: "1rem" }}>get your ticket</Button>
              </a>
            {/* </div> */}
          </Intro>
        </Section>

      <Section
        style={{
          alignItems: "stretch",
          position: "relative",
          height: `calc(0.75 * 100vh)`,
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
              maxWidth: "500px",
              background: "white",
              padding: "3rem",
              boxShadow: "1rem 1rem 0 black",
            }}
          >
            {/* <p
              // style={{
              //   fontSize: "1.5rem",
              //   lineHeight: 1.5,
              //   margin: "0 0 1rem 0",
              //   padding: 0,
              //   fontWeight: 600,
              // }}
            // > */}
            <h1 className="splash-page-h1 alt">
              it starts with season 0
            </h1>
            {/* // </p> */}
            <p className="splash-page-p"
              style={{
                color: "black"
              }}
            >
              vote in the bachelor(ettes).
              <br />
              then, help them find love every week
              <br />
              by voting in their match.
            </p>
            <a href={DISCORD_INVITE_URL} target="_blank">
              <Button style={{ marginTop: "1rem" }}>join our discord</Button>
            </a>
          </div>
        </Intro>
      </Section>

      <Section style={{ position: "relative" }}>
        <div style={{ position: "absolute", inset: 0 }}>
            <Image src="/lines.png" layout="fill" objectFit="contain" className="image-overlay"/>
          </div>
        <Intro style={{ position: "relative", alignItems: "center" }}>
          <div
            style={{
              // maxWidth: "500px",
              // color: "white",
              alignItems: "center",
              textAlign: "center",
              maxWidth: 600
              // boxShadow: "1rem 1rem 0 white",
            }}
          >
            <h1
              className="splash-page-h1"
              // style={{
              //   fontSize: "1.5rem",
              //   lineHeight: 1.5,
              //   margin: "0 0 1rem 0",
              //   padding: 0,
              // }}
            >
              come along for the journey
            </h1>
            <div style={{padding: "1rem 0"}}>
            <span className="splash-page-p">
                <span className="splash-page-highlighted-word pink-highlight-text">The Crowdfund</span>
                <span className="splash-page-p">{" Backers will receive special NFTs that act as a ticket into the show."}</span>
                <br />
                <br />
                <span className="splash-page-highlighted-word orange-highlight-text">Episode 0</span>
                <span className="splash-page-p">{" We are starting this project off with a pilot, or as we like to call it, "}</span>
                <span className="splash-page-highlighted-word orange-highlight-text">Episode 0</span>
                <span className="splash-page-p">{". This November, be in the room where it happens."}</span>

                <br/>
                <br />

                <span className="splash-page-highlighted-word yellow-highlight-text">NFT Ticket Drop</span>
                <span className="splash-page-p">{" We will drop new tickets for purchase for those that did not get to participate in the initial crowdfund."}</span>

                <br/>
                <br />

                <span className="splash-page-highlighted-word green-highlight-text">Community-Driven Casting Call</span>
                <span className="splash-page-p">{" It is the community's job to nominate and collectively crowd-source contestants for the initial cast."}</span>

                <br/>
                <br />

                <span className="splash-page-highlighted-word blue-highlight-text">Season 0</span>
                <span className="splash-page-p">{" Season 0 will take place over 6 weeks "}</span>
                <span className="splash-page-highlighted-word blue-highlight-text">Winter 2022</span>
                <span className="splash-page-p">{" with new episodes aired every Sunday night. Vote in new contestants each week."}</span>

                <br/>
                <br />

                <span className="splash-page-highlighted-word purple-highlight-text">The Mad Realities DAO</span>
                <span className="splash-page-p">{" Down the line, "}</span>
                <span className="splash-page-highlighted-word purple-highlight-text">Mad Realities</span>
                <span className="splash-page-p">{" will be a DAO."}</span>
            </span>
            </div>
              <a href={CROWDFUND_URL} target="_blank">
                <Button style={{ marginTop: "1rem" }}>get your ticket</Button>
              </a>

            {/* <ul 
              style={{
                fontSize: "1rem",
                margin: "1rem 0 0 0",
                padding: 0,
              }}
            >
              <li className="splash-page-p">
                Crowdfund
                <ul>
                  <li className="splash-page-p">Pilot (Episode 0)</li>
                  <li className="splash-page-p">Community-Driven Casting</li>
                </ul>
              </li>

              <li className="splash-page-p">
                Season 0
                <ul>
                  <li className="splash-page-p">
                    Episodes 1-6: Every week, find love for the bachelor(ette)
                    of the episode
                  </li>
                  <li className="splash-page-p">Episode 7: Fan-Favorite couple goes on a second date</li>
                </ul>
              </li>
            </ul> */}
          </div>
        </Intro>
      </Section>

      <Section>
        <Intro style={{ alignItems: "center", textAlign: "center" }}>
          <h1 className="splash-page-h1">
            be a founding member of the first decentralized media network
          </h1>
          <p className="splash-page-p">
            audience owned and audience governed.

            creating content that drives chaotic and entertaining social
            experiences.
          </p>
          <p className="splash-page-p">
            mad realities is the MTV of a new kind of tv, with infinite
            possibliites.
          </p>
          <p className="splash-page-p" style={{ margin: "5rem 0" }}>create with us</p>
          <a href={DISCORD_INVITE_URL} target="_blank">
            <Button>join our discord</Button>
          </a>
        </Intro>
      </Section>

      <Section>
        <Intro style={{ fontFamily: "serif", alignItems: "center" }}>
          <Image src="/simp-card.png" width="294" height="172" />
          <p className="splash-page-p">u dropped this</p>
          <img
            src="https://hitwebcounter.com/counter/counter.php?page=7886950&style=0025&nbdigits=9&type=ip&initCount=0"
            alt="web counter"
          />
          simps and counting
        </Intro>
      </Section>
      </GlitterBackground>
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

const NavyBackground = styled.div`
  background-color: #08012F;
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

// const Background = styled.div`
//   background: url(glitter.gif);
//   background-size: cover;
//   mix-blend-mode: screen;
//   filter: blur(10px);

//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   pointer-events: none;
// `;

const Section = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  @media (max-width: 768px) {
    flex-flow: column;
    align-items: center;
    padding: 20px 30px;
    height: 100%;
    width: 100%;
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

  padding: 40px 40px;

  @media (max-width: 768px) {
    padding: 50px 0;
  }
`;

// const Button = styled.button`
//   background-color: yellow;
//   border: 8px outset yellow;
//   padding: 12px 50px;
//   font-weight: bold;
//   font-size: 16px;
//   cursor: pointer;
//   &:active {
//     background-color: goldenrod;
//     border: 8px inset goldenrod;
//   }
// `;

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
