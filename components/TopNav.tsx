import styled from "@emotion/styled";
import { FAQ_URL, DISCORD_INVITE_URL } from "../constants/urls";

const TopNav = () => {
  return (
    <Container>
      <a href={FAQ_URL} target="_blank">
        <text
          className="nav-link"
          style={{ paddingRight: "var(--top-nav-gap)" }}
        >
          FAQ
        </text>
      </a>
      <a href={DISCORD_INVITE_URL} target="_blank">
        <text className="nav-link">Discord</text>
      </a>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: var(--top-nav-top);
  width: 100%;

  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 18px;
  font-weight: bold;

  > div {
    flex: 1;
  }
`;

export default TopNav;
