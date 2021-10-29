import React, { useState, useEffect } from 'react';
import styled from "@emotion/styled";


const Loading = () => {
    const [displayed, setDisplayed] = React.useState(true);

    useEffect(() => {
        setTimeout(() => setDisplayed(false), 1000);
    }, []);


    let style = {};
    if (!displayed) {
        style = {
            display: "none",
        };
    }

    return (
        <Container style={style}>
            <p 
                className="splash-page-highlighted-word pink-highlight-text"
                style={{margin: "auto"}}
            >
                Loading...
            </p>
        </Container>
    );
};

const Container = styled.div`
    position: fixed;
    overflow-y: hidden;
    background-color: #08012F;
    top: 0;
    left: 0;
    z-index: 999;
    height: 100vh;
    width: 100vw;
    display: flex;
`;

export default Loading;
