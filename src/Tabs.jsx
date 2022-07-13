import "./Style.css";
import React, { useState } from "react";

const Tabs = (props) => {
  let initialState = [];
  props.data.forEach((item, index) => {
    if (index === 0) {
      initialState[index] = true;
    } else {
      initialState[index] = false;
    }
  });

  let [visibility, setVisibility] = useState(initialState);
  return (
    <>
      {props.data.map((item, index) => {
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
            <div className={visibility[index] === true ? "showDiv" : "hideDiv"}>
              {item.answer}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Tabs;
