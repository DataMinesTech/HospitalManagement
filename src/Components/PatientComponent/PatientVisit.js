import React from "react";
import Sidebar from "../Layout/Sidebar/Sidebar";
import { PatientSidebarData } from "../Layout/Sidebar/PatientSidebarData";
import "./PatientVisit.css";
import Header from "../Layout/Header/Header";
import MaterialDrawer from "../Layout/Sidebar/MaterialDrawer";
import { Link } from "react-router-dom";
import PatientAllergies from "./PatientAllergies";
import VitalSigns from "./VitalSigns";
import Medication from "./Medication";

const PatientVisit = () => {
  const currentRoute = window.location.pathname;

  console.log("current Route", currentRoute);
  console.log("hash location", window.location.hash);

  return (
    <>
      <Sidebar />
      <div>
        {" "}
        <div className="patientVisits">
          <h2>Patient Visits</h2>
          <span>patient Id : 5584133 </span>&nbsp; //{" "}
          <span>Name : John Smith</span> &nbsp; // <span>Age : 35 years</span>{" "}
        </div>{" "}
        <div>
          <button>Medical Record</button>
          <button>Package</button>
          <button>Consultation</button>
          <button>Vaccination</button>{" "}
        </div>
        <h3>Treatment Details</h3>
        <div className="vitalsigns">
          <div>
            <h3>Vital Signs</h3>
            <label>Weight(kg)</label>
            <input type="text" />
            <label>Height(cm)</label>
            <input type="text" />
            <label>BMI(kg)</label>
            <input type="text" />
            <br />
            <label>Systolic B.P</label>
            <input type="text" />
            <label>Diastolic B.P</label>
            <input type="text" />
            <label>Temperature(C)</label>
            <input type="text" />
            <br />
            <label>Blood Sugar(F)</label>
            <input type="text" />
            <label>Blood Sugar (R)</label>
            <input type="text" />
            <label>SPO 2</label>
            <input type="text" />
            <br />
            <label>AVPO</label>{" "}
            <select>
              <option>Select</option>{" "}
            </select>
            <label>Trauma</label>{" "}
            <select>
              <option>Select</option>{" "}
            </select>
            <label>Mobility</label>{" "}
            <select>
              <option>Select</option>{" "}
            </select>
            <br />
            <label>Oxygen Supplementation</label>{" "}
            <select>
              <option>Select</option>{" "}
            </select>
            <label>Intake</label>
            <input type="text" />
            <label>Output</label>
            <input type="text" />
            <br />
            <label>Vital Taken Time</label>
            <input type="datetime-local" />
            <br />
            <label>Comments</label>
            <input type="text" />
          </div>
          <div>
            <h2>Current Vitals</h2>
          </div>
          <button type="submit">Submit</button>
        </div>
      </div>
    </>
  );
};

export default PatientVisit;
