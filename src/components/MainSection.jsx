import React from "react"
import styled from "styled-components"
import InfoArea from "./InfoArea";
import FormArea from "./FormArea";
import Footer from "./Footer";

const Container = styled.div`
    max-width: 620px;
    padding-right: 10px;
    padding-left: 10px;
    margin: 0 auto;
`;



export default function MainSection({ setPropForm }) {

    return (
        <>
            <InfoArea />
            <Container>
                <FormArea setPropForm={setPropForm} />
            </Container>
            <Footer/>
        </>
    )
} 