import React from "react"
import styled from "styled-components"
import InfoArea from "./InfoArea";
import FormArea from "./FormArea";

const Container = styled.div`
    width: 600px;
    margin: 0 auto;
`;



export default function MainSection() {

    return (
        <>
            <Container>
                <InfoArea/>
                <FormArea />
            </Container>
            
        </>
    )
} 