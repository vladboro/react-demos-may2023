import axios from "axios";
import React, { useEffect, useState } from "react";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text)

  useEffect(() => {
    const timerId = setTimeout(()=>{
        setDebouncedText(text)
    }, 1000)
    return () => {
        clearTimeout(timerId)
    }
  }, [text])

  
useEffect(() => {
    const doTranslation = async () => {
        if (debouncedText.length === 0)
            return;
        const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {},{
            params: {
                q: debouncedText,
                target: language.value,
                key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
            }
        })
        console.log(data);
        setTranslated(data.data.translations[0].translatedText)
    }
    doTranslation();
}, [debouncedText, language])

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
