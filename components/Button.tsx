import styled from "@emotion/styled";

const Button = (props: any) => {
    return (
        <Container {...props} />
    );
}

const Container = styled.div`
    background-color: yellow;
    border: 8px outset yellow;
    padding: 12px 50px;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    &:active {
        background-color: goldenrod;
        border: 8px inset goldenrod;
    }
`;

export default Button;
