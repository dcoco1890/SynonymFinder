import React from "react";
import arrow from "../img/right.png";

const styles = {
  main: {
    display: "grid",
    gridTemplateColumns: "auto auto"
  },
  arrow: {
    margin: 0,
    height: "1rem"
  },
  left: {
    textAlign: "left"
  },
  right: {
    textAlign: "right"
  }
};

const EngSpan = props => (
  <div className="card">
    <div className="card-header" style={styles.main}>
      <h5 style={styles.left}>{props.srclan}</h5>

      <h5 style={styles.right}>{props.translan}</h5>
    </div>
    <div className="card-body">
      <h3 style={styles.main}>{props.word}</h3>
      <img src={arrow} style={styles.arrow} />
    </div>
  </div>
);

export default EngSpan;
