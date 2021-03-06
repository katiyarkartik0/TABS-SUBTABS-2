import "./Style.css";
import React, { useState } from "react";
import Data from "./Data.js";
import Tabs from "./Tabs.jsx";
function App() {
  let initialState = [];
  Data.forEach((item, index) => {
    if (index === 0) {
      initialState[index] = true;
    } else {
      initialState[index] = false;
    }
  });
  let [visibility, setVisibility] = useState(initialState);
  return (
    <div className="App">
      {Data.map((item, index) => {
        return (
          <div key={item.name}>
            <button
              onClick={() => {
                if (visibility[index] === true) {
                  let narr = [...visibility];
                  narr[index] = false;
                  setVisibility(narr);
                } else {
                  let narr = visibility.map((ele, idx) => {
                    return index === idx ? true : false;
                  });
                  setVisibility(narr);
                }
              }}
            >
              {item.name}
            </button>
            <br />
            <div className={visibility[index] ? "showDiv" : "hideDiv"}>
              <Tabs  data={item.subTabs} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
