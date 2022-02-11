import styled from "@emotion/styled";
import { FAQ_URL, DISCORD_INVITE_URL, SEASON_0_URL, MEMEBRSHIP_PASS_URL } from "../constants/urls";

const TopNav = () => {

    return (
        <Container>
            <WebOnly>
                <div>
                    <a href={FAQ_URL} target="_blank">
                        <text className="nav-link" style={{paddingRight: 40}}>faq</text>
                    </a>
                    <a href={SEASON_0_URL} target="_blank">
                        <text className="nav-link">seaon 0</text>
                    </a>
                    <a href={MEMEBRSHIP_PASS_URL} target="_blank">
                        <text className="nav-link">get your membership pass</text>
                    </a>
                </div>
                <div />
                <div />
            </WebOnly>
        </Container>
    );
};

const Container = styled.div`
    position: absolute;
    top: 40px;
    z-index: 998;

    padding: 20px 30px;

    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;

    color: white;
    font-size: 18px;
    font-weight: bold;

    @media (max-width: 768px) {
        top: 20px;
        padding: 20px 20px;
        font-size: 15px;
    }

    > div {
        flex: 1;
    }
`;

export default TopNav;

const WebOnly = styled.div`
  @media (max-width: 769px) {
    display: none;
  }
`;