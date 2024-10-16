import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <div className="partOfSpeech">{props.meaning.partOfSpeech}</div>
      <div className="definition">{props.meaning.definition}</div>
      <div className="example">"{props.meaning.example}"</div>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
