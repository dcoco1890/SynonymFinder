import React from "react";

import "./Home.css";

const Home = props => (
  <div className="jumbotron" id="jumbo-home">
    <h1 className="display-3" id="main-text-00">
      Synonym Finder
    </h1>
    <h1 className="display-4" id="main-text-01">
      & Translator
    </h1>

    <hr className="my-4" />

    <h5>Quickly and almost instantly find synoyms and antonyms for any word</h5>
    {props.children}
  </div>
);

export default Home;
