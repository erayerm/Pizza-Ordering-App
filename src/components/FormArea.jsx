import axios from "axios";
import React, { useEffect, useRef, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components"
import "./FormArea.css"


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
    "Zeytin"
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
    margin-top: 20px;
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
        margin-top: 15px;
    }
    div label{
        padding-left: 10px;
    }
`;

const HamurContainer = styled.div`
    width: 50%;
`;

const ExtrasContainer = styled.div`
    margin-top: 54px;
    width: 100%;
`;

const Checkboxes = styled.div`
    color: #5F5F5F;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 28.8px; /* 180% */
    margin-right: 80px;
`;
const AllCheckBoxes = styled.div`
    height: 300px;
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
    margin-bottom:50px;
    width: 100%;
`;

const NameContainer = styled.div`
    margin-top:20px;
    margin-bottom:50px;
    width: 100%;
`;

const PaymentContainer = styled.div`
    margin-top:38px;
    display: flex;
    margin-bottom: 40px;
`;
const ButtonGroup = styled.div`
    flex: 3;
`;

const ResultContainer = styled.div`
    flex: 7;
    border: 1px solid #D9D9D9;
    border-radius: 6px;
    background-color: #FAF7F2;
`;

const Button = styled.button`
    height: 50px;
    width: 40px;
    border: none;
    background-color: #FAF7F2;
    color: #000;
    text-align: center;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
`;
const YellowButton = styled(Button)`
    cursor: pointer; 
    border: none;
    background-color: #FAF7F2;
    &:first-child{
        border-radius: 6px 0px 0px 6px;
    }
    &:last-child{
        border-radius: 0px 6px 6px 0px;
    }

`;
const Title = styled(Titles)`
    padding: 20px 40px 0px 40px;
`;
const Prices = styled.div`
    padding: 0 40px;
    display:flex;
    justify-content: space-between;
    margin-top:10px;
    color: #5F5F5F;
        
`;
//22 12 46
const PriceText = styled.p`
    margin-top:12px;
    margin-bottom:0px;
    font-family: Barlow;
    font-size: 18px;
    font-weight: 600;
    line-height: 24.762px; /* 137.566% */
`;

const ResultPrice = styled(Prices)`
    margin-top: 0px;
    margin-bottom:46px;
    color: red;
`;

const Submit = styled.button`
    border:none;
    border-radius: 0px 0px 5px 5px;
    background: #FDC913;    
    height: 62px;
    width: 100%;
    cursor:pointer;
    color: #292929;
    text-align: center;
    font-family: Barlow;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 56px; /* 311.111% */
    &:disabled{
        cursor: not-allowed;
    }
`;

const HataMesaji = styled.p`
    font-size:14px;
    padding:10px;
    color: red;
`;

const SizeFlex = styled.div`
    display: flex;
    gap: 50px;
`;

const initialForm = {
    isim: "",
    size: "",
    hamur: "",
    siparisNotu: "",
    howMany: 1,
    pizzaPrice: 0,
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
    malzemelerFazla: true
}

const errorMessages = {
    isim: "İsim en az 2 karakter olmalıdır!",
    size: "Lütfen pizzanın boyutunu seçiniz!",
    hamur: "Lütfen hamur kalınlığı seçiniz!",
    malzemelerAz: "En az 4 malzeme seçmelisiniz!",
    malzemelerFazla: "En fazla 10 malzeme seçebilirsiniz!",
}

export default function FormArea({setPropForm}) {

    const sizeRef = useRef(null);
    const hamurRef = useRef(null);
    const extrasRef = useRef(null);
    const isimRef = useRef(null);

    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState(initialErrors);
    const [checkedCount, setCheckedCount] = useState(0);
    const [isValid, setIsValid] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);
    
    const history = useHistory();
    useEffect(()=>{
        setForm({ ...form, "pizzaPrice": 85.50 });
    }, [])
    useEffect(() => {
        if (errors.isim && errors.size && errors.hamur && errors.malzemelerAz && errors.malzemelerFazla) {
            validSetter(true);
        } else {
            validSetter(false);
        }
        return () => {
            setIsValid();
        }
    }, [form])

    const validSetter = (bool) => {
        setIsValid(bool);
    }

    function handleClick() {
        if(!isValid){
            setButtonClicked(true);
            if(!errors.hamur){
                hamurRef.current.scrollIntoView({ behavior: 'smooth' });

            } else if (!errors.size){
                sizeRef.current.scrollIntoView({ behavior: 'smooth' });

            } else if (!errors.malzemelerAz || !errors.malzemelerFazla) {
                extrasRef.current.scrollIntoView({ behavior: 'smooth' });

            } else if (!errors.isim) {
                isimRef.current.scrollIntoView({ behavior: 'smooth' });

            }
        }else{
            axios.post('https://reqres.in/api/users', form).then((res) => {
                setPropForm({ ...res.data });
            }).catch(err=>console.error(err));
            history.push("/success");
        }
    }
    const adjustCount = (event) => {
        if (event.target.id === "arttir") {
            setForm({ ...form, "howMany": (form.howMany + 1) })
        } else {
            if (form.howMany !== 1) {
                setForm({ ...form, "howMany": (form.howMany - 1) })
            }
        }
    }

    const handleChange = (event) => {
        let { type, name, checked, value } = event.target;
        value = type === 'checkbox' ? checked : value;
        setForm({ ...form, [name]: value });
        if (name === "size") {
            setErrors({ ...errors, [name]: true });
        }
        if (name === "hamur") {
            if (value !== "pickOne") {
                setErrors({ ...errors, [name]: true });
            } else {
                setErrors({ ...errors, [name]: false });
            }
        }
        if (type === "checkbox") {
            if (checked) {
                setErrors({ ...errors, "malzemelerFazla": (checkedCount + 1 <= 10 ? true : false), "malzemelerAz": (checkedCount + 1 >= 4 ? true : false) });
                setCheckedCount(checkedCount + 1);
            } else {
                setErrors({ ...errors, "malzemelerFazla": (checkedCount - 1 <= 10 ? true : false), "malzemelerAz": (checkedCount - 1 >= 4 ? true : false) });

                setCheckedCount(checkedCount - 1);
            }
        }
        if (name === "isim") {
            if (value.replaceAll(' ', '').length >= 2) {
                setErrors({ ...errors, [name]: true });
            } else {
                setErrors({ ...errors, [name]: false });
            }
        }

    }
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <>
            <form id="pizza-form" onSubmit={handleSubmit}>
                <SizeHamurContainer>
                
                    <SizeContainer ref={sizeRef}>
                        <Titles>Boyut Seç <RedStar>*</RedStar></Titles>
                        <SizeFlex>
                            <div>
                                <label htmlFor="kucuk" class="container">S
                                    <input data-cy="kucuk" onChange={handleChange} type="radio" id="kucuk" name="size" value="S" />
                                    <span className="checkmark">S</span>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="orta" class="container">M
                                    <input data-cy="orta" onChange={handleChange} type="radio" id="orta" name="size" value="M" />
                                    <span className="checkmark">M</span>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="buyuk" class="container">L
                                    <input data-cy="buyuk" onChange={handleChange} type="radio" id="buyuk" name="size" value="L" />
                                    <span className="checkmark">L</span>
                                </label>
                            </div>
                        </SizeFlex>
                        {buttonClicked && !errors.size && <HataMesaji>{errorMessages.size}</HataMesaji>}
                    </SizeContainer>
                    <HamurContainer ref={hamurRef}>
                        <Titles>Hamur Seç <RedStar>*</RedStar></Titles>
                        <select class="select" data-cy="select" name="hamur" id="hamur" defaultValue="pickOne" onChange={handleChange}>
                            <option name="hamur" value="pickOne" disabled>--Hamur Kalınlığı Seç--</option>
                            <option name="hamur" value="Kalın Hamur">Kalın Hamur</option>
                            <option name="hamur" value="İnce Hamur">İnce Hamur</option>
                            <option name="hamur" value="İpince Hamur">İpince Hamur</option>
                            <option name="hamur" value="Hamursuz">Hamursuz (Literally)</option>
                        </select>
                        {buttonClicked && !errors.hamur && <HataMesaji>{errorMessages.hamur}</HataMesaji>}
                    </HamurContainer>
                </SizeHamurContainer>
                <ExtrasContainer ref={extrasRef}>
                    <Titles>Ek Malzemeler</Titles>
                    <Info>En Fazla 10 malzeme seçebilirsiniz. 5₺</Info>
                    <AllCheckBoxes>
                        {extras.map((extra, index) => {
                            let lowerExtra = TrToEn(extra)
                                .replaceAll(" ", "");
                            lowerExtra = lowerExtra.charAt(0).toLowerCase() + lowerExtra.slice(1);
                            return <Checkboxes key={index}>
                                <label class="containerCheckbox" htmlFor={lowerExtra}>{extra}
                                <input data-cy={"checkbox"+(index+1)} onChange={handleChange} type="checkbox" id={lowerExtra} name={lowerExtra} value={extra} />
                                    <span class="checkmarkCheckbox"></span>
                                </label>
                            </Checkboxes>
                        })}
                    </AllCheckBoxes>
                    {buttonClicked && !errors.malzemelerAz && <HataMesaji>{errorMessages.malzemelerAz}</HataMesaji>}
                    {buttonClicked && !errors.malzemelerFazla && <HataMesaji>{errorMessages.malzemelerFazla}</HataMesaji>}

                </ExtrasContainer>
                <NameContainer ref={isimRef}>
                    <Titles>Adınız</Titles>
                    <input class="name" onChange={handleChange} data-cy="isim" type="text" name="isim" value={form.isim} placeholder="Adınızı girin." />
                    {buttonClicked && !errors.isim && <HataMesaji>{errorMessages.isim}</HataMesaji>}
                </NameContainer>
                <NoteContainer>
                    <Titles>Sipariş Notu</Titles>
                    <textarea class="note" onChange={handleChange} value={form.siparisNotu} id="note" name="siparisNotu" placeholder="Siparişine eklemek istediğin bir not var mı?"></textarea>
                </NoteContainer>
                <hr />
                <PaymentContainer>
                    <ButtonGroup>
                        <YellowButton type="button" id="azalt" onClick={adjustCount}>-</YellowButton>
                        <Button type="button">{form.howMany}</Button>
                        <YellowButton type="button" id="arttir" onClick={adjustCount}>+</YellowButton>
                    </ButtonGroup>
                    <ResultContainer>
                        <Title>Sipariş Toplamı</Title>
                        <Prices>
                            <PriceText>Seçimler</PriceText>
                            <PriceText>{checkedCount * 5}₺</PriceText>
                        </Prices>
                        <ResultPrice>
                            <PriceText>Toplam</PriceText>
                            <PriceText>{(checkedCount * 5 + form.pizzaPrice) * form.howMany}₺</PriceText>
                        </ResultPrice>
                        <Submit data-cy="submit" type="submit" id="order-button" onClick={handleClick}>SİPARİŞ VER</Submit>
                    </ResultContainer>
                </PaymentContainer>
            </form>
        </>
    )
}

const TrToEn = (str) => {
    return str.replaceAll('Ğ', 'G')
        .replaceAll('Ü', 'U')
        .replaceAll('Ş', 'S')
        .replaceAll('İ', 'I')
        .replaceAll('Ö', 'O')
        .replaceAll('Ç', 'C')
        .replaceAll('ğ', 'g')
        .replaceAll('ü', 'u')
        .replaceAll('ş', 's')
        .replaceAll('ı', 'i')
        .replaceAll('ö', 'o')
        .replaceAll('ç', 'c');
}