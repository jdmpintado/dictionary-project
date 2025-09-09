import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "c450930fa53b90f8c5ab74d6t08ao678";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1>What word do you want to look for?</h1>
      <form onSubmit={search}>
        <input
          type="search"
          className="search-form"
          placeholder="🔎 Enter a keyword to search"
          onChange={handleKeywordChange}
        />
      </form>
      <p className="form-footnote">i.e. coding, book, sunset</p>
      <Results results={results} />
    </div>
  );
}
