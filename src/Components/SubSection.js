import React from "react"

export default (props) => (
    <>
    <div className="small-section" key={props.index}>
    <div className="bullet-container">
      {props.element.bullet && <div className="bullet">&nbsp;</div>}
    </div>
    <div className="section-desc darkgrey">
      <p className="section-desc-title grey">
        {props.element.sectionDescTitle}
      </p>
      <h3>{props.element.sectionDesc}</h3>
    </div>
    {props.element.button && <div className="edit edit-work">{props.element.buttonText}</div>}
  </div>
  </>
)