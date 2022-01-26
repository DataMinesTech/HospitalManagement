import React from "react";

const PatientIssue = () => {
  return (
    <div>
      <h2>Out-Patient Sale</h2>
      <label>Issue Sale</label>
      <select>
        <option>Select</option>
        <option>Sale</option>
      </select>
      <label>Visit</label>
      <select>
        <option>Select</option>
      </select>
      <label>Issue No</label>
      <input type="text" />
      <label>Payer</label>
      <input type="text" />
      <br />
      <label>UHID</label>
      <input type="text" />
      <label>Issue Date</label>
      <input type="date" />
      <label>Sponsor</label>
      <input type="text" />
      <br />
      <label>Name</label>
      <input type="text" />
      <label>Order</label>
      <input type="text" />
      <label>Doctor</label>
      <select>
        <option>Select</option>
      </select>
      <br />
      <label>Age Gender</label>
      <input type="text" />
      <select placeholder="Years">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
      <select>
        <option>Male</option>
        <option>Female</option>
      </select>
      <label>Mobile</label>
      <input type="text" />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <input type="checkbox" />
      <label>Issue To Patient</label>
      <br />
      <div>
        <input type="checkbox" />
        <label>Substitute Required</label>
        &nbsp;&nbsp;&nbsp;
        <label>Generic </label>
        <select>
          <option>Select</option>
        </select>
        <label>Profile Item </label>
        <select>
          <option>Select</option>
        </select>
        <br />
        <label>Item Name</label>
        <input type="text" />
        <label> Barcode</label>
        <input type="text" />
      </div>
    </div>
  );
};

export default PatientIssue;
