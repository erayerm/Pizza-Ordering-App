import React from "react"
import styled from "styled-components"
import InfoArea from "./InfoArea";
import FormArea from "./FormArea";
import SubmitArea from "./SubmitArea";

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
                <hr />
                <SubmitArea />
            </Container>
            
        </>
    )
} 