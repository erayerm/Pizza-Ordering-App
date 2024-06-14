import React, { useEffect } from "react"
import Header from "../components/Header"
import MainSection from "../components/MainSection"

export default function Order({ setPropForm }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <MainSection setPropForm={setPropForm} />
        </>
    )
}