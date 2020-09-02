import React from "react"
import {Share, Settings } from "./Icons"

export default () => (
    <>  
    <div className="header-container">
    <div className="share-profile">
      <p>Share Profile</p>
      <Share />
    </div>
    <div className="settings">
     <Settings />
    </div>
  </div>
    </>
)