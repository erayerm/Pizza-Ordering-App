import React from "react";
import styled from "styled-components";
import kart1 from "../assets/adv-aseets/kart-1.png"
import kart2 from "../assets/adv-aseets/kart-2.png"
import kart3 from "../assets/adv-aseets/kart-3.png"

const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1300px;
    max-height: 550px;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: space-center;
    align-items:  center;
    margin-bottom: 100px;
    row-gap: 25px;
    @media(max-width: 900px){
        max-height: none;
    }
`;
const FirstTitle = styled.div`
    color: #FFF;
    font-family: Quattrocento;
    font-size: 68px;
    font-style: normal;
    font-weight: 700;
    max-width: 300px;
`;
const ThirdTitle = styled.div`
    color: #292929;
    font-family: Barlow;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    max-width: 240px;

`;
const SecondTitle = styled.div`
    color: #FFF;
    font-family: Barlow;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    max-width: 240px;

`;
const InfoOfCard = styled.div`
color: #FFF;
font-family: Barlow;
font-size: 20px;
font-style: normal;
font-weight: 600;
margin-top: 5px;
`;
const ButtonOfCard = styled.button`
color: #CE2829;
text-align: center;
font-family: Barlow;
font-size: 14px;
font-style: normal;
font-weight: 600;
border-radius: 50px;
background: #FFF;
border:none;
line-height: 48px; /* 342.857% */
padding: 3px 18px 0px 18px;
margin-top: 30px;
`;
const RedText = styled.span`
    color: red;
`;
const Card = styled.div`
    padding-top: 45px;
    padding-left: 50px;
    width: 636px;
    height: 250px;
    border-radius: 12px;
    &.firstCard{
        background-image: url(${kart1});
        height:525px;
        color: white;
    }
    &.secondCard{
        background-image: url(${kart2});
        color: white;
    };
    &.thirdCard{
        background-image: url(${kart3}); 
    };
    background-size: cover;
    @media(max-width:1350px){
        width: 48%;
        background-position: right;
    }
    @media(max-width:900px){
        width: 90%;
        background-position: right;
    }
`;



export default function BigCards(){

    return(
        <CardsContainer>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Quattrocento:wght@700&display=swap');
            </style>
            <Card className="firstCard">
                <FirstTitle>Özel Lezzetus</FirstTitle>
                <InfoOfCard>Position:Absolute Acı Burger</InfoOfCard>
                <ButtonOfCard>SİPARİŞ VER</ButtonOfCard>
            </Card>
            <Card className="secondCard">
                <SecondTitle>Hackathlon Burger Menü</SecondTitle>
                <ButtonOfCard>SİPARİŞ VER</ButtonOfCard>
            </Card>
            <Card className="thirdCard">
                <ThirdTitle><RedText>Çoooook</RedText> hızlı npm gibi kurye</ThirdTitle>
                <ButtonOfCard>SİPARİŞ VER</ButtonOfCard>
            </Card>
        </CardsContainer>
    )
}