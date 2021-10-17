import styled from "@emotion/styled";

const Banner = () => {
    return <Container>
        Get early access by participating in our crowdfund
    </Container>
};

const Container = styled.div`
    background-color: #CB9FF9;
    padding: 16px 16px;

    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;

    color: white;
    font-size: 16px;
    font-weight: bold;
`;

export default Banner;
