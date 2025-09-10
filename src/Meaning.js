import React from "react";
import Synonyms from "./Synonyms"

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <p className="partOfSpeech">{props.meaning.partOfSpeech}</p>
      <p className="definition">{props.meaning.definition}</p>
      <p>
        <em>{props.meaning.example}</em>
      </p>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
