import React from "react"
import styled from "styled-components"
import InfoArea from "./InfoArea";

const Container = styled.div`
    width: 600px;
    margin: 0 auto;
`;



export default function MainSection() {

    return (
        <>
            <Container>
                <InfoArea/>
            </Container>
        </>
    )
}