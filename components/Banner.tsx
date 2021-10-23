import styled from "@emotion/styled";
import Marquee from "react-fast-marquee";

const Banner = () => {
  return (
    <Container>
      <Marquee gradient={false} speed={100}>
        Get early access by buying a ticket through our crowdfund.
      </Marquee>
    </Container>
  );
};

const Container = styled.div`
  background-color: black;
  padding: 0.5rem 0 0.25rem 0;

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
