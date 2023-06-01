import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { ColorContext } from "../contexts/ColorContext";

const NameInput = () => {
    const language = useContext(LanguageContext)
    const color = useContext(ColorContext)
    return <div className="ui form">
        <label style={{color}}>{language === "en" ? 'Name:' : 'Имя:'}</label>
        <input type="text" className="field"/>
    </div>
}

export default NameInput