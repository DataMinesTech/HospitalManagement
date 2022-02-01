import { Divider } from "@mui/material";
import React from "react";

const PatientIssue = () => {
  return (
    <div>
      <h2>Out-Patient Sale</h2>
      <Divider></Divider>
      <div className="d-flex justify-content-evenly">
        <div>
          <label>Issue Sale</label>
          <select className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
            <option>Select</option>
            <option>Sale</option>
          </select>
          <label>Visit</label>
          <select className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
            <option>Select</option>
          </select>
        </div>
        <div>
          <label>Issue No</label>
          <input
            type="text"
            className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
          />
        </div>
        <div>
          <label>Payer</label>
          <input
            type="text"
            className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
          />
        </div>
      </div>
      <br />
      <div className="d-flex justify-content-evenly">
        <div>
          <label>UHID</label>
          <input
            type="text"
            className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
          />
        </div>
        <div>
          <label>Issue Date</label>
          <input type="date" />
        </div>
        <div>
          <label>Sponsor</label>
          <input
            type="text"
            className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
          />
        </div>
      </div>
      <div className="d-flex justify-content-evenly">
        <div>
          <label>Name</label>
          <input
            type="text"
            className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
          />
        </div>
        <div>
          <label>Order</label>
          <input
            type="text"
            className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
          />
        </div>
        <div>
          <label>Doctor</label>
          <select className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
            <option>Select</option>
          </select>
        </div>
      </div>
      <div className="d-flex justify-content-evenly">
        <div>
          <label>Age Gender</label>
          <input
            type="text"
            className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
          />
          <select
            className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow"
            placeholder="Years"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
          <select className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div>
          <label>Mobile</label>
          <input
            type="text"
            className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
          />
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div>
          <input type="checkbox" />
          <label>Issue To Patient</label>
        </div>
      </div>
      <br />
      <div>
        <div className="d-flex justify-content-evenly">
          <div>
            <input type="checkbox" />
            <label>Substitute Required</label>
          </div>
          <div>
            <label>Generic </label>
            <select className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
              <option>Select</option>
            </select>
          </div>
          <div>
            <label>Profile Item </label>
            <select className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow">
              <option>Select</option>
            </select>
          </div>
        </div>
        <div className="d-flex justify-content-evenly">
          <div>
            <label>Item Name</label>
            <input
              type="text"
              className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
            />
          </div>
          <div>
            <label> Barcode</label>
            <input
              type="text"
              className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
            />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button type="button" className="btn  btn-primary btn-block ">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientIssue;
