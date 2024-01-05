import React from "react"
import banner from "../assets/mvp-banner.png"
import styled from "styled-components"
import logo from "../assets/logo.svg"
import { Link } from "react-router-dom";

export default function Main() {
    const Image = styled.img`
        position: absolute;
        top: 0px;
        z-index: -1;
        width: 100vw;
        height: 100vh;
        object-fit: cover;
    `;

    const Container = styled.div`
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items:center;
        width: 30vw;
        min-width: 636px;
        margin: 10vh auto 0 auto;
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

    return (
        <>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@100&display=swap');
            </style>
            <Container>
                <img src={logo} className="logo react" alt="React logo" />
                <Title>KOD ACIKTIRIR PIZZA, DOYURUR</Title>
                <Link to="/pizza">
                    <Button id="order-pizza">ACIKTIM</Button>
                </Link>
            </Container>
            <Image src={banner} alt="pizza" />
        </>
    )
}