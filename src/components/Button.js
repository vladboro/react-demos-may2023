import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Button = () => {
    const language = useContext(LanguageContext)
    return <button>{language === "en" ? 'Save' : 'Сохранить'}</button>
}

export default Button