import React from "react";

const OutPatientModal = () => {
  return (
    <div>
      <div className="card">
        <br />
        <br />
        <br />
        <h3>Add patient Visit</h3>
        <label>Visit Type</label>

        <select>
          <option value="opdvisit">OPD Visit</option>
        </select>

        <label>Chief Complaint</label>
        <input type="text" className="card__img" />
        <label>Clinic/Department</label>
        <select>
          <option value="surgery">Surgery</option>
          <option value="treatment">Treatment</option>
          <option value="normal">Normal</option>
        </select>
        <label>Doctor/Nurse</label>
        <select>
          <option value="nilesh">Nilesh</option>
          <option value="sanjay">Sanjay</option>
        </select>
        <br />
        <button className="card__btn">Submit</button>

        {/* <div className="card__body">
          <h2 className="card__title">cscscsc</h2>
          <p className="card__description">cscsc</p>
          <h3 className="card__price">cacacac</h3>
          <button className="card__btn">submit</button>
        </div> */}
      </div>
    </div>
  );
};

export default OutPatientModal;
