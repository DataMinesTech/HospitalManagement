import React from "react";

const PrescriptionMedicine = () => {
  return (
    <div>
      <h2>Prescription Medicine</h2>
      <label>Store</label>
      <select>
        <option>Select</option>
        <option>Pharmacy 1</option>
        <option>Pharmacy 2</option>
      </select>
      <label>Medicine</label>
      <input type="text" />
      <br />
      <label>Dosage</label>
      <input type="text" />
      <select>
        <option>Select</option>
        <option>1</option>
        <option>2</option>
      </select>
      <label>Frequency</label>
      <input type="text" />
      <label>No of Days</label>
      <input type="text" />
      <select>
        <option>Day</option>
        <option>Night</option>
      </select>
      <label>Food Relation</label>
      <select>
        <option>select</option>
      </select>
      <label>Route</label>
      <select>
        <option>Select</option>
      </select>
      <label>Instruction</label>
      <input type="text" />
    </div>
  );
};

export default PrescriptionMedicine;
