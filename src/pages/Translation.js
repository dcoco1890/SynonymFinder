import React, { useState, useEffect } from "react";
import InForm from "../comps/InForm";
import EngSpan from "../comps/EngSpan";
import API from "../utils/API";
import ImgMW from "../comps/ImgMW";

const Translation = () => {
  const [word, setWord] = useState("");
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [notFound, setNotFound] = useState(false);
  // stops useeffect from running before query
  const [shouldCall, unShouldCall] = useState(false);

  // Defining Handlers to make components below cleaner looking
  const handleChange = e => {
    e.preventDefault();
    setWord(e.target.value);
  };
  const handleClick = e => {
    e.preventDefault();
    setQuery(word);
    unShouldCall(true);
    setWord("");
  };

  useEffect(() => {
    if (shouldCall) {
      API.getTrans(query)
        .then(resp => {
          if (typeof resp.data[0] === "string") {
            setNotFound(true);
          } else {
            setNotFound(false);
            setData(resp.data);
          }
        })
        .catch(err => console.log(err));
    }
  }, [shouldCall, query]);

  return (
    <div>
      <InForm
        page={"Translation: "}
        value={word}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      {notFound && (
        <small className="form-text text-muted text-uppercase font-weight-bold">
          Nothing found, did you spell everything correctly?
        </small>
      )}

      {data.map(item => {
        return (
          <EngSpan
            srclan={item.meta.lang === "en" ? "English" : "Spanish"}
            translan={item.meta.lang === "en" ? "Spanish" : "English"}
            speechPart={item.fl}
            word={item.hwi.hw}
            defs={item.shortdef}
            key={item.meta.uuid}
          />
        );
      })}
      <ImgMW />
    </div>
  );
};

// class Translation extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       word: "",
//       data: [],
//       notFound: false
//     };
//   }

//   handleClick = e => {
//     //click stuff for translations
//     e.preventDefault();
//     API.getTrans(this.state.word)
//       .then(resp => {
//         console.log(resp.data);
//         if (typeof resp.data[0] === "string") {
//           this.setState({
//             notFound: true,
//             data: []
//           });
//         } else {
//           this.setState({
//             notFound: false,
//             data: resp.data
//           });
//         }
//       })
//       .catch(err => {
//         console.log(err);
//         this.setState({
//           notFound: true,
//           data: []
//         });
//       });
//   };

//   // input stuff
//   handleChange = event => {
//     const target = event.target;
//     const value = target.value;
//     const name = target.name;
//     this.setState({
//       [name]: value
//     });
//   };

//   render() {
//     return (
//       <div>
//         <InForm
//           page={"Translation: "}
//           value={this.state.value}
//           handleChange={this.handleChange}
//           handleClick={this.handleClick}
//         />
//         {this.state.notFound && (
//           <small className="form-text text-muted text-uppercase font-weight-bold">
//             Nothing found, did you spell everything correctly?
//           </small>
//         )}
//         <div className="container">
//           {this.state.data.map(item => {
//             return (
//               <EngSpan
//                 srclan={item.meta.lang === "en" ? "English" : "Spanish"}
//                 translan={item.meta.lang === "en" ? "Spanish" : "English"}
//                 speechPart={item.fl}
//                 word={item.hwi.hw}
//                 defs={item.shortdef}
//               />
//             );
//           })}
//         </div>
//         <ImgMW />
//       </div>
//     );
//   }
// }

export default Translation;
