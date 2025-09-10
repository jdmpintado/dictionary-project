import React from "react";
import "./Synonyms.css"

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return (
            <div key={index} className="synonyms-box d-inline-flex justify-content-between">
              {synonym}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
