import React from "react"

export default (props) => (
    <>
    <div className="small-section" key={props.index}>
    <div className="bullet-container">
      {props.element.bullet && <div className="bullet">&nbsp;</div>}
    </div>
    <div className="section-desc">
      <h3 className="section-desc-title darkgrey">
        {props.element.sectionDescTitle}
      </h3>
      <p className="grey">{props.element.sectionDesc}</p>
    </div>
    {props.element.button && <div className="edit edit-work">{props.element.buttonText}</div>}
  </div>
  </>
)