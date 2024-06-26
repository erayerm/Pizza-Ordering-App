
import React from "react"
import styled from "styled-components"
import logo from "../assets/logo.svg"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Container = styled.div`
    width:100vw;
    min-height: 100vh;
    padding-bottom: 40px;
    background-color:#CE2829;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #FFF;
`;
const Logo = styled.div`
    cursor: pointer;
    margin: 0;
    margin-top: 50px;
`;

const SiparisAlindiTitle = styled.p`
    text-align: center;
    font-family: "Roboto Condensed";
    font-size: 86px;
    font-style: normal;
    font-weight: 300;
    line-height: 92px; /* 106.977% */
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin: 0;
`;
const LezzetinYoldaText = styled.p`
    font-family: 'Satisfy', cursive;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    text-align: center;
    margin: 0;
    color: #FDC913;
`;
const Line = styled.hr`
    width: 600px;
    background: #FAF7F2;
    margin:
`;
const TitleContainer = styled.div`
    width: 600px;
    height: 200px;
    margin-top: 80px;
`;

const PizzaDetailsContainer = styled.div`

`;
const PizzaName = styled.p`
margin: 0;
text-align: center;
font-family: "Barlow";
font-size: 22px;
font-style: normal;
font-weight: 600;
line-height: 29.438px; /* 133.81% */
`;
const OtherAttributesContainer = styled.div`
text-align: left;
max-width: 200px;
margin: 0 auto;
margin-top: 50px;
`;
const Attribute = styled.p`
font-family: Barlow;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 24.762px;
`;
const ThinText = styled.span`
font-family: Barlow;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24.762px; /* 154.762% */
`;
const ReceiptContainer = styled.div`
    margin-top: 70px;
    width: 288px;
    height: 191px;
    border-radius: 6px;
    border: 1px solid #FAF7F2;
    text-align: left;
    display: flex;
    flex-direction: column;
    padding: 40px 50px;
    
`;
const ReceiptTitle = styled.div`
font-family: Barlow;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 24.762px;
margin-bottom: 20px;
`;
const PricesContainer = styled.div`
display: flex;
justify-content: space-between;
`;
const Prices = styled.div`
margin-bottom: 8px;
font-family: Barlow;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 24.762px; /* 137.566% */
    &:last-child{
        text-align: left;
    }
`;

const extras = {
    "pepperoni": "Pepperoni",
    "tavukIzgara": "Tavuk Izgara",
    "misir": "Mısır",
    "sarimsak": "Sarımsak",
    "ananas": "Ananas",
    "sosis": "Sosis",
    "sogan": "Soğan",
    "sucuk": "Sucuk",
    "biber": "Biber",
    "kabak": "Kabak",
    "kanadaJambonu": "Kanada Jambonu",
    "domates": "Domates",
    "jalepeno": "Jalepeno",
    "zeytin": "Zeytin"
}

export default function Success({ propForm }) {
    const history = useHistory();
    let formDataArray = Object.keys(propForm).map((key) => [key, propForm[key]]);
    formDataArray = formDataArray.filter(item => item[1] === true);

    return (
        <>
            <Container>
                <Logo onClick={() => history.push("")}>
                    <img src={logo} alt="logo" />
                </Logo>
                <TitleContainer>
                    <LezzetinYoldaText>
                        lezzetin yolda
                    </LezzetinYoldaText>
                    <SiparisAlindiTitle>
                        SİPARİŞ ALINDI
                    </SiparisAlindiTitle>
                    <Line />
                </TitleContainer>
                <PizzaDetailsContainer>
                    <PizzaName>Position Absolute Acı Pizza</PizzaName>
                    <OtherAttributesContainer>
                        <Attribute><ThinText>Boyut: </ThinText>{propForm.size}</Attribute>
                        <Attribute><ThinText>Hamur: </ThinText>{propForm.hamur}</Attribute>
                        <Attribute><ThinText>Ek Malzemeler:</ThinText>{formDataArray.map((item, index) => {
                            let returningString = extras[item[0]] + ", ";
                            if (index + 1 === formDataArray.length) {
                                returningString = extras[item[0]];
                            }
                            return returningString;
                        })}</Attribute>
                    </OtherAttributesContainer>
                </PizzaDetailsContainer>
                <ReceiptContainer>
                    <ReceiptTitle>Sipariş Toplamı</ReceiptTitle>
                    <PricesContainer>
                        <Prices>Seçimler</Prices>
                        <Prices>{formDataArray.length * 5}₺</Prices>
                    </PricesContainer>
                    <PricesContainer>
                        <Prices>Toplam</Prices>
                        <Prices>{(formDataArray.length * 5 + propForm.pizzaPrice) * propForm.howMany}₺</Prices>
                    </PricesContainer>
                </ReceiptContainer>
            </Container>
        </>
    )
}
