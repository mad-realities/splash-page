import styled from "@emotion/styled";
import { FAQ_URL, DISCORD_INVITE_URL } from "../constants/urls";

const TopNav = () => {

    return (
        <Container>
            <div>
            <a href={FAQ_URL} target="_blank">
                <text className="nav-link" style={{paddingRight: 40}}>FAQ</text>
            </a>
            <a href={DISCORD_INVITE_URL} target="_blank">
                <text className="nav-link">Discord</text>
            </a>
            </div>
            <div />
            <div />
        </Container>
    );
};

const Container = styled.div`
    position: absolute;
    top: 40px;
    z-index: 999;

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
