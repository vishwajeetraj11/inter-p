import React from "react";

import "./App.css";
import {Briefcase, Education, Documents } from "./Icons";
import WorkSubSection from "./WorkSubSection";
import SubSection from "./SubSection";
import AppProfile from "./AppProfile"
import AppHeader from "./AppHeader";
import Jobs from "./Jobs";
import Refer from "./Refer";
import Navigation from "./Navigation";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App(props) {
  console.log(props);
  return (
    <div className="App">
      
      {  (
      <div className="Main">
       
      <AppHeader />
        <AppProfile />

        <div className="section">
          <div className="section-header">
            <Briefcase />
            <p className="section-header-text darkgrey">Work Experience</p>
          </div>

          {WorkSection.map((element, index) => (
              <WorkSubSection element={element} key={index} />
          ))}
        </div>

        <Refer referText="Help your friends get a job." referBtnText="Refer Skillbee" />

        <div className="section">
          <div className="section-header">
            <Education />
            <p className="section-header-text darkgrey">Education</p>
            <div className="edit edit-work">edit</div>
          </div>

          {EducationSection.map((element, index) => (
              <SubSection element={element} key={index} />
          ))}
        </div>


        <div className="section">
          <div className="section-header darkgrey">
            <Documents />
            <p className="section-header-text">Documents</p>
          </div>

          {DocumentsSection.map((element, index) => (
              <SubSection element={element} key={index} />
          ))}
        </div>
        <div className="margin-bottom">&nbsp;</div>
          <Navigation />
      </div>
      )}
    </div>
  );
}

export default App;

const WorkSection = [
  {
    bullet: true,
    button: false,
    buttonText: "edit",
    sectionDescTitle: "Plumber",
    sectionDesc: "2 years and 4 months",
  },
  {
    bullet: false,
    button: true,
    buttonText: "edit",
    sectionDescTitle: "Residential Plumber",
    sectionDesc: "Alfactory Benificiary",
  },
];

const EducationSection = [
  {
    bullet: true,
    button: false,
    buttonText: "edit",
    sectionDescTitle: "Qualification",
    sectionDesc: "Graduation",
  },
  {
    bullet: true,
    button: false,
    buttonText: "edit",
    sectionDescTitle: "Certification",
    sectionDesc: "Plumbing",
  },
]
const DocumentsSection = [
  {
    bullet: true,
    button: true,
    buttonText: "delete",
    sectionDescTitle: "Passport",
    sectionDesc: "Yes",
  },
  {
    bullet: false,
    button: true,
    buttonText: "upload",
    sectionDescTitle: "Adhar Card",
    sectionDesc: "",
  },
]
