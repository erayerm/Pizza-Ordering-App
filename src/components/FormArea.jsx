import React, { useState } from "react"
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

const NameContainer = styled.div`
    width: 100%;
`;

const TextArea = styled.textarea`
    height: 50px;
    width:100%;
    border: 1px solid #D9D9D9;
    border-radius: 6px;
    padding: 10px;
`;

const TextInput = styled.input`
    width:50%;
    border: 1px solid #D9D9D9;
    border-radius: 6px;
    padding: 10px;
`;


const PaymentContainer = styled.div`
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
        cursor:pointer; 
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
        width: 100%;
        cursor:pointer;
`;

const initialForm = {
    isim: "",
    size: "",
    hamur: "",
    siparisNotu: "",
    count: 1,
    "pepperoni": false,
    "tavukIzgara": false,
    "misir": false,
    "sarimsak": false,
    "ananas": false,
    "sosis": false,
    "sogan": false,
    "sucuk": false,
    "biber": false,
    "kabak": false,
    "kanadaJambonu": false,
    "domates": false,
    "jalepeno": false,
    "sucukDeğil": false
}

const initialErrors = {
    isim: false,
    size: false,
    hamur: false,
    malzemelerAz: false,
    malzemelerFazla: false
}

const errorMessages = {
    isim: "İsim en az 2 karakter olmalıdır.",
    size: "Lütfen pizzanın boyutunu seçiniz",
    hamur: "Lütfen hamur kalınlığı seçiniz",
    malzemelerAz: "En az 4 malzeme seçmelisiniz",
    malzemelerFazla: "En fazla 10 malzeme seçebilirsiniz",
}

export default function FormArea() {

    const [form, setForm] = useState(initialForm);
    const [checkedCount, setCheckedCount] = useState(0);
    const price = 85.5;
    const adjustCount = (event) => {
        if (event.target.id === "arttir") {
            setForm({ ...form, ["count"]: (form.count + 1) })
        } else {
            if (form.count !== 1) {
                setForm({ ...form, ["count"]: (form.count - 1) })
            }
        }
    }

    const handleChange = (event) => {
        let { type, name, checked, value } = event.target;
        value = type === 'checkbox' ? checked : value;
        setForm({ ...form, [name]: value });
        if (type === "checkbox") {
            if (checked) {
                setCheckedCount(checkedCount + 1);
            } else {
                setCheckedCount(checkedCount - 1);
            }
        }
    }
    return (
        <>
            <form id="pizza-form">
                <p>{form.isim+checkedCount + form.size + form.hamur + form.pepperoni}</p>
                <SizeHamurContainer>
                    <SizeContainer>
                        <Titles>Boyut Seç <RedStar>*</RedStar></Titles>
                        <div>
                            <input onChange={handleChange} type="radio" id="kucuk" name="size" value="Küçük" />
                            <label for="kucuk">Küçük</label>
                        </div>
                        <div>
                            <input onChange={handleChange} type="radio" id="orta" name="size" value="Orta" />
                            <label for="orta">Orta</label>
                        </div>
                        <div>
                            <input onChange={handleChange} type="radio" id="buyuk" name="size" value="Büyük" />
                            <label for="buyuk">Büyük</label>
                        </div>
                    </SizeContainer>
                    <HamurContainer>
                        <Titles>Hamur Seç <RedStar>*</RedStar></Titles>
                        <select name="hamur" id="hamur" onChange={handleChange}>
                            <option name="hamur" value="pickOne" selected disabled>Hamur Kalınlığı</option>
                            <option name="hamur" value="Kalın Hamur">Kalın Hamur</option>
                            <option name="hamur" value="İnce Hamur">İnce Hamur</option>
                            <option name="hamur" value="İpince Hamur">İpince Hamur</option>
                            <option name="hamur" value="Hamursuz">Hamursuz (Literally)</option>
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
                                <input onChange={handleChange} type="checkbox" id={lowerExtra} name={lowerExtra} value={extra} />
                                <label for={lowerExtra}>{extra}</label>
                            </Checkboxes>
                        })}
                    </AllCheckBoxes>
                </ExtrasContainer>
                <NameContainer>
                    <Titles>Adınız</Titles>
                    <TextInput onChange={handleChange} type="text" name="isim" value={form.isim} />
                </NameContainer>
                <NoteContainer>
                    <Titles>Sipariş Notu</Titles>
                    <TextArea onChange={handleChange} value={form.siparisNotu} id="note" name="siparisNotu" placeholder="Siparişine eklemek istediğin bir not var mı?"></TextArea>
                </NoteContainer>
                <hr />
                <PaymentContainer>
                    <ButtonGroup>
                        <YellowButton id="azalt" onClick={adjustCount}>-</YellowButton>
                        <Button>{form.count}</Button>
                        <YellowButton id="arttir" onClick={adjustCount}>+</YellowButton>
                    </ButtonGroup>
                    <ResultContainer>
                        <Title>Sipariş Toplamı</Title>
                        <Prices>
                            <p>Seçimler</p>
                            <p>{checkedCount * 5}₺</p>
                        </Prices>
                        <Prices>
                            <p>Toplam</p>
                            <p>{(checkedCount * 5 + price) * form.count}₺</p>
                        </Prices>
                        <Submit type="submit" id="order-button">SİPARİŞ VER</Submit>
                    </ResultContainer>
                </PaymentContainer>
            </form>


        </>
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