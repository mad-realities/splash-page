import styled from "@emotion/styled";

const TopNav = () => {
    const FAQ_URL = "https://madrealities.notion.site/FAQ-d6308bae12e9468cb81f988cb8d4bed7";
    const DISCORD_INVITE_URL = "https://discord.gg/Xhqu8E67ct";

    return (
        <Container>
            <a href={FAQ_URL} target="_blank">
                <text className="nav-link" style={{paddingRight: 40}}>FAQ</text>
            </a>
            <a href={DISCORD_INVITE_URL} target="_blank">
                <text className="nav-link">Discord</text>
            </a>
        </Container>
    );
};

const Container = styled.div`
    padding: 40px 32px;
    position: absolute;
    z-index: 999;

    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: start;

    color: white;
    font-size: 16px;
    font-weight: bold;
`;

export default TopNav;
