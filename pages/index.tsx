import type { NextPage } from "next";
import styled from "@emotion/styled";
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

import InviteCard from '../components/InviteCard';
import Banner from '../components/Banner';
import TopNav from '../components/TopNav';

import { DISCORD_INVITE_URL, CROWDFUND_URL } from '../constants/urls.js';

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
        <InviteCard />
        <Intro>
            <div className="body-title">welcome to our genesis show: the colosseum  🎬</div>
            <div className="body-text">
            a new interactive dating show that anyone can participate in, powered by crypto. <br/><br/>
            holders of an NFT rose ticket can vote in the cast, decide outfits and scenes, and win exclusive prizes for interacting.
            </div>
            <a href={CROWDFUND_URL} target="_blank"> 
              <Button>get your ticket</Button>
            </a>
        </Intro>
      </Section>

      <Section style={{alignItems: "stretch"}}>
          <Intro>
            <div className="body-title">dropping soon: co-create season 0</div>
            <div className="body-text">
            vote in the bachelor(ettes).<br/>
            then, help them find love every week by voting in their match.
            </div>
            <a href={DISCORD_INVITE_URL} target="_blank">
              <Button>join our discord</Button>
            </a>
          </Intro>
          <ImageContainer>
            <Image src="/candidate-cards.png" alt="candidate cards" layout="fill" objectFit="contain"  />
          </ImageContainer>
      </Section>

      <Section>
        <Intro>
          <div className="body-title">roadmap</div>
          <div className="body-text">
            Crowdfund<br/>
            Pilot (Episode 0)<br/>
            Community-Driven Casting<br/><br/>

            Season 0<br/>
            Episode 1-6: Every week, find love for the bachelor(ette) of the episode<br/>
            Episode 7: Fan-Favorite couple goes on a second date<br/>
          </div>
        </Intro>
      </Section>

      <Section style={{paddingBottom: "200px"}}>
        <Intro>
          <div className="body-title">
            be a founding member of the first decentralized media network<br/>
            audience owned and audience governed.
          </div>
          <div className="body-text">
            audience owned and audience governed. creating content that drives chaotic and entertaining social experiences.<br/><br/>
            mad realities is the MTV of a new kind of tv, with infinite possibliites.
          </div>
        </Intro>
      </Section>
    </GlitterBackground>

    <WhiteSection>
      <div style={{ padding: '100px 0', textAlign: 'center'}}>
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
`;

const GlitterBackground = styled.div`
  display: flex;
  flex-flow: column;
  background-color: black;

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
`;

const Section = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  padding: 60px 100px;

  z-index: 1;

  @media (max-width: 768px) {
    flex-flow: column;
    align-items: center;
    padding: 20px 30px;

    > div {
      padding: 50px 0;
    }
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
  
  font-size: 24px;

  justify-content: center;
  align-items: flex-start;
  padding: 40px 80px;

  width: 100%;
  height: 100%;

  > a > button {
    margin-top: 36px;
  }
`;

const Button = styled.button`
  background-color: #FEF1C3;
  border-radius: 4px;
  border: none;
  padding: 12px 50px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
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

