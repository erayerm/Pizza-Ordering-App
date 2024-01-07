import React from "react"
import styled from "styled-components"


const extras = [
    "Pepperoni",
    "Tavuk Izgara",
    "Mısır",
    "Sarımsak",
    "Ananas",
    "Sosis",
    "Soğan",
    "Sucuk",
    "Biber",
    "Kabak",
    "Kanada Jambonu",
    "Domates",
    "Jalepeno",
    "Sucuk Değil"
]



const Titles = styled.p`
    color: #292929;
    font-family: Barlow;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24.762px; /* 123.809% */
`;

const SizeHamurContainer = styled.div`
    display: flex;
`;

const SizeContainer = styled.div`
    width: 50%;
    div{
        color: #5F5F5F;
        font-family: Barlow;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 56px; /* 350% */
    }
    div label{
        padding-left: 10px;
    }
`;

const HamurContainer = styled.div`
    width: 50%;
`;

const ExtrasContainer = styled.div`
    width: 100%;
`;

const Checkboxes = styled.div`
    color: #5F5F5F;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 28.8px; /* 180% */
`;
const AllCheckBoxes = styled.div`
    height: 200px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 13px;

`;

const Info = styled.p`
    color: #5F5F5F;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 56px; /* 350% */
`;


const RedStar = styled.span`
    color: red;
`;

const NoteContainer = styled.div`
    width: 100%;
`;

const TextArea = styled.textarea`
    height: 50px;
    width:100%;
    border: 1px solid #D9D9D9;
    border-radius: 6px;
    padding: 10px;
`;



export default function FormArea() {

    return (
        <form id="form">
            <SizeHamurContainer>
                <SizeContainer>
                    <Titles>Boyut Seç <RedStar>*</RedStar></Titles>
                    <div>
                        <input type="radio" id="kucuk" name="size" value="kucuk" />
                        <label for="kucuk">Küçük</label>
                    </div>
                    <div>
                        <input type="radio" id="orta" name="size" value="orta" />
                        <label for="orta">Orta</label>
                    </div>
                    <div>
                        <input type="radio" id="buyuk" name="size" value="buyuk" />
                        <label for="buyuk">Büyük</label>
                    </div>
                </SizeContainer>
                <HamurContainer>
                    <Titles>Hamur Seç <RedStar>*</RedStar></Titles>
                    <select name="hamur" id="hamur">
                        <option value="pickOne" selected disabled>Hamur Kalınlığı</option>
                        <option value="kalin">Kalın Hamur</option>
                        <option value="ince">İnce Hamur</option>
                        <option value="ipince">İpince Hamur</option>
                        <option value="hamursuz">Hamursuz (Literally)</option>
                    </select>
                </HamurContainer>
            </SizeHamurContainer>
            <ExtrasContainer>
                <Titles>Ek Malzemeler</Titles>
                <Info>En Fazla 10 malzeme seçebilirsiniz. 5₺</Info>
                <AllCheckBoxes>
                    {extras.map((extra) => {
                        let lowerExtra = TrToEn(extra)
                            .replace(" ", "");
                        lowerExtra = lowerExtra.charAt(0).toLowerCase() + lowerExtra.slice(1);
                        return <Checkboxes>
                                <input type="checkbox" id={lowerExtra} name={lowerExtra} value={TrToEn(extra).replace(" ", "")} />
                                <label for={lowerExtra}>{extra}</label>
                        </Checkboxes>
                    })}
                </AllCheckBoxes>
            </ExtrasContainer>
            <NoteContainer>
                <Titles>Sipariş Notu</Titles>
                <TextArea id="note" name="note" placeholder="Siparişine eklemek istediğin bir not var mı?"></TextArea>
            </NoteContainer>
        </form>

    )
}

const TrToEn = (str) => {
    return str.replace('Ğ', 'G')
        .replace('Ü', 'U')
        .replace('Ş', 'S')
        .replace('İ', 'I')
        .replace('Ö', 'O')
        .replace('Ç', 'C')
        .replace('ğ', 'g')
        .replace('ü', 'u')
        .replace('ş', 's')
        .replace('ı', 'i')
        .replace('ö', 'o')
        .replace('ç', 'c');
}