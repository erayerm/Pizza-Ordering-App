import React from "react"
import styled from "styled-components"
import logo from "../assets/logo.svg"

const Header = styled.div`
        width: 100vw;
        height: 200px;
        background-color: #CE2829;
    `;

const Container = styled.div`
        margin: 0 auto;
        width: 600px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

    `;

const Image = styled.img`
        width:363px;
        height:47px;
        align-self: center;
        padding-top: 66.49px;
        box-sizing: content-box;
    `;
const Nav = styled.nav`
        display: flex;
        text-decoration: none;
        gap: 5px;
    `;
const CurrentText = styled.p`
        color: white;
    `;
const Text = styled.p`
        color: #FAF7F2;
    `;
const TextLink = styled.a`
        text-decoration: none;
        color: #FAF7F2;
    `;


export default function HeaderComponent() {
    return (
        <>
            <Header>
                <Container>
                    <Image src={logo} alt="logo" />
                    <Nav>
                        <Text><TextLink href="/">Anasayfa</TextLink></Text>
                        <Text> - </Text>
                        <CurrentText>Sipariş Oluştur</CurrentText>
                    </Nav>
                </Container>
            </Header>
        </>
    )
}