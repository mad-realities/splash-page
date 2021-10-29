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
        <meta property="og:image" content="/cover-photo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/cover-photo.png" />
        <meta name="twitter:title" content="mad realities" />
        <meta name="twitter:description" content="a new interactive dating show that anyone can participate in, powered by crypto" />
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
            <h1 className="splash-page-h1">
              a new interactive dating show that anyone can participate in, powered by crypto
            </h1>
            <p className="splash-page-p">
              Our shows will be powered by our community - holders of an NFT rose ticket can vote in the cast, decide outfits and scenes, and win exclusive prizes for interacting.
            </p>
            <ButtonLink href={CROWDFUND_URL} target="_blank" style={{ backgroundColor: "#FF1F8C", color: "#000", border: "8px outset #FF1F8C"}}>
              get your ticket
            </ButtonLink>
          </Intro>
        </Section>

      <Section
        style={{
          alignItems: "stretch",
          position: "relative",
          minHeight: "75vh",
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          <ClientOnly>
            <TV />
          </ClientOnly>
        </div>
        <TVStatic style={{ position: "relative", alignItems: 'center' }}>
          <div
            style={{
              maxWidth: "500px",
              background: "white",
              padding: "3rem",
              boxShadow: "1rem 1rem 0 black",
              display: 'flex',
              flexFlow: 'column',
            }}
          >
            <h1 className="splash-page-h1 alt">
              it starts with season 0
            </h1>
            <p className="splash-page-p"
              style={{
                color: "black"
              }}
            >
              Help our contestants find love by voting in new people each week. Season Zero will take place over 6 weeks this Winter with new episodes aired every Sunday night.
            </p>
            <ButtonLink href={DISCORD_INVITE_URL} target="_blank" style={{ backgroundColor: "#000000", color: "#FF1F8C", border: "8px outset #373737"}}>
              join our discord
            </ButtonLink>
            
          </div>
          <CandidatesContainer>
            <Image src="/candidates.png" layout="fill" objectFit="contain" />
            </CandidatesContainer>
        </TVStatic>
      </Section>

      <Section style={{ position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, top: "30vh" }}>
            <Image src="/lines.png" layout="fill" className="image-overlay"/>
          </div>
        <Intro style={{ position: "relative", alignItems: "center" }}>
          <div
            style={{
              display: 'flex',
              flexFlow: 'column',
              alignItems: "center",
              textAlign: "center",
              maxWidth: 600
            }}
          >
            <h1
              className="splash-page-h1"
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
            <ButtonLink href={CROWDFUND_URL} target="_blank" style={{ backgroundColor: "#63FF00", color: "#000", border: "8px outset #63FF00"}}>
                get your ticket
            </ButtonLink>
          </div>
        </Intro>
      </Section>

      <WebOnly>
      <Section>
        
        <div
          className="tv-image-container"   // TODO: display properly on mobile
          style={{marginLeft: "-20px"}}  
        >
          <Image 
            src="/tv1.png" 
            layout='fill'
            objectFit='contain'
          />
        </div>
        <Intro style={{ alignItems: "center", textAlign: "center" }}>
          <h1 className="splash-page-h1">
            be a founding member of the first decentralized media network
          </h1>
          <p className="splash-page-p font-bold">
            Audience owned and audience governed. Creating content that drives chaotic and entertaining social
            experiences.
          </p>
          <p className="splash-page-p font-bold">
            Mad Realities is the MTV of a new kind of TV, with infinite possibliites.
          </p>
          <ButtonLink href={DISCORD_INVITE_URL} target="_blank" style={{ backgroundColor: "#00B9F1", color: "black", border: "8px outset #00B9F1"}}>
            join our discord
          </ButtonLink>
        </Intro>
        <div
          className="tv-image-container image-hidden-mobile"  // TODO: display properly on mobile
          style={{marginRight: "-20px"}}     
        >
          <Image 
            src="/tv2.png" 
            layout='fill'
            objectFit='contain'
          />
        </div>
       
        
      </Section>
      </WebOnly>

      <MobileOnly>
          <Section style={{ padding: '30px 0 0 0', flexFlow: 'row'}}>
          <div
          className="tv-image-container" 
          style={{ marginLeft: '-10px'}}
        >
          <Image 
            src="/tv1.png" 
            layout='fill'
            objectFit='contain'
          />
        </div>
        <h1 style={{ padding: '0 20px', textAlign: 'center'}} className="splash-page-h1">
            be a founding member of the first decentralized media network
          </h1>
          </Section>
        </MobileOnly>

        <MobileOnly>
        <Section style={{ padding: '0 0 50px 0', flexFlow: 'row'}}>
            <div style={{ display: 'flex', flexFlow: 'column', padding: '0 30px', textAlign: 'center', fontWeight: 'bold'}}>
            <p className="splash-page-p">
            Audience owned and audience governed. Creating content that drives chaotic and entertaining social
            experiences.
          </p>
          <p className="splash-page-p">
            Mad Realities is the MTV of a new kind of TV, with infinite possibliites.
          </p>
          <ButtonLink href={DISCORD_INVITE_URL} target="_blank" style={{ backgroundColor: "#00B9F1", color: "black", border: "8px outset #00B9F1"}}>
            join our discord
          </ButtonLink>
            </div>

            <div
          className="tv-image-container"  
          style={{ marginRight: '-5px'}}
        >
          <Image 
            src="/tv2.png" 
            layout='fill'
            objectFit='contain'
          />
        </div>
        </Section>
       
          </MobileOnly>

      <Section
        style={{
          alignItems: "stretch",
          position: "relative",
          height: '75vh',
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          <ClientOnly>
            <TV />
          </ClientOnly>
        </div>
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
      <Footer>
        <Socials>
          <a href="https://www.instagram.com/mad.realities/"><img src="/instagram.svg" alt="Instagram" /></a>
          <a href="https://twitter.com/madrealities"><img src="/twitter.svg" alt="Twitter" /></a>
          <a href="https://discord.gg/rf6emN8K7M"><img src="/discord.svg" alt="Discord" /></a>
        </Socials>
        <div>
        Made with 💗 on the internet️. © Mad Realities 2021. All rights reserved.
        </div>
      </Footer>
    </Container>
  );
};

const ButtonLink = styled.a`
  background-color: yellow;
  border: 8px outset yellow;
  padding: 12px 50px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  width: fit-content;
  margin-top: 2rem;
  text-align: center;
  &:active {
      background-color: goldenrod;
      border: 8px inset goldenrod;
  }
`;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  overflow-x: hidden;
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

const CandidatesContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  margin-top: 25px;
  margin-left: 10px;

  @media (max-width: 768px) {
    height: 50vh;
    margin-left: 0;
  }
`;

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
    height: unset;
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

    > a {
      align-self: center;
    }
  }
`;

const TVStatic = styled(Intro)`
  display: flex;
  flex-flow: row;

  @media (max-width: 768px) {
    flex-flow: column;
  }
`;

const MobileOnly = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;

const WebOnly = styled.div`
  @media (max-width: 769px) {
    display: none;
  }
`;

const Footer = styled.div`
  background-color: black;
  color: white;
  
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  padding: 20px 20px;
`;

const Socials = styled.div`
  > a + a {
    margin-left: 20px;
  }

  display: flex;
  flex-flow: row;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export default Home;
