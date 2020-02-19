import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

const styles = {
  main: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr"
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
  },
  p: {
    display: "inline"
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
        <h5 key={word}>{word}</h5>
      ))}
    </div>
  );
};

const EngSpan = props => (
  <div className="card">
    <StyledDiv className="card-header">
      <h5 style={styles.left}>{props.srclan}</h5>
      <h5 style={styles.right}>{props.translan}</h5>
    </StyledDiv>
    <div className="card-body" style={styles.main}>
      <Untranslated word={props.word} speechPart={props.speechPart} />

      <Translated words={props.defs} />
    </div>
  </div>
);

export default EngSpan;
