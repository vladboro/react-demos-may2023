import axios from "axios";
import { useEffect, useState } from "react";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      console.log(`Do search ${term}`);
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    if (term && !results.length) {
      search();
    } else {
      const timerId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 1000);
      console.log(`Start timer ${timerId}`);
      return () => {
        console.log(`Remove timer ${timerId}`);
        clearTimeout(timerId);
      };
    }
  }, [term]);

  const renderedResults = results.map(
    result =>
    {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a
                    className="ui button"
                    href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    target="_blank"
                    rel="noreferrer"
                    >Go</a>
                </div>
                <div className="content">
                    <div className="header">{result.title}</div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}/>
                </div>
            </div>
        )
    }
  )
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
