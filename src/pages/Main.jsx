import React from "react"
import banner from "../assets/mvp-banner.png"
import styled from "styled-components"
import logo from "../assets/logo.svg"
import { Link } from "react-router-dom";

const Title = styled.h1`
        color: #FFF;
        font-family: "Roboto Condensed";
        font-size: 86px;
        font-style: normal;
        font-weight: 200;
        text-transform: uppercase;
        text-align: center;
        margin:0;
        margin-top: 35px;
        margin-bottom: 17px;
        letter-spacing: 1.5px;

    `;

const Container = styled.div`
    width:100vw;
    height:100vh;
    background-color: red;
    background-image: url(${banner});
`;
const ItemsContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items:center;
        width: 30vw;
        min-width: 636px;
        margin: 0 auto;
        padding-top: 120px;
    `;

const Button = styled.button`
        font-size: 18px;
        background-color: #FDC913;
        color: #292929;
        border-radius: 50px;
        padding: 10px 50px;
        border: none;
        margin-top: 20px;
    `;

const Logo = styled.img`
        margin: auto 0;
    `;

export default function Main() {
    return (
        <>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap');
            </style>
            <Container>
                <ItemsContainer>
                    <Logo src={logo} alt="logo" />
                    <Title>
                        KOD ACIKTIRIR PİZZA, DOYURUR
                    </Title>
                    <Link to="/pizza">
                        <Button id="order-pizza">ACIKTIM</Button>
                    </Link>
                </ItemsContainer>
            </Container>
        </>
    )
}