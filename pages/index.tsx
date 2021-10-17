import type { NextPage } from "next";
import styled from "@emotion/styled";
import Image from 'next/image'

import InviteCard from '../components/InviteCard';
import Banner from '../components/Banner';
import TopNav from '../components/TopNav';

const Home: NextPage = () => {
  return (
    <Container>
      <GlitterBackground>
      <Background />
      <Banner />
      <TopNav />
      <Section>
        <InviteCard />
        <Intro>
            <Title>welcome to the colosseum</Title>
            <div style={{ color: 'white' }}>
            a new interactive dating show that anyone can participate in, powered by crypto
            </div>
            <Button>buy a ticket</Button>
          </Intro>
      </Section>

      <Section style={{ padding: '100px'}}>
          <Intro style={{ flex: 1, padding: '200px 0' }}>
            <Title>co-create season 0</Title>
            <div style={{ color: 'white' }}>
            vote in the bachelor(ettes).<br/>
            then, help them find love every week by voting in their match.
            </div>
            <Button>join our discord</Button>
          </Intro>
          <div style={{ position: 'relative', flex: 1}}>
            <Image src="/candidate-cards.png" alt="candidate cards" layout="fill" objectFit="contain" />
          </div>
      </Section>

      <Section>
        <div style={{ padding: '100px 0', flex: 1, textAlign: 'center'}}>
          <Title>roadmap</Title>
          <div style={{ marginTop: '30px', color: 'white', fontWeight: 600, fontSize: '24px'}}>
            Crowdfund<br/>
            Pilot (Episode 0)<br/>
            Community-Driven Casting<br/><br/>

            Season 0<br/>
            Episode 1-6: Every week, find love for the bachelor(ette) of the episode<br/>
            Episode 7: Fan-Favorite couple goes on a second date<br/>
          </div>
        </div>
      </Section>

      <Section style={{ paddingBottom: '100px'}}>
        <div style={{ padding: '100px 0', flex: 1, textAlign: 'center', maxWidth: '500px'}}>
          <Title>be a founding member of the first decentralized tv show</Title>
          <div style={{ marginTop: '45px', color: 'white', fontWeight: 600, fontSize: '24px'}}>
            audience owned and audience governed. creating content that drives chaotic and entertaining social experiences<br/><br/>
            mad realities is the MTV of a new kind of tv, with infinite possibliites.
          </div>
        </div>
      </Section>
    </GlitterBackground>

    <WhiteSection>
      <div style={{ padding: '100px 0', textAlign: 'center'}}>
        <Title>create with us</Title>
        <DiscordButton>join our discord</DiscordButton>
      </div>
    </WhiteSection>

    <ImageRepeat />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: column;
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
  padding: 0 100px;

  z-index: 1;

  @media (max-width: 600px) {
    flex-flow: column;
    align-items: center;
    padding: 0 50px;

    > div {
      padding: 50px 0;
    }
  }
`;

const WhiteSection = styled(Section)`
  margin-top: -40px;
  background-color: white;
  z-index: 2;
  min-height: unset;
`;

const Intro = styled.div`
  display: flex;
  flex-flow: column;

  font-size: 24px;
  font-weight: bold;

  justify-content: center;
  align-items: flex-start;
  padding: 80px;

  > div, button {
    margin-top: 20px;
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
`;

const Title = styled.div`
  color: #CB9FF9;
  font-size: 30px;
  font-weight: bold;
`;

const ImageRepeat = styled.div`
  background-image: url("simp-card.png");
  background-repeat: repeat;

  height: 344px; // enough for two rows
`;
export default Home;

