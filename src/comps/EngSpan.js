import React from "react";
import arrow from "../img/right.png";

const styles = {
  head: {
    display: "grid",
    gridTemplateColumns: "auto auto"
  },
  main: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr"
  },
  arrow: {
    margin: "0 auto",
    width: "5rem"
  },
  left: {
    textAlign: "left"
  },
  right: {
    textAlign: "right"
  },
  flexcen: {
    display: "flex",
    justifyContent: "center"
  }
};

const Untranslated = ({ word, speechPart }) => (
  <div>
    <h3>{word}</h3>
    <p className="font-italic">{speechPart}</p>
  </div>
);

const Translated = props => {
  return (
      <div>
          {props.words.map(word => (
              word
          ))}
      </div>
  )
  

};

const Img = ({ pic }) => (
  <div style={styles.flexcen}>
    <img src={pic} style={styles.arrow} />
  </div>
);

const EngSpan = props => (
  <div className="card">
    <div className="card-header" style={styles.head}>
      <h5 style={styles.left}>{props.srclan}</h5>
      <h5 style={styles.right}>{props.translan}</h5>
    </div>
    <div className="card-body" style={styles.main}>
      <Untranslated word={props.word} speechPart={props.speechPart} />
      <Img pic={arrow} />
      <Translated words={props.defs} />
    </div>
  </div>
);

export default EngSpan;
