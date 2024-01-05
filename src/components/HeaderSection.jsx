import React from "react"
import logo from "../assets/logo.svg"
import styled from 'styled-components';

const Container = styled.div`
    background-color: #CE2829;
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 30vw;
    min-width: 636px;
`;

const Title = styled.h1`
    font-size: 86px;
    font-family: 'Barlow', sans-serif;
    color: #FFFFFF;
    text-align: center;
`;
const Button = styled.button`
    font-size: 18px;
    background-color: #FDC913;
    color: #292929;
    border-radius: 50px;
    padding: 10px 50px;
    border: none;
`;

export default function HeaderSection(){
    return(
        <>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@100&display=swap');
            </style>
            <Container>
                <img src={logo} className="logo react" alt="React logo" />
                <Title>KOD ACIKTIRIR PIZZA, DOYURUR</Title>
                <Button>ACIKTIM</Button>
            </Container>
        </>
    )
}