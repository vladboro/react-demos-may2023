import { useState } from "react";
import UserForm from "./components/UserForm";
import "./App.css";
import { LanguageContext } from "./contexts/LanguageContext";
import { ColorContext } from "./contexts/ColorContext";

const App = () => {
  const [language, setLanguage] = useState("en");
  const [color, setColor] = useState("red");
  return (
    <LanguageContext.Provider value={language}>
      <ColorContext.Provider value={color}>
        <div className="ui container flags">
          <i className="us flag" onClick={() => setLanguage("en")}></i>
          <i className="ru flag" onClick={() => setLanguage("ru")}></i>
          <div className="color-selectors">
            <div
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            ></div>
            <div
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            ></div>
          </div>
          <UserForm />
        </div>
      </ColorContext.Provider>
    </LanguageContext.Provider>
  );
};

export default App;
