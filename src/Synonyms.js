import React from "react";
export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return (
            <li key={index} className="synonyms-box d-inline-flex justify-content-between">
              {synonym}
            </li>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
