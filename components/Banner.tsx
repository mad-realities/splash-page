import styled from "@emotion/styled";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const Banner = () => {
  return (
      <Container>
        <MarqueeContainer>
            <Marquee gradient={false} speed={100}>
                Get early access by buying a ticket through our crowdfund.
            </Marquee>
        </MarqueeContainer>
        <ImageContainer>
            <Image src="/mad_realities_logo.png" height="106" width="526"/>
        </ImageContainer>
      </Container>
  );
};

const Container = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`;

const ImageContainer = styled.div`
    position: absolute;
    top: 2rem;
`;

const MarqueeContainer = styled.div`
  background-color: black;
  padding: 0.5rem 0 0.25rem 0;

  top: 0;

  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;

  color: yellow;
  font-size: 1rem;
  text-align: center;
  font-weight: 600;
`;

export default Banner;
