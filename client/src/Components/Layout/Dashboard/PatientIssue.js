import { Divider } from "@mui/material";
import React from "react";

const PatientIssue = () => {
  return (
    <div>
      <h2>Out-Patient Sale</h2>
      <Divider></Divider>
      <div className="container align-items-center">
        <div className="row">
          <div className="col-sm">
            <label>Issue Sale</label>
            <select
              className="selectpicker border-1 mb-1 px-2 py-1 rounded shadow"
              style={{ marginLeft: "10px" }}
            >
              <option>Select</option>
              <option>Sale</option>
            </select>
            <label style={{ marginLeft: "10px" }}>Visit</label>
            <select
              className="selectpicker border-1 mb-1 px-2 py-1 rounded shadow"
              style={{ marginLeft: "10px" }}
            >
              <option>Select</option>
            </select>
          </div>
          <div className="col-sm">
            <label>Issue No</label>
            <input
              type="text"
              className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
              style={{ marginLeft: "15px" }}
            />
          </div>
          <div className="col-sm">
            <label>Payer</label>
            <input
              type="text"
              className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
              style={{ marginLeft: "15px" }}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <label>UHID</label>

            <input
              type="text"
              className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
              style={{ marginLeft: "56px" }}
            />
          </div>

          <div className="col-sm">
            <label>Issue Date</label>

            <input type="date" style={{ marginLeft: "25px" }} />
          </div>
          <div className="col-sm">
            <label>Sponsor</label>

            <input
              type="text"
              className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
              style={{ marginLeft: "15px", width: "176px" }}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <label>Name</label>
            <input
              type="text"
              className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
              style={{ marginLeft: "52px" }}
            />
          </div>

          <div className="col-sm">
            <label>Order</label>
            <input
              type="text"
              className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
              style={{ marginLeft: "32px" }}
            />
          </div>
          <div className="col-sm">
            <label>Doctor</label>
            <select
              className="selectpicker border-1 mb-1 px-5 py-1 rounded shadow"
              style={{ marginLeft: "38px" }}
            >
              <option>Select</option>
            </select>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row ">
          <div className="col-sm">
            <label>Age Gender</label>
            <input
              type="text"
              className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
              style={{ width: "52px", marginLeft: "14px" }}
            />
            <select
              className="selectpicker border-1 mb-1 px-2 py-1 rounded shadow"
              placeholder="Years"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
            <select className="selectpicker border-1 mb-1 px-2 py-1 rounded shadow">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="col-sm">
            <label>Mobile</label>
            <input
              type="text"
              className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
              style={{ marginLeft: "30px" }}
            />
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div className="col-sm">
            <input type="checkbox" style={{ marginRight: "5px" }} />
            <label>Issue To Patient &nbsp;</label>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <input type="checkbox" style={{ marginRight: "5px" }} />
              <label>Substitute Required</label>
            </div>
            <div className="col-sm">
              <label>Generic </label>
              <select
                className="selectpicker border-1 mb-1 px-5 py-1 rounded shadow"
                style={{ marginLeft: "54px" }}
              >
                <option>Select</option>
              </select>
            </div>
            <div className="col-sm">
              <label>Profile Item </label>
              <select
                className="selectpicker border-1 mb-1 px-4 py-1 rounded shadow"
                style={{ marginLeft: "54px" }}
              >
                <option>Select</option>
              </select>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <label>Item Name</label>
              <input
                type="text"
                className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
                style={{ marginLeft: "16px" }}
              />
            </div>
            <div className="col-4">
              <label> Barcode</label>
              <input
                type="text"
                className="pl-2 form-control-sm px-3   shadow-sm mb-3 bg-white rounded border"
                style={{ marginLeft: "34px", width: "160px" }}
              />
            </div>
          </div>
        </div>
        <br />
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
