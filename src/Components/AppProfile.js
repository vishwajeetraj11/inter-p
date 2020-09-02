import React from "react"; 
import {Camera} from "./Icons";

export default () => (
    <div className="profile-section">
          <div className="svgcontainer">
            <Camera />
          </div>
          <div className="profileInfo">
          <div className="img-container">
            <img
              className="img"
              src={require("../assets/a.jpg")}
              alt={"profile"}
            />
          </div>
          <h2 className="darkgrey">Vishwajeet Raj</h2>
          <p className="grey boldLight">+91 7884356786</p>
          </div>
      

          <div className="profile-header">
            <div className="location-container">
              <div className="location">
                <img
                  src={require("../assets/1.png")}
                  alt="Location"
                  className="img"
                />
              </div>
              <p className="location-text">Indian</p>
            </div>

            <div className="edit">Edit</div>
          </div>

          <div className="profile-details">
            <div>
              <p className="grey">Job Title</p>
              <h3 className="darkgrey">Plumber</h3>
            </div>
            <div>
              <p className="grey">Current Location</p>
              <h3 className="darkgrey">Shenjah, UAE</h3>
            </div>
            <div>
              <p className="grey">Last Salary</p>
              <h3 className="darkgrey">220 AED</h3>
            </div>
            <div>
              <p className="grey">Visa Status</p>
              <h3 className="darkgrey">H1B</h3>
            </div>
            <div>
              <p className="grey">Years of experience</p>
              <h3 className="darkgrey">4 years</h3>
            </div>
            <div>
              <p className="grey">Industry</p>
              <h3 className="darkgrey">Oil & Gas</h3>
            </div>
          </div>
        </div>
)
