import React from "react"
import styled from "styled-components"
import logo from "../assets/logo.svg"

const Header = styled.div`
        width: 100vw;
        height: 100px;
        background-color: #CE2829;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

const Image = styled.img`
        width:363px;
        height:47px;
    `;


export default function HeaderComponent() {
    return (
        <>
            <Header>
                <Image src={logo} alt="logo" />
            </Header>
        </>
    )
}