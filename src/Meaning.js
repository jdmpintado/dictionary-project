import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <p>
        <strong>{props.meaning.partOfSpeech}</strong>
        <br />
        {props.meaning.definition}
        <br />
        <em>{props.meaning.example}</em>
      </p>
    </div>
  );
}
