import axios from "axios";

export default {
  getSyn: function(word) {
    return axios.get(
      `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${process.env.REACT_APP_THESAURUS}`
    );
  },

  getTrans: function(word) {
    return axios.get(
      `https://www.dictionaryapi.com/api/v3/references/spanish/json/${word}?key=${process.env.REACT_APP_SPANGLISH}`
    );
  }
};
