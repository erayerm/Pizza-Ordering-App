import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const Container = styled.div`
    padding: 0 30px;
    width: 415px;
    height: 440px;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    cursor: pointer;
`;
const FoodImage = styled.img`
    width: 80%;
    aspect-ratio: 1/1;
    align-self: center;
`;
const FoodName = styled.p`
    color: #292929;
    font-family: "Barlow";
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
`;
const RatePriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Rate = styled.p`
    color: rgba(27, 27, 27, 0.70);
    font-family: "Barlow";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
`;
const RateCount = styled.p`
    color: rgba(27, 27, 27, 0.70);
    font-family: "Barlow";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
`;
const Price = styled.p`
    color: #292929;
    font-family: Barlow;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
`;

export default function Card({ cardData }) {
    const history = useHistory();
    return (
        <>
            <Container onClick={() => history.push("/pizza")}>
                <FoodImage src={require(`../assets/adv-aseets/${cardData.image}`)} />
                <FoodName>{cardData.name}</FoodName>
                <RatePriceContainer>
                    <Rate>{cardData.rate}</Rate>
                    <RateCount>({cardData.rateCount})</RateCount>
                    <Price>{cardData.price}₺</Price>
                </RatePriceContainer>
            </Container>
        </>
    )
}