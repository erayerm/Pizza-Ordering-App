import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";


const TitleContainer = styled.div`
    max-width: 1320px;
`;
const EnCokText = styled.p`
    color: #CE2829;
    text-align: center;
    font-family: "Satisfy";
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    margin:0;
`;
const Title = styled.p`
    color: #292929;
    text-align: center;
    font-family: "Barlow";
    font-size: 42px;
    font-style: normal;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 45px;
`;
const FoodCategories = styled.div`
    text-decoration: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: #FFF;
    border-radius: 50px;
    padding: 20px 40px;
    min-width: 186px;
    height: 80px;
    gap: 10px;
    border: none;
    justify-content: center;
    
    @media (max-width: 1320px){
        flex-basis: 30%;
        margin: 0;
    }
    &.active {
        background-color: black;
        color: white;
    }
`;

const NavBar = styled.nav`
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    max-width: 1320px;
    gap:15px;
    @media (max-width: 1320px){
        row-gap: 10px;
        justify-content: center;
    }
    margin-bottom: 50px;
`;

const Icon = styled.img`
    width: 42px;
    height: 42px;
`;
const FoodCategoryText = styled.p`
    margin: 0px;
    font-family: "Barlow";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 135px;
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 24px;
    max-width: 1350px;
    flex-wrap: wrap;
`;

const initialButtons = {
    button1: false,
    button2: true,
    button3: false,
    button4: false,
    button5: false,
    button6: false,
}

const emptyButtons = {
    button1: false,
    button2: false,
    button3: false,
    button4: false,
    button5: false,
    button6: false,
}


const cardData = [
    {
        image: "food-1.png",
        name: "Terminal Pizza",
        rate: 4.9,
        rateCount: 200,
        price: 60
    },
    {
        image: "food-2.png",
        name: "Position Absolute Acı Pizza",
        rate: 4.9,
        rateCount: 928,
        price: 85
    },
    {
        image: "food-3.png",
        name: "useEffectTavukluBurger",
        rate: 4.9,
        rateCount: 462,
        price: 75
    }
]

const navBar = ["Yeni! Kore", "Pizza", "Burger", "Kızartmalar", "Fast Food", "Gazlı İçecek"]

export default function Cards() {
    const [pickedIndex, setPickedIndex] = useState(0);

    return (

        <Container>
            <TitleContainer>
                <EnCokText>en çok paketlenen menüler</EnCokText>
                <Title>Acıktıran Kodlara Doyuran Lezzetler</Title>
            </TitleContainer>
            <NavBar>
                {navBar.map((item, index) => {
                    return <FoodCategories onClick={() => setPickedIndex(index)} className={index === pickedIndex ? "active" : ""}><Icon src={require(`../assets/adv-aseets/icons/${index + 1}.svg`)} /><FoodCategoryText>{item}</FoodCategoryText></FoodCategories>
                })}
            </NavBar>
            <CardContainer>
                {cardData.map((item, index) => {
                    return <Card key={index} cardData={item} />
                })}
            </CardContainer>
        </Container>
    )
}
