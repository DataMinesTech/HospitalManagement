import { Divider } from "@mui/material";
import React from "react";

const PatientVitals = () => {
  return (
    <div>
      <div>
        <h3>Vital Signs</h3>
        <Divider />
        <div className="d-flex justify-content-evenly py-2">
          <div>
            <label>Weight(kg)</label>
            <input
              type="text"
              className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
            />
          </div>
          <div>
            <label>Height(cm)</label>
            <input
              type="text"
              className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
            />
          </div>
          <div>
            <label>BMI(kg)</label>
            <input
              type="text"
              className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
            />
          </div>
          <br />
        </div>
        <div className="d-flex justify-content-evenly">
          <div>
            <label>Systolic B.P</label>
            <input
              type="text"
              className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
            />
          </div>
          <div>
            <label>Diastolic B.P</label>
            <input
              type="text"
              className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
            />
          </div>
          <div>
            <label>Temperature(C)</label>
            <input
              type="text"
              className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
            />
          </div>
        </div>
        <br />
        <div className="d-flex justify-content-evenly">
          <div>
            <label>Blood Sugar(F)</label>
            <input
              type="text"
              className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
            />
          </div>
          <div>
            <label>Blood Sugar (R)</label>
            <input
              type="text"
              className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
            />
          </div>
          <div>
            <label>SPO 2</label>
            <input
              type="text"
              className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
            />
          </div>
        </div>
        <br />
        <div className="d-flex justify-content-evenly">
          <div>
            <label>AVPO</label>{" "}
            <select className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
              <option>Select</option>{" "}
            </select>
          </div>
          <div>
            <label>Trauma</label>{" "}
            <select className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
              <option>Select</option>{" "}
            </select>
          </div>
          <div>
            <label>Mobility</label>{" "}
            <select className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
              <option>Select</option>{" "}
            </select>
          </div>
        </div>
        <br />
        <div className="d-flex justify-content-evenly">
          <div>
            <label>Oxygen Supplementation</label>{" "}
            <select className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
              <option>Select</option>{" "}
            </select>
          </div>
          <div>
            <label>Intake</label>
            <input
              type="text"
              className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
            />
          </div>
          <div>
            <label>Output</label>
            <input
              type="text"
              className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
            />
          </div>
        </div>
        <br />
        <div className="d-flex justify-content-evenly">
          <div>
            <label>Vital Taken Time</label>
            <input type="datetime-local" />
          </div>
          <div>
            <label>Comments</label>
            <input
              type="text"
              className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
            />
          </div>
        </div>
        <div>
          <h2>Current Vitals</h2>
        </div>
      </div>
    </div>
  );
};

export default PatientVitals;
