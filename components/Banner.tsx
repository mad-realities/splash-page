import styled from "@emotion/styled";
import Marquee from "react-fast-marquee";

const Banner = () => {
  return (
    <Container>
      <Marquee gradient={false} speed={100}>
        Get early access by buying a ticket through our crowdfund.
        <div
          style={{
            margin: "0 50vw",
            fontFamily: "Pricedown",
            fontSize: "2rem",
            textTransform: "uppercase",
            transform: "translateY(-0.5rem)",
          }}
        >
          mad realities
        </div>
      </Marquee>
    </Container>
  );
};

const Container = styled.div`
  background-color: black;

  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;

  color: yellow;
  text-align: center;
  font-weight: 600;
  z-index: 100;
  top: 0;
  height: 50px;
`;

export default Banner;
