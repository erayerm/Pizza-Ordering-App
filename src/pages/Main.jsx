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

const FirsatiKacirmaText = styled.p`
    font-family: 'Satisfy', cursive;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    text-align: center;
    margin: 0;
    color: #FDC913;
`;

export default function Main() {
    return (
        <>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');
            </style>
            <Hero>
                <ItemsContainer>
                    <Logo src={logo} alt="logo" />
                    <FirsatiKacirmaText>fırsatı kaçırma</FirsatiKacirmaText>
                    <Title>
                        KOD ACIKTIRIR PİZZA, DOYURUR
                    </Title>
                    <Link to="/pizza">
                        <Button id="order-pizza">ACIKTIM</Button>
                    </Link>
                </ItemsContainer>
            </Hero>
            <NavBarContainer>
                <NavBar>
                    <FoodCategories></FoodCategories>
                    <FoodCategories></FoodCategories>
                    <FoodCategories></FoodCategories>
                    <FoodCategories></FoodCategories>
                    <FoodCategories></FoodCategories>
                    <FoodCategories></FoodCategories>
                </NavBar>
            </NavBarContainer>
            <MainSectionContainer>
            {/*   CARDS COMPONENT
            <CardsContainer>
                <BiggerCard>
                    <TitleOfCard></TitleOfCard>
                    <InfoOfCard></InfoOfCard>
                    <ButtonOfCard></ButtonOfCard>
                </BiggerCard>
                <Card>
                    <TitleOfCard></TitleOfCard>
                    <ButtonOfCard></ButtonOfCard>
                </Card>
                <Card>
                    <TitleOfCard></TitleOfCard>
                    <ButtonOfCard></ButtonOfCard>
                </Card>
            </CardsContainer>
            */}
            {/*
            
            
             */}
             {/* BASKA BIR CARD COMPONENT
                <EnCokText>en çopk paketlenen menüler</EnCokText>
                <Title>Acıktıran Kodlara Doyuran Lezzetler</Title>
                <NavBar>
                    <FoodCategories></FoodCategories>
                    <FoodCategories></FoodCategories>
                    <FoodCategories></FoodCategories>
                    <FoodCategories></FoodCategories>
                    <FoodCategories></FoodCategories>
                    <FoodCategories></FoodCategories>
                </NavBar>
                <Card>
                    <FoodImage></FoodImage>
                    <FoodName></FoodName>
                    {Burası map ile}
                    <RatePriceContainer>
                        <Point></Point>
                        <Rate></Rate>
                        <Price></Price>
                    </RatePriceContainer>
                </Card>
            */}
            </MainSectionContainer>
            {/* 
            <FooterSection>
                <TopSection>
                        <InfoContainer>
                            <LeftContainer>
                                <Logo></Logo>
                                <Infos><Icon></Icon><InfoText>341 Londonderry Road, Istanbul Türkiye</InfoText></Infos>
                                <Infos><Icon></Icon><InfoText>aciktim@teknolojikyemekler.com</InfoText></Infos>
                                <Infos><Icon></Icon><InfoText>+90 216 123 45 67</InfoText></Infos>
                            </LeftContainer>
                            <RightContainer>
                                <MenuTitle>Sıccacık Menuler</MenuTitle>
                                <FoodNames>Terminal Pizza</FoodNames>
                                <FoodNames>5 Kişilik Hackathon Pizza</FoodNames>
                                <FoodNames>useEffectTavukluPizza</FoodNames>
                                <FoodNames>Beyaz Console Frosty</FoodNames>
                                <FoodNames>Testler Geçti Mutlu Burger</FoodNames>
                                <FoodNames>Position Absolute Acı Burger</FoodNames>
                            </RightContainer>
                        </InfoContainer>
                        <InstagramContainer>
                            <InstagramText>Instagram</InstagramText>
                        <InstagramImageContainer>
                            <IgImage></IgImage>
                            <IgImage></IgImage>
                            <IgImage></IgImage>
                            <IgImage></IgImage>
                            <IgImage></IgImage>
                            <IgImage></IgImage>
                        </InstagramImageContainer>
                        </InstagramContainer>
                </TopSection>
                <BottomSection>
                    <CopyRightText>c 2023 Teknolojik Yemekler.</CopyRightText>
                    <TwitterIcon>Kuş!</TwitterIcon>
                </BottomSection>
            </FooterSection>
            */}
        </>
    )
}