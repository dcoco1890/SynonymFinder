import React from "react";
import Button from "../comps/Button";

const style = {
  form: {
    marginTop: "6rem"
  },
  marg: {
    margin: "0 auto"
  }
};

const InForm = props => (
  <form style={style.form} className="form-inline">
    <label
      style={style.marg}
      className="d-flex align-items-center justify-content-center mb-3"
    >
      <h1 className="pr-2">{props.page}</h1>
      <input
        type="text"
        value={props.value}
        name="word"
        className="form-control"
        onChange={props.handleChange}
      />
      <Button onClick={props.handleClick} />
    </label>
  </form>
);

export default InForm;
