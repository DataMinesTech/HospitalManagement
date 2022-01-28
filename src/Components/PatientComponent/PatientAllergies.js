import React from "react";
import Sidebar from "../Layout/Sidebar/Sidebar";

const PatientAllergies = () => {
  console.log(window.location.hash);

  return (
    <div>
      <Sidebar />
      <h2>Allergies</h2>
      <label>Allergy Type</label>
      <select>
        <option>Dust Allergy</option>
        <option>Drug Allergy</option>
        <option>Food Allergy</option>
        <option>Skin Allergy</option>
      </select>
      <label>Allergen</label>
      <select>
        <option></option>
      </select>
      <label>Reaction</label>
      <input type="text" />
    </div>
  );
};

export default PatientAllergies;
