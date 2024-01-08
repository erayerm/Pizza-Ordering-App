import React from "react"
import styled from "styled-components"

const Title = styled.h1`
    font-size: 22px;
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

export default function InfoArea(){

    return(
        <>
            <Title>Position Absolute Acı Pizza</Title>
            <PricePointRateContainer>
                <Price>85.50₺</Price>
                <Point>4.9</Point>
                <Rate>(200)</Rate>
            </PricePointRateContainer>
            <Info>
                Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
            </Info>

        </>
    )

}