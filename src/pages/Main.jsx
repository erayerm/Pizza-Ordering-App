import React from "react"
import banner from "../assets/mvp-banner.png"
import styled from "styled-components"
import logo from "../assets/logo.svg"
import { Link } from "react-router-dom";
import BigCards from "../components/BigCards";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

const Title = styled.h1`
        color: #FFF;
        font-family: "Roboto Condensed";
        font-size: 86px;
        font-style: normal;
        font-weight: 200;
        text-transform: uppercase;
        text-align: center;
        margin:0;
        margin-bottom: 17px;
        letter-spacing: 1.5px;
    @media(max-width:800px){
        font-size: 75px;
    }
    `;
const FirsatiKacirmaText = styled.p`
    font-family: 'Satisfy', cursive;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    text-align: center;
    margin: 0;
    margin-top: 50px;
    color: #FDC913;
`;

const Hero = styled.div`
    width:100vw;
    height:100vh;
    background-color: red;
    background-image: url(${banner});
    background-size: cover;
    background-position: center;
`;
const ItemsContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items:center;
        width: 30vw;
        max-width: 636px;
        margin: 0 auto;
        padding-top: 60px;
    `;

const Button = styled.button`
        font-size: 18px;
        background-color: #FDC913;
        color: #292929;
        border-radius: 50px;
        padding: 10px 50px;
        border: none;
        margin-top: 20px;
        cursor: pointer;
    `;

const Logo = styled.img`
        margin: auto 0;
    `;



const NavBarContainer = styled.div`
    height: 100px;
    background: #FFF;
    @media (max-width: 1200px){
        height: 125px;
    }
`;

const NavBar = styled.nav`
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-content: center;
    max-width: 1200px;
    margin: auto auto;
    flex-wrap: wrap;
    text-align: left;
`;

const FoodCategories = styled.a`
    display: flex;
    align-items: center;
    gap: 15px;
    flex-basis: 200px;
    cursor: pointer;
    justify-content: left;
    @media (max-width: 1200px){
        flex-basis: 30%;
    }
`;
const FoodCategoryText = styled.p`
    color: #292929;
    font-family: Barlow;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
`;

const MainSectionContainer = styled.div`
    width: 100vw;
    background-color: #FAF7F2;
    padding-top:120px;
`;

const Icon = styled.img`
    width: 42px;
    height: 42px;
`;

export default function Main() {
    return (
        <>
            
            <Hero>
                <ItemsContainer>
                    <Logo src={logo} alt="logo" />
                    <FirsatiKacirmaText>fırsatı kaçırma</FirsatiKacirmaText>
                    <Title>
                        KOD ACIKTIRIR PİZZA, DOYURUR
                    </Title>
                    <Link data-cy="aciktimButon" to="/pizza">
                        <Button  id="order-pizza">ACIKTIM</Button>
                    </Link>
                </ItemsContainer>
            </Hero>
            <NavBarContainer>
                <NavBar>
                    <FoodCategories><Icon src={require("../assets/adv-aseets/icons/1.svg")}/><FoodCategoryText><span>YENİ!</span> Kore</FoodCategoryText></FoodCategories>
                    <FoodCategories><Icon src={require("../assets/adv-aseets/icons/2.svg")}/><FoodCategoryText>Pizza</FoodCategoryText></FoodCategories>
                    <FoodCategories><Icon src={require("../assets/adv-aseets/icons/3.svg")}/><FoodCategoryText>Burger</FoodCategoryText></FoodCategories>
                    <FoodCategories><Icon src={require("../assets/adv-aseets/icons/4.svg")}/><FoodCategoryText>Kızartmalar</FoodCategoryText></FoodCategories>
                    <FoodCategories><Icon src={require("../assets/adv-aseets/icons/5.svg")}/><FoodCategoryText>Fast Food</FoodCategoryText></FoodCategories>
                    <FoodCategories><Icon src={require("../assets/adv-aseets/icons/6.svg")}/><FoodCategoryText>Gazlı İçecek</FoodCategoryText></FoodCategories>
                </NavBar>
            </NavBarContainer>
            <MainSectionContainer>
                <BigCards/>
                <Cards/>
            </MainSectionContainer>
            <Footer/>
        </>
    )
}