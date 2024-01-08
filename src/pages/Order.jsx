import React from "react"
import Header from "../components/Header"
import MainSection from "../components/MainSection"

export default function Order({setPropForm}) {

    return (
        <>
            <Header />
            <MainSection setPropForm={setPropForm} />
        </>
    )
}