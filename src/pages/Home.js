import React from "react";
import ImgMW from "../comps/ImgMW";

const styles = {
  jumbo: {
    marginTop: 50,
    textAlign: "left"
  }
};

const Home = () => (
  <div className="jumbotron" style={styles.jumbo}>
    <h1 className="display-3">Synonym Finder</h1>
    <h1 className="display-4">& Translator</h1>

    <hr className="my-4" />

    <h5>Quickly and almost instantly find synoyms and antonyms for any word</h5>
    <ImgMW />
  </div>
);

export default Home;
