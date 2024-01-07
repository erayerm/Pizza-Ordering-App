import React, { useState } from "react"
import styled from "styled-components"

export default function SubmitArea(){

    const [counter, setCounter] = useState(1);

    const Container = styled.div`
        display: flex;
    `;
    const ButtonGroup = styled.div`
        flex: 3;
    `;

    const ResultContainer = styled.div`
        flex: 7;
        border: 1px solid #D9D9D9;
        border-radius: 6px;
    `;

    const Button = styled.button`
        height: 50px;
        width: 30px;
        border:none;

    `;
    const YellowButton = styled(Button)`
        background-color: #FDC913;
        &:first-child{
            border-radius: 6px 0px 0px 6px;
        }
        &:last-child{
            border-radius: 0px 6px 6px 0px;
        }

    `;
    const Title = styled.p`
    padding: 0 40px;
    `;
    const Prices = styled.div`
        padding: 0 40px;
        display:flex;
        justify-content: space-between;
    `;
    const Submit = styled.button`
        border:none;
        border-radius: 0px 0px 5px 5px;
        background: #FDC913;
        height:50px;
        width: 100%
    `;
   


    const adjustCount = (event) => {
        if (event.target.id === "arttir"){
            setCounter(counter + 1);
        }else{
            if(counter !== 1){
                setCounter(counter - 1);
            }
        }
    }

    return(
        <>
            <Container>
                <ButtonGroup>
                    <YellowButton id="azalt" onClick={adjustCount}>-</YellowButton>
                    <Button>{counter}</Button>
                    <YellowButton id="arttir" onClick={adjustCount}>+</YellowButton>
                </ButtonGroup>
                <ResultContainer>
                    <Title>Sipariş Toplamı</Title>
                    <Prices>
                        <p>Seçimler</p>
                        <p>Secim*5 olacak</p>
                    </Prices>
                    <Prices>
                        <p>Toplam</p>
                        <p>Secim*5 + BaseFiyat olacak</p>
                    </Prices>
                    <Submit form="form">SİPARİŞ VER</Submit>
                </ResultContainer>
            </Container>
        </>
    )
}