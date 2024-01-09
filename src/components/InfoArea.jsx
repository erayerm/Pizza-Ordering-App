import React from "react"
import styled from "styled-components"
import formBanner from "../assets/adv-aseets/adv-form-banner.png"

const Title = styled.h1`
    font-size: 22px;
    margin: 0;
`;
const PricePointRateContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom:0px;
    margin-top: 28px;
`;
const Price = styled.p`
    margin:0;
    flex: 4;
    font-family: Barlow;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 37.467px; /* 133.81% */
`;
const Point = styled.p`
    margin:0;
    flex:2;
    color: #5F5F5F;
    text-align: right;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28.8px; /* 180% */
`;

const Rate = styled(Point)`
`;

const Info = styled.p`
margin-top: 25px;
color: #5F5F5F;
font-family: Barlow;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 28.8px; /* 180% */
`;
const Container = styled.div`
    margin:0;
    background: #FAF7F2;
    padding-bottom: 25px;
`;
const ItemContainer = styled.div`
    width: 600px;
    margin: 0 auto;
`;

const HalfPizza = styled.img`

`;
const Nav = styled.nav`
        display: flex;
        text-decoration: none;
        gap: 5px;
        margin-bottom: 35px;
        margin-top: 65px;
    `;
const CurrentText = styled.p`
        color: red;
    `;
const Text = styled.p`
        color: black;
    `;
const TextLink = styled.a`
        text-decoration: none;
        color: black;
    `;

export default function InfoArea(){

    return(
        <>
            <Container>
                <ItemContainer>
                    <HalfPizza src={formBanner} />
                    <Nav>
                        <Text><TextLink href="/">Anasayfa</TextLink></Text>
                        <Text> - </Text>
                        <CurrentText>Sipariş Oluştur</CurrentText>
                    </Nav>
                    <Title>Position Absolute Acı Pizza</Title>
                    <PricePointRateContainer>
                        <Price>85.50₺</Price>
                        <Point>4.9</Point>
                        <Rate>(200)</Rate>
                    </PricePointRateContainer>
                    <Info>
                        Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
                    </Info>
                </ItemContainer>
            </Container>
        </>
    )

}