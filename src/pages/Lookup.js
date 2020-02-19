import React, { useState, useEffect } from "react";
import API from "../utils/API";
import TotalCard from "../comps/TotalCard";
import ImgMW from "../comps/ImgMW";
import InForm from "../comps/InForm";

const Lookup = () => {
  // need both or the API will be called on every changed letter.
  const [word, setWord] = useState("");
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  // This just shows some text if the word searched for does not display anything.
  const [notFound, setNotFound] = useState(false);
  // This guy will make sure useEffect does not run when the page loads, only after we've entered a query.
  const [shouldMakeCall, setShouldMakeCall] = useState(false);

  //
  const handleClick = e => {
    e.preventDefault();
    setQuery(word);
    setShouldMakeCall(true);
    setWord("");
  };

  const handleChange = e => setWord(e.target.value);
  // This function lets me append new info to the top of the stack so old Syns aren't lost (until the page reloads)
  const updateData = info => setData(data => [...info, ...data]);

  // Removes elements from list

  const removeData = itemNumToRemove => {
    let old = data;
    console.log(old);
    old.splice(itemNumToRemove, 1);
    console.log(old);
    setData(() => [...old]);
  };

  useEffect(() => {
    if (shouldMakeCall) {
      API.getSyn(query)
        .then(resp => {
          if (typeof resp.data[0] === "string") {
            setNotFound(true);
          } else {
            setNotFound(false);
            updateData(resp.data);
          }
        })
        .catch(err => console.log(err));
    }
  }, [shouldMakeCall, query]);

  // Might be a better fix for this, but if there's no antonyms show this instead
  const ants = ["None Found"];

  return (
    <div>
      <InForm
        page={"Synonym Finder: "}
        value={word}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      {notFound && (
        <small className="form-text text-muted text-uppercase font-weight-bold">
          Nothing found, did you spell everything correctly?
        </small>
      )}

      <div className="container">
        {data.map((item, i) => {
          const num = i;
          return (
            <div key={item.meta.uuid}>
              <TotalCard
                word={item.hwi.hw}
                part={item.fl}
                short={item.shortdef}
                stems={item.meta.stems}
                syns={item.meta.syns[0]}
                ants={item.meta.ants.length ? item.meta.ants[0] : ants}
                close={() => removeData(num)}
              />
            </div>
          );
        })}
      </div>
      <ImgMW />
    </div>
  );
};

export default Lookup;
