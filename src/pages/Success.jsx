
import React from "react"
import styled from "styled-components"
import logo from "../assets/logo.svg"

const Container = styled.div`
    width:100vw;
    height: 100vh;
    background-color:#CE2829;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;
const Logo = styled.div`
    flex: 2;
    padding-top: 120px;
`;

const Text = styled.p`
    flex: 6;
    color: #FFF;
    text-align: center;
    font-family: Barlow;
    font-size: 86px;
    font-style: normal;
    font-weight: 400;
    line-height: 92px; /* 106.977% */
    letter-spacing: -8px;
    text-transform: uppercase;
`;


export default function Success({propForm}) {
    return (
        <>
            <Container>
            {/*console.log(propForm)*/}
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300&display=swap');
                </style>
                <Logo>
                    <img src={logo} alt="logo" />
                </Logo>
                <Text>
                    TEBRİKLER!<br />SİPARİŞİNİZ ALINDI!
                </Text>
            </Container>
        </>
    )
}