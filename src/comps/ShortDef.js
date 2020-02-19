import React from "react";

const ShortDef = props => (
  <div>
    {props.def.map(item => (
      <p key={item} className="font-weight-lighter m-0">
        {item}
      </p>
    ))}
  </div>
);

export default ShortDef;
