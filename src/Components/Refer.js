import React from "react";

export default (props) => (
  <div className="refer-section">
    <h1 className="refer-text">{props.referText}</h1>
    <button className="refer-btn">{props.referBtnText}</button>
  </div>
);
