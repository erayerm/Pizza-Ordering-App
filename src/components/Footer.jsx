import React from "react";
import styled from "styled-components";
import logo from "../assets/logo-footer.svg"
import icon1 from "../assets/adv-aseets/icons/icon-1.png"
import icon2 from "../assets/adv-aseets/icons/icon-2.png"
import icon3 from "../assets/adv-aseets/icons/icon-3.png"
import ig0 from "../assets/adv-aseets/insta/li-0.png"
import ig1 from "../assets/adv-aseets/insta/li-1.png"
import ig2 from "../assets/adv-aseets/insta/li-2.png"
import ig3 from "../assets/adv-aseets/insta/li-3.png"
import ig4 from "../assets/adv-aseets/insta/li-4.png"
import ig5 from "../assets/adv-aseets/insta/li-5.png"


const Container = styled.div`
background-color: #1A1A1A;
color: #FFF;
font-family: Barlow;
font-size: 18px;
font-style: normal;
font-weight: 400;
`;

const TopSection = styled.div`
display: flex;
justify-content: space-between;
max-width: 1340px;
padding-left: 10px;
padding-right: 10px;
margin: 0 auto;
`;
const InfoContainer = styled.div`
display:flex;
padding-top: 57px;
gap: 30px;
@media(max-width: 900px){
    width:100%;
    justify-content: space-around;
}
`;

const LeftContainer = styled.div`

`;
const Logo = styled.img`
`;
const Infos = styled.div`
display: flex;
align-items:center;
gap: 5px;

`;
const Icon = styled.img`
width:28px;
height:28px;
`;
const InfoText = styled.p`

`;
const RightContainer = styled.div`
    margin-bottom: 50px;
`;
const Title = styled.p`
color: #FFF;
font-family: Barlow;
font-size: 24px;
font-style: normal;
font-weight: 500;
margin-bottom: 48px;
padding-top: 20px;
`;
const FoodNames = styled.p`
`;
const InstagramContainer = styled.div`
padding-top: 57px;
@media(max-width: 900px){
        width: 0px;
        height: 0px;
        display: none;
    }
`;
const InstagramImageContainer = styled.div`
display:flex;
flex-wrap: wrap;
gap: 10px;
width: 306px;
`;
const IgImage = styled.img`
flex-basis: 30%;
width:94.5px;
height:94.5px;
`;

const BottomSection = styled.div`
width:100%;
border-top: 1px solid rgba(255, 255, 255, 0.15);

`;

const BottomContentContainer = styled.div`
display: flex;
justify-content: space-between;
max-width: 1340px;
padding-left: 10px;
padding-right: 10px;
margin: 0 auto;
`;
const CopyRightText = styled.p`

`;
const Twitter = styled.p`

`;

export default function Footer(){

    return(
        <Container>
            <TopSection>
                <InfoContainer>
                    <LeftContainer>
                        <Logo src={logo} />
                        <Infos><Icon src={icon1}/><InfoText>341 Londonderry Road,<br/> Istanbul Türkiye</InfoText></Infos>
                        <Infos><Icon src={icon2}/><InfoText>aciktim@teknolojikyemekler.com</InfoText></Infos>
                        <Infos><Icon src={icon3}/><InfoText>+90 216 123 45 67</InfoText></Infos>
                    </LeftContainer>
                    <RightContainer>
                        <Title>Sıccacık Menuler</Title>
                        <FoodNames>Terminal Pizza</FoodNames>
                        <FoodNames>5 Kişilik Hackathon Pizza</FoodNames>
                        <FoodNames>useEffectTavukluPizza</FoodNames>
                        <FoodNames>Beyaz Console Frosty</FoodNames>
                        <FoodNames>Testler Geçti Mutlu Burger</FoodNames>
                        <FoodNames>Position Absolute Acı Burger</FoodNames>
                    </RightContainer>
                </InfoContainer>
                <InstagramContainer>
                    <Title>Instagram</Title>
                    <InstagramImageContainer>
                        <IgImage src={ig0} />
                        <IgImage src={ig1} />
                        <IgImage src={ig2} />
                        <IgImage src={ig3} />
                        <IgImage src={ig4} />
                        <IgImage src={ig5} />
                    </InstagramImageContainer>
                </InstagramContainer>
            </TopSection>
            <BottomSection>
                <BottomContentContainer>
                    <CopyRightText>© 2023 Teknolojik Yemekler.</CopyRightText>
                    <Twitter>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                            <path d="M16.1497 5.78694C16.1612 5.94683 16.1612 6.10675 16.1612 6.26664C16.1612 11.1435 12.4493 16.7628 5.66497 16.7628C3.57486 16.7628 1.63325 16.1575 0 15.1068C0.296965 15.141 0.582469 15.1524 0.890859 15.1524C2.61545 15.1524 4.20303 14.57 5.4708 13.5763C3.84898 13.542 2.48984 12.4798 2.02155 11.0179C2.25 11.0521 2.47841 11.075 2.71828 11.075C3.04949 11.075 3.38073 11.0293 3.68909 10.9494C1.99874 10.6067 0.730934 9.12196 0.730934 7.32882V7.28315C1.22203 7.55727 1.79314 7.72858 2.39843 7.7514C1.40477 7.08895 0.753785 5.95825 0.753785 4.67906C0.753785 3.99379 0.936492 3.36562 1.25631 2.81739C3.0723 5.05597 5.80201 6.51787 8.86289 6.6778C8.8058 6.40368 8.77152 6.11818 8.77152 5.83264C8.77152 3.79963 10.4162 2.14355 12.4606 2.14355C13.5228 2.14355 14.4822 2.58898 15.156 3.30853C15.9898 3.14864 16.7893 2.84025 17.4974 2.41767C17.2233 3.27429 16.6408 3.99383 15.8756 4.45065C16.618 4.37074 17.3375 4.16511 17.9999 3.87961C17.4975 4.61054 16.8693 5.26153 16.1497 5.78694Z" fill="white" />
                        </svg>
                    </Twitter>
                </BottomContentContainer>
            </BottomSection>
        </Container>
    )
}