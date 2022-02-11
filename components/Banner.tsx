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