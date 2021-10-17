import type { NextPage } from "next";
import styled from "@emotion/styled";
import Image from 'next/image'

import InviteCard from '../components/InviteCard';
import Banner from '../components/Banner';
import TopNav from '../components/TopNav';

const Home: NextPage = () => {
  return (
    <Container>
      <Background />
      <Banner />
      <Section>
        <TopNav />
        <InviteCard />
        <Intro>
            <div style={{ color: "#CB9FF9", fontSize: '30px' }}>welcome to the colosseum</div>
            <div style={{ color: 'white' }}>
            a new interactive dating show that anyone can participate in, powered by crypto
            </div>
            <Button>buy a ticket</Button>
          </Intro>
      </Section>

      <Section>
          <Intro style={{ flex: 1 }}>
            <div style={{ color: "#CB9FF9", fontSize: '30px' }}>co-create season 0</div>
            <div style={{ color: 'white' }}>
            vote in the bachelor(ettes).<br/>
            then, help them find love every week by voting in their match.
            </div>
            <Button>join our discord</Button>
          </Intro>
          <div style={{ position: 'relative', height: '100%', flex: 1}}>
            <Image src="/candidate-cards.png" alt="candidate cards" layout="fill" />
          </div>
      </Section>
    </Container>
  );
};

const Container = styled.div`
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
  padding: 0 100px;
  min-height: 80vh;

  z-index: 1;
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

export default Home;

