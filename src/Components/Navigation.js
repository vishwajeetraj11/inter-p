import React, {useState} from "react"
import { Job, Call, Profile } from "./Icons";
import {} from "react-router-dom"
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
// import styled from "styled-components"
export default withRouter((props) => {

      const [currentActive, setCurrentActive] = useState("Profile")

      const onClickHelp = () => setCurrentActive("Help")

      const onClickJob = () => {
            setCurrentActive("Job")
            props.history.push('/jobs')
      }
      const onClickProfile = () => setCurrentActive("Profile")
     


 return (
    <div className="navigation">
            
            <div className={ currentActive === "Job" ? "nav-icon active-border" : "nav-icon" } onClick={onClickJob}>
            <Job fill={ currentActive === "Job" ? '#467ffb' : undefined } />
            <p className={ currentActive === "Job" ? "darkgrey boldLight active" : "darkgrey boldLight" }>Jobs</p>
            </div>
          

            <div className={ currentActive === "Help" ? "nav-icon active-border" : "nav-icon" } onClick={onClickHelp}>
            <Call fill={ currentActive === "Help" ? '#467ffb' : undefined } />
            <p className={ currentActive === "Help" ? "darkgrey boldLight active" : "darkgrey boldLight" }>Help</p>
            </div>

            <div className={ currentActive === "Profile" ? "nav-icon active-border" : "nav-icon" } onClick={onClickProfile}>
            <Profile fill={ currentActive === "Profile" ? '#467ffb' : undefined } />
            <p className={ currentActive === "Profile" ? "darkgrey boldLight active" : "darkgrey boldLight" }>Profile</p>
            </div>
      </div>
)})

