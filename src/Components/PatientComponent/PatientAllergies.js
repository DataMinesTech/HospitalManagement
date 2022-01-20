import React from "react";

const PatientAllergies = () => {
  return (
    <div>
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
