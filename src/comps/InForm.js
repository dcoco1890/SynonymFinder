import React from "react";
import Button from "../comps/Button";
import styled from "styled-components";

const StyledForm = styled.form`
  margin-top: 6rem;
  position: relative;
`;

const StyledLabel = styled.label`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

const InForm = ({ page, value, handleChange, handleClick }) => (
  <StyledForm className="form-inline">
    <StyledLabel>
      <h1 className="pr-2">{page}</h1>
      <input
        type="text"
        value={value}
        name="word"
        className="form-control"
        onChange={handleChange}
      />{" "}
      <Button onClick={handleClick} />
    </StyledLabel>
  </StyledForm>
);

export default InForm;
