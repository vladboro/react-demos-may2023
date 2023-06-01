import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const languages = [
  {
    label: "English",
    value: "en",
  },
  {
    label: "French",
    value: "fr",
  },
  {
    label: "German",
    value: "de",
  },
  {
    label: "Russian",
    value: "ru",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(languages[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        title="Select language"
        options={languages}
        selected={language}
        onSelectedChange={(option) => setLanguage(option)}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
