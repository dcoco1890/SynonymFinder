import React from "react";
import ShortDef from "../comps/ShortDef";
import styled from "styled-components";
import Stem from "./Stem";
import SynAntList from "../comps/SynAntList";

const StyledDiv = styled.div`
  text-align: left;
  display: inline-block;
  padding: 0.25rem 0.55rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
`;

const Heading = styled.h5`
  display: inline;
`;

const Paragraph = styled.p`
  font-style: italic;
  display: inline;
`;

const StyleButt = styled.button`
  border: none;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #212529;
  float: right;
  margin-top: 0.25rem;
  margin-right: 0.25rem;
`;

const TotalCard = props => (
  <div className="card">
    <StyledDiv>
      <StyleButt onClick={props.close}>X</StyleButt>
      <Heading>{props.word}</Heading>{" "}
      <Paragraph className="font-italic">({props.part})</Paragraph>{" "}
      <ShortDef def={props.short} />
    </StyledDiv>
    <div className="card-body">
      <div className="card-text">
        <div className="row">
          <Stem stems={props.stems} />
          <SynAntList syns={props.syns} />
          <SynAntList ants={props.ants} />
        </div>
      </div>
    </div>
  </div>
);

export default TotalCard;
